import {Facebook, GitHub, Google} from '@mui/icons-material'
import {Link} from "react-router-dom";
import {useRef, useState} from "react";
import axiosClient from "../axios-client.js";
import {useStateContext} from "../contexts/ContextProvider.jsx";

export default function Signup() {
    const nameRef = useRef();
    const emailRef = useRef();
    const passwordRef = useRef();
    const passwordConfirmationRef = useRef();
    const [errors,setErrors]=useState(null);

    const {setUser, setToken} = useStateContext();

    const onSubmit = (ev) => {
        ev.preventDefault();
        const payload = {
            name: nameRef.current.value,
            email: emailRef.current.value,
            password: passwordRef.current.value,
            password_confirmation: passwordConfirmationRef.current.value,
        }

        axiosClient.post('/signup', payload).then(({data}) => {
            setUser(data.user)
            setToken(data.token)

        })
            .catch(err=>{
                const response=err.response;
                if(response && response.status===422) {
                    setErrors(response.data.errors);
                }
            })
    }
    return (
        <section>
            <h3 className='text-xl flex justify-center font-semibold text-white pt-2'>Create Account!</h3>
            <div className='flex space-x-2 m-4 items-center justify-center'>
                <div className="socialIcon border-white">
                    <Facebook className="text-white"/>
                </div>
                <div className="socialIcon border-white">
                    <GitHub className="text-white"/>
                </div>
                <div className="socialIcon border-white">
                    <Google className="text-white"/>
                </div>
            </div>
            {/* Inputs */}
            <form onSubmit={onSubmit} className='flex flex-col items-center justify-center mt-2'>
                <input type="text" ref={nameRef}
                       className='rounded-2xl px-2 py-1 text-black w-4/5 md:w-full border-[1px] border-blue-400 m-1 focus:shadow-md focus:border-pink-400 focus:outline-none focus:ring-0'
                       placeholder='Name'/>
                {errors ? <p className="text-red-500">{errors.name}</p>:null}
                <input type='email' ref={emailRef}
                       className='rounded-2xl px-2 py-1 w-4/5 text-black md:w-full border-[1px] border-blue-400 m-1 focus:shadow-md focus:border-pink-400 focus:outline-none focus:ring-0'
                       placeholder='Email'/>
                {errors ? <p className="text-red-500">{errors.email}</p>:null}
                <input type="password" ref={passwordRef}
                       className='rounded-2xl px-2 py-1 w-4/5 text-black md:w-full border-[1px] border-blue-400 m-1 focus:shadow-md focus:border-pink-400 focus:outline-none focus:ring-0'
                       placeholder='Password'/>
                {errors ? <p className="text-red-500">{errors.password}</p>:null}
                <input type="password" ref={passwordConfirmationRef}
                       className='rounded-2xl px-2 py-1 w-4/5 text-black md:w-full border-[1px] border-blue-400 m-1 focus:shadow-md focus:border-pink-400 focus:outline-none focus:ring-0'
                       placeholder='Confirm Password'/>
                {errors ? <p className="text-red-500">{errors.password_confirmation}</p>:null}

                <button
                    className='rounded-2xl m-4 bg-blue-500 text-white w-3/5 px-4 py-2 shadow-md hover:text-blue-500 hover:bg-white transition duration-200 ease-in'>
                    Sign Up
                </button>
            </form>
            <div className="border-[1px] flex  justify-center w-full border-white border-solid"></div>
            <p className='text-white justify-center flex mt-4 text-sm'>Already have an account?</p>
            <p className='text-white mb-4 text-sm flex justify-center font-medium cursor-pointer'><Link to="/login">Sign
                In to your Account?</Link></p>
        </section>
    )
}