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
  PRIMARY KEY (`id`),
  KEY `fk_patch_1_idx` (`product_id`),
  CONSTRAINT `fk_patch_1` FOREIGN KEY (`product_id`) REFERENCES `product` (`id`) ON DELETE NO ACTION ON UPDATE NO ACTION
) ENGINE=InnoDB AUTO_INCREMENT=8 DEFAULT CHARSET=latin1;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `patch`
--

LOCK TABLES `patch` WRITE;
/*!40000 ALTER TABLE `patch` DISABLE KEYS */;
INSERT INTO `patch` VALUES (1,'patch_dep00008','2019-01-01 00:00:00','Pradeep',24,'v2.0.4-00025','smsapigw_capp_2.0.0.car','Component-dep','WSO2Telco-component-dep-2.4.2-00028','INTGW-311','yes','no','INTGW-300','high','this is test 001','pradeep.karunathilaka@apigate.com'),(2,'patch_dep00009','2019-01-05 00:00:00','sheshan',3,'v2.0.4-00026','validator-handler-2.1.1.jar','DEP-Analytics-hub','WSO2Telco-DEP-HUB-Analytics-v2.0.0-00127.zip','DEPORGHUB-125','no','no','EXTGW-248','medium','this is test 002','sheshan@apigate.com'),(3,'patch_dep00010','2019-01-06 00:00:00','ishara',8,'v2.0.4-00030','com.wso2telco.dep.common.capp_2.1.3.car','EGW-mediation','WSO2Telco-DEP-HUB-Analytics-v2.0.0-00127.zip','DEPORGHUB-126','yes','yes','EXTGW-245','low','this is test 003','ishara@apigate.com'),(4,'patch_dep00022','2019-01-06 00:00:00','shan',8,'v2.0.4-00030','com.wso2telco.dep.common.capp_2.1.3.car','EGW-mediation','WSO2Telco-DEP-HUB-Analytics-v2.0.0-00127.zip','DEPORGHUB-126','yes','yes','EXTGW-245','low','this is test 003','ishara@apigate.com'),(5,'patch_dep00028','2019-01-06 00:00:00','shani',8,'v2.0.4-00030','com.wso2telco.dep.common.capp_2.1.3.car','EGW-mediation','WSO2Telco-DEP-HUB-Analytics-v2.0.0-00127.zip','DEPORGHUB-126','yes','yes','EXTGW-245','low','this is test 003','ishara@apigate.comn'),(6,'patch_dep00091','2019-01-01 00:00:00','Pradeepkk',2,'v2.0.4-00025','smsapigw_capp_2.0.0.car','Component-dep','WSO2Telco-component-dep-2.4.2-00028','INTGW-311','yes','no','INTGW-300','high','this is test 001','pradeeponlineto@gmail.com'),(7,'patch_dep00091','2019-01-01 00:00:00','Pradeepkk',2,'v2.0.4-00025','smsapigw_capp_2.0.0.car','Component-dep','WSO2Telco-component-dep-2.4.2-00028','INTGW-311','yes','no','INTGW-300','high','this is test 001','pradeeponlineto@gmail.com');
/*!40000 ALTER TABLE `patch` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2019-09-19 16:32:36
