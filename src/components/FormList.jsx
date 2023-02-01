import { useState } from "react";

const FormList = (props) => {
    const [complement, setComplement] = useState({
        name:'',
        photo:'',
        price:'',
        productId: Math.floor(Math.random()*10000)
    });
//     const postData = async() => {    
//         const data = await fetch('http://localhost:5000/flowerlist',{
//           method: 'POST',
//           headers: {'Content-type': 'application/json'},
//           body: JSON.stringify(data)
//       })

//       .then((res) => res.json())
//       .then((data) => {
//           console.log('post', data)
//       });
//   };

    const handleInputChange = (e) =>{
        console.log(e);
        switch(e.target.name){
           case 'name':
                    setComplement({
                        ...complement,
                        name: e.target.value
                    });
                    break;  
            case 'photo':
                setComplement({
                        ...complement,
                    photo: e.target.value
                });
                break;
                case 'price':
                    setComplement({
                        ...complement,
                        price: e.target.value
                    });
                    break;  
                    
             default:
                console.log('something') ;      
        }
    };


    const addList = (e) =>{
        e.preventDefault();
        console.log('Add', e);
        // console.log(userInputs.image);
        props.setData([...props.data, { ...complement, productId: Math.floor(Math.random()*10000)}]);
           
        console.log('complement -',complement);
    //     postData({
    //         ...complement,
    //         productId: Math.floor(Math.random()*10000)
    //     }
    // )
    };
    
    return(
    <>
    <div className="formaList">
    <h2>New Flower</h2> 

     <form onSubmit={addList}>
       <label>
        Name:
        <input type="text" name="name" value={complement.name}
        onChange={handleInputChange}
           />
        </label> 
        <label>
        Photo:
        <input type="text" name="photo" src={complement.photo} alt="image" 
        onChange={handleInputChange}
           />
        </label> 
        <label>
           Price:
            <input type="text" name="price" value={complement.price}
            onChange={handleInputChange}
           />
        </label>

        <input type="submit"value="Add" />
        </form> 
    </div>
    
    </>
    )
}

export default FormList;