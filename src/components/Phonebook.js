import {FaTimes} from 'react-icons/fa'

const Phonebook = ({persons, filterName, removeEntry}) => {
    let newPersonArray = persons.filter((person) => 
    person.name.toLowerCase().includes(filterName.toLowerCase()))

    return(
        <>
            {newPersonArray.map(person => (
                <div className="person">
                    <h3 key={person.id}>
                        {person.name} <FaTimes style={{color: 'red', cursor: 'pointer' }} onClick={()=> removeEntry(person.id)}/>
                        {/* <button onClick={()=> removeEntry(person.id)}>
                            Delete
                        </button> */}
                    </h3>
                    <p>
                        {person.number}
                    </p>
                </div>
            ))}
        </>
    )
}
export default Phonebook