package com.employeemanagement.controller;

import org.springframework.http.HttpStatus;
import org.springframework.http.HttpStatusCode;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import com.employeemanagement.model.MessageBody;
import com.employeemanagement.model.UserLogin;
import com.employeemanagement.service.AdminService;
import com.employeemanagement.service.EmployeeService;

import lombok.AllArgsConstructor;

@CrossOrigin("*")
@AllArgsConstructor
@RestController
public class AdminController {

	AdminService service;
	
	@PostMapping(path = "/login")
	public ResponseEntity<MessageBody> adminLogin(@RequestBody UserLogin userLoginRequest) {
	
		MessageBody message = new MessageBody();
		boolean flag=service.getUserNameAndPasswordByUserName(userLoginRequest);
		if(flag) {
			message.setStatus(true);
			message.setMessage("Login Successful!");
		}else {
			message.setStatus(false);
			message.setMessage("Invalid credentials");
		}
		return new ResponseEntity<MessageBody>(message, HttpStatus.CREATED);
	}
}
