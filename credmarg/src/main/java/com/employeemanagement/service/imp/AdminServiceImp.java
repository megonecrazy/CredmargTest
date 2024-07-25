package com.employeemanagement.service.imp;

import java.util.List;

import org.springframework.stereotype.Service;

import com.employeemanagement.model.UserLogin;
import com.employeemanagement.reposotory.AdminRepo;
import com.employeemanagement.reposotory.EmployeeRepo;
import com.employeemanagement.service.AdminService;

import lombok.AllArgsConstructor;


@Service
@AllArgsConstructor
public class AdminServiceImp implements AdminService {

	private AdminRepo repo;
	
	@Override
	public boolean getUserNameAndPasswordByUserName(UserLogin userLoginRequest) {
		// TODO Auto-generated method stub
		boolean flag = false;
		String userName = userLoginRequest.getUserName();
		String password =userLoginRequest.getPassword();
		UserLogin userList=repo.getUserNameAndPasswordByUserName(userName);
		if(userList!=null) {
			if(password.equals(userList.getPassword()) && 1==userList.getId()) {
				flag=true;
				return flag;
			}
		}else {
			return false;
		}
		
		
		return flag;
	}

}
