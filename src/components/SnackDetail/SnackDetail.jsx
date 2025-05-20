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
      {/* this is where we put the type of snacks and other attributes */}
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