import React, { useEffect, useState } from 'react'
import '../Components/Formtable.css'
import { Link } from 'react-router-dom'

const Formtable = () => {
    const [adduser, setadduser] = useState("")

    useEffect(() => {
        getAddusers();
      }, [])
    
      const getAddusers = async () => {
        let result = await fetch('https://zepotohbackend.onrender.com/getUser-Details');
        result = await result.json()
        setadduser(result)
      }

      const userdelete=async (id)=>{
        let result=await fetch(`https://zepotohbackend.onrender.com/getUser-Details/${id}`,{
            method:"Delete"

        });
        result=await result.json()
        if(result)
        {
            getAddusers()
        }

    }
  return (
    <div class="container">
	<table>
		<thead>
			<tr>
				<th style={{width:'10%'}}>S.No</th>
				<th style={{width:'10%'}}>First Name</th>
				<th style={{width:'10%'}}>Last Name</th>
				<th style={{width:'10%'}}>Email</th>
				<th style={{width:'10%'}}>Phone No</th>
                <th style={{width:'20%'}}>Address</th>
                <th style={{width:'20%'}}>Operation</th>
			</tr>
		</thead>
		<tbody>
			
            {
                adduser.length > 0 ? adduser.map((item, index) =>
               
                    <tr key={item._id}>
                      <td style={{width:'10%'}}>{index + 1}</td>
                      <td style={{width:'10%'}}>{item.Fname}</td>
                      <td style={{width:'10%'}}>{item.Lname}</td>
                      <td style={{width:'10%'}}>{item.Email}</td>
                      <td style={{width:'10%'}}>{item.Phoneno}</td>
                      <td style={{width:'20%'}}>{item.Address}</td>

                      <td><button class='buttonstyledelupd' type="submit"
                       onClick={() => userdelete(item._id)}>Delete</button>
                      <button class='buttonstyledelupd'>
                        <Link style={{ textDecoration: 'none', color: 'white' }}
                        to={"/Formupdate/" + item._id}>Update</Link></button></td>
                    </tr>

                  
                ) : <tbody>No Result Found</tbody>
              }
			
		</tbody>
	</table>
</div>
  )
}

export default Formtable