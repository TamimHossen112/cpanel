/*
SQLyog Ultimate
MySQL - 8.0.30 : Database - cpanel_rnd
*********************************************************************
*/

/*!40101 SET NAMES utf8 */;

/*!40101 SET SQL_MODE=''*/;

/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;
/*Table structure for table `business_units` */

CREATE TABLE `business_units` (
  `id` int NOT NULL AUTO_INCREMENT,
  `sbu_prefix` varchar(20) DEFAULT NULL,
  `sbu_name` varchar(20) DEFAULT NULL,
  `sbu_full_name` varchar(100) DEFAULT NULL,
  `sbu_location` varchar(50) DEFAULT NULL,
  `status` int DEFAULT NULL,
  `field1` varchar(100) DEFAULT NULL,
  `field2` int DEFAULT NULL,
  `note` varchar(255) DEFAULT NULL,
  `created_on` datetime DEFAULT NULL,
  `created_by` varchar(512) DEFAULT NULL,
  `updated_on` datetime DEFAULT NULL,
  `updated_by` varchar(512) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=4 DEFAULT CHARSET=utf8mb3;

/*Data for the table `business_units` */

insert  into `business_units`(`id`,`sbu_prefix`,`sbu_name`,`sbu_full_name`,`sbu_location`,`status`,`field1`,`field2`,`note`,`created_on`,`created_by`,`updated_on`,`updated_by`) values 
(1,'10','TCL','Transcom Limited','Gulshan 2',1,NULL,NULL,NULL,NULL,NULL,NULL,NULL),
(2,'11','SKF','SKF','Bananai',1,'',0,'','2025-07-15 18:10:17',NULL,'2025-07-15 18:11:39',NULL),
(3,'19','PALO','Prothom Alo','Karwan Bazar',1,NULL,NULL,NULL,NULL,NULL,NULL,NULL);

/*Table structure for table `projects` */

CREATE TABLE `projects` (
  `id` int NOT NULL AUTO_INCREMENT,
  `cid` varchar(20) DEFAULT NULL,
  `project_id` varchar(20) DEFAULT NULL,
  `project_name` varchar(100) DEFAULT NULL,
  `project_description` varchar(200) DEFAULT NULL,
  `status` int DEFAULT NULL,
  `field1` varchar(100) DEFAULT NULL,
  `field2` int DEFAULT NULL,
  `note` varchar(255) DEFAULT NULL,
  `created_on` datetime DEFAULT NULL,
  `created_by` varchar(512) DEFAULT NULL,
  `updated_on` datetime DEFAULT NULL,
  `updated_by` varchar(512) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=5 DEFAULT CHARSET=utf8mb3;

/*Data for the table `projects` */

insert  into `projects`(`id`,`cid`,`project_id`,`project_name`,`project_description`,`status`,`field1`,`field2`,`note`,`created_on`,`created_by`,`updated_on`,`updated_by`) values 
(1,'TCL','cpanel','cpanel','Control Panel',1,NULL,NULL,NULL,NULL,NULL,NULL,NULL),
(2,'PALO',NULL,'surjo','surjo',1,'',0,'','2025-07-15 18:54:40',NULL,'2025-07-15 19:45:08',NULL),
(3,'PALO',NULL,'circulation','Circulation',0,'',0,'','2025-07-15 19:45:40',NULL,'2025-07-15 19:45:40',NULL),
(4,'SKF',NULL,'expanse','Expanse',1,'',0,'','2025-07-15 19:45:54',NULL,'2025-07-15 19:45:54',NULL);

/*Table structure for table `u_role_has_tasks` */

CREATE TABLE `u_role_has_tasks` (
  `id` int NOT NULL AUTO_INCREMENT,
  `cid` varchar(20) DEFAULT NULL,
  `pid` varchar(20) DEFAULT NULL,
  `role_id` varchar(20) DEFAULT NULL,
  `role_name` varchar(100) DEFAULT NULL,
  `task_id` varchar(20) DEFAULT NULL,
  `task_name` varchar(200) DEFAULT NULL,
  `group_id` varchar(20) DEFAULT NULL,
  `group_name` varchar(100) DEFAULT NULL,
  `status` int DEFAULT NULL,
  `field1` varchar(100) DEFAULT NULL,
  `field2` int DEFAULT NULL,
  `note` varchar(255) DEFAULT NULL,
  `created_on` datetime DEFAULT NULL,
  `created_by` varchar(512) DEFAULT NULL,
  `updated_on` datetime DEFAULT NULL,
  `updated_by` varchar(512) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=4 DEFAULT CHARSET=utf8mb3;

/*Data for the table `u_role_has_tasks` */

insert  into `u_role_has_tasks`(`id`,`cid`,`pid`,`role_id`,`role_name`,`task_id`,`task_name`,`group_id`,`group_name`,`status`,`field1`,`field2`,`note`,`created_on`,`created_by`,`updated_on`,`updated_by`) values 
(1,'TCL','cpanel','1','super_admin','1','login','1','access_management',1,NULL,NULL,NULL,NULL,NULL,NULL,NULL),
(2,'TCL','cpanel','1','super_admin','2','business_units_create','1','access_management',1,NULL,NULL,NULL,NULL,NULL,NULL,NULL),
(3,'TCL','cpanel','1','super_admin','3','role_management','1','access_management',1,NULL,NULL,NULL,NULL,NULL,NULL,NULL);

/*Table structure for table `u_roles` */

CREATE TABLE `u_roles` (
  `id` int NOT NULL AUTO_INCREMENT,
  `cid` varchar(20) DEFAULT NULL,
  `pid` varchar(20) DEFAULT NULL,
  `role_name` varchar(200) DEFAULT NULL,
  `role_description` varchar(200) DEFAULT NULL,
  `status` int DEFAULT NULL,
  `field1` varchar(100) DEFAULT NULL,
  `field2` int DEFAULT NULL,
  `note` varchar(255) DEFAULT NULL,
  `created_on` datetime DEFAULT NULL,
  `created_by` varchar(512) DEFAULT NULL,
  `updated_on` datetime DEFAULT NULL,
  `updated_by` varchar(512) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=2 DEFAULT CHARSET=utf8mb3;

/*Data for the table `u_roles` */

insert  into `u_roles`(`id`,`cid`,`pid`,`role_name`,`role_description`,`status`,`field1`,`field2`,`note`,`created_on`,`created_by`,`updated_on`,`updated_by`) values 
(1,'TCL','cpanel','super_admin','Super Admin',1,NULL,NULL,NULL,NULL,NULL,NULL,NULL);

/*Table structure for table `u_task_group` */

CREATE TABLE `u_task_group` (
  `id` int NOT NULL AUTO_INCREMENT,
  `cid` varchar(20) DEFAULT NULL,
  `pid` varchar(20) DEFAULT NULL,
  `group_name` varchar(200) DEFAULT NULL,
  `group_description` varchar(200) DEFAULT NULL,
  `status` int DEFAULT NULL,
  `field1` varchar(100) DEFAULT NULL,
  `field2` int DEFAULT NULL,
  `note` varchar(255) DEFAULT NULL,
  `created_on` datetime DEFAULT NULL,
  `created_by` varchar(512) DEFAULT NULL,
  `updated_on` datetime DEFAULT NULL,
  `updated_by` varchar(512) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=4 DEFAULT CHARSET=utf8mb3;

/*Data for the table `u_task_group` */

insert  into `u_task_group`(`id`,`cid`,`pid`,`group_name`,`group_description`,`status`,`field1`,`field2`,`note`,`created_on`,`created_by`,`updated_on`,`updated_by`) values 
(1,'TCL','cpanel','access_management','Access Management',1,NULL,NULL,NULL,NULL,NULL,NULL,NULL),
(2,'TCL','cpanel','user_management','User management',1,'',0,'','2025-07-15 20:07:53',NULL,'2025-07-15 20:11:50',NULL),
(3,'TCL','cpanel','task_management','task_management',1,'',0,'','2025-07-15 20:09:15',NULL,'2025-07-15 22:20:57',NULL);

/*Table structure for table `u_tasks` */

CREATE TABLE `u_tasks` (
  `id` int NOT NULL AUTO_INCREMENT,
  `cid` varchar(20) DEFAULT NULL,
  `pid` varchar(20) DEFAULT NULL,
  `task_name` varchar(200) DEFAULT NULL,
  `task_description` varchar(200) DEFAULT NULL,
  `group_id` varchar(20) DEFAULT NULL,
  `group_name` varchar(100) DEFAULT NULL,
  `status` int DEFAULT NULL,
  `field1` varchar(100) DEFAULT NULL,
  `field2` int DEFAULT NULL,
  `note` varchar(255) DEFAULT NULL,
  `created_on` datetime DEFAULT NULL,
  `created_by` varchar(512) DEFAULT NULL,
  `updated_on` datetime DEFAULT NULL,
  `updated_by` varchar(512) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=4 DEFAULT CHARSET=utf8mb3;

/*Data for the table `u_tasks` */

insert  into `u_tasks`(`id`,`cid`,`pid`,`task_name`,`task_description`,`group_id`,`group_name`,`status`,`field1`,`field2`,`note`,`created_on`,`created_by`,`updated_on`,`updated_by`) values 
(1,'TCL','cpanel','login','login system','1',NULL,1,NULL,NULL,NULL,NULL,NULL,NULL,NULL),
(2,'TCL','cpanel','business_units_create','business_units_create','1',NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL),
(3,'TCL','cpanel','role_management','role_management','1',NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL);

/*Table structure for table `users` */

CREATE TABLE `users` (
  `id` int NOT NULL AUTO_INCREMENT,
  `cid` varchar(20) DEFAULT NULL,
  `user_id` varchar(20) DEFAULT NULL,
  `first_name` varchar(100) DEFAULT NULL,
  `last_name` varchar(100) DEFAULT NULL,
  `full_name` varchar(200) DEFAULT NULL,
  `email` varchar(100) DEFAULT NULL,
  `mobile` varchar(20) DEFAULT NULL,
  `password` varchar(256) DEFAULT NULL,
  `gender` varchar(10) DEFAULT NULL,
  `location` varchar(100) DEFAULT NULL,
  `user_type` varchar(20) DEFAULT NULL,
  `image_path` varchar(200) DEFAULT NULL,
  `role_id` varchar(10) DEFAULT NULL,
  `user_role` varchar(100) DEFAULT NULL,
  `status` int DEFAULT NULL,
  `device_id` varchar(100) DEFAULT NULL,
  `sync_code` int DEFAULT NULL,
  `app_version` varchar(50) DEFAULT NULL,
  `otp_token` int DEFAULT NULL,
  `token_expire_time` datetime DEFAULT NULL,
  `otp_status` int DEFAULT NULL,
  `field1` varchar(100) DEFAULT NULL,
  `field2` int DEFAULT NULL,
  `note` varchar(255) DEFAULT NULL,
  `created_on` datetime DEFAULT NULL,
  `created_by` varchar(512) DEFAULT NULL,
  `updated_on` datetime DEFAULT NULL,
  `updated_by` varchar(512) DEFAULT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `user_id` (`user_id`),
  UNIQUE KEY `email` (`email`)
) ENGINE=InnoDB AUTO_INCREMENT=2 DEFAULT CHARSET=utf8mb3;

/*Data for the table `users` */

insert  into `users`(`id`,`cid`,`user_id`,`first_name`,`last_name`,`full_name`,`email`,`mobile`,`password`,`gender`,`location`,`user_type`,`image_path`,`role_id`,`user_role`,`status`,`device_id`,`sync_code`,`app_version`,`otp_token`,`token_expire_time`,`otp_status`,`field1`,`field2`,`note`,`created_on`,`created_by`,`updated_on`,`updated_by`) values 
(1,'TCL','1001','super','admin','super admin','admin@gmail.com','+8801710000001','8d969eef6ecad3c29a3a629280e686cf0c3f5d5a86aff3ca12020c923adc6c92','Male','Gulshan 2','admin',NULL,'1','super_admin',1,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL);

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;
