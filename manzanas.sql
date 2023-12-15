-- phpMyAdmin SQL Dump
-- version 5.2.1
-- https://www.phpmyadmin.net/
--
-- Servidor: 127.0.0.1
-- Tiempo de generación: 14-12-2023 a las 21:59:18
-- Versión del servidor: 10.4.28-MariaDB
-- Versión de PHP: 8.2.4

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Base de datos: `basededatos`
--

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `manzanas`
--

CREATE TABLE `manzanas` (
  `Id_manzana` int(10) NOT NULL,
  `Nombre` varchar(40) DEFAULT NULL,
  `Localidad` varchar(20) DEFAULT NULL,
  `Dirección` varchar(50) DEFAULT NULL,
  `Municipio` varchar(255) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Volcado de datos para la tabla `manzanas`
--

INSERT INTO `manzanas` (`Id_manzana`, `Nombre`, `Localidad`, `Dirección`, `Municipio`) VALUES
(1, 'Cecilia', 'Usme', 'Transversal 87 carrera 5-80', 'Bogotá'),
(2, 'Martha', 'Usme', 'Transversal 87 carrera 5-80', 'Bogotá'),
(3, 'Carmen', 'San Cristobal', 'Carrera 34 numero 65', 'Bogotá'),
(4, 'Liliana', 'Kennedy', 'Avenida el dorado calle 22', 'Bogotá'),
(5, 'Cristina', 'Tunjuelito', 'Carrera 116 numero 9', 'Bogotá'),
(6, 'Sonia', 'Suba', 'Transversal 5 numero 78', 'Bogotá'),
(7, 'Emmanuel', 'Fontibón', 'Carrera 106 #16-86', 'Bogotá'),
(8, 'Emmanuel', 'Fontibón', 'Carrera 106 #16-86', 'Bogotá'),
(9, 'Hector', 'Suba', 'KRA 106 #16-86', 'Cundinamarca'),
(10, 'Hector', 'Suba', 'KRA 106 #16-86', 'Cundinamarca'),
(11, 'o', 'y', 'm', 'p'),
(12, 'o', 'y', 'm', 'p');

--
-- Índices para tablas volcadas
--

--
-- Indices de la tabla `manzanas`
--
ALTER TABLE `manzanas`
  ADD PRIMARY KEY (`Id_manzana`);

--
-- AUTO_INCREMENT de las tablas volcadas
--

--
-- AUTO_INCREMENT de la tabla `manzanas`
--
ALTER TABLE `manzanas`
  MODIFY `Id_manzana` int(10) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=13;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
