export const Persons = (props) => {
    return (
        <div>
        <h2>Numbers</h2>
            {props.persons.map(person => 
                <p key={person.id}>{person.name} - {person.number}</p>
            )}
        </div>
    )
    }