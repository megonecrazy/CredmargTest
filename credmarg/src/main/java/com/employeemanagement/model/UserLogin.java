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
@Table(name= "user_login")
@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
public class UserLogin {

	@Id
	@GeneratedValue(strategy =GenerationType.IDENTITY )
	private long id;
	@Column(name = "user_name")
	private String userName	;
	@Column(name = "password")
	private String password;
}