import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Pagination from 'react-js-pagination';

const myUrl = "http://localhost:8000/api/users";

const Users = () => {
  const [users, setUsers] = useState([]);
  const [activePage, setActivePage] = useState(1);
  const [totalItemsCount, setTotalItemsCount] = useState(0);

  const getUsers = async (pageNumber = 1) => {
    try {
      const response = await axios.get(`${myUrl}?page=${pageNumber}`);
      setUsers(response.data.data);
      setTotalItemsCount(response.data.meta.total);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getUsers();
  }, []);

  const handlePageChange = (pageNumber) => {
    getUsers(pageNumber);
    setActivePage(pageNumber);
  };

  return (
    <div className="relative overflow-x-auto rounded-md">
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
            <th scope="col" className="px-6 py-3">
              Actions
            </th>
          </tr>
        </thead>
        <tbody>
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
                <button className='bg-slate-800 border-[1px] hover:bg-slate-700 mx-3 text-white p-3 rounded'>Edit</button>
                <button className='bg-slate-800 border-[1px] hover:bg-slate-700 mx-3 text-white p-3 rounded'>Delete</button>
              </td>
            </tr>
          ))}
        </tbody>
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
