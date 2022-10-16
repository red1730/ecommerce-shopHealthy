-- phpMyAdmin SQL Dump
-- version 5.1.1
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1:3306
-- Generation Time: Oct 15, 2022 at 10:20 PM
-- Server version: 10.5.16-MariaDB-cll-lve
-- PHP Version: 7.2.34

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `u381026178_pruebaGrupal`
--

-- --------------------------------------------------------

--
-- Table structure for table `categoria`
--

CREATE TABLE `categoria` (
  `idCategoria` int(11) NOT NULL,
  `nombre` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `categoria`
--

INSERT INTO `categoria` (`idCategoria`, `nombre`) VALUES
(1, 'frutos secos'),
(2, 'galletitas y panificados'),
(3, 'mix y granolas'),
(4, 'barritas y alfajores'),
(5, 'chocolates'),
(6, 'snacks y salados'),
(7, 'arroz  y fideos'),
(8, 'dulces, mermeladas y untables'),
(9, 'cereales y legumbres'),
(10, 'harinas y semillas'),
(11, 'sal, aceite y vinagre'),
(12, 'jugos naturales'),
(13, 'leches vegetales'),
(14, 'yerbas e infusiones'),
(15, 'kéfir y kombuchas'),
(16, 'vinos'),
(17, 'sin tacc'),
(18, 'sin azucar'),
(19, 'organico/agroecologico'),
(20, 'vegano');


--
-- Table structure for table `marca`
--

CREATE TABLE `marca` (
  `idMarca` int(11) NOT NULL,
  `nombre` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `marca`
--

INSERT INTO `marca` (`idMarca`, `nombre`) VALUES
(1, 'aguara'),
(2, 'ajedrez'),
(3, 'almadre'),
(4, 'andino'),
(5, 'biba'),
(6, 'celienergy'),
(7, 'chocoleit'),
(8, 'cocoon'),
(9, 'copani'),
(10, 'dale coco'),
(11, 'dec'),
(12, 'deli & raw'),
(13, 'demeter el pampa'),
(14, 'don paisa'),
(15, 'doña magdalena'),
(16, 'dr cacao'),
(17, 'dulce del jardín'),
(18, 'epicos'),
(19, 'familia cecchin'),
(20, 'fidel'),
(21, 'for good'),
(22, 'frutos del norte'),
(23, 'gell singh'),
(24, 'genser'),
(25, 'god bless you'),
(26, 'grün'),
(27, 'heredia'),
(28, 'homemade'),
(29, 'isla xocolatl'),
(30, 'jesper'),
(31, 'jual'),
(32, 'kyojin'),
(33, 'la palma'),
(34, 'laddubar'),
(35, 'madame vegetal'),
(36, 'maple'),
(37, 'marita'),
(38, 'mathienzo'),
(39, 'mayda'),
(40, 'molé'),
(41, 'naturals'),
(42, 'neptune'),
(43, 'nuestros sabores'),
(44, 'organikal'),
(45, 'pampas rice'),
(46, 'pittier pan'),
(47, 'roapipó'),
(48, 'schatzi'),
(49, 'semillas gauchas'),
(50, 'sol de acuario'),
(51, 'sturla'),
(52, 'tres semillas'),
(53, 'vrink'),
(54, 'wakas');

-- --------------------------------------------------------

--
-- Table structure for table `producto`
--

CREATE TABLE `producto` (
  `idProducto` int(11) NOT NULL,
  `nombre` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `precio` int(11) NOT NULL,
  `idMarca` int(11) NOT NULL,
  `descripcion` text COLLATE utf8mb4_unicode_ci NOT NULL,
  `img` text COLLATE utf8mb4_unicode_ci NOT NULL,
  `idCategoria` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `stock` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `producto`
--

INSERT INTO `producto` (`idProducto`, `nombre`, `precio`, `idMarca`, `descripcion`, `img`, `idCategoria`, `stock`) VALUES
(1, 'nueces orgánicas 500gr', 1592, 13, 'Organicas', 'DEMETER-EL-PAMPA-ORGANICO-NUECES-PECAN-ORGANICAS-500G.jpg', '1, 19', 1),
(2, 'almendras tostadas c/azúcar orgánica y coco 90g', 375, 48, 'Envase de 90gr. Producto orgánico. Envase «Doypack» (Puede volver a cerrarse herméticamente una vez abierto)', 'SCHATZI-ALMENDRAS-CON-AZUCAR-Y-COCO-sin-peso.jpg', '1, 19', 1),
(3, 'mix de frutos secos caramelizados 70gr', 340, 29, 'Con azucar orgánica', 'ISLA-XOCOLATL-MIX-DE-FRUTOS-SECOS-CARAMELIZADOS-70G.jpg', '1, 19', 1),
(4, 'granola taste 1kg', 1790, 28, 'CON MIEL, FRUTOS SECOS, GIRASOL, COCO Y MÁS!', 'GRANOLA-TASTE-CMIEL-FRUTOS-SECOSGIRASOLCOCO-HOMEMADE-•-1-KG.jpg', '1,17', 1),
(5, 'maní tostado salado 350gr', 511, 11, 'Frasco hermético con 350gr de miel, maní tostado salado y sabor', 'DEC-MANI-HONEY-ROASTED-350G.jpg', '1, 17', 1),
(6, 'grisines integrales con sésamo y chía apto vegano 200g', 207, 46, 'sesamo y chia. Vegano.', 'PITTIER-PAN-GRISINES-INTEGRALES-CHIA-Y-SESAMO-VEGANOS-200G.jpg', '2, 20', 1),
(7, 'triangulitos horneados de masa madre de sésamo y sal', 276, 3, 'Elaborado con masa madre.', 'ALMADRE-TRIANGULOS-DE-SESAMO-Y-SAL-MARINA.jpg', '2, 20', 1),
(8, 'pepas de frambuesa veganas 150gr', 335, 26, 'Vegano', 'GRUN-PEPAS-ORG-VEG-150G.jpg', '2, 20', 1),
(9, 'galletitas integrales de cacao y cascaritas de naranja 350g', 463, 35, 'Integral con cacao y naranja', 'MADAME-VEGETAL-GALLETITAS-CACAO-Y-CASCARITAS-DE-NARANJA-350G.jpg', '2', 1),
(10, 'crackers \"deli & raw\" meditarránea 90g', 307, 12, 'Raw', 'DELI-RAW-CRACKERS-MEDITERRANEA.jpg', '2', 1),
(11, 'mix frutal premium (x 1 Kg)', 2290, 29, 'Almendras, Avellanas, maní, Nueces Pecan, Nuez, Castañas de Cajú. Puede variar según disponibilidad y época del año. Excelente Calidad. Presentación: Bolsa de 1 Kg', 'AS-FRUTOS-SECOS-MIX-PREMIUM-1.jpg', '3', 1),
(12, 'mix salado con curry ahumado (x 100g)', 240, 29, 'mix de girasol y maní con sal marina y curry ahumado (sin conservantes ni aditivos). Fuente de vitamina E, magnesio y cobre.', 'ISLA-XOCOLATL-MIX-SALADO-CON-CURRY-AHUMADO-.jpg', '3', 1),
(13, 'mezcla crocante (Chía, sésamo y Girasol tostado) (x 250g)', 395, 51, 'mix de semillas sin tacc', 'MEZCLA-CROCANTE-envasada-STURLA-•-250-g.jpg', '3, 17', 1),
(14, 'granola orgánica de manzana (x 400g)', 599, 48, 'Alimento a base de avena arrollada orgánica tostada con azúcar orgánico, pasas de uva orgánicas, manzana y canela', 'SCHATZI-GRANOLA-ORG-DE-MANZANA-400G.jpg', '3, 19', 1),
(15, 'granola desayuno integral orgánica (x 400g)', 617, 48, 'Alimento a base de avena arrollada orgánica tostada con azúcar orgánico, pasas de uva orgánicas, almendras y coco. lista para consumir como snack o con leche o yogurt.', 'SCHATZI-GRANOLA-ORG-DESAYUNO-INTEGRAL-400G.jpg', '3, 19', 1),
(16, 'alfajores de dulce de leche y chocolate blanco - sin tacc (x 12 uni.)', 1715, 6, 'Alfajor a base de Harina de Nuez. Relleno de Dulce de Leche y bañado en Chocolate Blanco. Sin tacc. 12 Alfajores de 60 gr. c/u', 'CELIENERGY-CAJA-ALFAJOR-BLANCO-HARINA-DE-NUEZ.jpg', '4, 17', 1),
(17, 'alfajores de mebrillo y chocolate - sin tacc (x 12 uni.)', 1715, 6, 'Alfajores a base de Harina de Avellanas. Rellenos de Membrillo y bañados en Chocolate Negro. Libres de Gluten – SIN TACC. 12 Alfajores de 60g c/u', 'CELIENERGY-CAJA-ALFAJOR-MEMBRILLO-DE-AVELLANA-CHOC-NEGRO-60G.jpg', '4, 17', 1),
(18, 'barritas de avena y pasas (x 6 uni.) (x 200g)', 619, 26, 'Barrita de avena y pasas', 'GRUN-BARRITAS-DE-AVENA-Y-PASAS-200G.jpg', '4', 1),
(19, 'barrita brownie (12 uni. x 30g)', 1690, 34, 'Dátiles, castañas de cajú, cacao. Raw Vegan', 'GOLDEN-MONKEY-SRI-SRI-BARRA-LADDU-BAR-CAJA-X12-BROWNIE-CASTANAS-30G.jpg', '4, 20', 1),
(20, 'barrita de árandanos con dátil orgánico \"sri sri\" tattva (12 uni. X 30g)', 1690, 34, 'Dátiles, castañas de cajú, arándanos. Raw Vegan', 'GOLDEN-MONKEY-BARRA-LADDU-BAR-ARANDANOS-30G.jpg', '4, 19, 20', 1),
(21, 'chocolate con leche de coco y stevia (x 63 g)', 395, 9, 'vegano', 'COPANI-CHOCOLATE-CON-LECHE-DE-COCO-Y-STEVIA-63G.jpg', '5, 20', 1),
(22, 'chocolate 80% cacao (x 63 g)', 370, 9, 'vegano. Cacao 80%.', 'COPANI-CHOCOLATE-80-63G.jpg', '5, 20', 1),
(23, 'chocolate 70% con almendras y coco (x 70g)', 615, 16, 'cacao 70%. Con almendras y coco', 'DR-CACAO-CHOCOLATE-70-CON-ALMENDRAS-Y-COCO.jpg', '5, 19', 1),
(24, 'cacao amargo en polvo alcalino (x 250g)', 970, 7, 'cacao 100%. Sin tacc. Sin azúcar.', 'CACAO-AMARGO-EN-POLVO-CHOCOLEIT-x-500g.jpg', '5, 17, 18', 1),
(25, 'cacao en polvo puro Ecuador (x 130g)', 525, 16, 'cacao en polvo puro. Origen Ecuador.', 'CACAO-en-polvo-puro-Ecuador-cajita-carton-DR-CACAO-•-300g.jpg', '5', 1),
(26, 'triangulitos horneados de masa madre de sésamo y sal marina(130gr)', 276, 3, 'con ingredientes naturales\nsin aditivos ni conservantes\napto vegano\nno contiene grasas trans\nalto contenido de fibra', 'ALMADRE-TRIANGULOS-DE-SESAMO-Y-SAL-MARINA.jpg', '6', 1),
(27, 'thins horneados de masa madre(200gr)', 437, 3, 'de sésano y sal', 'ALMADRE-THINS-SESAMO-Y-SAL-MARINA-200G.jpg', '6', 1),
(28, 'chips de batatitas y sal marina (80gr)', 147, 43, '100% origen vegano', 'NUESTRO-SABORES-1-BATATITAS-80G.jpg', '6, 20', 1),
(29, 'chips de papas rústicas y sal marina', 147, 43, '100% origen vegano', 'NUESTRO-SABORES-3-PAPAS-RUSTICAS-80G.jpg', '6, 20', 1),
(30, 'semillas de girasol', 194, 24, 'fuente de  potasio y magnesio ', 'GENSER-SEMILLAS-DE-GIRASOL-120G.jpg', '6, 20', 1),
(31, 'premezcla para croquetas de arroz caprese', 421, 40, 'agregale agua y listo', 'MOLE-CROQUETAS-DE-ARROZ-200G-DIAG.jpg', '7, 17', 1),
(32, 'risotto de hongos', 425, 40, 'hongos dde pino', 'MOLE-RISOTTO-DE-HONGOS.jpg', '7', 1),
(33, 'arroz yamaní integral 100% natural', 359, 45, '100% natural', 'AS-ARROZ-YAMANI-INTEGRAL.jpg', '7, 19', 1),
(34, 'fideos fusilli de chia', 229, 54, 'Chia sin tacc', 'WAKAS-FIDEOS-FUSILLI-DE-CHIA-250G.jpg', '7, 17', 1),
(35, 'arroz aromático integral orgánico 500gr', 490, 45, 'Organico', 'PAMPAS-RICE-ARROZ-AROMATICO-INTEGRAL-ORG-500G.jpg', '7, 19', 1),
(36, 'cous cous marroquí', 275, 40, 'Origen marroqui', 'MOLE-COUS-COUS-MARROQUI.jpg', '7', 1),
(37, 'croquetas de arroz 200gr', 421, 40, 'sin tacc', 'MOLE-CROQUETAS-DE-ARROZ-200G-DIAG.jpg', '7, 17', 1),
(38, 'mermelada artesanal de frutilla ', 455, 39, 'producto natural', 'MAYDA-MERMELADA-DE-FRUTILLA-490G.jpg', '8', 1),
(39, 'dátiles medjoul de israel grandes (x 1kg)', 7970, 33, 'sin tacc', 'LA-PALMA-DATILES-MEDJOUL-1KG-1.jpg', '8, 17', 1),
(40, 'dulce de leche vegano con leche de coco (x 400g)', 656, 15, 'sin tacc', 'DONA-MAGDALENA-DULCE-DE-LECHE-VEGANO-400G.jpg', '8, 17', 1),
(41, 'syrup de maple canada', 2355, 36, '100% pure', 'MAPLE-SYRUP-CANADA-100-PURE-250ML.jpg', '8', 1),
(42, 'dulce de manzana orgánico (x450g)', 781, 17, 'organico', 'DULCES-DEL-JARDIN-DULCE-DE-MANZANA-ORG-CON-450G.jpg', '8, 19', 1),
(43, 'avena mediana orgánica(300gr)', 295, 48, '100% orgánica', 'SCHATZI-AVENA-ARROLLADA-TRADICIONAL-ORGANICA-300G.jpg', '8, 19', 1),
(44, 'granola desayuno integral orgánica(400gr)', 617, 48, '100% orgánica', 'SCHATZI-GRANOLA-ORG-DESAYUNO-INTEGRAL-400G.jpg', '9, 19', 1),
(45, 'lentejas 100% natural(300gr)', 420, 48, '100% natural', 'SCHATZI-LENTEJAS-300G.jpg', '9, 20', 1),
(46, 'porotos negros(500gr)', 225, 51, '100% natural', 'STURLA-POROTOS-NEGROS-500G.jpg', '9, 20', 1),
(47, 'garbanzo mediano(1kg)', 331, 41, '100% natural', 'AS-GARBANZOS.jpg', '9, 20', 1),
(48, 'harina de trigo sarraceno integral 500g', 325, 49, 'En bolsa biodegradable. Libre de gluten. Sin trigo, avena, cebada o centeno', 'HARINA-DE-TRIGO-SARRACENO-INTEGRAL-SEMILLAS-GAUCHAS-•-500-g.jpg', '10, 17', 1),
(49, 'harina de trigo integral agroeocológico 1kg', 335, 14, 'En bolsa de papel y aluminio. Producto de la tierra e industria argenina.', 'HARINA-INTEGRAL-AGROECOLOGICO-DON-PAISA-•-1-kg.jpg', '10, 19', 1),
(50, 'harina de avena agroecológica 400gr', 363, 18, 'En bolsa de papel.', 'EPICOS-HARINA-INTEGRAL-DE-AVENA-400G.jpg', '10, 19', 1),
(51, 'semillas de chía 150gr', 280, 21, 'Contiene Omega 3, Omega 6 y antioxidantes.Fuente de proteínas, fibras, magnesio y fósforo.', 'FOR-GOOD-SEMILLAS-DE-CHIA-150G.jpg', '10', 1),
(52, 'mix ensaladas y sopas 150g', 245, 24, 'Con semillas de girasol; chía; sésamo y Lino. Te recomendamos usarlas Activadas o Molidas. Son riquísimas y supersaludables! Dale un toque especial a tus ensaladas con este mix.', 'GENSER-MIX-ENSALADAS-Y-SOPAS-150G.jpg', '10', 1),
(53, 'sal rosa del himalaya en salero (x 400g)', 471, 23, 'sal rosa del himalaya', 'GELL-SINGH-SAL-ROSA-DEL-HIMALAYA-EN-SALERO-–-DHARAM-SINGH-400g.jpg', '11', 1),
(54, 'sal marina fina baja en sodio (x 50g)', 259, 23, 'sal marina baja en sodio. Potasio 49%.', 'GELL-SINGH-SAL-MARINA-BAJO-EN-SODIO-50G.jpg', '11', 1),
(55, 'aceite de coco neutro (x 500ml)', 1641, 25, 'aceite de coco neutro refinado.', 'GOD-BLESS-YOU-ACEITE-DE-COCO-NEUTRO-500ML.jpg', '11', 1),
(56, 'aceite de lino orgánico sin tacc (x 500ml)', 1025, 1, 'aceite de lino orgánico sin tacc. Botella de vidrio oscura.', 'AGUARA-ACEITE-DE-LINO-500ML.jpg', '11, 17, 19', 1),
(57, 'aceite de oliva orgánico virgen extra (x 500cc)', 1099, 22, 'aceite de oliva orgánico virgen extra', 'ACEITE-DE-OLIVA-FRUTOS-DEL-NORTE-500ML.jpg', '11, 19', 1),
(58, 'jugo de aloe bebible natural (x500ml)', 1399, 31, 'con clorofila y jengibre', 'JUAL-JUGO-DE-ALOE-VERA-CON-CLOROFILA-SABOR-JENGIBRE-500ML.jpg', '12', 1),
(59, 'jugo de aloe bebible natural (x500ml)', 1499, 31, 'no contiene azúcar ni gelificante', 'JUAL-JUGO-DE-ALOE-VERA-NATURAL-500ML.jpg', '12, 18', 1),
(60, 'leche de coco (x 1 litro)', 800, 10, 'leche de coco sin azúcar', 'DALE-COCO-LECHE-DE-COCO-1L.jpg', '12, 18, 21', 1),
(61, 'leche de quinoa original (x 1 Litro)', 1000, 5, 'leche de quinoa original. Sin lactosa. Quinoa agroecológica.', 'BIBA-LECHE-DE-QUINOA-1L.jpg', '12, 21', 1),
(62, 'leche de almendras sin azúcar (x 1 litro)', 600, 8, 'leche de almendras sin azúcar.', 'COCOON-LECHE-DE-ALMENDRAS-SIN-AZUCAR-1L.jpg', '12, 18, 21', 1),
(63, 'leche de avena sin azúcar (x 1 litro)', 455, 53, 'leche de avena sin azúcar.', 'VRINK-LECHE-DE-AVENA-SIN-AZUCAR-1L.jpg', '13, 18, 21', 1),
(64, 'leche de almendras chocolatada (x 1 litro)', 419, 53, 'leche de almendras chocolatada. Sin lactosa.', 'VRINK-LECHE-DE-ALMENDRAS-CHOCOLATADA-1L-1.jpg', '13, 21', 1),
(65, 'yerba mate sin tacc (500gr)', 600, 38, 'Selección especial, cosecha manual y estacionamiento natural de 24 meses.  No se acelera en hornos, no tiene conservantes ni aditivos químicos.', 'MATHIENZO-YERBA-MATE-SEL-ESP-500G.jpg', '13, 17', 1),
(66, 'yerba mate con hierbas (menta,poleo,peperina) (500gr)', 700, 30, 'Con menta, poleo y peperina', 'JESPER-YERBA-MATE-CON-HIERBAS-SERRANAS-500G.jpg', '13', 1),
(67, 'yerba sol de acuario tradicional orgánica (500gr)', 650, 50, 'Organica', 'SOL-DE-ACUARIO-YERBA-MATE-500G.jpg', '13', 1),
(68, 'yerba mate tradicional(500gr)', 699, 47, 'Tradicional', 'ROAPIPO-YERBA-MATE-1KG.jpg', '14', 1),
(69, 'yerba mate (500gr)', 515, 2, 'Tradicional', 'AJEDREZ-YERBA-MATE-500G.jpg', '14', 1),
(70, 'cafe de garbanzo(100gr)', 690, 52, 'cafe tipo molido, 100% vegetal', 'TRES-SEMILLAS-CAFE-DE-GARBANZO.jpg', '14', 1),
(71, 'cafe colombiano orgánico en grano(250gr)', 1715, 4, 'cafe tostado orgánico variedad arábica', 'CAFE-ANDINO-GRANO-LATA-250G.jpg', '14, 19', 1),
(72, 'cafe colombiano orgánico molido ', 6586, 4, 'cafe tostado orgánico molido', 'CAFE-ANDINO-MOLIDO-BOLSA-1KG.jpg', '14, 19', 1),
(73, 'cafe verde(100gr)', 340, 37, 'blend de cafe con granos 100% arábica', 'MARITA-CAFE-VERDE-100G.jpg', '14', 1),
(74, 'cafe colombiano orgánico molido(500gr)', 3399, 4, 'cafe tostado orgánico ', 'CAFE-ANDINO-MOLIDO-LATA-500G.jpg', '14, 19', 1),
(75, 'te verde matcha hydrogrow (x 60 capsulas)', 1266, 44, 'te verde matcha hydrogrow', 'HG-ORGANIKAL-TE-VERDE-MATCHA-CAPSULAS.jpg', '14', 1),
(76, 'te early grey (x 25 saquitos)', 399, 27, 'Té Negro con aceite esencial natural de bergamota. No contiene conservantes, colorantes ni sabores artificiales. 25 saquitos ensobrados de 2 gr. c/u.', 'HEREDIA-TE-EARL-GREY.jpg', '14', 1),
(77, 'te surtido monohierbas (x 20 saquitos)', 399, 27, 'Variedad de Hierbas Naturales. Sabores que incluye: Té Rojo, Té Verde, Menta y Manzanilla. No contiene conservantes, colorantes ni sabores artificiales. 20 saquitos ensobrados.', 'HEREDIA-SURTIDO-MONOHIERBAS.jpg', '14', 1),
(78, 'te de jenjibre (x 25 saquitos)', 400, 27, 'Jengibre (rizoma). No contiene conservantes, colorantes ni sabores artificiales. 25 saquitos ensobrados de 1,5 gr. c/u.', 'HEREDIA-JENGIBRE.jpg', '14', 1),
(79, 'te de moringa (x 15 saquitos)', 399, 20, 'te de moringa misionera orgánica. 15 saquitos ensobrados al vacío.', 'FIDEL-MORINGA-ORG-EN-SAQUITOS-X15-1.jpg', '14, 19', 1),
(80, 'probióticos en gotas(x60ml)', 2355, 15, 'ayuda al control del sobrepeso y obesidad.', 'KYOJIN-PROBIOTICOS-60ML.jpg', '15', 1),
(81, 'kombucha de té verde sabor menta (x300ml)', 315, 42, 'bebida con probióticos', 'NEPTUNE-TE-KOMBUCHA-MENTA-TE-VERDE-300ML.jpg', '15', 1),
(82, 'kombucha de té verde sabor yerba mate (x300ml)', 315, 42, 'tónico efervescente', 'NEPTUNE-TE-KOMBUCHA-YERBA-MATE-TE-VERDE-300ML.jpg', '15', 1),
(83, 'kombucha de té rojo sabor jengibre (x300ml)', 315, 42, 'sin conservantes', 'NEPTUNE-TE-KOMBUCHA-JENGIBRE-TE-ROJO-300ML.jpg', '15', 1),
(84, 'kombucha de té Negro sabor jengibre (x300ml)', 315, 42, 'frasco oscuro de seguridad', 'NEPTUNE-TE-KOMBUCHA-SABOR-ORIGINAL-TE-NEGRO-300ML.jpg', '15', 1),
(85, 'vino malbec 6 meses en roble (x750 ml)', 450, 19, 'vino malbec 6 meses en roble', 'CECCHIN-MALBEC-ROBLE.jpg', '16', 1),
(86, 'espumante 100% natural demi sec (x 750 ml)', 500, 19, 'espumante 100% natural demi sec', 'CECCHIN-VINO-ESPUMANTE-ORG-750ML.jpg', '16', 1),
(87, 'vino cabernet sauvignon orgánico vegano (x 750 ml)', 315, 19, 'vino cabernet sauvignon orgánico vegano', 'CECCHIN-VINO-CABERNET-SAUVIGNON-ORG-750ML.jpg', '16, 19', 1),
(88, 'vino cabernet sauvignon sin sulfitos (x 750 ml)', 1475, 19, 'vino cabernet sauvignon sin sulfitos', 'CECCHIN-CABERNET-SAUVIGNON-SIN-SULFITOS-ORG-750ML.jpg', '16', 1),
(89, 'vino chardonnay (x750 ml)', 1315, 19, 'vino chardonnay', 'CECCHIN-CHARDONNAY-ORG-750ML.jpg', '16', 1);

--
-- Indexes for dumped tables
--

--
-- Indexes for table `categoria`
--
ALTER TABLE `categoria`
  ADD PRIMARY KEY (`idCategoria`);

--
-- Indexes for table `marca`
--
ALTER TABLE `marca`
  ADD PRIMARY KEY (`idMarca`);

--
-- Indexes for table `producto`
--
ALTER TABLE `producto`
  ADD PRIMARY KEY (`idProducto`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `categoria`
--
ALTER TABLE `categoria`
  MODIFY `idCategoria` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=21;

--
-- AUTO_INCREMENT for table `marca`
--
ALTER TABLE `marca`
  MODIFY `idMarca` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=56;

--
-- AUTO_INCREMENT for table `producto`
--
ALTER TABLE `producto`
  MODIFY `idProducto` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=90;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
