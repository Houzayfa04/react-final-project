-- phpMyAdmin SQL Dump
-- version 5.2.1
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Jan 02, 2026 at 11:33 PM
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
-- Database: `contacthub`
--

-- --------------------------------------------------------

--
-- Table structure for table `auth_sessions`
--

CREATE TABLE `auth_sessions` (
  `id` int(11) NOT NULL,
  `user_id` int(11) NOT NULL,
  `token_hash` varchar(255) NOT NULL,
  `created_at` datetime NOT NULL DEFAULT current_timestamp(),
  `expires_at` datetime NOT NULL,
  `revoked_at` datetime DEFAULT NULL,
  `user_agent` varchar(255) DEFAULT NULL,
  `ip_address` varchar(64) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

-- --------------------------------------------------------

--
-- Table structure for table `auth_users`
--

CREATE TABLE `auth_users` (
  `id` int(11) NOT NULL,
  `full_name` varchar(120) NOT NULL,
  `email` varchar(150) NOT NULL,
  `password_hash` varchar(255) NOT NULL,
  `is_active` tinyint(1) NOT NULL DEFAULT 1,
  `created_at` datetime NOT NULL DEFAULT current_timestamp(),
  `updated_at` datetime DEFAULT NULL ON UPDATE current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `auth_users`
--

INSERT INTO `auth_users` (`id`, `full_name`, `email`, `password_hash`, `is_active`, `created_at`, `updated_at`) VALUES
(8, 'abed', 'abed@gmail.com', '$2b$10$LalOoKIq4xeBf1UyNyAdl.p.WbUdfMQP4au70t2V/yTHc5XfUifb2', 1, '2026-01-02 23:33:55', NULL),
(9, 'Houzayfa', 'houz@gmail.com', '$2b$10$BrXqUjCJUibHIWsfNKvpCeaSNhox6A7r/TtC8wqsvQArDytS4/HAS', 1, '2026-01-02 23:53:48', NULL),
(10, 'abedd', 'a@gmail.com', '$2b$10$54MepMa7HzGUIeORuNQ/muXkwCu4xlBoLTf0AXIG1xlDCrLx0hg9C', 1, '2026-01-03 00:31:05', NULL);

-- --------------------------------------------------------

--
-- Table structure for table `password_resets`
--

CREATE TABLE `password_resets` (
  `id` int(11) NOT NULL,
  `user_id` int(11) NOT NULL,
  `code_hash` varchar(255) NOT NULL,
  `created_at` datetime NOT NULL DEFAULT current_timestamp(),
  `expires_at` datetime NOT NULL,
  `used_at` datetime DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

-- --------------------------------------------------------

--
-- Table structure for table `users`
--

CREATE TABLE `users` (
  `id` int(11) NOT NULL,
  `name` varchar(120) NOT NULL,
  `username` varchar(80) DEFAULT NULL,
  `email` varchar(120) DEFAULT NULL,
  `address` varchar(255) DEFAULT NULL,
  `latitude` varchar(40) DEFAULT NULL,
  `longitude` varchar(40) DEFAULT NULL,
  `phone` varchar(80) DEFAULT NULL,
  `website` varchar(120) DEFAULT NULL,
  `company_name` varchar(120) DEFAULT NULL,
  `company_catchPhrase` varchar(255) DEFAULT NULL,
  `company_bs` varchar(255) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `users`
--

INSERT INTO `users` (`id`, `name`, `username`, `email`, `address`, `latitude`, `longitude`, `phone`, `website`, `company_name`, `company_catchPhrase`, `company_bs`) VALUES
(1, 'Leanne Graham', 'Bret', 'Sincere@april.biz', 'Kulas Light, Apt. 556, Gwenborough, 92998-3874', '-37.3159', '81.1496', '1-770-736-8031 x56442', 'hildegard.org', 'Romaguera-Crona', 'Multi-layered client-server neural-net', 'harness real-time e-markets'),
(2, 'Ervin Howell', 'Antonette', 'Shanna@melissa.tv', 'Victor Plains, Suite 879, Wisokyburgh, 90566-7771', '-43.9509', '-34.4618', '010-692-6593 x09125', 'anastasia.net', 'Deckow-Crist', 'Proactive didactic contingency', 'synergize scalable supply-chains'),
(3, 'Clementine Bauch', 'Samantha', 'Nathan@yesenia.net', 'Douglas Extension, Suite 847, McKenziehaven, 59590-4157', '-68.6102', '-47.0653', '1-463-123-4447', 'ramiro.info', 'Romaguera-Jacobson', 'Face to face bifurcated interface', 'e-enable strategic applications'),
(4, 'Patricia Lebsack', 'Karianne', 'Julianne.OConner@kory.org', 'Hoeger Mall, Apt. 692, South Elvis, 53919-4257', '29.4572', '-164.2990', '493-170-9623 x156', 'kale.biz', 'Robel-Corkery', 'Multi-tiered zero tolerance productivity', 'transition cutting-edge web services'),
(5, 'Chelsey Dietrich', 'Kamren', 'Lucio_Hettinger@annie.ca', 'Skiles Walks, Suite 351, Roscoeview, 33263', '-31.8129', '62.5342', '(254)954-1289', 'demarco.info', 'Keebler LLC', 'User-centric fault-tolerant solution', 'revolutionize end-to-end systems'),
(6, 'Mrs. Dennis Schulist', 'Leopoldo_Corkery', 'Karley_Dach@jasper.info', 'Norberto Crossing, Apt. 950, South Christy, 23505-1337', '-71.4197', '71.7478', '1-477-935-8478 x6430', 'ola.org', 'Considine-Lockman', 'Synchronised bottom-line interface', 'e-enable innovative applications'),
(7, 'Kurtis Weissnat', 'Elwyn.Skiles', 'Telly.Hoeger@billy.biz', 'Rex Trail, Suite 280, Howemouth, 58804-1099', '24.8918', '21.8984', '210.067.6132', 'elvis.io', 'Johns Group', 'Configurable multimedia task-force', 'generate enterprise e-tailers'),
(8, 'Nicholas Runolfsdottir V', 'Maxime_Nienow', 'Sherwood@rosamond.me', 'Ellsworth Summit, Suite 729, Aliyaview, 45169', '-14.3990', '-120.7677', '586.493.6943 x140', 'jacynthe.com', 'Abernathy Group', 'Implemented secondary concept', 'e-enable extensible e-tailers'),
(9, 'Glenna Reichert', 'Delphine', 'Chaim_McDermott@dana.io', 'Dayna Park, Suite 449, Bartholomebury, 76495-3109', '24.6463', '-168.8889', '(775)976-6794 x41206', 'conrad.com', 'Yost and Sons', 'Switchable contextually-based project', 'aggregate real-time technologies');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `auth_sessions`
--
ALTER TABLE `auth_sessions`
  ADD PRIMARY KEY (`id`),
  ADD KEY `user_id` (`user_id`),
  ADD KEY `expires_at` (`expires_at`);

--
-- Indexes for table `auth_users`
--
ALTER TABLE `auth_users`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `email` (`email`);

--
-- Indexes for table `password_resets`
--
ALTER TABLE `password_resets`
  ADD PRIMARY KEY (`id`),
  ADD KEY `user_id` (`user_id`),
  ADD KEY `expires_at` (`expires_at`);

--
-- Indexes for table `users`
--
ALTER TABLE `users`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `auth_sessions`
--
ALTER TABLE `auth_sessions`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `auth_users`
--
ALTER TABLE `auth_users`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=11;

--
-- AUTO_INCREMENT for table `password_resets`
--
ALTER TABLE `password_resets`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT;

--
-- Constraints for dumped tables
--

--
-- Constraints for table `auth_sessions`
--
ALTER TABLE `auth_sessions`
  ADD CONSTRAINT `auth_sessions_ibfk_1` FOREIGN KEY (`user_id`) REFERENCES `auth_users` (`id`) ON DELETE CASCADE;

--
-- Constraints for table `password_resets`
--
ALTER TABLE `password_resets`
  ADD CONSTRAINT `password_resets_ibfk_1` FOREIGN KEY (`user_id`) REFERENCES `auth_users` (`id`) ON DELETE CASCADE;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
