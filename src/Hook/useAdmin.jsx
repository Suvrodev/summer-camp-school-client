import { useContext, useEffect } from "react";
import { AuthContext } from "../Pages/Provider/AuthProvider";
import { useQuery } from "@tanstack/react-query";

const useAdmin=()=>{
    const {user}=useContext(AuthContext)
    const token=localStorage.getItem('school');
    // useEffect(()=>{
    //     fetch(`https://summer-camp-school-server-xi.vercel.app/user/admin/${user.email}`)
    //     .then(res=>res.json())
    //     .then(data=>{
    //         console.log(data)
    //     })
       
    // },[])
    const {data: isAdmin,isLoading: isAdminLoading}=useQuery({
        queryKey: ['isAdmin', user?.email],
        queryFn: async ()=>{
            const res=await fetch(`https://summer-camp-school-server-xi.vercel.app/user/admin/${user.email}`,{
                headers:{
                  authorization: `bearer ${token}`
                } 
              })
            console.log('isAdmin Response: ',res)
            return res.json()
        }
    })

    return [isAdmin,isAdminLoading]
}
export default useAdmin;