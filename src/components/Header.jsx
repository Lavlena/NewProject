import Form from "./Form";
import { useState } from "react";
const Header = () =>{
  const [joined, setJoined] = useState(false);
return(
    <>
<div className="header">
        <div className="header_logo">
        <img src="https://www.seekpng.com/png/detail/769-7692768_free-png-download-vintage-rose-png-images-background.png" className="logo" alt="logo" />
        
        </div>
<h3>
          {joined ?
          "You Joined" :
               <Form       
               setJoined={setJoined} 
               />
        } 
</h3>
     
      </div>
      </>
);
}
export default Header;