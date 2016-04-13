-- phpMyAdmin SQL Dump
-- version 4.2.7.1
-- http://www.phpmyadmin.net
--
-- Хост: 127.0.0.1
-- Время создания: Апр 13 2016 г., 17:10
-- Версия сервера: 5.6.20
-- Версия PHP: 5.5.15

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8 */;

--
-- База данных: `recdata`
--

-- --------------------------------------------------------

--
-- Структура таблицы `recipes`
--

CREATE TABLE IF NOT EXISTS `recipes` (
`id` int(16) NOT NULL,
  `name` varchar(35) NOT NULL,
  `category` varchar(35) NOT NULL,
  `podcategory` varchar(35) NOT NULL,
  `ingridients` varchar(500) NOT NULL,
  `cooking` varchar(3000) NOT NULL,
  `image` varchar(120) NOT NULL COMMENT 'path to the image'
) ENGINE=InnoDB  DEFAULT CHARSET=utf8 AUTO_INCREMENT=5 ;

--
-- Дамп данных таблицы `recipes`
--

INSERT INTO `recipes` (`id`, `name`, `category`, `podcategory`, `ingridients`, `cooking`, `image`) VALUES
(1, 'omlet', 'breakfast', '', '2 яйца\r\nмасло\r\nмолоко', 'бросить в сковородку на 5 мин', ''),
(2, 'omlet', 'breakfast', '', '2 яйца\r\nмасло\r\nмолоко', 'бросить в сковородку на 5 мин', '');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `recipes`
--
ALTER TABLE `recipes`
 ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `recipes`
--
ALTER TABLE `recipes`
MODIFY `id` int(16) NOT NULL AUTO_INCREMENT,AUTO_INCREMENT=5;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
