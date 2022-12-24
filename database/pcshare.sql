-- phpMyAdmin SQL Dump
-- version 5.2.0
-- https://www.phpmyadmin.net/
--
-- Servidor: 127.0.0.1
-- Tiempo de generación: 16-12-2022 a las 03:50:40
-- Versión del servidor: 10.4.25-MariaDB
-- Versión de PHP: 8.1.10

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHAdRACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Base de datos: `pcshare`
--

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `computers`
--

CREATE TABLE `computers` (
  `id` int(255) NOT NULL,
  `nombre` varchar(255) NOT NULL,
  `procesador` varchar(255) NOT NULL,
  `tarjetaDeVideo` varchar(255) NOT NULL,
  `tarjetaMadre` varchar(255) NOT NULL,
  `gabinete` varchar(255) NOT NULL,
  `almacenamiento` varchar(255) NOT NULL,
  `urlFoto` varchar(255) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `users`
--

CREATE TABLE `users` (
  `Id` int(255) NOT NULL,
  `Name` varchar(50) NOT NULL,
  `LastName` varchar(50) NOT NULL,
  `UserName` varchar(25) NOT NULL,
  `Password` varchar(255) NOT NULL,
  `email` varchar(255) NOT NULL,
  `age` int(3) NOT NULL,
  `createdAt` varchar(255) NOT NULL,
  `updatedAt` varchar(255) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Volcado de datos para la tabla `users`
--

INSERT INTO `users` (`Id`, `Name`, `LastName`, `UserName`, `Password`, `email`, `age`, `createdAt`, `updatedAt`) VALUES
(27, 'hola', 'xd', 'xd', '$2a$10$TWJCQuy7K135DKlQcLMFaOUrsxp4uBuYXM1ZD6AdElCheUaRs9dWG', 'wg@hotmial.com', 400, '2022-12-15 20:46:08', '2022-12-15 20:46:08'),
(28, 'Wilberth', 'Gamboa', 'Tamajire', '$2a$10$rfXbnU5duHb00JEcoSuEWe1LcauTfuQf9k9/tVI2kumyr/wRhQI4.', 'tamajire@gmail.com', 20, '2022-12-15 21:14:01', '2022-12-15 21:14:01'),
(29, 'usuario2', 'usuario2', 'usuario2', '$2a$10$.ONsr9khi2gfBlw0mZbhTu9jhv6N33UAzbYj1VjF/mv6d8MUkWuC2', 'usuario2@gmail.com', 20, '2022-12-16 00:30:50', '2022-12-16 00:30:50');

--
-- Índices para tablas volcadas
--

--
-- Indices de la tabla `computers`
--
ALTER TABLE `computers`
  ADD PRIMARY KEY (`id`);

--
-- Indices de la tabla `users`
--
ALTER TABLE `users`
  ADD PRIMARY KEY (`Id`);

--
-- AUTO_INCREMENT de las tablas volcadas
--

--
-- AUTO_INCREMENT de la tabla `computers`
--
ALTER TABLE `computers`
  MODIFY `id` int(255) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT de la tabla `users`
--
ALTER TABLE `users`
  MODIFY `Id` int(255) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=30;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
