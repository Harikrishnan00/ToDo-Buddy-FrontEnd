import RouteHandler from "./routes/RouteHandler"
import {useEffect} from 'react'
import axios from "axios";

function App() {

   const checkUser = async () =>{
    const { data } = await axios.get(`${import.meta.env.VITE_API_URL}api/auth/callback/success`,{
      withCredentials:true
    });
    console.log(data)
  }

  useEffect(() => {
    checkUser()
  }, []);

  return (
    <>
     <RouteHandler/>
    </>
  )
}

export default App
