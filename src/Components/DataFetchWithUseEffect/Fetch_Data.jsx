import { useEffect } from "react";
import { useState } from "react";
const lodingMessage = "Please waite some moment"
const Fetch_Data = () => {
    const [photo,setPhoto] = useState(null);
    const [loding,setLoding] = useState(true);
    const [error,setError] = useState(null);
    useEffect( () => {
        fetch ("https://jsonplaceholder.typicode.com/users")
        .then( (response) => {
            if(!response.ok) {
                throw Error ("Fetch is not done !")
            }
            return response.json()
        })
        .then((data) => {
            setPhoto(data);
            setLoding(false)
        })
        .catch( (error) => {
            setError(error.message);
            setLoding(false)
        })
    },[])
    return (
        <div>
            {
                error && <p>{error}</p>
            }

            {
                loding && lodingMessage
            }
            {
                photo &&  photo.map( (itme) => {
                    return <h1 key={itme.id}>{itme.name}</h1>
                })
            }
        </div>
    )
} 
export default Fetch_Data;