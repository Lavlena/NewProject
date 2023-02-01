import Header from './components/Header';
import Cards from './components/Cards';
import FormList from './components/FormList';
import EditList from './components/EditList';
import './App.css';
import { useState } from "react";
import { useEffect } from 'react';


  function App() {
   

   const d = [
    {
        "name":"Azalea",
        "photo":"https://hayloft.co.uk/persImages/views/01_5054303645505730312d494e3232.jpg",
        "price":"15.99" ,
        "productId":1
    },{
        "name":"Tibouchina Semidecandra",
        "photo":"https://www.suncrestnurseries.com/plantimages/medium/Tibouchina-urvilleana.jpg",
        "price":"33.99" ,
        "productId":2
    },{
        "name":"Hibiscus",
        "photo":"https://www.shutterstock.com/image-photo/baby-hibiscus-flower-queen-sirikit-260nw-410492524.jpg",
        "price":"12.99" ,
        "productId":3
    },{
        "name":"Camellia Japonica",
        "photo":"https://www.monaconatureencyclopedia.com/wp-content/uploads/2008/08/jpg_Esistono_circa_2-000_varieta-_Infinite_sfumature_dal_bianco_al_rosso_e_forme_diverse_c_Giuseppe_Mazza.jpg",
        "price":"15.99" ,
        "productId":4
    },{
        "name":"Bougainvillea Spectabilis",
        "photo":"https://thegreendetail.com/328-tm_thickbox_default/bougainvillea.jpg",
        "price":"10.99" ,
        "productId":5
    }
    ]

    const [mode, setMode] = useState([true,'']);


    const [data, setData] = useState(d);
  


    // const fetchFlowers = async () => {
    //   const data0 = await fetch('http://localhost:5000/flowerlist')
    //   .then(rez => rez.json())
    //   .then(data => {
    //     console.log('post', data)
    // });

    //   console.log(data0);
    //   setData(data0);

    // }

  // useEffect(() =>{
  //   fetch('http://localhost:5000/flowerlist')
  //   .then(res => res.json())
  //   .then(data => setData(data))

  // }, []);

  // console.log('data -',data);

  return (
    <>
     < Header 
    //  joined={joined}
    //  setJoined={setJoined}
     />
      <main>
       <h1>Find The Perfect Gift</h1>


       {mode[0]?
       <FormList 
       data={data}
       setData ={setData}
       />
       :
       <EditList 
       data={data}
       setData ={setData}
       mode={mode}
       setMode={setMode}
       />
       }
       
       <div className='cards'>
       <Cards
       newList={data} 
       data={data}
       setData ={setData}
       mode={mode}
       setMode={setMode}
       />
       </div>
          
      </main>
      <footer>
      <p>© 2023 All rights reserved</p>
      </footer>
    </>
  );
}


  
//   let post = (data) => {
//     fetch('http://localhost:3000/knygos', {
//       method: "POST",
//       headers: {
//         'Content-type': 'application/json'
//       },
//       body: JSON.stringify(data)
//     })
//   }
  
//   let remove = (id) => {
//     fetch(`http://localhost:3000/knygos/${id}`, {
//       method: "DELETE"
//     })
//   }
  
//   let update = (id, data) => {
//     fetch(`http://localhost:3000/knygos/${id}`, {
//       method: "PUT",
//       headers: {
//         'Content-type': 'application/json'
//       },
//       body: JSON.stringify(data)
//     })
//   }


export default App;
