import React,{useEffect, useState} from 'react'
import { useNavigate } from 'react-router-dom'
import { listMailHistory } from '../services/EmployeeServce';

const MailHistoryComponent = () => {

//    const navigate =  useNavigate();

    const [mailHistory,setMailHistory]= useState([]) 

    useEffect(()=>{
        listMailHistory().then((response)=>{
            setMailHistory(response.data);
        } ).catch(error=> console.log(error));
    },[])

    return (
        <div className='container'>
        <h2 className='text-center'>Email History</h2>
        
        <table className='table table-striped table-bordered'>
            <thead>
                <tr>
                    <td>Mail Id</td>
                    <td>Vendor Email Id</td>
                    <td>Vendor Name</td> 
                    <td>Mail Body</td>
                   
                </tr>
            </thead>
            <tbody>
                {
                    mailHistory.map(mailHistory =>
                        <tr key={mailHistory.id}>
                            <td>{mailHistory.id}</td>
                            <td>{mailHistory.emailId}</td>
                            <td>{mailHistory.name}</td>
                            <td>{mailHistory.mailBody}</td>
                        </tr>
                    )
                }
            </tbody>
        </table>

    </div>
    )
}

export default MailHistoryComponent