import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Pagination from 'react-js-pagination';
import { FaSpinner } from 'react-icons/fa';
const myUrl = "http://localhost:8000/api/users";
import {Link} from 'react-router-dom'
import axiosClient from '../api/axiosClient';
import useAuthContext from '../context/AuthContext';



const Users = () => {
  const [users, setUsers] = useState([]);
  const [activePage, setActivePage] = useState(1);
  const [totalItemsCount, setTotalItemsCount] = useState(0);
  const [message, setMessage] = useState(false)
  const getUsers = async (pageNumber = 1) => {
    try {
      const response = await axiosClient.get(`api/users?page=${pageNumber}`);
      setUsers(response.data.data);
      // console.log(response.data.data);
      setTotalItemsCount(response.data.meta.total);
    } catch (error) {
      console.log(error);
    }
  };

  const handleDelete = (user) => {
    if (!window.confirm("Are you sure you want to delete this user?")) {
      return;
    }
    axiosClient.delete(`/api/users/${user.id}`)
      .then(response => {
        console.log(response);
        setMessage(true);
        setTimeout(() => {
          setMessage(false);
        }, 5000); // 5 seconds
        getUsers()
      })
      .catch(error => {
        console.log(error);
      });
  }
  

  useEffect(() => {
    getUsers();
  }, []);

  const handlePageChange = (pageNumber) => {
    getUsers(pageNumber);
    setActivePage(pageNumber);
  };

  return (
    <div className="relative overflow-x-auto rounded-md scale-up-center
    scale-up-center">
      {message&&<div className="scale-up-center p-4 mb-4 text-sm text-green-800 rounded-lg bg-green-50 dark:bg-green-800 dark:text-white text-center" role="alert">
      User Deleted Successfully !
    </div>}
      <div className="flex justify-end items-center"> 
        <Link to='/users/addUser' className='cursor-pointer bg-slate-500 my-5 p-3 rounded-md text-white hover:bg-gray-700  '>
          Add new user
        </Link>
      </div>
      <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
        <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
          <tr>
            <th scope="col" className="px-6 py-3">
              Id
            </th>
            <th scope="col" className="px-6 py-3">
              Name
            </th>
            <th scope="col" className="px-6 py-3">
              Email
            </th>
            <th>
            Created at
            </th>
            <th scope="col" className="px-6 py-3">
              Actions
            </th>
          </tr>
        </thead>
       {users ? <tbody>
          {users.map((u) => (
            <tr key={u.id} className="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
              <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                {u.id}
              </th>
              <td className="px-6 py-4">
                {u.name}
              </td>
              <td className="px-6 py-4">
                {u.email}
              </td>
              <td className="px-6 py-4">
                {u.created_at}
              </td>
              <td className="px-6 py-4">
                <Link to={`/users/${u.id}`} className='bg-slate-800 border-[1px] hover:bg-slate-700 mx-3 text-white p-3 rounded'>Edit</Link>
                <Link onClick={() => handleDelete(u)} className='bg-slate-800 border-[1px] hover:bg-slate-700 mx-3 text-white p-3 rounded'>Delete</Link>
              </td>
            </tr>
          ))}
        </tbody> : <div className='h-screen justify-center flex items-center'><FaSpinner className='text-2xl animate-spin'/></div>}
      </table>

      <div className="flex justify-center mt-4 flex-row">
  <Pagination
    activePage={activePage}
    itemsCountPerPage={5} // Number of items per page
    totalItemsCount={totalItemsCount} // Total number of items
    pageRangeDisplayed={5} // Number of page links to display
    onChange={handlePageChange}
    itemClass="px-2 py-1 border rounded"
    linkClass="text-gray-500 hover:text-black"
    activeLinkClass="text-black font-bold"
  />
</div>
    </div>
  );
};

export default Users;
