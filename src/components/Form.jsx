import { useState } from "react";

const Form = (props) => {
    const [userInputs, setUserInputs] = useState({
        name:'',
        password:''
    });
    const handleInputChange = (e) =>{
        console.log(e);
        switch(e.target.name){
            case 'name':
                setUserInputs({
                    ...userInputs,
                    name: e.target.value
                });
                break;
                case 'password':
                    setUserInputs({
                        ...userInputs,
                        password: e.target.value
                    });
                    break;  
                    
             default:
                console.log('something') ;      
        }
    }
    const make = (e) =>{
        e.preventDefault();
        // console.log('spausta',e);
            // props.setData([...props.data, {
            // name: userInputs.name,
            // passward: userInputs.passward} ]);

            
        
        if (userInputs.name==="Elena"&& userInputs.password==="xxx"){
            console.log("Wellcome");
            props.setJoined(true);
        } else {
            console.log("Sorry")
        }
    }
    return(
        <>
        <div className="forma">
        <h3>Login Form</h3> 
         <form onSubmit={make}>
           <label>
            Your Name:
            <input type="text" name="name" value={userInputs.name} 
            onChange={handleInputChange}
               />
            </label> 
            <label>
                Your Password:
                <input type="password" name="password" value={userInputs.password}
                onChange={handleInputChange}
               />
            </label>
            <input type="submit"value="Sign Up" />
            </form> 
        </div>
        
        </>
        )
    }
    
    export default Form;
