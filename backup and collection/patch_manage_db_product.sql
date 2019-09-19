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
-- Table structure for table `product`
--

DROP TABLE IF EXISTS `product`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `product` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `name` varchar(45) NOT NULL,
  `git_url` varchar(255) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=50 DEFAULT CHARSET=latin1;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `product`
--

LOCK TABLES `product` WRITE;
/*!40000 ALTER TABLE `product` DISABLE KEYS */;
INSERT INTO `product` VALUES (1,'Analytics-hub 2.0.0','https://github.com/orgs/WSO2Telco/dashboard'),(2,'wso2telco_esb 2.0.0-release','https://github.com/orgs/WSO2Telco/dashboard'),(3,'Wso2telcoAnalytics-ingw-2.1.0','https://github.com/orgs/WSO2Telco/dashboard'),(4,'ADS HUB','https://github.com/orgs/WSO2Telco/dashboard'),(5,'analytics-extgw-2.0.0','https://github.com/orgs/WSO2Telco/dashboard'),(6,'analytics-hub 2.0.0','https://github.com/orgs/WSO2Telco/dashboard'),(7,'analytics-hub-orange','https://github.com/orgs/WSO2Telco/dashboard'),(8,'analytics-hub-orange 2.0.0','https://github.com/orgs/WSO2Telco/dashboard'),(9,'c','https://github.com/orgs/WSO2Telco/dashboard'),(10,'carbon-core','https://github.com/orgs/WSO2Telco/dashboard'),(11,'component-dep-2.1.3','https://github.com/orgs/WSO2Telco/dashboard'),(12,'component-dep-2.4.2','https://github.com/orgs/WSO2Telco/dashboard'),(13,'DEPAM-3.1.0','https://github.com/orgs/WSO2Telco/dashboard'),(14,'ELK Analytics','https://github.com/orgs/WSO2Telco/dashboard'),(15,'ESB-5.0','https://github.com/orgs/WSO2Telco/dashboard'),(16,'extgw2.0.0','https://github.com/orgs/WSO2Telco/dashboard'),(17,'HUB 2.1.x','https://github.com/orgs/WSO2Telco/dashboard'),(18,'HUB 3.x.x','https://github.com/orgs/WSO2Telco/dashboard'),(19,'hub-1.6.1','https://github.com/orgs/WSO2Telco/dashboard'),(20,'IntGw3.0','https://github.com/orgs/WSO2Telco/dashboard'),(21,'mig-2.1.0','https://github.com/orgs/WSO2Telco/dashboard'),(22,'mig-2.2.0','https://github.com/orgs/WSO2Telco/dashboard'),(23,'mig-2.3.0','https://github.com/orgs/WSO2Telco/dashboard'),(24,'Wso2 ESB-5.0.0','https://github.com/orgs/WSO2Telco/dashboard'),(25,'wso2am','https://github.com/orgs/WSO2Telco/dashboard'),(26,'wso2am 2.5.0','https://github.com/orgs/WSO2Telco/dashboard'),(27,'wso2esb','https://github.com/orgs/WSO2Telco/dashboard'),(28,'wso2esb_2.0.0','https://github.com/orgs/WSO2Telco/dashboard'),(29,'wso2esb-5.0.0','https://github.com/orgs/WSO2Telco/dashboard'),(30,'wso2esb-5.0.0,wso2ei-6.1.1','https://github.com/orgs/WSO2Telco/dashboard'),(31,'wso2esb-5.0.0/smart-extgw','https://github.com/orgs/WSO2Telco/dashboard'),(32,'WSO2TELCO APIM 2.0.0','https://github.com/orgs/WSO2Telco/dashboard'),(33,'wso2telco esb 2.0.0','https://github.com/orgs/WSO2Telco/dashboard'),(34,'wso2telco_esb 2.0.0-release','https://github.com/orgs/WSO2Telco/dashboard'),(35,'wso2telco_esb_egw_2.0.0-release','https://github.com/orgs/WSO2Telco/dashboard'),(36,'wso2telco_esb_hub_2.1.3','https://github.com/orgs/WSO2Telco/dashboard'),(37,'wso2telco_esb_hub_2.1.4','https://github.com/orgs/WSO2Telco/dashboard'),(38,'wso2telco_esb_hub_2.1.4/orange','https://github.com/orgs/WSO2Telco/dashboard'),(39,'WSO2TELCO_VODAFONE_AUTH_ADAPTER','https://github.com/orgs/WSO2Telco/dashboard'),(40,'WSO2TELCO_VODAFONE_REFUND_FLOW','https://github.com/orgs/WSO2Telco/dashboard'),(41,'WSO2TELCO_VODAFONE_TRANSFROMATION_ADAPTER','https://github.com/orgs/WSO2Telco/dashboard'),(42,'wso2telcohub','https://github.com/orgs/WSO2Telco/dashboard'),(43,'wso2telcohub-2.1.0','https://github.com/orgs/WSO2Telco/dashboard'),(44,'wso2telcohub-3.0.2','https://github.com/orgs/WSO2Telco/dashboard'),(45,'wso2telcohub-3.0.2, wso2telcoids-2.2.0','https://github.com/orgs/WSO2Telco/dashboard'),(46,'wso2telcohub-3.1.0','https://github.com/orgs/WSO2Telco/dashboard'),(47,'wso2telcohub-3.1.0/Orange','https://github.com/orgs/WSO2Telco/dashboard'),(48,'wso2telcoids 2.2.0','https://github.com/orgs/WSO2Telco/dashboard'),(49,'wso2telcoids-2.3.0','https://github.com/orgs/WSO2Telco/dashboard');
/*!40000 ALTER TABLE `product` ENABLE KEYS */;
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
