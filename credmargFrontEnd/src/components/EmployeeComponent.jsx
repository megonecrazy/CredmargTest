import React, {  useState } from 'react'
import { addEmployee } from '../services/EmployeeServce';
import { useNavigate } from 'react-router-dom';

function EmployeeComponent() {

  const [name,setName] = useState('');
  const [designation,setDesignation] = useState('')
  const [ctc,setCTC] = useState('')
  const [email,setEmail] = useState('')

function handleName(event){
  setName(event.target.value);
}

function handleDesignation(event){
  setDesignation(event.target.value);
}
function handleCTC(event){
  setCTC(event.target.value);
}

function handleEmail(event){
  setEmail(event.target.value);
}

const navigator =useNavigate();

function saveEmployee(event){
   event.preventDefault();
    const createdBy = localStorage.getItem('userName');
   const employee={name,designation,ctc,email,createdBy}
   addEmployee(employee).then((response) =>{
    const respStatus = response.data.status;
    const respMessage = response.data.message;
    if(response.status==201){
      if(respStatus){
        alert(respMessage);
        navigator('/dashboard');
      }else{
        alert(respMessage);
        return false;
      }
    }
   } ).catch(error=> alert(error));
   console.log(employee);
}

function homeScreen(){
  navigator('/dashboard');
}

  return (
    <div className='container '>
      <div className='row'> 
        
        <div className='card col-md-6 offset-md-3 offset-md-3' >
        <button type="button" class="btn-close" aria-label="Close" onClick={homeScreen}></button>
        <p><h2 className='text-center'>Add Employee</h2></p>
          <div className='card-body'>
              <form action="">
                <div className='form-group mb-2'>
                  <label className='form-label'> Emplpoyee Name:</label>
                  <input type="text" name="firstName" placeholder='Enter Employee Full Name' required={true}
                   value={name}  className='form-control' onChange={handleName}/>
                </div>
                <div className='form-group mb-2'>
                  <label className='form-label'> Employee Designation:</label>
                  <input type="text" name="lastName" placeholder='Enter Employee Desgination Name' required={true}
                   value={designation}  className='form-control' onChange={handleDesignation}/>
                </div>
                <div className='form-group mb-2'>
                  <label className='form-label'> Employee CTC:</label>
                  <input type="text" name="lastName" placeholder='Enter Employee ctc' required={true}
                   value={ctc}  className='form-control' onChange={handleCTC}/>
                </div>
                <div className='form-group mb-2'>
                  <label className='form-label'>Employee Email ID:</label>
                  <input type="text" name="email" placeholder='Enter Employee email id' required={true}
                   value={email}  className='form-control' onChange={handleEmail}/>
                </div>
                <button className='btn btn-success' onClick={saveEmployee}>Submit</button>
              </form>
          </div>
        </div>

      </div>
      
    </div>
  )
}

export default EmployeeComponent