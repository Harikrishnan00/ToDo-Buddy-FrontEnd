import { Navigate, Outlet } from 'react-router-dom'
import {useSelector} from "react-redux"

export const PrivateRoutes = () => {
    const {isLoading,isUserLogged} = useSelector((state)=>state.userStateChanger)
    console.log(isLoading,isUserLogged)
    if(isLoading) return null
return (
    isUserLogged ? <Outlet/> : <Navigate to='/login' />
  )
}