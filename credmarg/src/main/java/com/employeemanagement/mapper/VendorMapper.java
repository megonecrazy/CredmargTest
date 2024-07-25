package com.employeemanagement.mapper;

import com.employeemanagement.dto.EmployeeDto;
import com.employeemanagement.dto.VendorDto;
import com.employeemanagement.model.Employee;
import com.employeemanagement.model.Vendor;

public class VendorMapper {

	public static VendorDto mapToVendorDto(Vendor vendor) {
		return new VendorDto(vendor.getId(), 
				vendor.getName(), 
				vendor.getEmail(), 
				vendor.getUpiId(),
				vendor.getCreatedBy());
	}
	
	public static Vendor mapToVendor(VendorDto vendor) {
		return new Vendor(vendor.getId(), 
				vendor.getName(), 
				vendor.getEmail(), 
				vendor.getUpiId(),
				vendor.getCreatedBy());
	}
}
