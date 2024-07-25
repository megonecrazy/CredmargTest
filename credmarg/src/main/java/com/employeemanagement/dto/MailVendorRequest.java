package com.employeemanagement.dto;

import java.util.List;

import com.employeemanagement.model.SendingMailToVendor;

import lombok.Getter;
import lombok.Setter;

@Getter
@Setter
public class MailVendorRequest {
	
	private String email;
	private String name;
	private String upiId;
	
}