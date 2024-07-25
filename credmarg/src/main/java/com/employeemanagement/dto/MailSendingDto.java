package com.employeemanagement.dto;

import java.util.List;

import lombok.Getter;
import lombok.Setter;

@Getter
@Setter
public class MailSendingDto {

	List<MailVendorRequest> listOfVendor;
	String createdBy;
}
