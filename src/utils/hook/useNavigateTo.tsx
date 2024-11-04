import { useNavigate } from "react-router-dom";

function useNavigateTo(){
    const navigate = useNavigate();
    function navigateTo(url:string){
        navigate(url)
    }
    return navigateTo
}

export default useNavigateTo;