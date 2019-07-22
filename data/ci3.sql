-- phpMyAdmin SQL Dump
-- version 4.1.14
-- http://www.phpmyadmin.net
--
-- Host: 127.0.0.1
-- Generation Time: Feb 26, 2016 at 05:07 AM
-- Server version: 5.6.17
-- PHP Version: 5.5.12

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8 */;

--
-- Database: `ci3`
--

-- --------------------------------------------------------

--
-- Table structure for table `bigweb_alias`
--

CREATE TABLE IF NOT EXISTS `bigweb_alias` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `id_field` int(11) NOT NULL,
  `taxonomy` varchar(255) NOT NULL,
  `alias` varchar(255) NOT NULL,
  `language` varchar(255) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=MyISAM  DEFAULT CHARSET=utf8 AUTO_INCREMENT=2 ;

--
-- Dumping data for table `bigweb_alias`
--

INSERT INTO `bigweb_alias` (`id`, `id_field`, `taxonomy`, `alias`, `language`) VALUES
(1, 1, 'cate_article', 'gioi-thieu', 'vi');

-- --------------------------------------------------------

--
-- Table structure for table `bigweb_article`
--

CREATE TABLE IF NOT EXISTS `bigweb_article` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `title` varchar(255) NOT NULL,
  `title_en` varchar(255) NOT NULL,
  `excerpt` tinytext NOT NULL,
  `excerpt_en` tinytext NOT NULL,
  `fulltext` text NOT NULL,
  `fulltext_en` text NOT NULL,
  `image` varchar(255) NOT NULL,
  `img` text NOT NULL,
  `date_create` timestamp NOT NULL,
  `date_update` timestamp NOT NULL,
  `order` int(11) NOT NULL DEFAULT '0',
  `stick` tinyint(1) NOT NULL DEFAULT '0',
  `views` int(11) NOT NULL DEFAULT '0',
  `show` tinyint(1) NOT NULL DEFAULT '1',
  `category` int(11) NOT NULL,
  `iduser` int(11) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=MyISAM DEFAULT CHARSET=utf8 AUTO_INCREMENT=1 ;

-- --------------------------------------------------------

--
-- Table structure for table `bigweb_categories`
--

CREATE TABLE IF NOT EXISTS `bigweb_categories` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `parentid` int(11) NOT NULL DEFAULT '0',
  `taxonomy` varchar(50) NOT NULL,
  `language` varchar(255) NOT NULL,
  `title` varchar(255) NOT NULL,
  `fulltext` text NOT NULL,
  `image` varchar(255) NOT NULL,
  `img` text NOT NULL,
  `order` int(11) NOT NULL DEFAULT '0',
  `views` int(11) NOT NULL DEFAULT '0',
  `date_create` timestamp NOT NULL,
  `date_update` timestamp NOT NULL,
  `show` tinyint(1) NOT NULL DEFAULT '1',
  `iduser` int(11) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB  DEFAULT CHARSET=utf8 AUTO_INCREMENT=2 ;

--
-- Dumping data for table `bigweb_categories`
--

INSERT INTO `bigweb_categories` (`id`, `parentid`, `taxonomy`, `language`, `title`, `fulltext`, `image`, `img`, `order`, `views`, `date_create`, `date_update`, `show`, `iduser`) VALUES
(1, 0, 'article', 'vi', 'Giới thiệu', '', '', '', 0, 0, '2016-02-26 01:55:08', '2016-02-26 01:55:08', 1, 1);

-- --------------------------------------------------------

--
-- Table structure for table `bigweb_permission`
--

CREATE TABLE IF NOT EXISTS `bigweb_permission` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `iduser` int(11) NOT NULL,
  `permission` text NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB  DEFAULT CHARSET=utf8 AUTO_INCREMENT=5 ;

--
-- Dumping data for table `bigweb_permission`
--

INSERT INTO `bigweb_permission` (`id`, `iduser`, `permission`) VALUES
(1, 1, '11,12,13,14,15,16,17,18,19,21,22,23,24,25,26,27,28,29,31,32,33,34,35,36,41,42,43,44,45,46,47'),
(3, 7, '11,12,13,14,15,17,18,19,21,22,23,24,25,26,27,28,31,32,33,34,35,36,41,42'),
(4, 8, '11,12,13,14,15,16,17,18,19,21,22,23,24,25,26,27,28,29,31,32,33,34,35,36,41,42,43,44,45,46,47');

-- --------------------------------------------------------

--
-- Table structure for table `bigweb_setting`
--

CREATE TABLE IF NOT EXISTS `bigweb_setting` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `url` varchar(200) NOT NULL,
  `title` text NOT NULL,
  `title_eng` varchar(255) NOT NULL,
  `video` varchar(255) NOT NULL,
  `metades` text NOT NULL,
  `metakey` text NOT NULL,
  `master` varchar(200) NOT NULL,
  `address` varchar(200) NOT NULL,
  `email` varchar(100) NOT NULL,
  `phone` varchar(30) NOT NULL,
  `time` varchar(255) NOT NULL,
  `phone2` varchar(50) NOT NULL,
  `phanphoi_eng` text NOT NULL,
  `map` text NOT NULL,
  `name_map` varchar(255) NOT NULL,
  `lienhe` text NOT NULL,
  `lienhe_eng` text NOT NULL,
  `gioithieu` text NOT NULL,
  `fax` varchar(30) DEFAULT NULL,
  `face` varchar(255) NOT NULL,
  `google` text,
  `footer` text,
  `footer_eng` text NOT NULL,
  `hotline2` varchar(20) NOT NULL,
  `google_link` varchar(255) CHARACTER SET utf8 COLLATE utf8_unicode_ci NOT NULL,
  `youtube` varchar(255) CHARACTER SET utf8 COLLATE utf8_unicode_ci NOT NULL,
  `twi` varchar(255) NOT NULL,
  `linked` varchar(255) CHARACTER SET utf8 COLLATE utf8_unicode_ci NOT NULL,
  `intagram` varchar(255) NOT NULL,
  `logo` varchar(200) DEFAULT NULL,
  `favicon` varchar(255) NOT NULL,
  `seo` text NOT NULL,
  `about` text NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=MyISAM  DEFAULT CHARSET=utf8 AUTO_INCREMENT=2 ;

--
-- Dumping data for table `bigweb_setting`
--

INSERT INTO `bigweb_setting` (`id`, `url`, `title`, `title_eng`, `video`, `metades`, `metakey`, `master`, `address`, `email`, `phone`, `time`, `phone2`, `phanphoi_eng`, `map`, `name_map`, `lienhe`, `lienhe_eng`, `gioithieu`, `fax`, `face`, `google`, `footer`, `footer_eng`, `hotline2`, `google_link`, `youtube`, `twi`, `linked`, `intagram`, `logo`, `favicon`, `seo`, `about`) VALUES
(1, '', 'CIA ', 'CIA ', 'https://www.youtube.com/watch?v=9S26KstO_ew', '', '', '', 'Địa chỉ:Tp. Hà Nội', 'faico@gmail.com ', '0986 821 829', 'Thời gian làm việc: từ 8h30 - 21h30 tất cả các ngày trong tuần.', '0986 821 829', 'Chính thức cung cấp các sản phẩm ra thị trường từ năm 2012, cho đến nay, K&G Việt Nam đã có hệ thống phân phối rộng khắp cả nước, với 60 Nhà Phân phối và 60.000 cửa hàng, siêu thị bày bán sản phẩm của K&G Việt Nam.\r\nNgười tiêu dùng có thể dễ dàng tìm mua các sản phẩm của K&G Việt Nam tại các Siêu thị, Đại lý bán lẻ, Cửa hàng Thời trang, Cửa hàng Mỹ phẩm, Hiệu thuốc…', '21.029696,105.786020', 'CIA ', '<p>\r\n	<strong>PRANA - STAR Fitness &amp; Yoga Center</strong></p>\r\n<p>\r\n	Add: Tầng M - T&ograve;a th&aacute;p Ng&ocirc;i Sao, đường Dương Đ&igrave;nh Nghệ<br />\r\n	Hotline: 04 62 949 966 / 04 32 363 366<br />\r\n	Website: www.pranastar.com<br />\r\n	Email: Prana.starfitness@gmail.com<br />\r\n	&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; salespranastarfitness@gmail.com</p>\r\n', '<p style="text-align: center;">\r\n	<span style="font-size:24px;"><span style="color: rgb(0, 0, 255);">LongLong Chemical.,Ltd</span></span></p>\r\n<p style="text-align: center;">\r\n	<br />\r\n	Trụ sở: ...........................................................................................................................</p>\r\n<p style="text-align: center;">\r\n	<br />\r\n	Điện thoại: ....................................... -&nbsp; Hotline: ......................................</p>\r\n<p style="text-align: center;">\r\n	<br />\r\n	Email:&nbsp; ........................................................</p>\r\n', '<p>\r\n	L&agrave; nh&agrave; thuốc được Sở Y tế H&agrave; nội chứng nhận đạt ti&ecirc;u chuẩn &quot;Thực h&agrave;nh tốt nh&agrave; thuốc - GPP). Giấy chứng nhận GPP . Giấy chứng nhận đủ điều kiện kinh doanh thuốc do Sở Y tế H&agrave; Nội cấp. L&agrave; nh&agrave; thuốc được Sở Y tế H&agrave; nội chứng nhận đạt ti&ecirc;u chuẩn &quot;Thực h&agrave;nh tốt nh&agrave; thuốc - GPP). Giấy chứng nhận GPP . Giấy chứng nhận đủ điều kiện kinh doanh thuốc do Sở Y tế H&agrave; Nội cấp. L&agrave; nh&agrave; thuốc được Sở Y tế H&agrave; nội chứng nhận đạt ti&ecirc;u chuẩn &quot;Thực h&agrave;nh tốt nh&agrave; thuốc - GPP). Giấy chứng nhận GPP . Giấy chứng nhận đủ điều kiện kinh doanh thuốc do Sở Y tế H&agrave; Nội cấp. L&agrave; nh&agrave; thuốc được Sở Y tế H&agrave; nội chứng nhận đạt ti&ecirc;u chuẩn &quot;Thực h&agrave;nh tốt nh&agrave; thuốc - GPP). Giấy chứng nhận GPP . Giấy chứng nhận đủ điều kiện kinh doanh thuốc do Sở Y tế H&agrave; Nội cấp.</p>\r\n', '', 'https://www.facebook.com/Skyweb-421634684701707/?fref=ts', '', '<p>\r\n	<span style="color:#d3d3d3;"><strong>PRANA - STAR Fitness &amp; Yoga Center</strong></span></p>\r\n<p>\r\n	<span style="color:#d3d3d3;">Add: Tầng M - T&ograve;a th&aacute;p Ng&ocirc;i Sao, đường Dương Đ&igrave;nh Nghệ<br />\r\n	Hotline: 04 62 949 966 / 04 32 363 366<br />\r\n	Website: www.pranastar.com<br />\r\n	Email: Prana.starfitness@gmail.com<br />\r\n	&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; salespranastarfitness@gmail.com </span></p>\r\n', '<p>\r\n	Copyright &copy; 2015 Anninhtoancau. All rights reserved...<a href="http://bigweb.com.vn" target="_blank">Thiết kế website</a> bởi Bigweb.com.vn en</p>\r\n', '', 'https://www.facebook.com/FacebookVietnam', 'https://www.youtube.com/channel/UCjrxc5YMDMfr1FjHdGCzqQA', 'https://www.facebook.com/FacebookVietnam', 'https://www.facebook.com/FacebookVietnam', '', 'http://localhost/0116/yoga/upload/images/menu/logo.png', '', '', '<p style="text-align: center;">\r\n	Prana Star Fitness &amp; Yoga l&agrave; một c&acirc;u lạc bộ thể thao chuy&ecirc;n nghiệp với đội ngũ nh&acirc;n vi&ecirc;n trẻ trung, nhiệt t&igrave;nh, chăm s&oacute;c kh&aacute;ch h&agrave;ng chu đ&aacute;o mang lại dịch vụ đẳng cấp v&agrave; lu&ocirc;n l&agrave;m h&agrave;i l&ograve;ng tất cả c&aacute;c qu&yacute; hội vi&ecirc;n v&agrave; kh&aacute;ch h&agrave;ng tại c&acirc;u lạc bộ.</p>\r\n');

-- --------------------------------------------------------

--
-- Table structure for table `bigweb_users`
--

CREATE TABLE IF NOT EXISTS `bigweb_users` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `username` varchar(255) NOT NULL,
  `password` varchar(255) NOT NULL,
  `fullname` varchar(255) NOT NULL,
  `birthday` varchar(50) NOT NULL,
  `email` varchar(255) NOT NULL,
  `phone` varchar(20) NOT NULL,
  `company` varchar(255) NOT NULL,
  `code_company` varchar(255) NOT NULL,
  `image` varchar(255) NOT NULL,
  `fulltext` text NOT NULL,
  `date_create` timestamp NOT NULL,
  `date_update` timestamp NOT NULL,
  `address` varchar(255) NOT NULL,
  `skyper` varchar(50) NOT NULL,
  `yahoo` varchar(50) NOT NULL,
  `facebook` varchar(255) NOT NULL,
  `twiter` varchar(255) NOT NULL,
  `idgroup` int(11) NOT NULL DEFAULT '1',
  `counter` int(11) NOT NULL DEFAULT '0',
  `counter_show` int(11) NOT NULL DEFAULT '0',
  `show` tinyint(1) NOT NULL DEFAULT '0',
  PRIMARY KEY (`id`)
) ENGINE=MyISAM  DEFAULT CHARSET=utf8 AUTO_INCREMENT=9 ;

--
-- Dumping data for table `bigweb_users`
--

INSERT INTO `bigweb_users` (`id`, `username`, `password`, `fullname`, `birthday`, `email`, `phone`, `company`, `code_company`, `image`, `fulltext`, `date_create`, `date_update`, `address`, `skyper`, `yahoo`, `facebook`, `twiter`, `idgroup`, `counter`, `counter_show`, `show`) VALUES
(1, 'admin', '90b9aa7e25f80cf4f64e990b78a9fc5ebd6cecad', 'Trần Trung hùng', '46c9164232f56a8c871ea305c2ba478e323f9859', 'mylovehdkt@yahoo.com', '', 'Bigwebvn', '123', 'https://lh5.googleusercontent.com/-RsRuYgrfjjs/AAAAAAAAAAI/AAAAAAAAAAA/7VxNOWOwV-0/s96-c-mo/photo.jpg', '', '2016-02-18 05:59:52', '2016-02-18 05:59:52', '', '', '', '', '', 1, 0, 0, 1),
(8, 'admin2', '90b9aa7e25f80cf4f64e990b78a9fc5ebd6cecad', 'Vũ đức hoàn', '', 'mylovehdkt@yahoo.com', '0978812793', 'Bigwebvn', '123', '', '', '0000-00-00 00:00:00', '0000-00-00 00:00:00', 'Hà nội', '', '', '', '', 2, 0, 0, 1),
(7, 'admin1', '90b9aa7e25f80cf4f64e990b78a9fc5ebd6cecad', 'Trần Trung Hùng', '', 'tulinh03112014@gmail.com', '', 'Bigwebvn', '', '', '', '0000-00-00 00:00:00', '0000-00-00 00:00:00', '', '', '', '', '', 3, 0, 0, 1);

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
