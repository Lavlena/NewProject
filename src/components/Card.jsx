import { useState } from "react";
const Card = (props) =>{
    let press = () => {
        console.log("Press")
        setMarked(!marked);
    }
        const [marked, setMarked] = useState(false);
    const deleteList = (e) =>{
        console.log(e);
        console.log(e.target.name);
        let newArray = props.data.filter((item) => item.productId.toString() !== e.target.name.toString());
        console.log(newArray);
        props.setData(newArray);
    }

    const editItem = (e) =>{
        console.log("Change", e.target.name);
        props.setMode([false,e.target.name])
    }


    return(
        <div className="card">
            <h3>{props.name}</h3>
          <img src={props.photo} name="photo" alt="image"/>
          <p>{props.price}</p>
          
          <button className = {marked? 'yra':
                  'nera'}  onClick={press}>{marked? 'Choose':
          'Unchoose'}</button>
          <button name={props.productId} onClick={deleteList}>Delete</button>
          <button name={props.productId} onClick={editItem}>Edit</button>
          </div>
          
    )
}
    
export default Card;