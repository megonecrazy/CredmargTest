package com.employeemanagement.reposotory;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

import com.employeemanagement.model.SendingMailToVendor;


public interface SendingMailRepo extends JpaRepository<SendingMailToVendor, Long> {

	@Query(value="SELECT  * FROM mail_history u where u.created_by='admin'",nativeQuery = true)
	List<SendingMailToVendor> findAll();
}