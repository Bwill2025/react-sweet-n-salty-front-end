import { useState } from 'react';


  
  const initialState = {
    name: '',
    description: '',
    emoji: '',
  }
  const SnackForm = (props) => {
    const [formData, setFormData] = useState(
        props.selected ? props.selected : initialState
    )
  
  const handleChange = (evt) => {
    setFormData({ ...formData, [evt.target.name]: evt.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault()
    if(props.selected) {
        props.handleUpdateSnack(formData, props.selected._id)
    } else {
        props.handleAddSnack(formData)
    }
}
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <label htmlFor="name"> Name </label>
        <input
          id="name"
          name="name"
          value={formData.name}
          onChange={handleChange}
          required
        />
        <label htmlFor="description"> Description </label>
        <input
          id="description"
          name="description"
          value={formData.age}
          onChange={handleChange}
          required
        />
        <label htmlFor="emoji"> Emoji </label>
        <input
          id="emoji"
          name="emoji"
          value={formData.breed}
          onChange={handleChange}
        />
        <button type="submit">{props.selected ? "Update Snack" :" Add New Snack" }</button>
      </form>
    </div>
  );
};

export default SnackForm;
