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
  <SnackForm handleAddSnack={handleAddSnack} selected={selected} />

) : ( 

<SnackDetail selected={selected} handleFormView={handleFormView} />
)}
</>
);
};

export default App
