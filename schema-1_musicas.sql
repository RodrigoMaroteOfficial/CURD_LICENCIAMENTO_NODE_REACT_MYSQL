-- MySQL dump 10.13  Distrib 8.0.34, for Win64 (x86_64)
--
-- Host: localhost    Database: schema-1
-- ------------------------------------------------------
-- Server version	8.0.35

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
-- Table structure for table `musicas`
--

DROP TABLE IF EXISTS `musicas`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `musicas` (
  `id` int NOT NULL AUTO_INCREMENT,
  `song_name` varchar(255) NOT NULL,
  `artist` varchar(255) NOT NULL,
  `publisher` varchar(255) NOT NULL,
  `expires` varchar(255) NOT NULL,
  `album_cover` varchar(255) DEFAULT NULL,
  `contrato` varchar(255) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=50 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `musicas`
--

LOCK TABLES `musicas` WRITE;
/*!40000 ALTER TABLE `musicas` DISABLE KEYS */;
INSERT INTO `musicas` VALUES (1,'Learn To Fly','Foo Fighters','Atlantic Records','2033-01-26','https://a5.mzstatic.com/us/r1000/0/Music125/v4/de/83/0a/de830a06-ba20-249b-909d-f46701a44f19/dj.aevpjurd.jpg','https://www.habitusbrasil.com/wp-content/uploads/2016/03/habitus-modelo3-contrato-marcenaria.pdf'),(8,'Rehab','Amy Winehouse','Universal Music','2030-05-04','https://a5.mzstatic.com/us/r1000/0/Music112/v4/5a/72/3f/5a723fec-965d-3483-89f8-d66b79f88419/15UMGIM24224.rgb.jpg','https://www.habitusbrasil.com/wp-content/uploads/2016/03/habitus-modelo3-contrato-marcenaria.pdf'),(11,'Come Together','The Beatles','Atlantic Records','2025-06-28','https://a5.mzstatic.com/us/r1000/0/Music112/v4/df/db/61/dfdb615d-47f8-06e9-9533-b96daccc029f/18UMGIM31076.rgb.jpg','https://www.habitusbrasil.com/wp-content/uploads/2016/03/habitus-modelo3-contrato-marcenaria.pdf'),(12,'Walk This Way','Aerosmith','Universal Music','2028-05-13','https://a5.mzstatic.com/us/r1000/0/Music112/v4/18/6e/ff/186eff4f-effc-0422-51c0-aa813e92e67d/22UM1IM35694.rgb.jpg','https://www.habitusbrasil.com/wp-content/uploads/2016/03/habitus-modelo3-contrato-marcenaria.pdf'),(15,'Need You Tonight','INXS','Warner Music','2027-04-03','https://a5.mzstatic.com/us/r1000/0/Music116/v4/04/ca/65/04ca65d0-c796-3f9b-0446-f013dfc1a8d9/603497838899.jpg','https://www.habitusbrasil.com/wp-content/uploads/2016/03/habitus-modelo3-contrato-marcenaria.pdf'),(16,'Heart of Glass','Blondie','Columbia Records','2028-12-31','https://a5.mzstatic.com/us/r1000/0/Music115/v4/2f/0b/25/2f0b252d-838e-4f19-3c08-91e49b269564/15UMGIM18445.rgb.jpg','https://www.habitusbrasil.com/wp-content/uploads/2016/03/habitus-modelo3-contrato-marcenaria.pdf'),(17,'Imagine','John Lennon','Atlantic Records','2024-03-03','https://a5.mzstatic.com/us/r1000/0/Music126/v4/21/e3/b0/21e3b048-c917-92c4-bd7d-ace44797b388/13UABIM52808.rgb.jpg','https://www.habitusbrasil.com/wp-content/uploads/2016/03/habitus-modelo3-contrato-marcenaria.pdf'),(18,'Dani California','Red Hot Chili Peppers','Warner Music','2029-07-31','https://a5.mzstatic.com/us/r1000/0/Music5/v4/5e/49/35/5e493511-d87b-5aa2-b379-30fffbae902b/093624932154.jpg','https://www.habitusbrasil.com/wp-content/uploads/2016/03/habitus-modelo3-contrato-marcenaria.pdf'),(19,'Cold as Ice','Foreigner','Atlantic Records','2024-05-31','https://a5.mzstatic.com/us/r1000/0/Music125/v4/5c/7b/1a/5c7b1a52-7749-202f-e49b-5bf71822897f/081227427061.jpg','https://www.habitusbrasil.com/wp-content/uploads/2016/03/habitus-modelo3-contrato-marcenaria.pdf'),(24,'Everybody Wants to Rule the World','Tears for Fears','Atlantic Records','2023-10-31','https://a5.mzstatic.com/us/r1000/0/Music125/v4/3c/38/fc/3c38fcab-3855-c95c-6c07-6fa62db88a35/14UMGIM34762.rgb.jpg','https://www.habitusbrasil.com/wp-content/uploads/2016/03/habitus-modelo3-contrato-marcenaria.pdf'),(25,'Sacrifice','Elton John','Warner Music','2025-01-01','https://a5.mzstatic.com/us/r1000/0/Music114/v4/de/45/ac/de45acfc-ea76-9063-9352-78826a8a4e5c/00731455847925.rgb.jpg','https://www.habitusbrasil.com/wp-content/uploads/2016/03/habitus-modelo3-contrato-marcenaria.pdf'),(29,'The Man Who Sold the World','David Bowie','Sony Music','2023-12-01','https://a5.mzstatic.com/us/r1000/0/Music124/v4/9e/66/d5/9e66d517-3879-5747-da4c-7ac31f246093/825646286072.jpg','https://www.habitusbrasil.com/wp-content/uploads/2016/03/habitus-modelo3-contrato-marcenaria.pdf'),(45,'Better','Guns N\' Roses','Sony Music','2023-12-06','https://a5.mzstatic.com/us/r1000/0/Music124/v4/cd/7d/bb/cd7dbb63-491a-3d65-0b29-61886ef2cd84/00602517906099.rgb.jpg','https://www.habitusbrasil.com/wp-content/uploads/2016/03/habitus-modelo3-contrato-marcenaria.pdf'),(46,'Hysteria','Muse','Universal Music','2023-08-31','https://a5.mzstatic.com/us/r1000/0/Music124/v4/a9/04/e3/a904e322-42b9-17ea-2087-eca27381bcf3/825646095971.jpg','https://www.habitusbrasil.com/wp-content/uploads/2016/03/habitus-modelo3-contrato-marcenaria.pdf'),(49,'My Songs Know What You Did in the Dark (LIGHT EM UP)','Fall Out Boy','Sony Music','2023-12-02','https://a5.mzstatic.com/us/r1000/0/Music115/v4/3c/55/ac/3c55acb6-3c72-b7a8-2b86-d8f028da3756/13UMGIM27299.rgb.jpg','https://www.habitusbrasil.com/wp-content/uploads/2016/03/habitus-modelo3-contrato-marcenaria.pdf');
/*!40000 ALTER TABLE `musicas` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2023-12-05  8:54:38
