import Card from "./Card";
const Cards = (props) => {
    return (
       props.newList.map((item, index) =>{
            return <Card 
                name = {item.name}
                photo ={item.photo}
                price = {item.price}
                key = {index}
                productId = {item.productId}
                data ={props.data}
                setData ={props.setData}
                mode={props.mode}
                setMode={props.setMode}
                />
            })

    )
}
export default Cards;