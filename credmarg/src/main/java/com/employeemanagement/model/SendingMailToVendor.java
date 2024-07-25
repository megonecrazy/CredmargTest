package com.employeemanagement.model;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.Table;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Entity
@Table(name= "mail_history")
@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
public class SendingMailToVendor {

	@Id
	@GeneratedValue(strategy =GenerationType.IDENTITY )
	private long id;
	@Column(name = "email_id")
	private String emailId;
	@Column(name = "name")
	private String name;
	@Column(name = "mail_body")
	private String mailBody;
	@Column(name = "created_by")
	private String createdBy;
	
}