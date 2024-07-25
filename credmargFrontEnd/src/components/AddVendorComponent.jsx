import React, {  useState }  from 'react'
import { addVendor } from '../services/EmployeeServce';
import { useNavigate } from 'react-router-dom';

export const AddVendorComponent = () => {

    const [name,setName] = useState('');
    const [email,setEmail] = useState('')
    const [upiId,setUpiId] = useState('')
  
  function handleName(event){
    setName(event.target.value);
  }
  
  function handleUpiId(event){
    setUpiId(event.target.value);
  }
  
  function handleEmail(event){
    setEmail(event.target.value);
  }
  const navigator =useNavigate();

    function saveVendor(event){
        event.preventDefault();
         const createdBy = localStorage.getItem('userName');
        const vendor={name,email,upiId,createdBy}
        addVendor(vendor).then((response) =>{
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
        <h2 className='text-center'>Add Vendor</h2>
          <div className='card-body'>
              <form action="">
                <div className='form-group mb-2'>
                  <label className='form-label'> Vendor Name:</label>
                  <input type="text" name="firstName" placeholder='Enter Vendor Full Name' required={true}
                   value={name}  className='form-control' onChange={handleName}/>
                </div>
                <div className='form-group mb-2'>
                  <label className='form-label'>Vendor Email ID:</label>
                  <input type="text" name="email" placeholder='Enter Vendor email id' required={true}
                   value={email}  className='form-control' onChange={handleEmail}/>
                </div>
                <div className='form-group mb-2'>
                  <label className='form-label'> Vendor Upi:</label>
                  <input type="text" name="lastName" placeholder='Enter Vendor UPI id' required={true}
                   value={upiId}  className='form-control' onChange={handleUpiId}/>
                </div>
                <button className='btn btn-success' onClick={saveVendor}>Submit</button>
              </form>
          </div>
        </div>

      </div>
      
    </div>
)

}
