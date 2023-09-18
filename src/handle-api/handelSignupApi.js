import axios from 'axios'

async function handleSignup(email,password){
    const {data} = await axios.post(`${import.meta.env.VITE_API_URL}api/auth/signup`,{
        email,
        password
    }, {
        withCredentials:true,
        headers: {
          'Content-Type': 'application/x-www-form-urlencoded'
        }
    })
    return data
}

export {handleSignup}