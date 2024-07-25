import React,{useEffect, useState} from 'react'
import { useNavigate } from 'react-router-dom'
import { listEmployee } from '../services/EmployeeServce';
import Popup from 'reactjs-popup';
import EmployeeComponent from './EmployeeComponent';

function ListEmpComponent() {

    const navigate =  useNavigate();

    const [employees,setEmployees]= useState([]) 

    useEffect(()=>{
        listEmployee().then((response)=>{
            setEmployees(response.data);
        } ).catch(error=> console.log(error));
    },[])

function addNewEmployee(){
    navigate('/addEmployee')
}


  return (
    <div className='container'>
        <h2 className='text-center'>List of Employee</h2>
        
        <table className='table table-striped table-bordered'>
            <thead>
                <tr>
                    <td>Employee Id</td>
                    <td>Employee  Name</td>
                    <td>Employee Designation</td>
                    <td>Employee CTC</td>
                    <td>Employee Emaild Id</td>
                </tr>
            </thead>
            <tbody>
                {
                    employees.map(employee =>
                        <tr key={employee.id}>
                            <td>{employee.id}</td>
                            <td>{employee.name}</td>
                            <td>{employee.designation}</td>
                            <td>{employee.ctc}</td>
                            <td>{employee.email}</td>
                        </tr>
                    )
                }
            </tbody>
        </table>
        <button className='btn btn-primary mb-2' onClick={addNewEmployee}> Add Employee</button>
       
     
    </div>
  )
}

export default ListEmpComponent