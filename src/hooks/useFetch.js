import { useState , useEffect } from 'react'

export const useFetch = ( url ) => {
    const [data,setData] = useState(null)

    const [method,setMethod] = useState(null)
    const [config, setConfig] = useState(null)
    const [callFetch , setCallFetch] = useState(null)

    const insertUser = (data,method) => {
        if(method === "POST"){
           setConfig({
              method: "POST",
              headers:{
                "content-type": "application/json"
              },
              body: JSON.stringify(data)
           })
        }
        setMethod(method)
    }
    

    useEffect(() => {
       const handleRequest = async () =>{
           const resp = await fetch(url)
           const response = await resp.json()
           setData(response)
       }    
       handleRequest()
    },[url,callFetch])

    useEffect(()=>{

        if(method === "POST"){

            const createNewUser = async () => {
                const fetchOptions = [url,config]
                const resp = await fetch(...fetchOptions)
                const response = await resp.json()
                setCallFetch(response)
            }
            createNewUser()
       }

    },[url,config,method])

        
        return { data , insertUser }
}