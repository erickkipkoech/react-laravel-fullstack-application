import { useEffect, useState } from "react";
import axiosClient from "../axios-client.js";

import { Link } from "react-router-dom";

export default function Users() {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    getUsers();
  }, []);

  const getUsers = () => {
    setLoading(true);
    axiosClient
      .get("/users")
      .then(({ data }) => {
        console.log(data);
        setLoading(false);
      })
      .catch(() => {
        setLoading(false);
      });
  };
  return (
    <div>
      <div className="w-full flex flex-row p-4 border border-b-slate-300">
        <h1 className="p-2 text-black w-1/2 font-bold text-2xl">All users</h1>
        <div className="w-1/2 flex gap-10 justify-center">
        <Link to={'/use'} className="flex items-center bg-blue-500 p-2 text-medium rounded-md">Add New</Link>
        <Link to={'/use'} className="flex bg-blue-500 p-2 items-center text-medium rounded-md">Add New</Link>
        </div>
      
      </div>
    </div>
  );
}
