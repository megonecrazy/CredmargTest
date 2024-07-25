CREATE TABLE `employee` (
  `id` bigint NOT NULL AUTO_INCREMENT,
  `email_id` varchar(255) NOT NULL,
  `ctc` bigint DEFAULT NULL,
  `name` varchar(255) DEFAULT NULL,
  `designation` varchar(255) DEFAULT NULL,
  `created_by` varchar(255) DEFAULT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `UKaf534w03av8srcldugewrmpbi` (`email_id`)
) ENGINE=InnoDB AUTO_INCREMENT=13 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

CREATE TABLE `mail_history` (
  `id` bigint NOT NULL AUTO_INCREMENT,
  `created_by` varchar(255) DEFAULT NULL,
  `email_id` varchar(255) DEFAULT NULL,
  `mail_body` varchar(255) DEFAULT NULL,
  `name` varchar(255) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=21 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

CREATE TABLE `mail_template` (
  `id` bigint NOT NULL AUTO_INCREMENT,
  `mail_template_text` varchar(255) DEFAULT NULL,
  `is_active` varchar(255) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=2 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

CREATE TABLE `user_login` (
  `id` bigint NOT NULL AUTO_INCREMENT,
  `user_name` varchar(255) DEFAULT NULL,
  `password` varchar(255) DEFAULT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `user_name_UNIQUE` (`user_name`)
) ENGINE=InnoDB AUTO_INCREMENT=2 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

CREATE TABLE `vendor` (
  `id` bigint NOT NULL AUTO_INCREMENT,
  `email_id` varchar(255) NOT NULL,
  `name` varchar(255) DEFAULT NULL,
  `upi_id` varchar(255) DEFAULT NULL,
  `created_by` varchar(255) DEFAULT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `UKr2gvg0n8d32mqy4druula25bn` (`email_id`)
) ENGINE=InnoDB AUTO_INCREMENT=6 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;


INSERT INTO mail_template
(`id`,
`mail_template_text`,
`is_active`)
VALUES
(1,
'Sending payments to vendor {name} at upi {upi}',
'Y');

INSERT INTO user_login
(`id`,
`user_name`,
`password`)
VALUES
(1,
'admin',
'1234');
