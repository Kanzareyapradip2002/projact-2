import React, { useState, useEffect } from 'react';
import {useNavigate } from 'react-router-dom';

export default function Form() {
  const [item, setItem] = useState(() => {
    const storedData = localStorage.getItem("userData");
    return storedData ? JSON.parse(storedData) : [];
  });
  const [inputValue, setInputValue] = useState({
    sarname: "",
    name: "",
    Fthername:"",
    PhoneNumber:"",
    email: "",
    password: "",
    gender: "",
    Address: "",
  });
  const [isChecked, setIsChecked] = useState(false);
  const [edit, setEdit] = useState(null);
  const navigate = useNavigate();

  const handleInput = (e) => {
    const { name, value, type, checked } = e.target;
    if (type === 'radio') {
      setInputValue({ ...inputValue, [name]: value });
    } else if (name === 'isChecked') {
      setIsChecked(checked);
    } else {
      setInputValue({ ...inputValue, [name]: value });
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (inputValue.sarname === "") {
      alert("Please Enter SarName");
    }else if (inputValue.name === "") {
      alert("Please Enter Name");
    }else if (inputValue.Address === "") {
      alert("Please Enter Address");
    }else if (inputValue.PhoneNumber === "") {
      alert("Please Enter Phone Number");
    }else if (inputValue.Fthername === "") {
      alert("Please Enter Fther Name");
    } else if (inputValue.name.length <= 2) {
      alert("Enter More Than 2 Characters");
    } else if (inputValue.email === "") {
      alert("Please Enter Email");
    } else if (!inputValue.email.includes("@")) {
      alert("Enter A Valid Email Address");
    } else if (inputValue.password === "") {
      alert("Please Enter a Password");
    } else if (inputValue.password.length <= 8) {
      alert("Enter More Than 7 Characters");
    } else if (!isChecked) {
      alert("Please Accept Terms And Conditions !!");
    } else {
      if (edit !== null) {
        const updatedItems = [...item];
        updatedItems[edit] = inputValue;
        setItem(updatedItems);
        setEdit(null);
      } else {
        setItem([...item, inputValue]);
      }
      console.log(inputValue);
      setInputValue({
        sarname:"",
        name: "",
        Fthername: "",
        PhoneNumber: "",
        email: "",
        password: "",
        gender: "",
        Address:"",
      });
      setIsChecked(false);
      
    }
    alert("Form is Submited")
  };

  useEffect(() => {
    localStorage.setItem("userData", JSON.stringify(item));
  }, [item]);

  const handleNavigate = () => {
    navigate('/Data', { state: { items: item } }); // Pass item data to Page2
  };

  return (
    <>
      <form className='Form' onSubmit={handleSubmit}>
        <h2 className='name8'>Form</h2>
        <div className='name1'>
        <h6>SarName:</h6>
        <input
          className='sarname'
          type="text"
          placeholder='Enter Name'
          value={inputValue.sarname}
          name='sarname'
          onChange={handleInput}
        />
        <h6>Name:</h6>
        <input
          className='name'
          type="text"
          placeholder='Enter Name'
          value={inputValue.name}
          name='name'
          onChange={handleInput}
        />
        <h6> Father Name:</h6>
        <input
          className='name'
          type="text"
          placeholder='Enter Father Name'
          value={inputValue.Fthername}
          name='Fthername'
          onChange={handleInput}
        />
        </div>
        <div className='name2'>
        <h6>Phone Number:</h6>
        <input
          className='name'
          type="number"
          placeholder='Enter Phone Number'
          value={inputValue.PhoneNumber}
          name='PhoneNumber'
          onChange={handleInput}
        />
        <h6>Email Id:</h6>
        <input
          className='email'
          type="email"
          placeholder='Enter Email'
          value={inputValue.email}
          name='email'
          onChange={handleInput}
        />
        </div>
        <div className='name4'>
        <h6>Password:</h6>
        <input
          type="password"
          placeholder='Enter Password'
          value={inputValue.password}
          name='password'
          onChange={handleInput}
        />
        </div>
        <div className='name5'>
        <h6>Name:</h6>
        <input
          type="radio"
          id='male'
          value="Male"
          name='gender'
          checked={inputValue.gender === 'Male'}
          onChange={handleInput}
        />
        <label htmlFor="male">Male</label>
        <input
          type="radio"
          id='female'
          value="Female"
          name='gender'
          checked={inputValue.gender === 'Female'}
          onChange={handleInput}
        />
        <label htmlFor="female">Female</label>
        </div>
        <div className='name3'>
        <h6>Address:</h6>
        <input
          className='input'
          type="text"
          placeholder='Enter Address'
          value={inputValue.Address}
          name='Address'
          onChange={handleInput}
        />
        </div>
        <div className='name6'>
        <input
          type="checkbox"
          id='check'
          name='isChecked'
          checked={isChecked}
          onChange={handleInput}
        />
        <label htmlFor="check">Accept Terms And Conditions !!</label>
        </div>
        <div className='name7'>
        <button type="submit">Submit Form</button>
        <button onClick={handleNavigate}>Go to Data</button>
        </div>
      </form>    
    </>
  );
}
