import { useEffect, useState } from "react";
import axiosClient from "../axios-client.js";

import { Link } from "react-router-dom";
import { useStateContext } from "../contexts/ContextProvider.jsx";

export default function Users() {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(false);
  const {setNotification}=useStateContext();

  useEffect(() => {
    getUsers();
  }, []);

  const getUsers = () => {
    setLoading(true);
    axiosClient
      .get("/users")
      .then(({ data }) => {
        setUsers(data.data);
        setLoading(false);
      })
      .catch(() => {
        setLoading(false);
      });
  };

  const onDelete=(user)=>
  {
    if(!window.confirm('Are you sure you want to delete this user')){
      return
    }
    axiosClient.delete(`/users/${user.id}`)
    setNotification(`User ${user.name} successfully deleted`)
    getUsers();
  }
  return (
    <div>
      <div className="w-full flex flex-row p-4 border border-b-slate-300">
        <h1 className="p-2 text-slate-500 w-1/2 font-bold text-xl">
          All users
        </h1>
        <div className="w-1/2 flex gap-10 justify-center">
          <Link
            to={"/users/new"}
            className="transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 duration-300 flex items-center bg-green-400 hover:bg-green-500 p-2 text-white font-bold rounded-md"
          >
            Add New
          </Link>
          <Link
            to={"/use"}
            className="flex bg-blue-500 p-2 items-center text-medium rounded-md"
          >
            Add New
          </Link>
        </div>
      </div>
      <div className="card animated fadeInDown">
        <table>
          <thead>
            <tr>
              <th>ID</th>
              <th>Name</th>
              <th>Email</th>
              <th>Created at</th>
              <th>Actions</th>
            </tr>
          </thead>
         {loading && <tbody>
            <tr>
              <td colSpan="5" className="text-center">Loading...</td>
            </tr>
          </tbody>}
          {!loading && <tbody className="">
            {users.map((user) => (
              <tr>
                <td>{user.id}</td>
                <td>{user.name}</td>
                <td>{user.email}</td>
                <td>{user.created_at}</td>
                <td>
                  <button className="btn-edit">
                    <Link className="" to={"/users/" + user.id}>
                      Edit
                    </Link>
                  </button>
                  &nbsp;
                  <button onClick={ev=>onDelete(user)} className="btn-delete">Delete</button>
                </td>
              </tr>
            ))}
          </tbody>}
        </table>
      </div>
    </div>
  );
}
