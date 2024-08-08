import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

export default function Form() {
  const [items, setItems] = useState(() => {
    const storedData = localStorage.getItem("data");
    return storedData ? JSON.parse(storedData) : [];
  });
  const [inputValue, setInputValue] = useState({
    sarname: "",
    name: "",
    fatherName: "", // Corrected key from 'Fthername' to 'fatherName'
    phoneNumber: "", // Corrected key from 'PhoneNumber' to 'phoneNumber'
    email: "",
    password: "",
    gender: "",
    address: "", // Corrected key from 'Address' to 'address'
  });
  const [isChecked, setIsChecked] = useState(false);
  const [editIndex, setEditIndex] = useState(null);
  const navigate = useNavigate();

  const handleInput = (e) => {
    const { name, value, type, checked } = e.target;
    if (type === 'radio') {
      setInputValue((prev) => ({ ...prev, [name]: value }));
    } else if (name === 'isChecked') {
      setIsChecked(checked);
    } else {
      setInputValue((prev) => ({ ...prev, [name]: value }));
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!inputValue.sarname) {
      alert("Please Enter SarName");
      return;
    }
    if (!inputValue.name) {
      alert("Please Enter Name");
      return;
    }
    if (inputValue.name.length <= 2) {
      alert("Enter More Than 2 Characters in Name");
      return;
    }
    if (!inputValue.fatherName) {
      alert("Please Enter Father's Name");
      return;
    }
    if (!inputValue.phoneNumber) {
      alert("Please Enter Phone Number");
      return;
    }
    if (!inputValue.email) {
      alert("Please Enter Email");
      return;
    }
    if (!inputValue.email.includes("@")) {
      alert("Enter A Valid Email Address");
      return;
    }
    if (!inputValue.password) {
      alert("Please Enter a Password");
      return;
    }
    if (inputValue.password.length <= 8) {
      alert("Enter More Than 7 Characters in Password");
      return;
    }
    if (!isChecked) {
      alert("Please Accept Terms And Conditions");
      return;
    }

    if (editIndex !== null) {
      const updatedItems = [...items];
      updatedItems[editIndex] = inputValue;
      setItems(updatedItems);
      setEditIndex(null);
    } else {
      setItems([...items, inputValue]);
    }
    console.log(inputValue);
    setInputValue({
      sarname: "",
      name: "",
      fatherName: "",
      phoneNumber: "",
      email: "",
      password: "",
      gender: "",
      address: "",
    });
    setIsChecked(false);
    alert("Form is Submitted");
  };

  useEffect(() => {
    localStorage.setItem("data", JSON.stringify(items));
  }, [items]);

  const handleNavigate = () => {
    navigate('/Data', { state: { data: items } });
  };

  return (
    <>
      <form className='Form' onSubmit={handleSubmit}>
        <h2 className='name8'>Form</h2>
        <div className='name1'>
          <label>
            SarName:
            <input
              type="text"
              placeholder='Enter SarName'
              value={inputValue.sarname}
              name='sarname'
              onChange={handleInput}
            />
          </label>
          <label>
            Name:
            <input
              type="text"
              placeholder='Enter Name'
              value={inputValue.name}
              name='name'
              onChange={handleInput}
            />
          </label>
          <label>
            Father's Name:
            <input
              type="text"
              placeholder='Enter Father Name'
              value={inputValue.fatherName}
              name='fatherName'
              onChange={handleInput}
            />
          </label>
        </div>
        <div className='name2'>
          <label>
            Phone Number:
            <input
              type="text" // Changed to 'text' to prevent unwanted leading zeros
              placeholder='Enter Phone Number'
              value={inputValue.phoneNumber}
              name='phoneNumber'
              onChange={handleInput}
            />
          </label>
          <label>
            Email Id:
            <input
              type="email"
              placeholder='Enter Email'
              value={inputValue.email}
              name='email'
              onChange={handleInput}
            />
          </label>
        </div>
        <div className='name4'>
          <label>
            Password:
            <input
              type="password"
              placeholder='Enter Password'
              value={inputValue.password}
              name='password'
              onChange={handleInput}
            />
          </label>
        </div>
        <div className='name5'>
          <label>
            <input
              type="radio"
              id='male'
              value="Male"
              name='gender'
              className='gender'
              checked={inputValue.gender === 'Male'}
              onChange={handleInput}
            />
            Male
          </label>
          <label>
            <input
              type="radio"
              id='female'
              value="Female"
              name='gender'
              checked={inputValue.gender === 'Female'}
              onChange={handleInput}
            />
            Female
          </label>
        </div>
        <div className='name3'>
          <label>
            Address:
            <input
            className='address'
              type="text"
              placeholder='Enter Address'
              value={inputValue.address}
              name='address'
              onChange={handleInput}
            />
          </label>
        </div>
        <div className='name6'>
          <label>
            <input
              type="checkbox"
              id='check'
              name='isChecked'
              checked={isChecked}
              onChange={handleInput}
            />
            Accept Terms And Conditions
          </label>
        </div>
        <div className='name7'>
          <button type="submit">Submit Form</button>
          <button type="button" onClick={handleNavigate}>Go to Data</button>
        </div>
      </form>
    </>
  );
}
