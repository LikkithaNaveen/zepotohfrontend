import React, { useEffect, useState } from 'react'
import '../Components/Form.css';
import {  useNavigate, useParams } from 'react-router-dom';

const Formupdate = () => {
    const [Fname, setFname] = useState("")
    const [Lname, setLname] = useState("")
    const [Email, setEmail] = useState("")
    const [Phoneno, setPhoneno] = useState("")
    const [Address, setAddress] = useState("")
    const params=useParams()
    const navigate=useNavigate()


    useEffect(() => {
        getupdatedetails()
    })

    const getupdatedetails = async () => {
        let result = await fetch(`http://localhost:8000/updategetUser-Details/${params.id}`);
        result = await result.json();
        console.warn(result)
        setFname(result.Fname)
        setLname(result.Lname)
        setEmail(result.Email)
        setPhoneno(result.Phoneno)
        setAddress(result.Address)
   }


    const Updateformdetails = async () => {
        //console.log(name,course,language,taskdetails,assigndate,completedate,desc)
        let result = await fetch(`https://zepotohbackend.onrender.com/updategetUser-Details/${params.id}`,{
            method: "put",
            body: JSON.stringify({ Fname, Lname, Email, Phoneno, Address }),
            headers: {
              'Content-Type': 'application/json'
            },
          });
        result = await result.json()
        console.warn(result)
        navigate("/")

    }








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
                <button type="submit" class="btn btn-secondary button" onClick={Updateformdetails}>Update</button>
            </div><br></br><br></br>

          


        </>



    )
}

export default Formupdate