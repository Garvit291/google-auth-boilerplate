import axios from 'axios'
import React ,{useEffect, useState} from 'react'

 
function Complaints() {

    const [data,setData] = useState([]);
    useEffect(()=>{
        axios.get("https://jsonplaceholder.typicode.com/users").then(response=>{setData(response.data)});
        
},[])




    return (
        <>
        {data.map((d)=>{
            return(
                <p>
                    {d.email}
                </p>
            )
        })}
        
        </>
        
    );
}

export default Complaints
