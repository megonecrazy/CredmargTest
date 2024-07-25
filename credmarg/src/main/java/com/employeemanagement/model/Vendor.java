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
@Table(name= "vendor")
@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
public class Vendor {

	@Id
	@GeneratedValue(strategy =GenerationType.IDENTITY )
	private long id;
	@Column(name = "name")
	private String name;
	@Column(name = "email_id", nullable = false , unique = true)
	private String email;
	@Column(name = "upi_id")
	private String upiId;
	@Column(name = "created_by")
	private String createdBy;
	
}