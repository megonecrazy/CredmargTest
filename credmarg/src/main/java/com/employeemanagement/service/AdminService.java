package com.employeemanagement.service;

import com.employeemanagement.model.UserLogin;

public interface AdminService {

	boolean getUserNameAndPasswordByUserName(UserLogin userName);
}
