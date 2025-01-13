import React, { useEffect, useState } from 'react'
import '../Components/Form.css';
import FormTable from './Formtable'
import { Navigate } from 'react-router-dom';
import {  useNavigate, useParams } from 'react-router-dom';

const Form = () => {
  const [id, setid] = useState("")
  const [Fname, setFname] = useState("")
  const [Lname, setLname] = useState("")
  const [Email, setEmail] = useState("")
  const [Phoneno, setPhoneno] = useState("")
  const [Address, setAddress] = useState("")
  const navigate=useNavigate()
  
 

  const Adduserdetails = async (event) => {
    console.warn(Fname, Lname, Email, Phoneno, Address);

    let result = await fetch('https://zepotohbackend.onrender.com/User-Details', {
      method: "post",
      body: JSON.stringify({ Fname, Lname, Email, Phoneno, Address }),
      headers: {
        'Content-Type': 'application/json'
      },
    });
    result = await result.json()
    console.warn(result)
   navigate('/Completedpage')

  };

 






  return (
    <>

      <div class='grid-container' >

        <div class='inputbox'>
          <input type='text' required="required"
            value={Fname} onChange={(e) => { setFname(e.target.value) }} />
          <span>First Name</span>
        </div>

        <div class='inputbox'>
          <input type='text' required='required'
            value={Lname} onChange={(e) => { setLname(e.target.value) }} />
          <span>Last Name</span>
        </div>
        <div class='inputbox'>
          <input type='email' required='required'
            value={Email} onChange={(e) => { setEmail(e.target.value) }} />
          <span>Email</span>
        </div>
        <div class='inputbox'>
          <input type='number' required='required' maxlength="10"
            value={Phoneno} onChange={(e) => { setPhoneno(e.target.value) }} />
          <span>phone No</span>
        </div>

        <div class='inputbox'>
          <input type='text' required='required'
            value={Address} onChange={(e) => { setAddress(e.target.value) }} />
          <span>Address</span>
        </div>
      </div><br></br>
      <div>
        <button type="submit" class="btn btn-secondary button" onClick={Adduserdetails}>Submit</button>
      </div><br></br><br></br>



      {/* <div>
        <table class="my_table">
          <tr>
            <th style={{ width: "" }}>S.No</th>
            <th style={{ width: "" }}>First Name</th>
            <th style={{ width: "" }}>Last Name</th>
            <th style={{ width: "" }}>Email</th>
            <th style={{ width: "" }}>Phone No</th>
            <th style={{ width: "" }}>Address</th>
          </tr>
          <tr>
    
              {
                adduser.length > 0 ? adduser.map((item, index) =>
               
                    <tr key={item._id}>
                      <td >{index + 1}</td>
                      <td >{item.Fname}</td>
                      <td>{item.Lname}</td>
                      <td>{item.Email}</td>
                      <td>{item.Phoneno}</td>
                      <td>{item.Address}</td>
                    </tr>

                  
                ) : <tbody>No Result Found</tbody>
              }
          </tr>

        </table>
      </div> */}
     <div>
     <input type="text" id="search-bar" placeholder="What can I help you with today?"/>
     <a href="#"><img class="search-icon" src="http://www.endlessicons.com/wp-content/uploads/2012/12/search-icon.png"/></a>
     </div>
      <FormTable/>


    </>



  )
}

export default Form