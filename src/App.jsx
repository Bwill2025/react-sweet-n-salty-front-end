import { useState, useEffect } from 'react';
import * as snackPantry from './pantry/snackPantry';
import SnackList from './components/SnackList/SnackList';
import SnackDetail from './components/SnackDetail/SnackDetail'

const App =() => {
  const [snacks, setSnacks] = useState([]);
  const [selected, setSelected] = useState(null)

  const handleSelect = (snack) => {
    setSelected(snack);
    setIsFormOpen(false);
  }
 
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
<SnackList snack={snack} handleSelect={handleSelect}/>;
<SnackDetail selected={selected} />
</>
);
};

export default App
