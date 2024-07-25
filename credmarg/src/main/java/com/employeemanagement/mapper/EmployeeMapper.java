package com.employeemanagement.mapper;

import com.employeemanagement.dto.EmployeeDto;
import com.employeemanagement.model.Employee;

public class EmployeeMapper {

	public static EmployeeDto mapToEmployeeDto(Employee employee) {
		return new EmployeeDto(
				employee.getId(),
				employee.getName(),
				employee.getDesignation(),
				employee.getCtc(),
				employee.getEmail(),
				employee.getCreatedBy()
				);
	}
	
	public static Employee mapToEmployee(EmployeeDto employee) {
		return new Employee(
				employee.getId(),
				employee.getName(),
				employee.getDesignation(),
				employee.getCtc(),
				employee.getEmail(),
				employee.getCreatedBy()
				);
	}
}
