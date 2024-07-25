import React from 'react'
import Tab from 'react-bootstrap/Tab';
import Tabs from 'react-bootstrap/Tabs';
import ListEmpComponent from './ListEmpComponent';
import VendorListComponent from './VendorListComponent';
import MailHistoryComponent from './MailHistoryComponent';
import { useNavigate } from 'react-router-dom';
export const DashBoardComponent = () => {
  const navigate =  useNavigate();
  function backToLogin(){
    localStorage.setItem('userName','');
    alert('Logged out Successfully!');
    navigate('/');
  }

  return (
    <div>
       <button className='btn btn-primary mb-2' onClick={backToLogin} style={{float: 'right'}}>Log Out</button>
      <Tabs
      defaultActiveKey="home"
      id="uncontrolled-tab-example"
      className="mb-3"
    >
      <Tab eventKey="home" title="Employee" >
        <ListEmpComponent/>
      </Tab>
      <Tab eventKey="profile" title="Vendor">
        <VendorListComponent/>
      </Tab>
      <Tab eventKey="contact" title="Mail History" >
        <MailHistoryComponent/>
      </Tab>
    </Tabs>
   
    </div>
  )
}
