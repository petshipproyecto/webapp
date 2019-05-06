CREATE DATABASE  IF NOT EXISTS `petship` /*!40100 DEFAULT CHARACTER SET utf8 COLLATE utf8_spanish2_ci */ /*!80016 DEFAULT ENCRYPTION='N' */;
USE `petship`;
-- MySQL dump 10.13  Distrib 8.0.16, for Win64 (x86_64)
--
-- Host: localhost    Database: petship
-- ------------------------------------------------------
-- Server version	8.0.16

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
 SET NAMES utf8 ;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;

--
-- Table structure for table `match`
--

DROP TABLE IF EXISTS `match`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
 SET character_set_client = utf8mb4 ;
CREATE TABLE `match` (
  `idmatch` int(11) NOT NULL AUTO_INCREMENT,
  `idPerfil1` int(11) NOT NULL,
  `idPerfil2` int(11) DEFAULT NULL,
  `estado` varchar(10) COLLATE utf8_spanish2_ci NOT NULL,
  `timeStamp1` timestamp NOT NULL,
  `timeStamp2` timestamp NULL DEFAULT NULL,
  PRIMARY KEY (`idmatch`),
  KEY `FK_perfil_match_idx` (`idPerfil1`),
  KEY `FK_match_perfil_2_idx` (`idPerfil2`),
  CONSTRAINT `FK_match_perfil_1` FOREIGN KEY (`idPerfil1`) REFERENCES `perfil` (`idperfil`),
  CONSTRAINT `FK_match_perfil_2` FOREIGN KEY (`idPerfil2`) REFERENCES `perfil` (`idperfil`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_spanish2_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `match`
--

LOCK TABLES `match` WRITE;
/*!40000 ALTER TABLE `match` DISABLE KEYS */;
/*!40000 ALTER TABLE `match` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `perfil`
--

DROP TABLE IF EXISTS `perfil`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
 SET character_set_client = utf8mb4 ;
CREATE TABLE `perfil` (
  `idperfil` int(11) NOT NULL AUTO_INCREMENT,
  `idUsuario` int(11) NOT NULL,
  `idTipoMascota` int(11) NOT NULL,
  `idRaza` int(11) NOT NULL,
  `nombre` varchar(45) COLLATE utf8_spanish2_ci NOT NULL,
  `sexo` varchar(10) COLLATE utf8_spanish2_ci NOT NULL,
  `edad` int(2) DEFAULT NULL,
  `interes` varchar(2) COLLATE utf8_spanish2_ci DEFAULT NULL,
  PRIMARY KEY (`idperfil`),
  KEY `FK_perfil_usuario_idx` (`idUsuario`),
  KEY `FK_perfil_tipomascota_idx` (`idTipoMascota`),
  KEY `FK_perfil_raza_idx` (`idRaza`),
  CONSTRAINT `FK_perfil_raza` FOREIGN KEY (`idRaza`) REFERENCES `raza` (`idRaza`),
  CONSTRAINT `FK_perfil_tipomascota` FOREIGN KEY (`idTipoMascota`) REFERENCES `tipomascota` (`idTipoMascota`),
  CONSTRAINT `FK_perfil_usuario` FOREIGN KEY (`idUsuario`) REFERENCES `usuario` (`idusuario`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_spanish2_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `perfil`
--

LOCK TABLES `perfil` WRITE;
/*!40000 ALTER TABLE `perfil` DISABLE KEYS */;
/*!40000 ALTER TABLE `perfil` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `puntuacion`
--

DROP TABLE IF EXISTS `puntuacion`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
 SET character_set_client = utf8mb4 ;
CREATE TABLE `puntuacion` (
  `idPuntuacion` int(11) NOT NULL,
  `idUsuario` int(11) NOT NULL,
  `idPerfil` int(11) NOT NULL,
  `descripcion` varchar(200) COLLATE utf8_spanish2_ci DEFAULT NULL,
  `calificacion` int(2) NOT NULL,
  PRIMARY KEY (`idPuntuacion`),
  KEY `FK_puntuacion_usuario_idx` (`idUsuario`),
  KEY `FK_puntuacion_perfil_idx` (`idPerfil`),
  CONSTRAINT `FK_puntuacion_perfil` FOREIGN KEY (`idPerfil`) REFERENCES `perfil` (`idperfil`),
  CONSTRAINT `FK_puntuacion_usuario` FOREIGN KEY (`idUsuario`) REFERENCES `usuario` (`idusuario`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_spanish2_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `puntuacion`
--

LOCK TABLES `puntuacion` WRITE;
/*!40000 ALTER TABLE `puntuacion` DISABLE KEYS */;
/*!40000 ALTER TABLE `puntuacion` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `raza`
--

DROP TABLE IF EXISTS `raza`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
 SET character_set_client = utf8mb4 ;
CREATE TABLE `raza` (
  `idRaza` int(11) NOT NULL AUTO_INCREMENT,
  `descripcionRaza` varchar(45) COLLATE utf8_spanish2_ci NOT NULL,
  PRIMARY KEY (`idRaza`),
  UNIQUE KEY `descripcionRaza_UNIQUE` (`descripcionRaza`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_spanish2_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `raza`
--

LOCK TABLES `raza` WRITE;
/*!40000 ALTER TABLE `raza` DISABLE KEYS */;
/*!40000 ALTER TABLE `raza` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `tipomascota`
--

DROP TABLE IF EXISTS `tipomascota`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
 SET character_set_client = utf8mb4 ;
CREATE TABLE `tipomascota` (
  `idTipoMascota` int(11) NOT NULL AUTO_INCREMENT,
  `descripcionTipoMascota` varchar(45) COLLATE utf8_spanish2_ci DEFAULT NULL,
  PRIMARY KEY (`idTipoMascota`),
  UNIQUE KEY `descripcionTipoMascota_UNIQUE` (`descripcionTipoMascota`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_spanish2_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `tipomascota`
--

LOCK TABLES `tipomascota` WRITE;
/*!40000 ALTER TABLE `tipomascota` DISABLE KEYS */;
/*!40000 ALTER TABLE `tipomascota` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `usuario`
--

DROP TABLE IF EXISTS `usuario`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
 SET character_set_client = utf8mb4 ;
CREATE TABLE `usuario` (
  `idusuario` int(11) NOT NULL AUTO_INCREMENT,
  `email` varchar(45) COLLATE utf8_spanish2_ci NOT NULL,
  `apellido` varchar(45) COLLATE utf8_spanish2_ci NOT NULL,
  `nombre` varchar(45) COLLATE utf8_spanish2_ci NOT NULL,
  `ubicacion` varchar(200) COLLATE utf8_spanish2_ci DEFAULT NULL,
  PRIMARY KEY (`idusuario`),
  UNIQUE KEY `email_UNIQUE` (`email`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_spanish2_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `usuario`
--

LOCK TABLES `usuario` WRITE;
/*!40000 ALTER TABLE `usuario` DISABLE KEYS */;
/*!40000 ALTER TABLE `usuario` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Dumping events for database 'petship'
--

--
-- Dumping routines for database 'petship'
--
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2019-05-05 11:55:51
