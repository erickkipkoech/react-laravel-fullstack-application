import {Facebook, GitHub, Google} from "@mui/icons-material";

export default function Login(){
  return (
    <div>
      <h3 className='text-xl flex justify-center font-semibold text-white-400 pt-2'>Sign In!</h3>
      <div className='flex space-x-2 m-4 items-center justify-center'>
        <div className="socialIcon">
          <Facebook/>
        </div>
        <div className="socialIcon">
          <GitHub/>
        </div>
        <div className="socialIcon">
          <Google/>
        </div>
      </div>
      {/* Inputs */}
      <div className='flex flex-col items-center justify-center'>
        <input type='email' className='rounded-2xl px-2 py-1 w-4/5 md:w-full border-[1px] border-blue-400 m-1 focus:shadow-md focus:border-pink-400 focus:outline-none focus:ring-0' placeholder='Email'></input>
        <input type="password" className='rounded-2xl px-2 py-1 w-4/5 md:w-full border-[1px] border-blue-400 m-1 focus:shadow-md focus:border-pink-400 focus:outline-none focus:ring-0' placeholder='Password'></input>
        <button className='rounded-2xl m-2 text-white bg-blue-400 w-2/5 px-4 py-2 shadow-md hover:text-blue-400 hover:bg-white transition duration-200 ease-in'>
          Sign In
        </button>
      </div>
      <div className="inline-block border-[1px] justify-center w-20 border-blue-400 border-solid"></div>
      {/* eslint-disable-next-line react/no-unescaped-entities */}
      <p className='text-blue-400 mt-4 text-sm'>Don't have an account?</p>
      <p className='text-blue-400 mb-4 text-sm font-medium cursor-pointer' onClick={() => setIsLogin(false)}>Create a New Account?</p>
    </div>
  )
}