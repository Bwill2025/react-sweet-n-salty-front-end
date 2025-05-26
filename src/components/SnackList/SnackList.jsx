import { useContext } from "react";
import { UserContext } from "../../contexts/UserContext";

const SnackList = (props) => {
    const { user } = useContext(UserContext)
    console.log(props);

    return (
        <div>
            <h1>Snack List</h1>
            <div>
            {!props.snack?.length ? (
                <h2> Please stock pantry!</h2>
            ) : (
               <ul>
                {props.snack.map((snack) => (
                    <li
                    key={snack._id}
                    style={{ cursor: 'grab', color: "chocolate"}}
                    onClick={() => props.handleSelect(snack)}
                >
                    {snack.name}
                    </li>
                ))}
               </ul>
            )}
            </div>
            { user && (
            <button onClick={props.handleFormView}>
             {props.isFormOpen ? 'Close Form' : 'New Snack'}
             </button>
             )}
             </div>
    );
}
export default SnackList;
