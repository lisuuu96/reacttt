import {useState} from 'react'


const Thelist = (props)=>{
  

    

    

  

    let liItems = props.listItems.map(()=>{
    return(
        <li onChange={event => setlistItem(event.target.value)}>{listItem}</li>
    )}
    )

    

    




    return(
        <div classname = 'list'>
           <ul>
            {liItems}
           </ul>
        </div>
    )
}
export default Thelist;