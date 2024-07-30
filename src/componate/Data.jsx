import React from 'react';
import { useLocation } from 'react-router-dom';

export default function Data() {
  const location = useLocation();
  console.log('Location state:', location.state); // Debug line

  const { items } = location.state || {}; // Access the passed data

  return (
    <div>
      <h1 className='Data'>Data</h1>
      <table>
        <thead>
          <tr>
            <th>Sr No</th>
            <th>SarName</th>
            <th>Name</th>
            <th>Fther Name</th>
            <th>Phone Number</th>
            <th>Email</th>
            <th>Password</th>
            <th>Gender</th>
            <th>Address</th>
          </tr>
        </thead>
        <tbody>
          {items && items.length > 0 ? (
            items.map((ele, index) => (
              <tr key={index}>
                <td>{index + 1}</td>
                <td>{ele.sarname}</td>
                <td>{ele.name}</td>
                <td>{ele.Fthername}</td>
                <td>{ele.PhoneNumber}</td>
                <td>{ele.email}</td>
                <td>{ele.password}</td>
                <td>{ele.gender}</td>
                <td>{ele.Address}</td>
              </tr>
            ))
          ) : (
            <tr>
              <td colSpan={5}>No data available</td>
            </tr>
          )}
        </tbody>
      </table>
    </div>
    
  );
}
