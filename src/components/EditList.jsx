import { useState } from "react";


const EditList = (props) => {


    let flower = props.data.find(element => element.productId.toString() === props.mode[1].toString());
    console.log("flower? -", flower);

    const [complement, setComplement] = useState({
        name:flower.name,
        photo:flower.photo,
        price:flower.price,
        productId:''
    });


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
    }
    const editFlower = (e) =>{
        e.preventDefault();
        console.log('Edit',e);
        console.log(props.mode);

        let newlist = [...props.data]
        let list = newlist.findIndex(element => element.productId.toString() === props.mode[1].toString());
        console.log(newlist[list]);

        newlist[list] = complement;
        props.setData(newlist)

        props.setMode([true,''])

        // console.log(userInputs.image);







        // props.setData([...props.data, {
        //     name: complement.name,
        //     photo: complement.photo,
        //     price: complement.price,
        //     productId: Date.now()
        // } ]
      
             
            // );
            // props.setMode(true);

    }
    

    return(
    <>
    <div className="formaList">
    <h2>Edit Flower</h2>  
     <form onSubmit={editFlower}>
       <label>
        Name:
        <input type="text" name="name" value={complement.name}
        onChange={handleInputChange}
           />
        </label> 
        <label>
            
        Photo:
        <input type="text" name="photo" value={complement.photo} alt="image" 
        onChange={handleInputChange}
           />
        </label> 
        <label>
           Price:
            <input type="text" name="price" value={complement.price}
            onChange={handleInputChange}
           />
        </label>

        <input type="submit"value="Edit" />
        </form> 
    </div>
    
    </>
    )
}

export default EditList;