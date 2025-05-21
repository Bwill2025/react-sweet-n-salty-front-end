const SnackDetail = (props) => {

    if (!props.selected) {
        return (
            <div>
            <h1>NO DETAILS</h1>
          </div>
        );
    }
    return (
        <div>
      <h1>{props.selected.name}</h1>
      <h2>Description: {props.selected.description}</h2>
      <h2>Emoji: {props.selected.emoji}</h2>
      <div>
        <button onClick={() => props.handleFormView(props.selected)}>
          Edit Snack
        </button>
        <button onClick={() => props.handleDeleteSnack(props.selected._id)}>
          Delete Snack
        </button>
      </div>
    </div>
  );
};
  
  export default SnackDetail;