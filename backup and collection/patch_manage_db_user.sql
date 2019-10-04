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
) ENGINE=InnoDB AUTO_INCREMENT=23 DEFAULT CHARSET=latin1;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `user`
--

LOCK TABLES `user` WRITE;
/*!40000 ALTER TABLE `user` DISABLE KEYS */;
INSERT INTO `user` VALUES (1,'Alex','Knr','$2a$04$4vwa/ugGbBVDvbWaKUVZBuJbjyQyj6tqntjSmG8q.hi97.xSdhj/2','alex@apigate.com','admin'),(5,'sheshan','s','$2a$10$dbkD1UydwpA6EQOZ71/1F.m0UqT4DVQwA6eHboMOmInP7XuENASeu','sheshan@apigate.com','tester'),(6,'ishara','dy','$2a$10$xiBE.TCxypfxZEi/vqs9/e3A75kszq84XIncnGxTg5Tkj4vC9KZlC','ishara.dayarathna@apigate.com','dev'),(7,'pradeep','karunathialaka','$2a$10$5xjzx0iN7LFKDfYPOzuSzuNgM.ahCJQhvqFOljtf/PgyDK1wk2prC','pradeep.karunathilaka@apigate.com','admin'),(8,'shan','J','$2a$10$HvuqwV3/EsjREyM5itSqpeEmbFLRKy2W6oHbxHrRa/HEW/P1YvMpe','shan.jayathilaka@apigate.com','dev'),(9,'lahiru','S','$2a$10$N3c0XZjJu505pn11tiNwvetE.kpzBc885qoKETp6SAWpyXAQfS7mu','lahiru.senadheera@apigate.com','admin'),(10,'dilan','N','$2a$10$TToEZaHkhknP4vMM7JdpW.lH/1CM9ugSr3du9CtEGOiKHwFeQjSkW','dialan@apigate.com','tester'),(11,NULL,NULL,'$2a$10$RFWy4GkC20Yoe2bISrLh/uU1YZfiQzMboWSxc5kr5s0G0vaKbLTTq','sampleuser@apigate.com','dev'),(12,'sample2','lastname2','$2a$10$2Bx..bRreCr7sKUqI./C7ODVgCWew6nOiB4ksI.6WWBfkLKLI/ooO','sample2@apigate.com','tester'),(13,'dilan','N','$2a$10$pVbaqMpxBT6cxdS/.d9qnOZGTeT11/YdX8QgchQIS2m008un1sOri','dialan@apigate.com2','tester'),(14,'k','w','$2a$10$Pk/7XO4Nbp2RkBUUUv.UWuFjnWT3LBogE7nlN5d4glCTkEPBZiVnS','pk@gmail.com','dev'),(17,'zxc','zxc','$2a$10$gfU2ngN8hUlaOhGjFoJxVeJU3lRgl5KS.qpwX5Crsd6QMphSFqjym','xzc','dev'),(18,'asd','asd','$2a$10$pANJs6xo/vyKundUK/wQguiFkSjSnsra/cSZAbhCyn9Jw7phwsaUC','asd','tester'),(19,'','','$2a$10$cDbdpX7JIU2SNKtIOp58xuH6ceMoldy8SkKcWnHxeHUub.whzXVle','dd',''),(20,'','','$2a$10$F7L6DyHq6wCmYfBiE.0HG.4Dl55OaSFn5XISmi/Tw6f//MpzawrzG','dd',''),(21,'','','$2a$10$T9GWH/TNge2aJMxXsuWMHudngG7E1sl033ZQDiRsDGWkMXC9k0hfS','s',''),(22,'asd','asd','$2a$10$He1.t25Ze1AtXO8OrwbHIO.FHpoUR8Vj/emKUp1ke0atdxdjiSsA.','asd@apigate.com','tester');
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

-- Dump completed on 2019-10-04 12:03:25
