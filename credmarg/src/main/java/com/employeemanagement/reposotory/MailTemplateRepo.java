package com.employeemanagement.reposotory;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import com.employeemanagement.model.MailTemplate;

@Repository
public interface MailTemplateRepo extends JpaRepository<MailTemplate, Long>{

	@Query(value="SELECT u.mail_template_text FROM mail_template u where u.is_active='Y'",nativeQuery = true)
	String findMailTemplate();
}
