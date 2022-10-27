const PersonForm = ({title, addName, newName, newNumber, handleNameChange, handleNumberChanges}) => {
    return(
      <>
        <h2>{title}</h2>
        <form className={'add-form'} onSubmit={addName}>
        <div className="form-control">
          name : <input value={newName} onChange={handleNameChange}/>
        </div>
        <div className="form-control">  
          number : <input value={newNumber} onChange={handleNumberChanges}/>
        </div>
        <div>
          <input type={'submit'} value={'Save Number'} className={'btn btn-block'}></input>
        </div>
      </form>
    </>
  )
}

export default PersonForm