package com.employeemanagement.service;

import java.util.List;

import com.employeemanagement.dto.EmployeeDto;

public interface EmployeeService  {

	EmployeeDto createEmployee(EmployeeDto employeeDto);
	
	
	int findEmailId(String emailId);
	
	
	List<EmployeeDto> getAllEmployee();
}
