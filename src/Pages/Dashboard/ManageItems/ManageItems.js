import React from 'react';
import { FaEdit, FaTrashAlt } from 'react-icons/fa';
import useMenu from '../../Hooks/useMenu';

const ManageItems = () => {
  const [menu, menuLoading] = useMenu();
  if (menuLoading) {
    return <div>loading...</div>;
  }

  const handleUpdate = (item) => {
    console.log(item);
  };
  const handleDelete = (item) => {
    console.log(item);
  };

  return (
    <div>
      <div className="overflow-x-auto">
        <table className="table">
          {/* head */}
          <thead>
            <tr>
              <th>#</th>
              <th>Name</th>
              <th>Category</th>
              <th>Price</th>
              <th>Update</th>
              <th>Delete</th>
            </tr>
          </thead>
          <tbody>
            {/* row 1 */}
            {menu.map((item, index) => (
              <tr key={item._id}>
                <th>{index + 1}</th>
                <td>
                  <div className="flex items-center space-x-3">
                    <div className="avatar">
                      <div className="mask mask-squircle w-12 h-12">
                        <img src={item.image} />
                      </div>
                    </div>
                    <div>
                      <div className="font-bold">{item.name}</div>
                    </div>
                  </div>
                </td>
                <td>{item.category}</td>
                <td className="text-end">{item.price}</td>
                <td>
                  <button
                    onClick={() => handleUpdate(menu)}
                    className="btn hover:bg-orange-500 text-white bg-orange-400 rounded">
                    <FaEdit></FaEdit>
                  </button>
                </td>
                <td>
                  <button
                    onClick={() => handleDelete(menu)}
                    className="btn hover:bg-red-600 text-white bg-red-500 rounded">
                    <FaTrashAlt></FaTrashAlt>
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default ManageItems;