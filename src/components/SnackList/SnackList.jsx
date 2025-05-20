const SnackList = (props) => {
    console.log(props);

    return (
        <div>
            <h1>Snack List</h1>
            <div>
            {!props.snacks.length ? (
                <h2>No Snacks Yet Folks, Sorry!</h2>
            ) : (
               <ul>
                {props.pets.map((pet) => (
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
            <button onClick={props.handleFormView}>
             {props.isFormOpen ? 'Close Form' : 'New Snack'}
             </button>
             </div>   
    );
}
export default SnackList;