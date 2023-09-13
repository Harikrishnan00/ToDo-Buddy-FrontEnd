import axios from 'axios'

async function handleSignup(email,password){
    const {data} = await axios.post(`${import.meta.env.VITE_API_URL}api/auth/signup`,{
        email,
        password
    }, {
        headers: {
          'Content-Type': 'application/x-www-form-urlencoded'
        }
    })
    console.log(data)
}

export {handleSignup}