const Filter = ({value, onChange}) => {
    return(
        <div className="form-control">
            <form>
                <input value={value} onChange={onChange}></input>
            </form>
        </div>
    )
}

export default Filter