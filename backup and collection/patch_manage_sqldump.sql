-- MySQL dump 10.13  Distrib 5.7.27, for Linux (x86_64)
--
-- Host: localhost    Database: patch_manage_db
-- ------------------------------------------------------
-- Server version	5.7.27-0ubuntu0.18.04.1

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8 */;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;

--
-- Table structure for table `patch`
--

DROP TABLE IF EXISTS `patch`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `patch` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `patch_id` varchar(100) NOT NULL,
  `date` datetime DEFAULT NULL,
  `developer_name` varchar(45) DEFAULT NULL,
  `product_id` int(11) NOT NULL,
  `git_tag` varchar(500) NOT NULL,
  `componnents` varchar(500) NOT NULL,
  `project_name` varchar(45) NOT NULL,
  `bundle_name` varchar(45) DEFAULT NULL,
  `support_jira_id` varchar(1000) DEFAULT NULL,
  `merged_to_support` varchar(3) DEFAULT NULL,
  `merged_to_master` varchar(3) DEFAULT NULL,
  `public_jira_id` varchar(280) DEFAULT NULL,
  `priority` varchar(45) DEFAULT NULL,
  `description` varchar(1000) DEFAULT NULL,
  `email` varchar(45) DEFAULT NULL,
  `patchstatus` varchar(45) DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `fk_patch_1_idx` (`product_id`),
  CONSTRAINT `fk_patch_1` FOREIGN KEY (`product_id`) REFERENCES `product` (`id`) ON DELETE NO ACTION ON UPDATE NO ACTION
) ENGINE=InnoDB AUTO_INCREMENT=25 DEFAULT CHARSET=latin1;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `patch`
--

LOCK TABLES `patch` WRITE;
/*!40000 ALTER TABLE `patch` DISABLE KEYS */;
INSERT INTO `patch` VALUES (1,'patch_dep00008','2019-01-01 00:00:00','Pradeep',24,'v2.0.4-00025','smsapigw_capp_2.0.0.car','Component-dep','WSO2Telco-component-dep-2.4.2-00028','INTGW-311','yes','no','INTGW-300','high','this is test 001','pradeep.karunathilaka@apigate.com','approved'),(2,'patch_dep00009','2019-01-05 00:00:00','sheshan',3,'v2.0.4-00026','validator-handler-2.1.1.jar','DEP-Analytics-hub','WSO2Telco-DEP-HUB-Analytics-v2.0.0-00127.zip','DEPORGHUB-125','no','no','EXTGW-248','medium','this is test 002','sheshan@apigate.com','approved'),(3,'patch_dep00010','2019-01-06 00:00:00','ishara',8,'v2.0.4-00030','com.wso2telco.dep.common.capp_2.1.3.car','EGW-mediation','WSO2Telco-DEP-HUB-Analytics-v2.0.0-00127.zip','DEPORGHUB-126','yes','yes','EXTGW-245','low','this is test 003','ishara@apigate.com','approved'),(4,'patch_dep00022','2019-01-06 00:00:00','shan',8,'v2.0.4-00030','com.wso2telco.dep.common.capp_2.1.3.car','EGW-mediation','WSO2Telco-DEP-HUB-Analytics-v2.0.0-00127.zip','DEPORGHUB-126','yes','yes','EXTGW-245','low','this is test 003','ishara@apigate.com','approved'),(5,'patch_dep00028','2019-01-06 00:00:00','shani',8,'v2.0.4-00030','com.wso2telco.dep.common.capp_2.1.3.car','EGW-mediation','WSO2Telco-DEP-HUB-Analytics-v2.0.0-00127.zip','DEPORGHUB-126','yes','yes','EXTGW-245','low','this is test 003','ishara@apigate.comn','pending'),(6,'patch_dep00091','2019-01-01 00:00:00','Pradeepkk',2,'v2.0.4-00025','smsapigw_capp_2.0.0.car','Component-dep','WSO2Telco-component-dep-2.4.2-00028','INTGW-311','yes','no','INTGW-300','high','this is test 001','pradeeponlineto@gmail.com','approved'),(7,'patch_dep00092','2019-01-01 00:00:00','Pradeepkk',2,'v2.0.4-00025','smsapigw_capp_2.0.0.car','Component-dep','WSO2Telco-component-dep-2.4.2-00028','INTGW-311','yes','no','INTGW-300','high','this is test 001','pradeeponlineto@gmail.com','approved'),(22,'patch_dep00094','2019-10-11 06:30:00','Pradeepkk',1,'v2.0.4-00025','smsapigw_capp_2.0.0.car','Analytics-hub_2.0.0','WSO2Telco-component-dep-2.4.2-00028','INTGW-311','yes','no','INTGW-300','high','this is test 001','pradeeponlineto@gmail.com','wwww'),(23,'patch_axpegw0001','2019-10-14 06:30:00','gg',16,'gg','gg','extgw2.0.0','g','g','','no','g','Medium','g','sheshan@apigate.com','rejected'),(24,'patch_axphub0001','2019-10-14 06:30:00','ffff',19,'fffff','ffffffffffff','hub-1.6.1','ffff','fffff','','','fffff','Medium','','sheshan@apigate.com','ssssss');
/*!40000 ALTER TABLE `patch` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `product`
--

DROP TABLE IF EXISTS `product`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `product` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `name` varchar(45) NOT NULL,
  `git_url` varchar(255) NOT NULL,
  `patch_name` varchar(255) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=50 DEFAULT CHARSET=latin1;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `product`
--

LOCK TABLES `product` WRITE;
/*!40000 ALTER TABLE `product` DISABLE KEYS */;
INSERT INTO `product` VALUES (1,'Analytics-hub_2.0.0','https://github.com/orgs/WSO2Telco/dashboard','patch_antl'),(2,'wso2telco_esb_2.0.0-release','https://github.com/orgs/WSO2Telco/dashboard','patch_med'),(3,'Wso2telcoAnalytics-ingw-2.1.0','https://github.com/orgs/WSO2Telco/dashboard','patch_antl'),(4,'ADS_HUB','https://github.com/orgs/WSO2Telco/dashboard','patch_axphub'),(5,'analytics-extgw-2.0.0','https://github.com/orgs/WSO2Telco/dashboard','patch_antl'),(6,'analytics-hub 2.0.0','https://github.com/orgs/WSO2Telco/dashboard','patch_antl'),(7,'analytics-hub-orange','https://github.com/orgs/WSO2Telco/dashboard','patch_antl'),(8,'analytics-hub-orange-2.0.0','https://github.com/orgs/WSO2Telco/dashboard','patch_antl'),(9,'c','https://github.com/orgs/WSO2Telco/dashboard','patch_c'),(10,'carbon-core','https://github.com/orgs/WSO2Telco/dashboard','patch_carbn'),(11,'component-dep-2.1.3','https://github.com/orgs/WSO2Telco/dashboard','patch_axpdep'),(12,'component-dep-2.4.2','https://github.com/orgs/WSO2Telco/dashboard','patch_axpdep'),(13,'DEPAM-3.1.0','https://github.com/orgs/WSO2Telco/dashboard','patch_axpdep'),(14,'ELK_Analytics','https://github.com/orgs/WSO2Telco/dashboard','patch_antl'),(15,'ESB-5.0','https://github.com/orgs/WSO2Telco/dashboard','patch_med'),(16,'extgw2.0.0','https://github.com/orgs/WSO2Telco/dashboard','patch_axpegw'),(17,'HUB_2.1.x','https://github.com/orgs/WSO2Telco/dashboard','patch_axphub'),(18,'HUB_3.x.x','https://github.com/orgs/WSO2Telco/dashboard','patch_axphub'),(19,'hub-1.6.1','https://github.com/orgs/WSO2Telco/dashboard','patch_axphub'),(20,'IntGw3.0','https://github.com/orgs/WSO2Telco/dashboard','patch_axpigw'),(21,'mig-2.1.0','https://github.com/orgs/WSO2Telco/dashboard','patch_mig'),(22,'mig-2.2.0','https://github.com/orgs/WSO2Telco/dashboard','patch_mig'),(23,'mig-2.3.0','https://github.com/orgs/WSO2Telco/dashboard','patch_mig'),(24,'Wso2 ESB-5.0.0','https://github.com/orgs/WSO2Telco/dashboard','patch_med'),(25,'wso2am','https://github.com/orgs/WSO2Telco/dashboard','patch_axpdep'),(26,'wso2am 2.5.0','https://github.com/orgs/WSO2Telco/dashboard','patch_axpdep'),(27,'wso2esb','https://github.com/orgs/WSO2Telco/dashboard','patch_med'),(28,'wso2esb_2.0.0','https://github.com/orgs/WSO2Telco/dashboard','patch_med'),(29,'wso2esb-5.0.0','https://github.com/orgs/WSO2Telco/dashboard','patch_med'),(30,'wso2esb-5.0.0,wso2ei-6.1.1','https://github.com/orgs/WSO2Telco/dashboard','patch_med'),(31,'wso2esb-5.0.0/smart-extgw','https://github.com/orgs/WSO2Telco/dashboard','patch_med'),(32,'WSO2TELCO APIM 2.0.0','https://github.com/orgs/WSO2Telco/dashboard','patch_axpdep'),(33,'wso2telco_esb 2.0.0','https://github.com/orgs/WSO2Telco/dashboard','patch_med'),(34,'wso2telco_esb 2.0.0-release','https://github.com/orgs/WSO2Telco/dashboard','patch_med'),(35,'wso2telco_esb_egw_2.0.0-release','https://github.com/orgs/WSO2Telco/dashboard','patch_med'),(36,'wso2telco_esb_hub_2.1.3','https://github.com/orgs/WSO2Telco/dashboard','patch_med'),(37,'wso2telco_esb_hub_2.1.4','https://github.com/orgs/WSO2Telco/dashboard','patch_med'),(38,'wso2telco_esb_hub_2.1.4/orange','https://github.com/orgs/WSO2Telco/dashboard','patch_med'),(39,'WSO2TELCO_VODAFONE_AUTH_ADAPTER','https://github.com/orgs/WSO2Telco/dashboard',NULL),(40,'WSO2TELCO_VODAFONE_REFUND_FLOW','https://github.com/orgs/WSO2Telco/dashboard',NULL),(41,'WSO2TELCO_VODAFONE_TRANSFROMATION_ADAPTER','https://github.com/orgs/WSO2Telco/dashboard',NULL),(42,'wso2telcohub','https://github.com/orgs/WSO2Telco/dashboard','patch_axphub'),(43,'wso2telcohub-2.1.0','https://github.com/orgs/WSO2Telco/dashboard','patch_axphub'),(44,'wso2telcohub-3.0.2','https://github.com/orgs/WSO2Telco/dashboard','patch_axphub'),(45,'wso2telcohub-3.0.2, wso2telcoids-2.2.0','https://github.com/orgs/WSO2Telco/dashboard','patch_axphub'),(46,'wso2telcohub-3.1.0','https://github.com/orgs/WSO2Telco/dashboard','patch_axphub'),(47,'wso2telcohub-3.1.0/Orange','https://github.com/orgs/WSO2Telco/dashboard','patch_axphub'),(48,'wso2telcoids-2.2.0','https://github.com/orgs/WSO2Telco/dashboard','patch_mig'),(49,'wso2telcoids-2.3.0','https://github.com/orgs/WSO2Telco/dashboard','patch_mig');
/*!40000 ALTER TABLE `product` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `user`
--

DROP TABLE IF EXISTS `user`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `user` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `firstname` varchar(45) DEFAULT NULL,
  `lastname` varchar(45) DEFAULT NULL,
  `password` varchar(225) DEFAULT NULL,
  `username` varchar(45) DEFAULT NULL,
  `usertype` varchar(45) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=25 DEFAULT CHARSET=latin1;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `user`
--

LOCK TABLES `user` WRITE;
/*!40000 ALTER TABLE `user` DISABLE KEYS */;
INSERT INTO `user` VALUES (1,'Alex','Knr','$2a$04$4vwa/ugGbBVDvbWaKUVZBuJbjyQyj6tqntjSmG8q.hi97.xSdhj/2','alex@apigate.com','admin'),(5,'sheshan','s','$2a$10$dbkD1UydwpA6EQOZ71/1F.m0UqT4DVQwA6eHboMOmInP7XuENASeu','sheshan@apigate.com','admin'),(6,'ishara','dy','$2a$10$xiBE.TCxypfxZEi/vqs9/e3A75kszq84XIncnGxTg5Tkj4vC9KZlC','ishara.dayarathna@apigate.com','dev'),(7,'pradeep','karunathialaka','$2a$10$5xjzx0iN7LFKDfYPOzuSzuNgM.ahCJQhvqFOljtf/PgyDK1wk2prC','pradeep.karunathilaka@apigate.com','admin'),(8,'shan','J','$2a$10$HvuqwV3/EsjREyM5itSqpeEmbFLRKy2W6oHbxHrRa/HEW/P1YvMpe','shan.jayathilaka@apigate.com','dev'),(9,'lahiru','S','$2a$10$N3c0XZjJu505pn11tiNwvetE.kpzBc885qoKETp6SAWpyXAQfS7mu','lahiru.senadheera@apigate.com','admin'),(10,'dilan','N','$2a$10$TToEZaHkhknP4vMM7JdpW.lH/1CM9ugSr3du9CtEGOiKHwFeQjSkW','dialan@apigate.com','tester'),(11,NULL,NULL,'$2a$10$RFWy4GkC20Yoe2bISrLh/uU1YZfiQzMboWSxc5kr5s0G0vaKbLTTq','sampleuser@apigate.com','dev'),(12,'sample2','lastname2','$2a$10$2Bx..bRreCr7sKUqI./C7ODVgCWew6nOiB4ksI.6WWBfkLKLI/ooO','sample2@apigate.com','tester'),(13,'dilan','N','$2a$10$pVbaqMpxBT6cxdS/.d9qnOZGTeT11/YdX8QgchQIS2m008un1sOri','dialan@apigate.com2','tester'),(14,'k','w','$2a$10$Pk/7XO4Nbp2RkBUUUv.UWuFjnWT3LBogE7nlN5d4glCTkEPBZiVnS','pk@gmail.com','dev'),(15,'yukyuk','ykyuk','$2a$10$LC9WM5hki2T6lp21RvXxy.P94Gg9J6oTclq42CkaPUW0uPSOGC5oe','kuykuy','dev'),(16,'s','w','$2a$10$UpeWrPPNksvWgOTTUai11e.zkc.smNTsJXZ2xh0SDq/2wu.5WG.GK','ss@apigate.com','ff'),(17,'pradeep','pradeepk','$2a$10$qr9lzj3vuQpsm3AqIV4couFUQ1ZiWJ78sEU6TzeSp80BwC.piDFIa','abc@apigate.com','dd'),(18,'pradeep','pradeepk','$2a$10$tyMDkFEjULC6qibYrgqAgeHSnugAYWkWN1xkLr9nQbQHfcIfJPLGG','abc@apigate.com','dd'),(19,'pradeepk','pradeepkkk','$2a$10$vSbnQECZE8lrgGrdaeKf6upFlZ1AFTgB7fiQ/188Npks2MYtsJM7i','abc1@apigate.com','dd'),(20,'pradeepk','pradeepkkk','$2a$10$Th0DEUesa2dA1f8OO68xNOL2toRw8fv7hskF4dM8ED0ejTIedGvhm','abc1@apigate.com','dd'),(21,'pp','pp','$2a$10$cuQdigkdgJoG.sJt7uKOn.YIRVkOph5n9sG/Vw3z.aPTat6dO4AkC','rr@apigate.com','dev'),(22,'pp','pp','$2a$10$svH6Y4bwPjEnkcA/ZgPdIuYMqNOsD2yDnRfRsvHQrOQvygry1jIKu','rr@apigate.com','dev'),(23,'kk','kk','$2a$10$wWqQ0XohvSR7e.GS7Hd2pOQgCVZp6/mjrgiPK7aFJvqcqeVoJLzPS','hi@apigate.com','admin'),(24,'kk','kk','$2a$10$EMvZg7ZRlDiijTfxZ5SERuVRsj.cHZ8vOEUaVm9cUagZnZjJUa21u','hi@apigate.com','admin');
/*!40000 ALTER TABLE `user` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2019-10-23 10:55:13
