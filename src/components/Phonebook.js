import {FaTimes} from 'react-icons/fa'

const Phonebook = ({persons, filterName, removeEntry, toggleImportance}) => {
    let newPersonArray = persons.filter((person) => 
    person.name.toLowerCase().includes(filterName.toLowerCase()))

    return(
        <>
            {newPersonArray.map(person => (
                <div key={person.id} className={`person ${person.important ? 'important' : ''}` } onDoubleClick={()=> {
                    toggleImportance(person.id)
                }}>
                    <h3>
                        {person.name} <FaTimes style={{color: 'red', cursor: 'pointer' }} onClick={()=> removeEntry(person.id)}/>
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