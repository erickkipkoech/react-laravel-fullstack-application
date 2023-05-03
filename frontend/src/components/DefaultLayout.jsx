import {Outlet} from "react-router-dom";

export default function DefaultLayout(){
return (
<div>
  <div className="bg-blue-400 text-white rounded-2xl shadow-2xl  flex flex-col w-full  xs:w-1/3 items-center max-w-full transition duration-1000 ease-in">
    <h2 className='p-3 text-3xl font-bold text-white'>X Company</h2>
    <div className="inline-block border-[1px] justify-center w-20 border-white border-solid"></div>
    <Outlet/>
  </div>
</div>
)
}