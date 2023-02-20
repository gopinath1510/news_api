export function Menu({active,setActive,setCategory}){
    const links =[
        {id:1,name:"general" ,value:"general"},
        {id:2,name:"Business" ,value:"business"},
        {id:3,name:"entertainment" ,value:"entertainment"},
        {id:4,name:"health" ,value:"health"},
        {id:5,name:"science" ,value:"science"},
        {id:6,name:"sports" ,value:"sports"},
        {id:7,name:"technology" ,value:"technology"}
    ]

    function onClick(id,value){
        setActive(id)
        setCategory(value)
    }
    return(
        <nav className="menu">
            <ul>
               {
                links.map(link=>(
                    <li
                    key={link.id}
                    className={active === link.id ? "active":"inactive"}
                    onClick={()=> onClick(link.id,link.value)}>
                    {link.name}
                    </li>
                ))
               }
            </ul>
        </nav>
    )
}

