import { useContext } from "react";
import { UserContext } from "../../contexts/UserContext";

const SnackList = (props) => {
    const { user } = useContext(UserContext)
    console.log(props);

    return (
        <div>
            <h1>Snack List</h1>
            <div>
            {!props.snacks?.length ? (
                <h2> Please stock pantry!</h2>
            ) : (
               <ul>
                {props.snacks.map((snack) => (
                    <li
                    key={snack._id}
                    onClick={() => props.handleSelect(snack)}
                    className="snack-item"
                >
                    
                    {snack.image && (
                        <img
                            src={snack.image}
                            alt={snack.name || 'Snack Image'}
                            style={{
                                width: '50px',
                                height: '50px',
                                objectFit: 'cover',
                                borderRadius: '8px',
                            }}
                        />
                    )}
                    {snack.emoji && (
                                    <span
                                        style={{
                                            fontSize: '1.5rem',
                                        }}
                                    >
                                        {snack.emoji}
                                    </span>
                                )}
                               
                                <span>{snack.name}</span>
                            </li>
                        ))}
                    </ul>
                )}
            </div>
            {user && (
                <button onClick={props.handleFormView}>
                    {props.isFormOpen ? 'Close Form' : 'New Snack'}
                </button>
            )}
        </div>
    );
};
export default SnackList;
