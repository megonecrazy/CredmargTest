import axios from 'axios'
const GET_ALL_EMPLOYEE_URL="http://localhost:8080/api/employee/getEmployee"
const GET_ALL_VENDOR_URL="http://localhost:8080/api/vendor/getVendor"
const GET_ALL_MAILHISTORY_URL="http://localhost:8080/api/vendor/getMailHistory"
const POST_VENDOR_URL="http://localhost:8080/api/vendor/addVendor"
const POST_EMPLOYEE_URL="http://localhost:8080/api/employee/addEmployee"
const POST_SENDMAILTOVENDOR_URL="http://localhost:8080/api/vendor/sendMailToVendor"

const LOGIN_URL = "http://localhost:8080/login"

export const  listEmployee= () =>{
    return axios.get(GET_ALL_EMPLOYEE_URL);
}

export const listVendor=()=>{
    return axios.get(GET_ALL_VENDOR_URL);
}

export const listMailHistory=()=>{
    return axios.get(GET_ALL_MAILHISTORY_URL);
}
export const sendMailToVendor = (requestBody) =>axios.post(POST_SENDMAILTOVENDOR_URL,requestBody,{
    headers: {
        'Content-Type': 'application/json'
    }
})
export const addEmployee = (employee) =>axios.post(POST_EMPLOYEE_URL,employee)
export const addVendor = (vendor) =>axios.post(POST_VENDOR_URL,vendor)    
export const authenticationService = (userData) =>{
    return axios.post(LOGIN_URL,userData)    
}