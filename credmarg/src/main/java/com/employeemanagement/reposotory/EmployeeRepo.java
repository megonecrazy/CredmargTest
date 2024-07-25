package com.employeemanagement.reposotory;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

import com.employeemanagement.model.Employee;


public interface EmployeeRepo extends JpaRepository<Employee, Long>{
	
	@Query(value="SELECT  * FROM EMPLOYEE U WHERE U.CREATED_BY='ADMIN'",nativeQuery = true)
	List<Employee> findAll();
	@Query(value="SELECT  count(1) FROM EMPLOYEE U WHERE U.email_id=?",nativeQuery = true)
	int findEmailId(String emailId);

}