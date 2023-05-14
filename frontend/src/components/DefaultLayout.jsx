import { Link, Navigate, Outlet } from "react-router-dom";
import { useStateContext } from "../contexts/ContextProvider.jsx";
import axiosClient from "../axios-client.js";
import { useEffect } from "react";

export default function DefaultLayout() {
  const { user, token,notification, setUser, setToken,setNotification } = useStateContext();

  const handleLogout = (ev) => {
    ev.preventDefault();
    axiosClient.post("/logout").then(() => {
      setUser({});
      setToken(null);
      return "Logged out successfully!";
    });
  };

  useEffect(() => {
    axiosClient.get("/user").then(({ data }) => {
      setUser(data);
    });
  }, []);

  if (!token) {
    return <Navigate to="/login" />;
  }
  return (
    <div className="w-full h-screen flex flex-col absolute">
      <div className="bg-white-400 shadow-md items-center border border-slate-300 flex flex-row h-[70px] w-full xs:w-1/3 max-w-full transition duration-1000 ease-in">
        <h2 className="ps-8 text-3xl w-1/6 font-bold text-black">X Company</h2>
        <div className="gap-10 text-slate-500 items-end w-5/6 pe-5 flex justify-end">
          {user.name} <a onClick={handleLogout}>Logout</a>
        </div>
      </div>
      <div className="bg-white-300 text-black shadow-2xl flex flex-row w-full h-5/6 top-[100px] xs:w-1/3 transition duration-1000 ease-in">
        <aside className="flex flex-col font-medium text-xl border border-slate-300 text-slate-600 bg-white-300 h-full p-5 space-y-3 w-1/6 relative ">
          <Link to="/dashboard">Dashboard</Link>
          <Link to="/users">Users</Link>
        </aside>
        <div className="bg-white-200 h-full w-5/6 left-0 space-y-3 relative">
          <Outlet />
        </div>
      </div>
      {notification && <div className="notification">{notification}</div>}
    </div>
  );
}
