package com.employeemanagement.reposotory;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

import com.employeemanagement.model.Vendor;

public interface VendorRepo extends JpaRepository<Vendor, Long>{

	@Query(value="SELECT  * FROM vendor u where u.created_by='admin'",nativeQuery = true)
	List<Vendor> findAll();
	
	@Query(value="SELECT  COUNT(1) FROM VENDOR U WHERE U.EMAIL_ID=?",nativeQuery = true)
	int findEmailId(String emailId);
}
