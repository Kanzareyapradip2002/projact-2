import React, { useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';

export default function Data() {
  const navigate = useNavigate();
  const location = useLocation();
  const [editIndex, setEditIndex] = useState(null);
  const [editInput, setEditInput] = useState({
    sarname: "",
    name: "",
    fatherName: "",
    phoneNumber: "",
    email: "",
    password: "",
    gender: "",
    address: "",
  });

  const homeBtn = () => {
    navigate("/");
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setEditInput((prev) => ({ ...prev, [name]: value }));
  };

  const [data, setData] = useState(() => {
    const storedData = localStorage.getItem("data");
    return storedData ? JSON.parse(storedData) : [];
  });
  const handleDelete = (index) => {
    if (index < 0 || index >= data.length) {
        console.error("Index out of bounds");
        return;
    }
    const updatedData = data.filter((_, i) => i !== index);
    setData(updatedData);
    localStorage.setItem("data", JSON.stringify(updatedData));
};


  const handleEdit = (index) => {
    setEditIndex(index);
    setEditInput({
      sarname: data[index].sarname,
      name: data[index].name,
      fatherName: data[index].fatherName,
      phoneNumber: data[index].phoneNumber,
      email: data[index].email,
      password: data[index].password,
      gender: data[index].gender,
      address: data[index].address,
    });
  };

  const handleUpdate = (e) => {
    e.preventDefault();
    const updatedData = data.map((user, index) =>
      index === editIndex ? editInput : user
    );
    setData(updatedData);
    localStorage.setItem("data", JSON.stringify(updatedData));
    setEditIndex(null);
    setEditInput({
      sarname: "",
      name: "",
      fatherName: "",
      phoneNumber: "",
      email: "",
      password: "",
      gender: "",
      address: "",
    });
  };

  return (
    <div>
      <h1 className='Data'>Data</h1>
      <table>
        <thead>
          <tr>
            <th>Sr No</th>
            <th>SarName</th>
            <th>Name</th>
            <th>Father Name</th>
            <th>Phone Number</th>
            <th>Email</th>
            <th>Password</th>
            <th>Gender</th>
            <th>Address</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {data.length > 0 ? (
            data.map((user, index) => (
              <tr key={index}>
                <td>{index + 1}</td>
                <td>{user.sarname}</td>
                <td>{user.name}</td>
                <td>{user.fatherName}</td>
                <td>{user.phoneNumber}</td>
                <td>{user.email}</td>
                <td>{user.password}</td>
                <td>{user.gender}</td>
                <td>{user.address}</td>
                <td>
                  <button onClick={() => handleEdit(index)}>Edit</button>
                  <button onClick={() => handleDelete(index)}>Delete</button>
                </td>
              </tr>
            ))
          ) : (
            <tr>
              <td colSpan={10}>No data available</td>
            </tr>
          )}
        </tbody>
      </table>
      {editIndex !== null && (
        <>
        <div className='Main'>
          <h2 className='EditUser'>Edit User</h2>
          <form onSubmit={handleUpdate}>
            <input
              type="text"
              name="sarname"
              className='sarname'
              placeholder='Edit SarName'
              value={editInput.sarname}
              onChange={handleInputChange}
              />
            <br />
            <input
              type="text"
              name="name"
              className='name'
              placeholder='Edit Name'
              value={editInput.name}
              onChange={handleInputChange}
              />
            <br />
            <input
              type="text"
              name="fatherName"
              className='fatherName'
              placeholder='Edit Father Name'
              value={editInput.fatherName}
              onChange={handleInputChange}
              />
            <br />
            <input
              type="text"
              name="phoneNumber"
              className='phoneNumber'
              placeholder='Edit Phone Number'
              value={editInput.phoneNumber}
              onChange={handleInputChange}
              />
            <br />
            <input
              type="email"
              name="email"
              className='Email'
              placeholder='Edit Email'
              value={editInput.email}
              onChange={handleInputChange}
              />
            <br />
            <input
              type="password"
              name="password"
              className='password'
              placeholder='Edit Password'
              value={editInput.password}
              onChange={handleInputChange}
              />
            <br />
            <input
              type="text"
              name="gender"
              className='gender'
              placeholder='Edit Gender'
              value={editInput.gender}
              onChange={handleInputChange}
              />
            <br />
            <input
              type="text"
              name="address"
              className='address'
              placeholder='Edit Address'
              value={editInput.address}
              onChange={handleInputChange}
              />
            <br />
            <br />
            <button className='Update' type='submit'>Update</button>
            <button className='Cancel' type='button' onClick={() => setEditIndex(null)}>Cancel</button>
          </form>
          </div>
        </>
      )}
      <br />
      <br />
      <button className='Home' onClick={homeBtn}>Home</button>
    </div>
  );
}
