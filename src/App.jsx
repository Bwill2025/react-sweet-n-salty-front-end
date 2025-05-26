// import 'bootstrap/dist/css/bootstrap.min.css';
// import "../node_modules/bootstrap/scss/functions";
import { Routes, Route } from 'react-router';
import './App.css'
import { useState, useEffect, useContext } from 'react';
import * as snackPantry from './pantry/snackPantry';
import SnackList from './components/SnackList/SnackList';
import SnackDetail from './components/SnackDetail/SnackDetail'
import SnackForm from './components/SnackForm/SnackForm'
import NavBar from './components/NavBar/NavBar';
import SignUpForm from './components/SignUpForm/SignUpForm';
import SignInForm from './components/SignInForm/SignInForm';
import Landing from './components/Landing/Landing';
import Dashboard from './components/Dashboard/Dashboard';
import { UserContext } from './contexts/UserContext';
const App =() => {
  const [snacks, setSnacks] = useState([]);
  const [selected, setSelected] = useState(null)
  const [isFormOpen, setIsFormOpen] = useState(false);
  const { user } = useContext(UserContext);
  const handleSelect = (snack) => {
    setSelected(snack);
    setIsFormOpen(false);
  }

  const handleFormView = (snack) => {
    if (!snack._id) setSelected(null);
    setIsFormOpen(!isFormOpen);
  };

  const handleAddSnack = async (formData) => {
    try {
      const newSnack = await snackPantry.create(formData);
      if (newSnack.err) {
        throw new Error(newSnack.err);
      }
      setSnacks([newSnack, ...snacks]);
      setIsFormOpen(false);
    } catch (err) {
      console.log(err);
    }
  };

  const handleUpdateSnack = async (formData, snackId) => {
    try {
      const updatedSnack = await snackPantry.update(formData, snackId);


      if (updatedSnack.err) {
        throw new Error(updatedSnack.err);
      }

      const updatedSnackList = snacks.map((snack) => (

        snack._id !== updatedSnack._id ? snack : updatedSnack
      ));

      setSnacks(updatedSnackList);

      setSelected(updatedSnack);
      setIsFormOpen(false);
    } catch (err) {
      console.log(err);
    }
  };
  const handleDeleteSnack = async (snackId) => {
    try {
      const deletedSnack = await snackPantry.deleteSnack(snackId);

      if (deletedSnack.err) {
        throw new Error(deletedSnack.err);
      }

      setSnacks(snacks.filter((snack) => snack._id !== deletedSnack._id));
      setSelected(null);
      setIsFormOpen(false);
    } catch (err) {
      console.log(err);
    }
  };


useEffect(() => {
  const fetchSnacks = async () => {
    try {
    const fetchedSnacks = await snackPantry.index()
    if (fetchedSnacks.err) {
      throw new Error(fetchedSnacks.err);
    }
    setSnacks(fetchedSnacks)
  } catch (err) {

    console.log(err);
  }
};
fetchSnacks();
}, []);

return (
  <>
<SnackList snack={snacks} handleSelect={handleSelect} handleFormView={handleFormView} isFormOpen={isFormOpen}/>
{isFormOpen ? (
  <SnackForm handleAddSnack={handleAddSnack} selected={selected} handleUpdateSnack={handleUpdateSnack}/>

) : (

<SnackDetail selected={selected} handleFormView={handleFormView} handleDeleteSnack={handleDeleteSnack} />
)}
<NavBar />
      <Routes>
      <Route path='/' element={user ? <Dashboard /> : <Landing /> } />
        <Route path='/sign-up' element={<SignUpForm />} />
        <Route path="/sign-in" element={<SignInForm />} />
      </Routes>

</>
);
};

export default App
