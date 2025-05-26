import { useState } from 'react';

  const initialState = {
    name: '',
    description: '',
    emoji: '',
    category: '',
    image: '',
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
          value={formData.description}
          onChange={handleChange}
          required
        />
        <label htmlFor="image"> Image URL </label>
        <input
          id="image"
          name="image"
          value={formData.image}
          onChange={handleChange}
        />
         <label htmlFor="category"> Category </label>
        <select
          id="category"
          name="category"
          value={formData.category}
          onChange={handleChange}
          required
        >
          <option value="">-- Select a category --</option>
          <option value="sweet">Sweet</option>
          <option value="salty">Salty</option>
        </select>

        <label htmlFor="emoji"> Emoji </label>
        <select name="emoji" value={formData.emoji} onChange={handleChange}>
          <option value="">-- Choose an emoji --</option>
          <option value="🍬">Candy</option>
          <option value="🍫">Chocolate</option>
          <option value="🍩">Pastry</option>
          <option value="🥨">Chips</option>
        </select>
        
        <button type="submit">{props.selected ? "Update Snack" :" Add New Snack" }</button>
      </form>
    </div>
  );
};

export default SnackForm;
