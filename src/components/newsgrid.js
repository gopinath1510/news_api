import {Newsitem} from "./newsitem";

export function Newsgrid({items}){
    // console.log("recieved")
    return(
        <div className="news-grid">
            {
                items.map((item,i)=>(
                    <Newsitem key={i} item={item}/>
                ))
            } </div>
    )
}
