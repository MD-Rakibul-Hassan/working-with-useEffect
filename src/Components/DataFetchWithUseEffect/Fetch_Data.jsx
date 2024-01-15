import { useEffect } from "react";
import { useState } from "react";

const Fetch_Data = () => {
    const [photo,setPhoto] = useState(null);
    useEffect( () => {
        fetch ("https://jsonplaceholder.typicode.com/users")
        .then( (response) => {
            return response.json()
        })
        .then((data) => setPhoto(data))
    },[])
    return (
        <div>
            {
                photo &&  photo.map( (itme) => {
                    return <h1 key={itme.id}>{itme.name}</h1>
                })
            }
        </div>
    )
} 
export default Fetch_Data;