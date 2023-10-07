import { useContext } from "react";
import { AuthContext } from "../Pages/Provider/AuthProvider";
import { useQuery } from "@tanstack/react-query";

const useUserData=()=>{
    const {user,loading}=useContext(AuthContext)

    const {data: checkUser=[],isLoading:loading_, refetch}=useQuery({
        queryKey: ['user',user?.email],
        enabled: !loading,
        queryFn: async ()=>{
            const res = await fetch(`https://summer-camp-school-server-xi.vercel.app/user/${user?.email}`)
            return res.json();
        }
    })
  
   // console.log('In Tanstack: ',checkUser)
  
   
    return [checkUser,refetch]

}
export default useUserData;