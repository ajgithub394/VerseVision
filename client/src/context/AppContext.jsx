import axios from "axios";
import { createContext,useEffect,useState} from "react";
import { toast } from "react-toastify";
import {useNavigate} from 'react-router-dom';

//create a context variable
export const AppContext = createContext();

//requires a context provider function
const AppContextProvider = (props) =>{
    //to check whether user is logged in or not
    const [user,setUser] = useState(false);
    const [showLogin,setShowLogin] = useState(false);
    //adding the token state so that we can store the token in local storae
    const [token,setToken] = useState(localStorage.getItem('token'));

    //adding the credit state
    const [credit,setCredit] = useState(false);

    //including the backend url
    const backendUrl = import.meta.env.VITE_BACKEND_URL;

    //including the navigation functionality 
    const navigate = useNavigate();

    //function to get the credits of the logged in user
    const loadCreditsData = async () =>{
        try {
            const {data} = await axios.get(backendUrl + '/api/user/credits', {headers : {token}});
            if(data.success){
                setCredit(data.credits);
                setUser(data.user);
            }
        } catch (error) {
            console.log(error);
            toast.error(error.message);
        }
    }

    //function to call the generate image API
    const generateImage = async (prompt) =>{
        try {
            const {data} = await axios.post(backendUrl + '/api/image/generate-image', {prompt}, {headers : {token}});

            if(data.success){
                loadCreditsData();
                return data.resultImage;
            }
            else{
                toast.error(data.message);
                if(data.creditBalance === 0){
                    //directed to the buy-credits page
                    navigate('/buy');
                }
            }
        } catch (error) {
            toast.error(error.message);
        }
    }

    //logout functionality
    const logout = () =>{
        localStorage.removeItem('token');
        setToken('');
        setUser(null);
    }

    //to execute the above function
    useEffect(()=>{
        if(token){
            loadCreditsData();
        }
    },[token])

    const value = {
        user, setUser, showLogin, setShowLogin, backendUrl, token, setToken,
        credit, setCredit, loadCreditsData, logout, generateImage
    }

    return (
        <AppContext.Provider value={value}>
            {props.children}
        </AppContext.Provider>
    )
}

export default AppContextProvider;