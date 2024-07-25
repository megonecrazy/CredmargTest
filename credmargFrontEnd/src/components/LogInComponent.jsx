import React,{useState,} from 'react'
import { authenticationService } from '../services/EmployeeServce';
import axios from 'axios'
import { useNavigate } from 'react-router-dom'

const LogInComponent = () => {

    const [userName,setUsername] = useState('');
  const [password,setPassword] = useState('');


  function handleUserName(event){
    setUsername(event.target.value);
  }

  function HandlePassword(event){
    setPassword(event.target.value);
  }

  let navigator =useNavigate();
  const userData = {userName,password};
  function loginIntoService(event){
    event.preventDefault();
    authenticationService(userData).then( (response) => {
      
        console.log(response.status);
        console.log(response.data);
        const respStatus = response.data.status;
        const respMessage = response.data.message;
        if(response.status==201){
          if(respStatus){
            alert(respMessage);
            localStorage.setItem('userName',userName);
            navigator('/dashboard');
          }else{
            alert(respMessage);
            return false;
          }
        }
    })
  }

  return (
    <div className='container-xl'>
      <div className='row'> 
        <div className='card col-md-6 offset-md-3 offset-md-3' >
        <h2 className='text-center'>Login into the application</h2>
          <div className='card-body'>
              <form action="">
                <div className='form-group mb-2'>
                  <label className='form-label'> User Name:</label>
                  <input type="text" name="userName" placeholder='Enter User Name' required={true}
                   value={userName}  className='form-control' onChange={handleUserName}/>
                </div>
                <div className='form-group mb-2'>
                  <label className='form-label'> Password:</label>
                  <input type="password" name="password" placeholder='Enter Password' required={true}
                   value={password}  className='form-control' onChange={HandlePassword}/>
                </div>
                <button className='btn btn-success' onClick={loginIntoService}>Submit</button>
              </form>
          </div>
        </div>

      </div>
      
    </div>
  )
}

export default LogInComponent