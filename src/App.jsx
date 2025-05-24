// import 'bootstrap/dist/css/bootstrap.min.css';
// import "../node_modules/bootstrap/scss/functions";
import './App.css'
import { useState, useEffect } from 'react';
import * as snackPantry from './pantry/snackPantry';
import SnackList from './components/SnackList/SnackList';
import SnackDetail from './components/SnackDetail/SnackDetail'
import SnackForm from './components/SnackForm/SnackForm'
const App =() => {
  const [snack, setSnacks] = useState([]);
  const [selected, setSelected] = useState(null)
  const [isFormOpen, setIsFormOpen] = useState(false);

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
  
      
      if (updatedPet.err) {
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
<SnackList snack={snack} handleSelect={handleSelect} handleFormView={handleFormView} isFormOpen={isFormOpen}/>
{isFormOpen ? (
  <SnackForm handleAddSnack={handleAddSnack} selected={selected} handleUpdateSnack={handleUpdateSnack}/>

) : ( 

<SnackDetail selected={selected} handleFormView={handleFormView} handleDeleteSnack={handleDeleteSnack} />
)}
</>
);
};

export default App
