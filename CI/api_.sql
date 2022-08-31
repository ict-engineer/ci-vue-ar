-- phpMyAdmin SQL Dump
-- version 5.1.1
-- https://www.phpmyadmin.net/
--
-- Anamakine: localhost
-- Üretim Zamanı: 02 Haz 2022, 16:51:20
-- Sunucu sürümü: 10.4.24-MariaDB
-- PHP Sürümü: 7.3.33

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Veritabanı: `api_neroar`
--

-- --------------------------------------------------------

--
-- Tablo için tablo yapısı `builds`
--

CREATE TABLE `builds` (
  `id` int(11) NOT NULL,
  `ownerid` longtext NOT NULL,
  `icon` longtext NOT NULL,
  `file` longtext NOT NULL,
  `filesize` decimal(10,0) NOT NULL,
  `embed` longtext NOT NULL,
  `settings` longtext DEFAULT NULL,
  `modelname` varchar(255) NOT NULL,
  `cloud` int(1) NOT NULL,
  `address` longtext NOT NULL,
  `shortkey` longtext NOT NULL,
  `uuid` longtext NOT NULL,
  `create_at` timestamp NOT NULL DEFAULT current_timestamp(),
  `updated_at` timestamp NOT NULL DEFAULT current_timestamp() ON UPDATE current_timestamp(),
  `time` varchar(255) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Tablo döküm verisi `builds`
--

INSERT INTO `builds` (`id`, `ownerid`, `icon`, `file`, `filesize`, `embed`, `settings`, `modelname`, `cloud`, `address`, `shortkey`, `uuid`, `create_at`, `updated_at`, `time`) VALUES
(53, '12', 'uploads/06c23c14dff2c08119b9bd6683eab7b7/1650164849.x-empty', 'uploads_files_2085816_classroom+table.glb', '396', '', 'eyJlbmFibGVQYW4iOnRydWUsImNhbWVyYUNvbnRyb2xzIjp0cnVlLCJhdXRvUm90YXRlIjp0cnVlLCJsaWdodE1vZGVsIjp7ImV4cG9zdXJlIjoxLCJ1c2VFbnZpcm9ubWVudCI6ZmFsc2UsInNoYWRvd0ludGVuc2l0eSI6MSwic2hhZG93U29mdG5lc3MiOjF9LCJzY2VuZUxvYWRlclNldHRpbmdzIjp7InByb2dyZXNzQmFyIjpmYWxzZSwiYXJCdXR0b24iOmZhbHNlLCJhclByb21wdCI6ZmFsc2V9LCJza3lib3hFbmFibGVyIjpmYWxzZSwic2t5Ym94SW1hZ2UiOiIiLCJlbnZpcm9ubWVudENvbG9yIjoiI2IwOTJhNSJ9', 'uploads_files_2085816_classroom+table.glb', 0, '', '', '9b60848e6d6dbeb6ef4197269588bae588a1371de9a5a7211798d8f1caa49cea', '2022-04-06 08:05:06', '2022-05-10 19:39:03', ''),
(54, '3', '', 'NSL22008.glb', '1867', '', 'eyJlbmFibGVQYW4iOnRydWUsImNhbWVyYUNvbnRyb2xzIjp0cnVlLCJhdXRvUm90YXRlIjp0cnVlLCJsaWdodE1vZGVsIjp7ImV4cG9zdXJlIjoxLCJ1c2VFbnZpcm9ubWVudCI6ZmFsc2UsInNoYWRvd0ludGVuc2l0eSI6IjAuNCIsInNoYWRvd1NvZnRuZXNzIjoiMC43In0sInNjZW5lTG9hZGVyU2V0dGluZ3MiOnsicHJvZ3Jlc3NCYXIiOnRydWUsImFyQnV0dG9uIjp0cnVlLCJhclByb21wdCI6ZmFsc2V9LCJza3lib3hFbmFibGVyIjpmYWxzZSwic2t5Ym94SW1hZ2UiOiJodHRwczpcL1wvYXBpLjNkcmV4YXIuY29tXC91cGxvYWRzXC9wdWJcL2dhcmRlbl8xay5oZHIifQ==', 'NSL22008.glb', 0, '', '', '83a5fdcf661afa28fcba74a22951854ae110f4fc8c76d4daf5317724de549854', '2022-04-12 18:42:20', '2022-05-17 07:44:51', ''),
(55, '8', '', 'NSL22008.glb', '1817', '', 'eyJlbmFibGVQYW4iOnRydWUsImNhbWVyYUNvbnRyb2xzIjp0cnVlLCJhdXRvUm90YXRlIjp0cnVlLCJsaWdodE1vZGVsIjp7ImV4cG9zdXJlIjoxLCJ1c2VFbnZpcm9ubWVudCI6dHJ1ZSwic2hhZG93SW50ZW5zaXR5IjoiMS40Iiwic2hhZG93U29mdG5lc3MiOiIwLjkifSwic2NlbmVMb2FkZXJTZXR0aW5ncyI6eyJwcm9ncmVzc0JhciI6dHJ1ZSwiYXJCdXR0b24iOnRydWUsImFyUHJvbXB0Ijp0cnVlfSwic2t5Ym94RW5hYmxlciI6ZmFsc2UsInNreWJveEltYWdlIjoiaHR0cHM6XC9cL2FwaS4zZHJleGFyLmNvbVwvdXBsb2Fkc1wvcHViXC9jaXR5XzFrLmhkciIsImVudmlyb25tZW50Q29sb3IiOjMyOTE5NzJ9', 'NSL22008.glb', 0, '', '', 'cb26c2069cb6baec54311cacf2dc179eec026f0d48199d90dcdf5786dfa80c69', '2022-04-12 18:43:46', '2022-05-10 22:15:40', ''),
(56, '8', '', 'NSL220081.glb', '1867', '', 'eyJlbmFibGVQYW4iOnRydWUsImNhbWVyYUNvbnRyb2xzIjp0cnVlLCJhdXRvUm90YXRlIjp0cnVlLCJsaWdodE1vZGVsIjp7ImV4cG9zdXJlIjoxLCJ1c2VFbnZpcm9ubWVudCI6ZmFsc2UsInNoYWRvd0ludGVuc2l0eSI6MSwic2hhZG93U29mdG5lc3MiOjF9LCJzY2VuZUxvYWRlclNldHRpbmdzIjp7InByb2dyZXNzQmFyIjpmYWxzZSwiYXJCdXR0b24iOmZhbHNlLCJhclByb21wdCI6ZmFsc2V9LCJza3lib3hFbmFibGVyIjpmYWxzZSwic2t5Ym94SW1hZ2UiOiIiLCJlbnZpcm9ubWVudENvbG9yIjozMjkxOTcyfQ==', 'NSL220081.glb', 0, '', '', 'cb26c2069cb6baec54311cacf2dc179eec026f0d48199d90dcdf5786dfa80c69', '2022-04-12 18:45:03', '2022-05-11 11:03:04', ''),
(57, '3', '', 'NSL22006.glb', '887', '', 'eyJlbmFibGVQYW4iOmZhbHNlLCJjYW1lcmFDb250cm9scyI6dHJ1ZSwiYXV0b1JvdGF0ZSI6ZmFsc2UsImxpZ2h0TW9kZWwiOnsiZXhwb3N1cmUiOjEsInVzZUVudmlyb25tZW50IjpmYWxzZSwic2hhZG93SW50ZW5zaXR5IjoiMC40Iiwic2hhZG93U29mdG5lc3MiOiIwLjcifSwic2NlbmVMb2FkZXJTZXR0aW5ncyI6eyJwcm9ncmVzc0JhciI6ZmFsc2UsImFyQnV0dG9uIjpmYWxzZSwiYXJQcm9tcHQiOmZhbHNlfSwic2t5Ym94RW5hYmxlciI6ZmFsc2UsInNreWJveEltYWdlIjoiaHR0cHM6XC9cL2FwaS4zZHJleGFyLmNvbVwvdXBsb2Fkc1wvcHViXC93YXJlaG91c2VfMWsuaGRyIn0=', 'NSL22006.glb', 0, '', '', '83a5fdcf661afa28fcba74a22951854ae110f4fc8c76d4daf5317724de549854', '2022-04-12 18:46:03', '2022-05-17 10:06:31', ''),
(58, '8', '', 'test_Bed_Ped.glb', '1806', '', NULL, 'test_Bed_Ped.glb', 0, '', '', 'cb26c2069cb6baec54311cacf2dc179eec026f0d48199d90dcdf5786dfa80c69', '2022-04-12 18:47:37', '2022-04-12 18:47:37', ''),
(59, '3', '', 'test_Bed_Ped.glb', '1806', '', NULL, 'test_Bed_Ped.glb', 0, '', '', 'd3b6de0b2064f6442ac6ef413dda09d399231895b2dc34ba51126e06724a940d', '2022-04-12 18:48:34', '2022-04-12 18:48:34', ''),
(60, '3', '', 'test_Bed_Ped1.glb', '1806', '', 'eyJlbmFibGVQYW4iOnRydWUsImNhbWVyYUNvbnRyb2xzIjp0cnVlLCJhdXRvUm90YXRlIjp0cnVlLCJsaWdodE1vZGVsIjp7ImV4cG9zdXJlIjoxLCJ1c2VFbnZpcm9ubWVudCI6dHJ1ZSwic2hhZG93SW50ZW5zaXR5IjoiMC40Iiwic2hhZG93U29mdG5lc3MiOiIwLjcifSwic2NlbmVMb2FkZXJTZXR0aW5ncyI6eyJwcm9ncmVzc0JhciI6dHJ1ZSwiYXJCdXR0b24iOnRydWUsImFyUHJvbXB0IjpmYWxzZX0sInNreWJveEVuYWJsZXIiOmZhbHNlLCJza3lib3hJbWFnZSI6Imh0dHBzOlwvXC9hcGkuM2RyZXhhci5jb21cL3VwbG9hZHNcL3B1YlwvY2l0eV8xay5oZHIiLCJlbnZpcm9ubWVudENvbG9yIjoiIzRjMGIwYiJ9', 'test_Bed_Ped1.glb', 0, '', '', '83a5fdcf661afa28fcba74a22951854ae110f4fc8c76d4daf5317724de549854', '2022-04-12 20:17:34', '2022-05-17 20:29:54', ''),
(61, '12', '', 'uploads_files_2085816_classroom+table_(1).glb', '396', '', 'eyJlbmFibGVQYW4iOnRydWUsImNhbWVyYUNvbnRyb2xzIjp0cnVlLCJhdXRvUm90YXRlIjp0cnVlLCJsaWdodE1vZGVsIjp7ImV4cG9zdXJlIjoiMS4yIiwidXNlRW52aXJvbm1lbnQiOnRydWUsInNoYWRvd0ludGVuc2l0eSI6IjAuOCIsInNoYWRvd1NvZnRuZXNzIjoiMCJ9LCJzY2VuZUxvYWRlclNldHRpbmdzIjp7InByb2dyZXNzQmFyIjp0cnVlLCJhckJ1dHRvbiI6dHJ1ZSwiYXJQcm9tcHQiOnRydWV9LCJza3lib3hFbmFibGVyIjpmYWxzZSwic2t5Ym94SW1hZ2UiOiJodHRwczpcL1wvYXBpLjNkcmV4YXIuY29tXC91cGxvYWRzXC9wdWJcL3dhcmVob3VzZV8xay5oZHIiLCJlbnZpcm9ubWVudENvbG9yIjozMjkxOTcyfQ==', 'uploads_files_2085816_classroom+table_(1).glb', 0, '', '', '9b60848e6d6dbeb6ef4197269588bae588a1371de9a5a7211798d8f1caa49cea', '2022-04-17 16:29:48', '2022-05-20 07:21:25', ''),
(63, '12', '', 'nsl22008_(1).glb', '1817', '', NULL, 'nsl22008_(1).glb', 0, '', '', '6b25ba7063575bf80d344af2ba2f7abd93055d3c0e6ebce449bbdaaa4fe41247', '2022-05-01 22:18:06', '2022-05-01 22:18:06', ''),
(64, '12', '', 'export_(1).glb', '0', '', NULL, 'export_(1).glb', 0, '', '', '9b60848e6d6dbeb6ef4197269588bae588a1371de9a5a7211798d8f1caa49cea', '2022-05-08 16:55:46', '2022-05-08 16:55:46', ''),
(65, '12', '', 'export_(6).glb', '397', '', 'eyJlbmFibGVQYW4iOnRydWUsImNhbWVyYUNvbnRyb2xzIjp0cnVlLCJhdXRvUm90YXRlIjp0cnVlLCJsaWdodE1vZGVsIjp7ImV4cG9zdXJlIjoxLCJ1c2VFbnZpcm9ubWVudCI6ZmFsc2UsInNoYWRvd0ludGVuc2l0eSI6MSwic2hhZG93U29mdG5lc3MiOjF9LCJzY2VuZUxvYWRlclNldHRpbmdzIjp7InByb2dyZXNzQmFyIjpmYWxzZSwiYXJCdXR0b24iOmZhbHNlLCJhclByb21wdCI6ZmFsc2V9LCJza3lib3hFbmFibGVyIjpmYWxzZSwic2t5Ym94SW1hZ2UiOiIiLCJlbnZpcm9ubWVudENvbG9yIjozMjkxOTcyfQ==', 'export_(6).glb', 0, '', '', '9b60848e6d6dbeb6ef4197269588bae588a1371de9a5a7211798d8f1caa49cea', '2022-05-08 16:59:06', '2022-05-10 19:37:27', ''),
(66, '12', '', 'export_(8).glb', '398', '', NULL, 'export_(8).glb', 0, '', '', '9b60848e6d6dbeb6ef4197269588bae588a1371de9a5a7211798d8f1caa49cea', '2022-05-08 21:57:18', '2022-05-08 21:57:18', ''),
(67, '33', 'asd', 'asdasdasddas', '331', 'asdads', 'asdads', 'adsads1', 11, 'asdads1asdasd', '', 'asdasdads', '2022-05-10 20:31:55', '2022-05-10 20:31:55', ''),
(69, '12', '', 'tt.glb', '1789', '', NULL, 'tt.glb', 0, '', '', '9b60848e6d6dbeb6ef4197269588bae588a1371de9a5a7211798d8f1caa49cea', '2022-05-10 20:39:49', '2022-05-10 20:39:49', ''),
(70, '12', '', 'cast.glb', '1789', '', NULL, 'cast.glb', 0, '', '', '9b60848e6d6dbeb6ef4197269588bae588a1371de9a5a7211798d8f1caa49cea', '2022-05-10 20:40:14', '2022-05-10 20:40:14', '');

--
-- Tetikleyiciler `builds`
--
DELIMITER $$
CREATE TRIGGER `ins_shortkey` BEFORE INSERT ON `builds` FOR EACH ROW SET @shortkey = @shortkey + concat(
  substring('ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789', rand(@seed:=round(rand(@lid)*4294967296))*36+1, 1),
  substring('ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789', rand(@seed:=round(rand(@seed)*4294967296))*36+1, 1),
  substring('ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789', rand(@seed:=round(rand(@seed)*4294967296))*36+1, 1),
  substring('ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789', rand(@seed:=round(rand(@seed)*4294967296))*36+1, 1),
  substring('ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789', rand(@seed:=round(rand(@seed)*4294967296))*36+1, 1),
  substring('ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789', rand(@seed:=round(rand(@seed)*4294967296))*36+1, 1),
  substring('ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789', rand(@seed:=round(rand(@seed)*4294967296))*36+1, 1),
  substring('ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789', rand(@seed)*36+1, 1)
)
$$
DELIMITER ;

-- --------------------------------------------------------

--
-- Tablo için tablo yapısı `projects`
--

CREATE TABLE `projects` (
  `id` int(11) NOT NULL,
  `ownerid` varchar(255) NOT NULL,
  `projectname` varchar(255) NOT NULL,
  `icon` varchar(255) NOT NULL,
  `uuid` longtext NOT NULL,
  `time` varchar(255) NOT NULL,
  `create_at` timestamp NOT NULL DEFAULT current_timestamp(),
  `updated_at` timestamp NOT NULL DEFAULT current_timestamp() ON UPDATE current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Tablo döküm verisi `projects`
--

INSERT INTO `projects` (`id`, `ownerid`, `projectname`, `icon`, `uuid`, `time`, `create_at`, `updated_at`) VALUES
(18, '1', 'tewst', '5', '3fbcc5b0b4525f89462ec767e90b2d95126e5db736c948e03296c5c7f180dd24', '1649230842', '2022-04-06 07:40:42', '2022-04-06 07:40:42'),
(19, '12', 'demo1', '2', '9b60848e6d6dbeb6ef4197269588bae588a1371de9a5a7211798d8f1caa49cea', '1649231445', '2022-04-06 07:50:45', '2022-04-06 07:50:45'),
(20, '3', 'Philips', '7', '83a5fdcf661afa28fcba74a22951854ae110f4fc8c76d4daf5317724de549854', '1649784383', '2022-04-12 17:26:23', '2022-04-12 17:26:23'),
(21, '8', 'test', '6', 'cb26c2069cb6baec54311cacf2dc179eec026f0d48199d90dcdf5786dfa80c69', '1649789006', '2022-04-12 18:43:26', '2022-04-12 18:43:26'),
(23, '12', 'tavsancelınc', '7', '6b25ba7063575bf80d344af2ba2f7abd93055d3c0e6ebce449bbdaaa4fe41247', '1650054005', '2022-04-15 20:20:05', '2022-04-15 20:20:05'),
(25, '14', 'My First Project', '6', '17c63719f545a7f2c97e5ac6f74e1cc566b8ffc6434c95f5e871fde6ea9fcc15', '1651459948', '2022-05-02 02:52:28', '2022-05-02 02:52:28');

-- --------------------------------------------------------

--
-- Tablo için tablo yapısı `shorts`
--

CREATE TABLE `shorts` (
  `id` int(11) NOT NULL,
  `ownerID` varchar(255) NOT NULL,
  `projectID` longtext NOT NULL,
  `base` longtext NOT NULL,
  `go` longtext NOT NULL,
  `view` int(11) DEFAULT 0
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Tablo döküm verisi `shorts`
--

INSERT INTO `shorts` (`id`, `ownerID`, `projectID`, `base`, `go`, `view`) VALUES
(940, '1', '0', 'https://api.neroar.com/quickLook_Api/loadobject?path=dXBsb2Fkcy8yNmMwODJmODdmNjk5OTVjYTA5YTMzYmY5NzllNmM1Zi8wMl93ZmhfZGVzay5nbGI=', 'pc3va899j9r', 0),
(941, '1', '0', 'https://api.neroar.com/quickLook_Api/loadobject?path=dXBsb2Fkcy8yNmMwODJmODdmNjk5OTVjYTA5YTMzYmY5NzllNmM1Zi8wMl93ZmhfZGVzay5nbGI=', '5o8fh79qpm7', 0),
(947, '1', '0', 'https://api.neroar.com/quickLook_Api/loadobject?path=dXBsb2Fkcy8yNmMwODJmODdmNjk5OTVjYTA5YTMzYmY5NzllNmM1Zi8wMl93ZmhfZGVzay5nbGI=', 'dc7b231vmf7', 0),
(948, '1', '0', 'https://api.neroar.com/quickLook_Api/loadobject?path=dXBsb2Fkcy8yNmMwODJmODdmNjk5OTVjYTA5YTMzYmY5NzllNmM1Zi8wMl93ZmhfZGVzay5nbGI=', 'eembe2bltg9', 0),
(1025, '8', '000', 'https://api.3drexar.com/quickLook_Api/loadobject?path=dXBsb2Fkcy9lZDU1MGY0ODc1MmUwNGEwZWI3YzQxMzA3NTUyYmFkMy9OU0wyMjAwOC5nbGI=', 'sPWgOHdmFC2', 0),
(1054, '8', '55', 'https://api.3drexar.com/quickLook_Api/loadobject?path=dXBsb2Fkcy9lZDU1MGY0ODc1MmUwNGEwZWI3YzQxMzA3NTUyYmFkMy9OU0wyMjAwOC5nbGI=', 'cn0kGIC6JXY', 0),
(1063, '12', '61', 'https://api.3drexar.com/quickLook_Api/loadobject?path=dXBsb2Fkcy8wNmMyM2MxNGRmZjJjMDgxMTliOWJkNjY4M2VhYjdiNy91cGxvYWRzX2ZpbGVzXzIwODU4MTZfY2xhc3Nyb29tK3RhYmxlXygxKS5nbGI=', 'jPFUn3MQaWz', 7),
(1074, '3', '54', 'https://api.3drexar.com/quickLook_Api/loadobject?path=dXBsb2Fkcy9kMzU0Y2YzODVmZWMxNThiZTNjY2RlNzRhZDJhZjkzMy9OU0wyMjAwOC5nbGI=', 'GT9kuMz5vAp', 1),
(1075, '12', '61', 'https://api.3drexar.com/quickLook_Api/loadobject?path=dXBsb2Fkcy8wNmMyM2MxNGRmZjJjMDgxMTliOWJkNjY4M2VhYjdiNy91cGxvYWRzX2ZpbGVzXzIwODU4MTZfY2xhc3Nyb29tK3RhYmxlXygxKS5nbGI=', 'h3orK6ScnL9', 1);

-- --------------------------------------------------------

--
-- Tablo için tablo yapısı `users`
--

CREATE TABLE `users` (
  `id` int(11) NOT NULL,
  `firstname` varchar(255) NOT NULL,
  `lastname` varchar(255) NOT NULL,
  `email` varchar(255) NOT NULL,
  `gender` varchar(255) NOT NULL,
  `password` varchar(255) NOT NULL,
  `phone` varchar(255) NOT NULL,
  `phonePrefix` varchar(255) NOT NULL,
  `country` varchar(255) NOT NULL,
  `question` varchar(255) NOT NULL,
  `answer` varchar(255) NOT NULL,
  `token` longtext NOT NULL,
  `created_at` timestamp NOT NULL DEFAULT current_timestamp(),
  `updated_at` timestamp NOT NULL DEFAULT current_timestamp() ON UPDATE current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Tablo döküm verisi `users`
--

INSERT INTO `users` (`id`, `firstname`, `lastname`, `email`, `gender`, `password`, `phone`, `phonePrefix`, `country`, `question`, `answer`, `token`, `created_at`, `updated_at`) VALUES
(1, 'Baybars', 'Han', 'mertdirilik@gmail.com', 'male', 'b91dc1724a933db77acbf2da89e4e34b', '5061640580', '', '', 'What is your Birthdate?', '1', 'tbx202243f4ebdda5f32f04a2db7bafd07231363531343434373031.bWVydGRpcmlsaWtAZ21haWwuY29tYjkxZGMxNzI0YTkzM2RiNzdhY2JmMmRhODllNGUzNGI=', '2021-11-09 17:20:19', '2022-05-01 22:38:21'),
(3, 'Adem', 'Kurt', 'ademkurtankara@gmail.com', 'male', 'c271d9f0194327627375cf36b6d54fc3', '5061672721', '', '', 'What is your Birthdate?', 'gtazrail', 'tbx4fa4ec16acbd8c7f6030aba7d3608e8231363534303333383333.YWRlbWt1cnRhbmthcmFAZ21haWwuY29tYzI3MWQ5ZjAxOTQzMjc2MjczNzVjZjM2YjZkNTRmYzM=', '2021-12-11 10:59:42', '2022-05-31 21:50:33'),
(4, 'Baybars', 'Han', 'mertdirilik123@gmail.com', '-', 'b91dc1724a933db77acbf2da89e4e34b', '5061640580', '90', '', 'What is your Birthdate?', 'deneme', 'tbx1fe102604f3108ded4d7cb3b0fa9a97331363339343034353833.bWVydGRpcmlsaWsxMjNAZ21haWwuY29tYjkxZGMxNzI0YTkzM2RiNzdhY2JmMmRhODllNGUzNGI=', '2021-12-13 14:09:34', '2021-12-13 14:09:43'),
(5, 'Baybars', 'Han', 'mertdirilddik@gmail.com', '-', 'b91dc1724a933db77acbf2da89e4e34b', '5061640580', '1242', '', 'What is your Birthdate?', 'smsm', 'tbxa410ac57b8275f6b754e8be86083b13e31363339343037313334.bWVydGRpcmlsZGRpa0BnbWFpbC5jb21iOTFkYzE3MjRhOTMzZGI3N2FjYmYyZGE4OWU0ZTM0Yg==', '2021-12-13 14:23:20', '2021-12-13 14:52:14'),
(6, 'Baybars', 'Han', 'm3ertdirilik@gmail.com', '-', 'b91dc1724a933db77acbf2da89e4e34b', '5061640580', '1', '', 'What is Your old Phone Number', '123123', '', '2021-12-13 14:41:53', '2021-12-13 14:41:53'),
(7, 'Baybars', 'Han', 'mertesttdirilik@gmail.com', '-', 'b91dc1724a933db77acbf2da89e4e34b', '+905061640580', '1', '', 'What is your Birthdate?', 'test', 'tbx50cf3e497642f878dcd1a2f42ea3504531363339343036373437.bWVydGVzdHRkaXJpbGlrQGdtYWlsLmNvbWI5MWRjMTcyNGE5MzNkYjc3YWNiZjJkYTg5ZTRlMzRi', '2021-12-13 14:45:33', '2021-12-13 14:45:47'),
(8, 'erhan', 'dirilik', 'dirilikerhan355@gmail.com', '-', 'ef6a940c261f732fff31cbb27ca6964a', '5456752532', '90', '', 'What is your Pet Name?', 'archii', 'tbxbb91c6b43e43020a0fec9b0a1a65bdae31363532323137323838.ZGlyaWxpa2VyaGFuMzU1QGdtYWlsLmNvbWVmNmE5NDBjMjYxZjczMmZmZjMxY2JiMjdjYTY5NjRh', '2021-12-13 17:50:55', '2022-05-10 21:14:48'),
(9, 'Tayfun', 'OZTURK', 'info@ozturkmedya.com', '-', 'f4fc07cf6a61fa5053fbc51c9d4d93b7', '5385290000', '90', '', 'What is your Birthdate?', '1990', 'tbx7967676c809473e87d81e811238dadbb31363432393638363232.aW5mb0BvenR1cmttZWR5YS5jb21mNGZjMDdjZjZhNjFmYTUwNTNmYmM1MWM5ZDRkOTNiNw==', '2022-01-23 20:10:07', '2022-01-23 20:10:22'),
(10, 'rogue', 'knight', 'rogue@knight.com', '-', 'e10adc3949ba59abbe56e057f20f883e', '6161616161', '375', '', 'What is your Birthdate?', '1990810', 'tbx3ae9aecff9e88216e0f82af5f5eced1f31363433373335313030.cm9ndWVAa25pZ2h0LmNvbWUxMGFkYzM5NDliYTU5YWJiZTU2ZTA1N2YyMGY4ODNl', '2022-02-01 17:04:22', '2022-02-01 17:05:00'),
(11, 'Mohamed ', 'Althaf', 'mohamed.althaf@kubeeanytics.com', '-', 'f2a0da1ee70c31959b5af0148d5f30d7', '524105721', '971', '', 'What is your Birthdate?', '26/02/1999', '', '2022-02-03 08:13:43', '2022-02-03 08:13:43'),
(12, 'Baybars', 'Han', 'mertdirilik9@gmail.com', '-', 'b91dc1724a933db77acbf2da89e4e34b', '05061640580', '90', '', 'What is your Birthdate?', '1646123', 'tbx17abb496cffca9ff2b75cd43cad73edf31363533303331323435.bWVydGRpcmlsaWs5QGdtYWlsLmNvbWI5MWRjMTcyNGE5MzNkYjc3YWNiZjJkYTg5ZTRlMzRi', '2022-04-06 07:50:32', '2022-05-20 07:20:45'),
(13, 'Baybars', 'mertdirilik9@gmail.com', 'mertdirilik33@gmail.com', '-', 'b91dc1724a933db77acbf2da89e4e34b', '+905061640580', '1', '', 'What is your Birthdate?', '1', '', '2022-04-13 06:44:34', '2022-04-13 06:44:34'),
(14, 'Oleksii', 'Demianchuk', 'sun.mount.1991@gmail.com', '-', '2a09733dbc61d641c1d97f2f73c94f09', '123456789', '380', '', 'What is your Birthdate?', '1991-05-12', 'tbx32ce46a3bfe4aca2ffcd80058374801f31363531343633343239.c3VuLm1vdW50LjE5OTFAZ21haWwuY29tMmEwOTczM2RiYzYxZDY0MWMxZDk3ZjJmNzNjOTRmMDk=', '2022-05-02 02:51:32', '2022-05-02 03:50:29');

--
-- Dökümü yapılmış tablolar için indeksler
--

--
-- Tablo için indeksler `builds`
--
ALTER TABLE `builds`
  ADD PRIMARY KEY (`id`);

--
-- Tablo için indeksler `projects`
--
ALTER TABLE `projects`
  ADD PRIMARY KEY (`id`);

--
-- Tablo için indeksler `shorts`
--
ALTER TABLE `shorts`
  ADD PRIMARY KEY (`id`);

--
-- Tablo için indeksler `users`
--
ALTER TABLE `users`
  ADD PRIMARY KEY (`id`);

--
-- Dökümü yapılmış tablolar için AUTO_INCREMENT değeri
--

--
-- Tablo için AUTO_INCREMENT değeri `builds`
--
ALTER TABLE `builds`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=71;

--
-- Tablo için AUTO_INCREMENT değeri `projects`
--
ALTER TABLE `projects`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=26;

--
-- Tablo için AUTO_INCREMENT değeri `shorts`
--
ALTER TABLE `shorts`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=1076;

--
-- Tablo için AUTO_INCREMENT değeri `users`
--
ALTER TABLE `users`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=15;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
