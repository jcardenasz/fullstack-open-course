export const Form = (props) => {
    return (
        <form onSubmit={props.addPerson}>
            <div>
                name:
                <input 
                    value={props.newName} 
                    onChange={props.handlePersonChange}
                />
            </div>
            <div>
                number: 
                <input 
                    value={props.newNumber} 
                    onChange={props.handleNumberChange}
                />
            </div>
            <div>
                <button type="submit">add</button>
            </div>
        </form>
    )
}

