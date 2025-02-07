import React, { useContext, useEffect, useState } from 'react'
import { assets } from '../assets/assets'
import { AppContext } from '../context/AppContext';
import {motion} from 'framer-motion'
import axios from "axios";
import { toast } from 'react-toastify';

const Login = () => {
  const [state,setState] = useState('Login');
  const {setShowLogin, backendUrl, setToken, setUser} = useContext(AppContext);

  //state variables for form entries
  const [name,setName] = useState('');
  const [emailId, setEmailId] = useState('');
  const [password, setPassword] = useState('');

  //Function to submit the form and pass on the entered values
  const onSubmitHandler = async (e) =>{
    //prevent webpage from reloading which is it's default action
    e.preventDefault();

    //api call for login/register
    try {
        if(state === 'Login'){
            const {data} = await axios.post(backendUrl + '/api/user/login', {emailId, password});

            if(data.success){
                //if the login was successfull, then we will set the token and the user
                setToken(data.token);
                setUser(data.user);

                //store the token in local storage
                localStorage.setItem('token',data.token);
                setShowLogin(false);

            }else{
                //display error message in a toast notification
                toast.error(data.message);
            }
        }
        else{
            const {data} = await axios.post(backendUrl + '/api/user/register', {name, emailId, password});

            if(data.success){
                //if the login was successfull, then we will set the token and the user
                setToken(data.token);
                setUser(data.user);

                //store the token in local storage
                localStorage.setItem('token',data.token);
                setShowLogin(false);

            }else{
                //display error message in a toast notification
                toast.error(data.message);
            }

        }
    } catch (error) {
        toast.error(error.message);
    }

  }

  useEffect(()=>{
    document.body.style.overflow = 'hidden';

    return ()=>{
        document.body.style.overflow = 'unset';
    }
  },[]);

  return (
    <div
    className='fixed top-0 left-0 right-0 bottom-0 z-10
    backdrop-blur-sm bg-black/30 flex justify-center items-center'>
        <motion.form onSubmit={onSubmitHandler}
        initial = {{opacity:0}}
        animate = {{opacity:1}}
        transition={{duration:0.5}}         
        className='relative bg-white dark:bg-slate-900 p-10 rounded-xl text-slate-500'>
            <h1 className='text-center text-2xl text-neutral-700 dark:text-neutral-300 font-medium'>{state}</h1>
            <p className='text-sm text-center'>{state === 'Login' ? 'Welcome back! Please sign in to continue' : 'Sign up to VerseVision'}</p>
            {state != 'Login' && <div className='border px-6 py-2 flex items-center gap-2 rounded-full mt-5'>
                <img src={assets.profile_icon} alt="" className='h-6 w-6'/>
                <input onChange={(e) => setName(e.target.value)} value={name} type="text" className='outline-none text-sm dark:bg-slate-900 dark:text-neutral-300' placeholder='Enter your Full Name' required/>
            </div>}

            <div className='border px-6 py-2 flex items-center gap-2 rounded-full mt-4'>
                <img src={assets.email_icon} alt="" className='h-6 w-6'/>
                <input onChange={(e) => setEmailId(e.target.value)} value={emailId} type="email" className='outline-none text-sm dark:bg-slate-900 dark:text-neutral-300' placeholder='Enter your Email Id' required/>
            </div>

            <div className='border px-6 py-2 flex items-center gap-2 rounded-full mt-4'>
                <img src={assets.lock_icon} alt="" className='h-6 w-6'/>
                <input onChange={(e) => setPassword(e.target.value)} value={password} type="password" className='outline-none text-sm dark:bg-slate-900 dark:text-neutral-300' placeholder='Enter your Password' required/>
            </div>

            <p className={state === 'Login'?'text-sm text-blue-600 my-4 cursor-pointer':'hidden'}>Forgot Password?</p>
            
            <button className='bg-blue-600 text-white w-full py-2 rounded-full mt-2'>{state === 'Login' ? 'Login' : 'Create Account'}</button>
            
            {state === 'Login'?
                <p className='mt-5 text-center'>Don't have an account? <span className='text-blue-600 cursor-pointer' onClick={()=>setState('Signup')}>Sign-up</span></p>
                :
                <p className='mt-5 text-center'>Already have an account? <span className='text-blue-600 cursor-pointer' onClick={()=>setState('Login')}>Login</span></p>
            }
            <img onClick={()=>setShowLogin(false)} src={assets.cross_icon} className='absolute top-5 right-5 cursor-pointer' alt="" />
        </motion.form>
    </div>
  )
}

export default Login