-- phpMyAdmin SQL Dump
-- version 5.2.1
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Feb 10, 2024 at 08:01 AM
-- Server version: 10.4.28-MariaDB
-- PHP Version: 8.2.4

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `activitydb`
--

-- --------------------------------------------------------

--
-- Table structure for table `actcode`
--

CREATE TABLE `actcode` (
  `act_Code` varchar(8) NOT NULL,
  `act_Name` varchar(255) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `actcode`
--

INSERT INTO `actcode` (`act_Code`, `act_Name`) VALUES
('5E2B7DC9', 'React'),
('6BBA8CB0', 'React'),
('F19727B2', 'React'),
('52BDD5E3', 'React'),
('6B84A213', 'React'),
('F41FD8C7', 'Docker'),
('9F3962E4', 'Docker'),
('7916CE1D', 'Docker'),
('17F22C60', 'Docker'),
('EF7DDDCD', 'Docker'),
('A05156F8', 'Comm'),
('A05156F8', 'Comm'),
('312CE7A3', 'อบรมภาษาอังกฤษ'),
('B8C415FF', 'qwq'),
('F4165F7A', 'grg'),
('39CE0486', 'vdvd'),
('F156F49A', 'zxz'),
('40FD9A7E', 'vcvcv'),
('D6632944', 'wdd'),
('D3205230', 'efef');

-- --------------------------------------------------------

--
-- Table structure for table `actname`
--

CREATE TABLE `actname` (
  `act_Name` varchar(255) NOT NULL,
  `act_ID` int(11) NOT NULL,
  `location` varchar(255) NOT NULL,
  `amount` varchar(255) NOT NULL,
  `start_Date` datetime NOT NULL,
  `end_Date` datetime NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `actname`
--

INSERT INTO `actname` (`act_Name`, `act_ID`, `location`, `amount`, `start_Date`, `end_Date`) VALUES
('React', 6, '', '5', '2024-01-19 21:42:00', '2024-01-20 20:42:00'),
('Docker', 7, 'ตึกคอม ชั้น 3', '5', '2024-01-19 21:56:00', '2024-01-20 21:57:00'),
('Comm', 8, 'comm', '1', '2024-01-22 15:34:00', '2024-01-23 15:34:00'),
('Comm', 9, 'comm', '1', '2024-01-22 15:34:00', '2024-01-23 15:34:00'),
('อบรมภาษาอังกฤษ', 10, 'ตึกชามมาม่า', '1', '2024-02-02 12:42:00', '2024-02-03 12:42:00'),
('qwq', 11, 'qwqw', '1', '2024-02-05 13:37:00', '2024-02-06 13:37:00'),
('grg', 12, 'grg', '1', '2024-02-17 13:38:00', '2024-02-17 13:38:00'),
('vdvd', 13, 'vdv', '1', '2024-02-08 13:38:00', '2024-02-08 13:38:00'),
('zxz', 14, 'zxzx', '1', '2024-02-07 13:43:00', '2024-02-07 13:43:00'),
('vcvcv', 15, 'vcvcv', '1', '2024-02-21 13:43:00', '2024-02-21 13:43:00'),
('wdd', 16, 'dwd', '1', '2024-02-11 13:44:00', '2024-02-11 13:44:00'),
('efef', 17, 'fefe', '1', '2024-02-20 13:44:00', '2024-02-20 13:44:00');

-- --------------------------------------------------------

--
-- Table structure for table `user`
--

CREATE TABLE `user` (
  `username` varchar(255) NOT NULL,
  `password` text NOT NULL,
  `fname` varchar(255) NOT NULL,
  `lname` varchar(255) NOT NULL,
  `section` varchar(255) NOT NULL,
  `role` varchar(255) NOT NULL DEFAULT 'student',
  `tel` varchar(255) DEFAULT NULL,
  `birthdate` varchar(255) DEFAULT NULL,
  `address` varchar(255) DEFAULT NULL,
  `district` varchar(255) DEFAULT NULL,
  `province` varchar(255) DEFAULT NULL,
  `tumbons` varchar(255) NOT NULL,
  `zipcode` varchar(255) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `user`
--

INSERT INTO `user` (`username`, `password`, `fname`, `lname`, `section`, `role`, `tel`, `birthdate`, `address`, `district`, `province`, `tumbons`, `zipcode`) VALUES
('644230001', '$2b$10$LJ63UQn5S0Tno66MoLIn9e8ZTkzo9351JkpvFd2SZnoDoCMM0Vvg6', 'กรกฎา', 'เปรมกิจ', '64/38', 'student', '098765222', '2024-01-03', '12/32', 'กบินทร์บุรี', 'ปราจีนบุรี', 'หนองกี่', '25110'),
('644230006', '$2b$10$cRLGPFKte9evpFO9oov5MuZc9ZiS9opM9R7R32YC3EehKU3hmr3ty', 'จรัสย์', 'สืบบูรพากุล', '64/38', 'student', '0707070', '2024-02-12', '213', 'บางพลี', 'สมุทรปราการ', 'บางแก้ว', '10540'),
('644230007', '$2b$10$dxgcHPJRMmCqzq1TJtQSmuxujVeL475ssNcKDiTJ3pL/vh//2EYKe', 'ชุติวัต', 'ขำสาคร', '64/38', 'student', NULL, NULL, NULL, NULL, NULL, '', NULL),
('644230009', '$2b$10$OimvyYirSfLI0U3bXdC7FeIh0m0bQyVcE7Q8zNu9QGb0MrNulIzSu', 'ณภัทร', 'ลอนุ', '64/38', 'student', NULL, NULL, NULL, NULL, NULL, '', NULL),
('644230011', '$2b$10$irUC8.pdMcuJkhLH7vFVeumC57XhuF03ZVbi3QvVUFIiSplvUSxYu', 'ณัฐพงษ์', 'สร้อยสน', '64/38', 'student', NULL, NULL, NULL, NULL, NULL, '', NULL),
('644230013', '$2b$10$AXVfHInGtfmmMeUjR.MEpuRiR/ULlrgl0I8AZZSYJA7C5x4vaKwQm', 'ธนธรณ์', 'เหนี่ยวองอาจ', '64/38', 'student', NULL, NULL, NULL, NULL, NULL, '', NULL),
('644230014', '$2b$10$HEYfHe3NxqzNn3xX/vqPUOkfdeTHvwF5XajpW8ffK3qqOpbe.B6Uy', 'ธนาธิป', 'ก๊วยประเสริฐ', '64/38', 'student', '0984750050', '2002-07-09', '12', 'คลองหลวง', 'ปทุมธานี', '', '12120'),
('644230016', '$2b$10$4JkTdLfFJcD/0u8cXwN7mONYwA6VV1QpmBcBSmO4XCeN.guLNdns2', 'กรัณฑ์', 'ขันทอง', '64/38', 'student', NULL, NULL, NULL, NULL, NULL, '', NULL),
('644230019', '$2b$10$QVnH0YV3aIP.SdEkj2wD/eLLojyEqlBxx.li2eRRATs.Z1zMnxbNy', 'จิรสิน', 'เกิดจงรักษ์', '64/38', 'student', NULL, NULL, NULL, NULL, NULL, '', NULL),
('644230021', '$2b$10$E.5mvch7Pvy0cd9oFWwX.OZpdL058.93og2ezdRXMRaDwygoNIOdy', 'ชนากานต์', 'ป่าสลุง', '64/38', 'student', NULL, NULL, NULL, NULL, NULL, '', NULL),
('644230025', '$2b$10$eXRbOb9/vx18lO0XbMxvMunOTl.yPRtt9KS91JUsAGSlqVVWQKu3.', 'วิชญ์', 'เต็มบริบูรณ์', '64/38', 'student', NULL, NULL, NULL, NULL, NULL, '', NULL),
('644230028', '$2b$10$C9zWkMUTL3FirYw7ewfhau7zvbE8/kdP6bCZ7a3p/DXIBLRA.q3wC', 'ณรงค์ศักดิ์', 'ปานเกิดผล', '64/38', 'student', NULL, NULL, NULL, NULL, NULL, '', NULL),
('644230030', '$2b$10$itriYNGYhToW4NozUbisrejNdlxn92GUd2Yz5d1708HTyKRAZAvyW', 'สมกานต์', 'ปัญญาโรจน์', '64/38', 'student', NULL, NULL, NULL, NULL, NULL, '', NULL),
('644230032', '$2b$10$BDuOWGt4vJNjPZsWEDs2geECZRto2XyDtn0P0fNOVJsF2lykBnqoO', 'สหรัฐ', 'พลสันต์', '64/38', 'student', NULL, NULL, NULL, NULL, NULL, '', NULL),
('644230035', '$2b$10$NZqdKQ2FTvFI1h072lYVleP3rPhme0gkatWc5zqyc3uUq6E.Yt0UC', 'สุเมธ', 'อำพรศักดิ์', '64/38', 'student', NULL, NULL, NULL, NULL, NULL, '', NULL),
('644230038', '$2b$10$zrnHCrk4o9gHaNBEO/vTeOcMAfBT.InwEPWqi2jsi2cPWMJ67kXeO', 'ธนวัฒน์', 'รัตนพุทธาสาคร', '64/38', 'student', NULL, NULL, NULL, NULL, NULL, '', NULL),
('644230039', '$2b$10$NNSKwmEr6dwRVKdVndNTp.Li0fw7orG17HLxlcfzNPEINpPHEm1uS', 'ธิดารัตน์', 'ทองสินธุ์', '64/38', 'student', NULL, NULL, NULL, NULL, NULL, '', NULL),
('644230040', '$2b$10$7KgYl.SRkZxtbmHqKEqZD.gWedizb7vxXl8k5zK/Nk6tD9zFvH2Gq', 'สุชาครีย์', 'อัครเศรณี', '64/38', 'student', NULL, NULL, NULL, NULL, NULL, '', NULL),
('644230041', '$2b$10$.t/i4Buzx7tWUfUtVX8CBufHfTruxp.B5ZE4H901UH4qrkaVb2C.K', 'ธีรภัทร', 'พัดบาง', '64/38', 'student', NULL, NULL, NULL, NULL, NULL, '', NULL),
('644230046', '$2b$10$ANJUFgF9roA5Z2FBBdz7/.i61oJsMgnEDZObYE1CLZHaC3zenlc46', 'บุรินทร์ชัย', 'สุขอ่อน', '64/38', 'student', NULL, NULL, NULL, NULL, NULL, '', NULL),
('644230052', '$2b$10$LcsImanwffGMCPiMvhANFudjJlcWAK.gIpydSdYYmNaAoHBxkhX.2', 'ภานุวัฒน์', 'สิทธิรัตน์', '64/38', 'student', NULL, NULL, NULL, NULL, NULL, '', NULL),
('644230055', '$2b$10$L/0zBVRcg2K7GAzyQQC/7uqexpX1jaq4j.8lNr.b2o2Et108dNmsu', 'วิชัย', 'ทองเปราะ', '64/38', 'student', NULL, NULL, NULL, NULL, NULL, '', NULL),
('644230056', '$2b$10$Qk9sggHY5UdkjW1A3Czze.tR3LU4wSR2Eom3gs1tzqtUn/05mPz.m', 'สหรัฐ', 'วงษ์จันทร์', '64/38', 'student', NULL, NULL, NULL, NULL, NULL, '', NULL),
('644230057', '$2b$10$gv5VTSBS5Yl81DmZk0z/ouzYmOxMtIhsbmMHnK3uHxX4BhxfKrwB6', 'ณัฐวัฒน์', 'หิรัญวงษ์', '64/38', 'student', NULL, NULL, NULL, NULL, NULL, '', NULL),
('644230059', '$2b$10$GZOVt0.bxYOvUC9OZi.iIeGOVWgGQqRO7Hgrp//rW82xH001T90G6', 'ภิญโญ', 'สบาย', '64/38', 'student', NULL, NULL, NULL, NULL, NULL, '', NULL),
('644230061', '$2b$10$fouFFxp/VTHhc7wbpvWt9.owkfdPsMDCqHJhkVzQsjMOt8RL3TTtO', 'พันธ์วริศ', 'สุริวัลย์', '64/38', 'student', NULL, NULL, NULL, NULL, NULL, '', NULL),
('admin', '$2b$10$bhBQ7VF9vqsXOWwyDmV33eFqOK1eLhYRSPxJZSfc1OMHKYNMLOJ06', 'admin', '001', 'admin', 'admin', NULL, NULL, NULL, NULL, NULL, '', NULL),
('asas', '$2b$10$Wd8vuzPWmD7Fkozu64SXCuaVV.JgxYMq3qWd/aeV0u73CviDCRubG', 'as', 'as', '64/38', 'student', NULL, NULL, NULL, NULL, NULL, '', NULL),
('kukuku', '$2b$10$ClP4aZm8t2YDHubdMBt2F.UFf0sYtci4g8T4lEMKJnfJdpvSdgsHm', 'kukuku', 'kuku', '64/38', 'student', NULL, NULL, NULL, NULL, NULL, '', NULL),
('nimm', '$2b$10$YoT3MzRbD2wNOdFQJEjzpOausuWqPoh7Fh4CAkOcLTBpfpxw/C8Ze', 'Nimm', 'Nimm', '64/38', 'student', NULL, NULL, NULL, NULL, NULL, '', NULL),
('pond', '$2b$10$U5ac3eCqzHRmxw7efkediOG70grQDOD9Sx9qD2HaxYTqiX0OskjLC', 'Naphat', 'Lonu', '64/38', 'student', NULL, NULL, NULL, NULL, NULL, '', NULL),
('pond001', '$2b$10$/lzJl6rK0BFTHeZaMDBoB.HfAJeFo3pzyf/Ag7/sSrS33.YDYmE2G', 'Naphat', 'Lonu', '64/38', 'admin', NULL, NULL, NULL, NULL, NULL, '', NULL),
('pond1212', '$2b$10$zWd/pdLbYjHbxz1CTl1LZOoVTTfj9.5tEqueIJkeuPPwDqZisTImi', 'Pond', 'NaJa', '64/38', 'admin', NULL, NULL, NULL, NULL, NULL, '', NULL),
('qqq123', '$2b$10$DJcfkLxYE6gDNoOC/qPZeeGjYpkHvKrdxzLoElqPV1IVtrK2KoALW', 'qqq', 'qqq', '64/38', 'teacher', NULL, NULL, NULL, NULL, NULL, '', NULL),
('qwqw', '$2b$10$tS4mhcBKhrZKYKOwZWm4WOPZxLqMEBj4fjTOdsBVpdcx/4bmplPC.', 'qwqw', 'qwqw', '64/38', 'student', NULL, NULL, NULL, NULL, NULL, '', NULL),
('qwqw1', '$2b$10$j/dLqZp/xLzM/LMTvvsxq.4rWelai6jksN/r7dvnjaj6miaJsbslO', 'qwqw1', 'qwqw1', '64/38', 'student', NULL, NULL, NULL, NULL, NULL, '', NULL),
('qwqwqw', '$2b$10$o.LlJmdAccMZ8V/6SzDbiOR6bxgAHX81vpSMuSimz83z3TQ9xiqpG', 'qwqwqw', 'qwqwqw', '64/38', 'student', NULL, NULL, NULL, NULL, NULL, '', NULL),
('teacher', '$2b$10$vkN50lQ0TbzlluIDx5zXBeoQ4N7n1/Tpej2qGxJJ9IcHAmxrwBECK', 'teacher', '001', 'teacher', 'teacher', NULL, NULL, NULL, NULL, NULL, '', NULL),
('teachersas', '$2b$10$xUS7707TV6NCFex0HvPhR.eoqZmcaZ6n72XKj0jCj8gi7dzzs8JbO', 'Naphat', 'Lonu', '64/38', 'student', NULL, NULL, NULL, NULL, NULL, '', NULL),
('ฺีburinchai', '$2b$10$K/NvBo1N/6t3k30uxAdi7.Q31M8AodAQ/SwrI/9LqtDmLMEYlzluS', 'Burinchai', 'Suk-on', '64/38', 'admin', NULL, NULL, NULL, NULL, NULL, '', NULL);

--
-- Indexes for dumped tables
--

--
-- Indexes for table `actname`
--
ALTER TABLE `actname`
  ADD PRIMARY KEY (`act_ID`);

--
-- Indexes for table `user`
--
ALTER TABLE `user`
  ADD PRIMARY KEY (`username`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `actname`
--
ALTER TABLE `actname`
  MODIFY `act_ID` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=18;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
