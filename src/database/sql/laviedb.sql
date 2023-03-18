-- MySQL dump 10.13  Distrib 8.0.31, for Win64 (x86_64)
--
-- Host: localhost    Database: laviedb
-- ------------------------------------------------------
-- Server version	8.0.31

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!50503 SET NAMES utf8 */;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;

--
-- Table structure for table `atendimentos`
--

DROP TABLE IF EXISTS `atendimentos`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `atendimentos` (
  `id` int NOT NULL AUTO_INCREMENT,
  `paciente_id` int NOT NULL,
  `psicologo_id` int NOT NULL,
  `data_atendimento` date NOT NULL,
  `observacao` text,
  PRIMARY KEY (`id`),
  KEY `fk_atendimento_pacientes_idx` (`paciente_id`),
  KEY `fk_atendimento_psicologos1_idx` (`psicologo_id`),
  CONSTRAINT `paciente_id` FOREIGN KEY (`paciente_id`) REFERENCES `pacientes` (`id`),
  CONSTRAINT `psicologo_id` FOREIGN KEY (`psicologo_id`) REFERENCES `psicologos` (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=12 DEFAULT CHARSET=utf8mb3;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `atendimentos`
--

LOCK TABLES `atendimentos` WRITE;
/*!40000 ALTER TABLE `atendimentos` DISABLE KEYS */;
INSERT INTO `atendimentos` VALUES (9,8,6,'2022-06-20','teste3'),(10,8,7,'2022-06-20','teste3'),(11,8,7,'2022-06-20','teste6');
/*!40000 ALTER TABLE `atendimentos` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `pacientes`
--

DROP TABLE IF EXISTS `pacientes`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `pacientes` (
  `id` int NOT NULL AUTO_INCREMENT,
  `nome` varchar(50) NOT NULL,
  `email` varchar(70) NOT NULL,
  `idade` date DEFAULT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `email_UNIQUE` (`email`)
) ENGINE=InnoDB AUTO_INCREMENT=13 DEFAULT CHARSET=utf8mb3;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `pacientes`
--

LOCK TABLES `pacientes` WRITE;
/*!40000 ALTER TABLE `pacientes` DISABLE KEYS */;
INSERT INTO `pacientes` VALUES (8,'teste46','teste3.@email.com','2047-01-01'),(9,'teste3','teste6@email.com','2022-02-20'),(10,'teste7','teste1@email.com','2022-02-20'),(11,'teste10','teste11@email.com','2022-02-20');
/*!40000 ALTER TABLE `pacientes` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `psicologos`
--

DROP TABLE IF EXISTS `psicologos`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `psicologos` (
  `id` int NOT NULL AUTO_INCREMENT,
  `nome` varchar(50) NOT NULL,
  `email` varchar(70) NOT NULL,
  `senha` varchar(100) DEFAULT NULL,
  `apresentacao` varchar(200) NOT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `email_UNIQUE` (`email`)
) ENGINE=InnoDB AUTO_INCREMENT=9 DEFAULT CHARSET=utf8mb3;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `psicologos`
--

LOCK TABLES `psicologos` WRITE;
/*!40000 ALTER TABLE `psicologos` DISABLE KEYS */;
INSERT INTO `psicologos` VALUES (1,'Miquelangelo5','tarta@ninjaas.com','$2a$10$jWb1RWb40U7RMKPX/2StVeoEuVt7Nir19dPXv1qxMfcuCoYFVwpIS','cade o mestre splinte'),(2,'Donatelo4','tartas@ninjaass.com','$2a$10$P1WQfTDlity191ZI7aMcZ.s35UZb/CMdmsDXZHHLMXeQGm75Ochzi','cade o mestre splinters'),(6,'mikeinhas','mikeinhas@email.com','$2a$10$tMJVZVWquGsFf7ks.PHGSOxfz0EuDhsS/MZavrofqvWmMI7uSdRW.','psicologo mil grau18'),(7,'mikeinhas2','mikeinhas2@email.com','$2a$10$UpGoxTLW.VWEYtsi62GCZOxq8tU5oUvPjV6bBmqbsgtoOMZgd4UXy','psicologo mil grau18'),(8,'mikeinhas3','mikeinhas3@email.com','$2a$10$gjBUDMUf/As0FvVFo/bvjetf0DLh1MLGPFLM/p/2xFxlJu2GrWF1a','psicologo mil grau18');
/*!40000 ALTER TABLE `psicologos` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2023-03-17 23:34:13
