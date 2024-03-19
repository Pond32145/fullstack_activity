-- phpMyAdmin SQL Dump
-- version 5.2.1
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Mar 18, 2024 at 06:49 PM
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
-- Table structure for table `activity`
--

CREATE TABLE `activity` (
  `act_ID` int(3) NOT NULL,
  `act_title` varchar(255) NOT NULL,
  `act_desc` text NOT NULL,
  `act_dateStart` date NOT NULL,
  `act_dateEnd` date NOT NULL,
  `act_numStd` int(100) NOT NULL,
  `act_location` varchar(255) NOT NULL,
  `staff_ID` varchar(9) NOT NULL,
  `act_status` int(11) NOT NULL,
  `act_createAt` timestamp NOT NULL DEFAULT current_timestamp() ON UPDATE current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `activity`
--

INSERT INTO `activity` (`act_ID`, `act_title`, `act_desc`, `act_dateStart`, `act_dateEnd`, `act_numStd`, `act_location`, `staff_ID`, `act_status`, `act_createAt`) VALUES
(1, 'dddj', 'fdsa', '2024-03-05', '2024-03-13', 54, 'uyjh', 'lkgj', 1, '2024-03-12 10:33:48'),
(2, 'Team Building Workshop', 'A workshop to enhance team collaboration and communication skills.', '2024-03-15', '2024-03-16', 30, 'Conference Room A', '1', 1, '2024-03-11 17:00:00'),
(5, 'Team4 Building Workshop', 'A workshop to enhance team collaboration and communication skills.', '2024-03-15', '2024-03-16', 30, 'Conference Room A', 'll', 1, '2024-03-12 14:42:51'),
(6, 'Team65 Building Workshop', 'A workshop to enhance team collaboration and communication skills.', '2024-03-15', '2024-03-16', 30, 'Conference Room A', 'll', 1, '2024-03-13 06:23:53'),
(7, 'fdsa', 'fdsa', '2024-03-09', '2024-03-30', 163, 'jhg', '10', 1, '2024-03-13 06:28:47');

-- --------------------------------------------------------

--
-- Table structure for table `login`
--

CREATE TABLE `login` (
  `login_ID` varchar(9) NOT NULL,
  `username` varchar(255) NOT NULL,
  `password` varchar(255) NOT NULL,
  `role` varchar(10) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `login`
--

INSERT INTO `login` (`login_ID`, `username`, `password`, `role`) VALUES
('000', 'admin', '$2b$10$qKHgpeY9A6XaGTcLeP9aUuYcK94WouJ2qbW9zUO8MzmxIWI1yawPm', 'admin'),
('001', 'teacher', '$2b$10$KNTzxsqOSFu0ZBG2BxuPreRzGY1WY3YIKN4jlUSIZcQLS8PSBVBzG', 'teacher'),
('123456789', 'student', '$2b$10$oCFdjT2Nli1dC4EdIAXtTeJTHe0YQ0vGCLpd2KP58mT04xXDLg/C2', 'student'),
('644230016', '644230016', '$2b$10$YZlyBk.Lty0A3MSaPK8Fze52Dutb/N/7PFv97zJgaYOJy5gGk7HUm', 'student'),
('644230046', '644230046', '$2b$10$1AKRKPlBahXEY2IwanA.3OoiBjylE.5dh6Hfw1BlOu2ZXbpGMcjUe', 'student');

-- --------------------------------------------------------

--
-- Table structure for table `manage`
--

CREATE TABLE `manage` (
  `man_status` tinyint(1) NOT NULL,
  `std_ID` varchar(9) NOT NULL,
  `act_ID` varchar(3) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `manage`
--

INSERT INTO `manage` (`man_status`, `std_ID`, `act_ID`) VALUES
(1, '644230016', '2'),
(1, '644230016', '1'),
(1, '644230046', '2'),
(1, '644230046', '7');

-- --------------------------------------------------------

--
-- Table structure for table `section`
--

CREATE TABLE `section` (
  `sec_ID` varchar(2) NOT NULL,
  `sec_name` varchar(10) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

-- --------------------------------------------------------

--
-- Table structure for table `staff`
--

CREATE TABLE `staff` (
  `staff_ID` varchar(2) NOT NULL,
  `login_ID` varchar(9) NOT NULL,
  `staff_fname` varchar(255) NOT NULL,
  `staff_lname` varchar(255) NOT NULL,
  `staff_email` varchar(255) NOT NULL,
  `staff_mobile` varchar(10) NOT NULL,
  `staff_address` varchar(255) NOT NULL,
  `province` varchar(255) NOT NULL,
  `district` varchar(255) NOT NULL,
  `subdistrict` varchar(255) NOT NULL,
  `zipcode` varchar(5) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `staff`
--

INSERT INTO `staff` (`staff_ID`, `login_ID`, `staff_fname`, `staff_lname`, `staff_email`, `staff_mobile`, `staff_address`, `province`, `district`, `subdistrict`, `zipcode`) VALUES
('11', '46513', 'fds', 'fds', 'fgsd', '1234567890', 'fsda', 'fsda', 'fsda', 'fdsa', '12345');

-- --------------------------------------------------------

--
-- Table structure for table `student`
--

CREATE TABLE `student` (
  `std_ID` varchar(9) NOT NULL,
  `login_ID` varchar(9) NOT NULL,
  `std_fname` varchar(255) NOT NULL,
  `std_lname` varchar(255) NOT NULL,
  `sec_ID` varchar(2) NOT NULL,
  `std_email` varchar(255) NOT NULL,
  `std_mobile` varchar(101) NOT NULL,
  `std_address` varchar(255) NOT NULL,
  `province` varchar(255) NOT NULL,
  `district` varchar(255) NOT NULL,
  `subdistrict` varchar(255) NOT NULL,
  `zipcode` varchar(5) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `student`
--

INSERT INTO `student` (`std_ID`, `login_ID`, `std_fname`, `std_lname`, `sec_ID`, `std_email`, `std_mobile`, `std_address`, `province`, `district`, `subdistrict`, `zipcode`) VALUES
('644230016', '644230016', 'karan', 'khanthong', '01', 'jklhi', 'bijnkm', 'fs', 'jnkm,', 'kjnm,', 'yguhbjnk', '45613'),
('644230046', '644230046', 'Burinchai', 'Sukon', '1', 'ji', 'ihj', 'hikjn', 'ibhjkn', 'bihjkn', 'bhjn', 'hiujj');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `activity`
--
ALTER TABLE `activity`
  ADD PRIMARY KEY (`act_ID`);

--
-- Indexes for table `login`
--
ALTER TABLE `login`
  ADD PRIMARY KEY (`login_ID`);

--
-- Indexes for table `section`
--
ALTER TABLE `section`
  ADD PRIMARY KEY (`sec_ID`);

--
-- Indexes for table `staff`
--
ALTER TABLE `staff`
  ADD PRIMARY KEY (`staff_ID`);

--
-- Indexes for table `student`
--
ALTER TABLE `student`
  ADD PRIMARY KEY (`std_ID`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `activity`
--
ALTER TABLE `activity`
  MODIFY `act_ID` int(3) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=8;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
