const List=(depart)=>{
    const {departName}=depart
    const storeFruit=departName.map((d)=>{
        return(
                <li>{d.name}</li>
        )
    })
    return(
        <div className="list">
            <h2>Departments</h2>
        <ul>
            {storeFruit}
        </ul>
        </div>
    )
}

export default List; 