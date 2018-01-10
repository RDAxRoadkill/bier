-- phpMyAdmin SQL Dump
-- version 4.7.4
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1:3306
-- Gegenereerd op: 10 jan 2018 om 08:21
-- Serverversie: 5.7.19
-- PHP-versie: 5.6.31

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET AUTOCOMMIT = 0;
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `bieren`
--

-- --------------------------------------------------------

--
-- Tabelstructuur voor tabel `soorten`
--

DROP TABLE IF EXISTS `soorten`;
CREATE TABLE IF NOT EXISTS `soorten` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `naam` varchar(255) NOT NULL,
  `beschrijving` varchar(255) NOT NULL,
  `prijs` double NOT NULL,
  `voorraad` int(11) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=MyISAM AUTO_INCREMENT=67 DEFAULT CHARSET=latin1;

--
-- Gegevens worden geëxporteerd voor tabel `soorten`
--
INSERT INTO `soorten` (`id`, `naam`, `beschrijving`, `prijs`, `voorraad`) VALUES
(1, 'Fluit Hertog Jan', 'Goed bier', 2.75, 10),
(3, 'Test Bier', 'test biertje', 1, 100);
COMMIT;
