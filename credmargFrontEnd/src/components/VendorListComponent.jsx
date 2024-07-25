import React,{useEffect, useState} from 'react'
import { useNavigate } from 'react-router-dom'
import { listVendor,sendMailToVendor } from '../services/EmployeeServce';
const VendorListComponent = () => {
    const navigate =  useNavigate();

    const [vendor,setVendor]= useState([]) 

    useEffect(()=>{
        listVendor().then((response)=>{
            setVendor(response.data);
        } ).catch(error=> console.log(error));
    },[])

function addNewVendor(){
    navigate('/addVendor')
}
function sendMailTOVendors(){
    const checkboxes = document.querySelectorAll("input[name='sendMail']:checked");
    if (checkboxes.length === 0) {
        alert('Please check any box to proceed further.');
        return;
    }
    
    const selectedVendors = [];
    checkboxes.forEach(checkbox => {
        const req = JSON.parse(checkbox.value);
        const listVendorReq = '{"name":"'+req.name+'","email":"'+req.email+'","upiId":"'+req.upiId +'"}';
        selectedVendors.push(JSON.parse(listVendorReq));
    });
    const createdBy = localStorage.getItem('userName');
    const reqBody={
        listOfVendor:selectedVendors,
        createdBy:createdBy
        };
    sendMailToVendor(reqBody).then( (response) => {
        console.log(response.status);
        console.log(response.data);
        const respStatus = response.data.status;
        const respMessage = response.data.message;
        if(response.status==201){
          if(respStatus){
            alert(respMessage);
            window.location.reload();
            navigate('/dashboard');
          }else{
            alert(respMessage);
            return false;
          }
        }
    })
}

    return (
        <div className='container'>
        <h2 className='text-center'>List of Vendor</h2>
        
        <table className='table table-striped table-bordered'>
            <thead>
                <tr>
                    <td>Vendor Id</td>
                    <td>Vendor Name</td>
                    <td>Vendor Emaild Id</td> 
                    <td>Vendor UPI</td>
                    <td>Send Email</td>
                   
                </tr>
            </thead>
            <tbody>
                {
                    vendor.map(vendor =>
                        <tr key={vendor.id}>
                            <td>{vendor.id}</td>
                            <td>{vendor.name}</td>
                            <td>{vendor.email}</td>
                            <td>{vendor.upiId}</td>
                            <td><input type="checkbox" name="sendMail" id={vendor.id} value={JSON.stringify(vendor)} /></td>
                         </tr>
                    )
                }
            </tbody>
        </table>
        <button className='btn btn-primary mb-2' onClick={addNewVendor}> Add Vendor</button> &nbsp;&nbsp;&nbsp;
        <button className='btn btn-primary mb-2' onClick={sendMailTOVendors}> Send Email</button>
       
        
    </div>
    )
}

export default VendorListComponent