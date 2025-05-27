import { useContext } from 'react';
import { UserContext } from '../../contexts/UserContext';

const SnackDetail = (props) => {
  const { user } = useContext(UserContext);

  if (!props.selected) return null;

  const isOwner = user?._id === props.selected.createdBy;

  return (
    <div>
      <h1>{props.selected.name}</h1>
      <h2>Description: {props.selected.description}</h2>
      <h2>Emoji: {props.selected.emoji}</h2>

      {isOwner && ( 
        <div>
          <button onClick={() => props.handleFormView(props.selected)}>
            Edit Snack
          </button>
          <button onClick={() => props.handleDeleteSnack(props.selected._id)}>
            Delete Snack
          </button>
        </div>
      )}

      <button onClick={() => props.handleSelect(null)}>
        Close Details
      </button>
    </div>
  );
};

export default SnackDetail;
