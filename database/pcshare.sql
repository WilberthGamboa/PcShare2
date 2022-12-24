-- phpMyAdmin SQL Dump
-- version 5.2.0
-- https://www.phpmyadmin.net/
--
-- Servidor: 127.0.0.1
-- Tiempo de generación: 24-12-2022 a las 07:48:32
-- Versión del servidor: 10.4.25-MariaDB
-- Versión de PHP: 8.1.10

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Base de datos: `pcshare`
--

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `computadorasdeusuarios`
--

CREATE TABLE `computadorasdeusuarios` (
  `idComputadora` int(255) NOT NULL,
  `idUsuario` int(255) NOT NULL,
  `createdAt` date NOT NULL,
  `updatedAt` date NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Volcado de datos para la tabla `computadorasdeusuarios`
--

INSERT INTO `computadorasdeusuarios` (`idComputadora`, `idUsuario`, `createdAt`, `updatedAt`) VALUES
(1, 1, '2022-12-23', '2022-12-23'),
(2, 3, '2022-12-23', '2022-12-23'),
(3, 3, '2022-12-23', '2022-12-23');

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
  `urlFoto` varchar(255) NOT NULL,
  `createdAt` date NOT NULL,
  `updatedAt` date NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Volcado de datos para la tabla `computers`
--

INSERT INTO `computers` (`id`, `nombre`, `procesador`, `tarjetaDeVideo`, `tarjetaMadre`, `gabinete`, `almacenamiento`, `urlFoto`, `createdAt`, `updatedAt`) VALUES
(1, 'Wilberth pc', 'ryzen 5600x', 'rtx 3060', 'dsh3', 'uno generico xd', 'm.2', 'c5fb8c19-5efe-4cc3-9c7d-7b7425ade490.jpg', '2022-12-23', '2022-12-23'),
(2, 'MildredPc', 'ryzen 5600x', 'rtx 3060', 'dsh3', 'uno generico xd', 'm.2', 'fb747146-eb9d-44bc-b94c-7515370b8137.jpg', '2022-12-23', '2022-12-23'),
(3, 'RenatoPc', 'ryzen 5600x', 'rtx 3060', 'dsh3', 'uno generico xd', 'm.2', 'dccc915a-4396-4bc6-a378-94a43cc491d6.jpg', '2022-12-23', '2022-12-23');

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
(1, 'Wilberth', 'Gamboa', 'Tamajire', '$2a$10$ATAMQZyT8DqeneQZ9KJNSuVpv4kSre9prtNCVEUjdnJH.cJCO1/Zi', 'wilberth@gmail.com', 20, '2022-12-23 23:13:07', '2022-12-23 23:13:07'),
(2, 'Renato', 'García', 'Xoerix', '$2a$10$u3wRyvgDBKx8es57JSek5.V8xvsTXvun04hJ3aD0GbI/eK7bupLRS', 'renato@gmail.com', 20, '2022-12-23 23:14:07', '2022-12-23 23:14:07'),
(3, 'Mildred', 'García', 'Milchan', '$2a$10$1CdbrFTjMc6YgChW1GZsPeP4hFK.ncKJJ8/nxrepO2wcA5nnjuRa2', 'mildred@gmail.com', 20, '2022-12-23 23:14:23', '2022-12-23 23:14:23');

--
-- Índices para tablas volcadas
--

--
-- Indices de la tabla `computadorasdeusuarios`
--
ALTER TABLE `computadorasdeusuarios`
  ADD KEY `userid` (`idUsuario`),
  ADD KEY `computerid` (`idComputadora`);

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
  MODIFY `id` int(255) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=4;

--
-- AUTO_INCREMENT de la tabla `users`
--
ALTER TABLE `users`
  MODIFY `Id` int(255) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=4;

--
-- Restricciones para tablas volcadas
--

--
-- Filtros para la tabla `computadorasdeusuarios`
--
ALTER TABLE `computadorasdeusuarios`
  ADD CONSTRAINT `computerid` FOREIGN KEY (`idComputadora`) REFERENCES `computers` (`id`) ON DELETE CASCADE ON UPDATE CASCADE,
  ADD CONSTRAINT `userid` FOREIGN KEY (`idUsuario`) REFERENCES `users` (`Id`) ON DELETE CASCADE ON UPDATE CASCADE;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
