import {Navigate, Outlet, Link} from "react-router-dom";
import {useStateContext} from "../contexts/ContextProvider.jsx";

export default function DefaultLayout() {
    const {user, token} = useStateContext();

    const handleLogout=(ev)=>{
        ev.preventDefault();

    }

    if (!token) {
        return <Navigate to="/login"/>
    }
    return (
        <div className="w-full h-screen flex flex-col absolute">
            <div className="bg-blue-400 text-white shadow-2xl items-center flex flex-row h-1/6 w-full xs:w-1/3 max-w-full transition duration-1000 ease-in">
                <h2 className='ps-5 text-3xl w-1/6 font-bold text-white'>X Company</h2>
                <div className="gap-10 items-end w-5/6 pe-5 flex justify-end">{user.name} <a onClick={handleLogout} >Logout</a></div>
            </div>
            <div className="bg-blue-300 text-white shadow-2xl flex flex-row w-full h-5/6 top-[100px] xs:w-1/3 transition duration-1000 ease-in">
                <aside className="flex flex-col bg-blue-300 h-full p-5 space-y-3 w-1/6 relative ">
                    <Link to="/dashboard">Dashboard</Link>
                    <Link to="/users">Users</Link>
                </aside>
                <div className="bg-blue-200 h-full w-5/6 left-0 p-5 space-y-3 relative">
                    <Outlet/>
                </div>
            </div>
        </div>
    )
}