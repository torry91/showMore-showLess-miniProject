import {data} from "./data";
import './App.css';
import {useState} from "react";

function App () {
  const [hotels,setHotels] = useState(data);
  const [showMore,setShowMore] = useState(false);
  
  const removeHotel = (id) => {
    let newHotels = hotels.filter((hotel) => hotel.id !== id);
    setHotels(newHotels)  
  }

  return(<div>
    <div className="container">
      <h1>NYC Top {hotels.length} hotels ! </h1>
      </div>
  

  {hotels.map((hotel => {
    const {id,hotelName,description,image,source} = hotel;

    return ( <div key = {id}>
      <div className="container">
      <h2>{id}-{hotelName}</h2>
      </div>
      
      <div className="container">
        <p>{showMore ? description : description.substring(0,220) + "...."}
        <button onClick={()=> setShowMore(!showMore)}>
        {showMore ? "Show less" : "Show more"}</button>
        </p>
      </div>
     
     <div className="container">
      <img src={image} width="500px" alt="pic">
      </img>
     </div>

     <div className="container">
      <p>{source}</p>
    </div>

      <div className="container">
        <button className="btn" onClick = {() => 
          removeHotel(id)}>Remove</button>
      </div>


      </div>
    )
  }))}
  </div>
  )
}

export default App;