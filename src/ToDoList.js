
import { useState } from 'react';
import Thelist from './TheList';

const ToDoList =()=>{
    

    const [text,setText]= useState('')
    const [listItems,setlistItems] = useState([])

    let addItem =()=>  {
        

        setlistItems(text)

        

        


    }



    return(
        <div>
            <form>
                <h1>To Do</h1>
                <input type ='text' name = 'text'  onChange={event=>setText(event.target.value)}></input>
                <button type = 'submit' onClick={addItem}>Add Item</button>
            </form>
                <Thelist listItems={listItems}></Thelist>
        </div>

    )
}

export default ToDoList;