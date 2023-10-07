import { useEffect } from "react"

const useTitle=(title)=>{
    useEffect(()=>{
        document.title=`${title} | Summer-school-camp`
    },[])
}
export default useTitle