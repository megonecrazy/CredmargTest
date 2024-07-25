package com.employeemanagement.reposotory;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;

import com.employeemanagement.model.UserLogin;



public interface AdminRepo extends JpaRepository<UserLogin, Long>{

	 List<UserLogin> getUserNameAndPasswordByUserName(String userName);
}
