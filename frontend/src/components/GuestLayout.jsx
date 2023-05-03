import {Outlet} from "react-router-dom";

export default function GuestLayout(){
return (
    <div className="w-full flex items-center top-10 relative justify-center">
  <div className="bg-blue-400 text-white justify-center rounded-2xl shadow-2xl flex flex-col w-[500px] h-full  xs:w-1/3 items-center max-w-full transition duration-1000 ease-in">
    <h2 className='p-3 text-3xl font-bold text-white'>X Company</h2>
    <div className="inline-block border-[1px] justify-center w-20 border-white border-solid"></div>
  <Outlet/>

  </div>
    </div>
)
}