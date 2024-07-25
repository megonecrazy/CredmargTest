package com.employeemanagement.service;

import java.util.List;

import com.employeemanagement.dto.MailSendingDto;
import com.employeemanagement.dto.VendorDto;
import com.employeemanagement.model.SendingMailToVendor;



public interface VendorService {

	VendorDto createVendor(VendorDto vendorDto);
	
	int findEmailId(String emailId);
	
	List<VendorDto> getAllVendor();
	
	boolean saveMailVendorData(MailSendingDto mailSendDto);
	
	List<SendingMailToVendor> getMailHistory();
}
