import { useContext } from "react";
import { AuthContext } from "../Pages/Provider/AuthProvider";
import { useQuery } from "@tanstack/react-query";

const useInstructor=()=>{
    const {user}=useContext(AuthContext)
    const token=localStorage.getItem('school');

    const {data: isInstructor,isLoading: isInstructorLoading}=useQuery({
        queryKey: ['isInstructor', user?.email],
        queryFn: async ()=>{
            const res=await fetch(`https://summer-camp-school-server-xi.vercel.app/user/instructor/${user.email}`,{
                headers:{
                  authorization: `bearer ${token}`
                } 
              })
            console.log('isInstructor Response: ',res)
            return res.json()
        }
    })

    return [isInstructor,isInstructorLoading]

}
export default useInstructor