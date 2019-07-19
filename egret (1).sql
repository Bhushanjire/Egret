-- phpMyAdmin SQL Dump
-- version 4.9.0.1
-- https://www.phpmyadmin.net/
--
-- Host: localhost
-- Generation Time: Jul 19, 2019 at 03:25 PM
-- Server version: 10.3.15-MariaDB
-- PHP Version: 7.2.19

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET AUTOCOMMIT = 0;
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `egret`
--

-- --------------------------------------------------------

--
-- Table structure for table `cart`
--

CREATE TABLE `cart` (
  `cart_id` int(11) NOT NULL,
  `user_id` int(11) NOT NULL,
  `product_id` int(11) NOT NULL,
  `quantity` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `cart`
--

INSERT INTO `cart` (`cart_id`, `user_id`, `product_id`, `quantity`) VALUES
(34, 1, 3, 9),
(35, 1, 2, 5),
(36, 1, 1, 3),
(38, 2, 3, 3),
(39, 2, 6, 3);

-- --------------------------------------------------------

--
-- Table structure for table `chats`
--

CREATE TABLE `chats` (
  `chat_id` int(11) NOT NULL,
  `from_user_id` int(11) NOT NULL,
  `from_user_name` varchar(150) NOT NULL,
  `from_profile_photo` text NOT NULL,
  `to_user_id` int(11) NOT NULL,
  `to_user_name` varchar(150) NOT NULL,
  `to_profile_photo` text NOT NULL,
  `message` text NOT NULL,
  `added_date_time` datetime NOT NULL DEFAULT current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `chats`
--

INSERT INTO `chats` (`chat_id`, `from_user_id`, `from_user_name`, `from_profile_photo`, `to_user_id`, `to_user_name`, `to_profile_photo`, `message`, `added_date_time`) VALUES
(1, 1, 'Bhushan Jire', '/assets/images/users/profile.jpeg', 4, 'Frank Powell', '/assets/images/users/1.jpg', 'hello', '2019-07-19 16:25:37'),
(2, 1, 'Bhushan Jire', '/assets/images/users/profile.jpeg', 4, 'Frank Powell', '/assets/images/users/1.jpg', 'how are you', '2019-07-19 16:27:26'),
(3, 1, 'Bhushan Jire', '/assets/images/users/profile.jpeg', 4, 'Frank Powell', '/assets/images/users/1.jpg', 'whats going on', '2019-07-19 16:28:19'),
(4, 1, 'Bhushan Jire', '/assets/images/users/profile.jpeg', 4, 'Frank Powell', '/assets/images/users/1.jpg', 'whats going on11', '2019-07-19 16:28:42'),
(5, 4, 'Frank Powell', '/assets/images/users/profile.jpeg', 1, 'Bhushan Jire', '/assets/images/users/profile.jpeg', 'hello', '2019-07-19 17:19:06'),
(6, 4, 'Frank Powell', '/assets/images/users/profile.jpeg', 1, 'Bhushan Jire', '/assets/images/users/profile.jpeg', 'i am fine', '2019-07-19 17:19:21'),
(7, 4, 'Frank Powell', '/assets/images/users/profile.jpeg', 6, 'Brian Stephens', '/assets/images/users/3.jpg', 'hi', '2019-07-19 17:32:02'),
(8, 4, 'Frank Powell', '/assets/images/users/1.jpg', 1, 'Bhushan Jire', '/assets/images/users/profile.jpeg', 'whats going on?', '2019-07-19 18:29:30');

-- --------------------------------------------------------

--
-- Table structure for table `customers`
--

CREATE TABLE `customers` (
  `cust_id` int(11) NOT NULL,
  `cust_name` varchar(255) NOT NULL,
  `cust_age` int(11) NOT NULL,
  `cust_phone` varchar(15) NOT NULL,
  `cust_company` varchar(255) NOT NULL,
  `cust_address` text NOT NULL,
  `cust_status` enum('Active','Inactive') NOT NULL DEFAULT 'Active',
  `cust_balance` varchar(15) NOT NULL,
  `cust_email` varchar(255) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `customers`
--

INSERT INTO `customers` (`cust_id`, `cust_name`, `cust_age`, `cust_phone`, `cust_company`, `cust_address`, `cust_status`, `cust_balance`, `cust_email`) VALUES
(4, 'Blanchard Knapp', 45, '878787887788', 'address', 'pune', 'Active', '787887', 'Blanchard@gmail.com'),
(5, 'Parker Rivas', 34, '565665655655', 'address', 'Masters', 'Active', '787887', 'Parker@gmail.com'),
(7, 'Joni Cabrera', 45, '565656565655', 'company', 'pune', 'Active', '776767676', 'Joni@gmail.com'),
(8, 'Stefanie Marsh', 56, '556565656555', 'company', 'pune', 'Active', '6767666', 'Stefanie@gmail.com'),
(9, 'Alexandria Forbes', 41, '887878787877', 'company', 'pune', 'Active', '6565566555', 'Alexandria@gmail.com'),
(10, 'Lela Bailey', 25, '878787887788', 'commp123', 'pune', 'Active', '787887', 'Lela@gmail.com'),
(11, 'Lola Morton', 56, '545454454544', 'company', 'pune', 'Inactive', '65656555', 'Lola@gmail.com'),
(12, 'Luella Duffy', 25, '787878787888', 'company', 'pune', 'Inactive', '56565656', 'Luella@gmail.com');

-- --------------------------------------------------------

--
-- Table structure for table `email_box`
--

CREATE TABLE `email_box` (
  `mail_id` int(11) NOT NULL,
  `title` text NOT NULL,
  `email_description` text NOT NULL,
  `email_from` varchar(255) NOT NULL,
  `email_to` varchar(255) NOT NULL,
  `email_body` text NOT NULL,
  `email_category` enum('Inbox','Sent','Starred','Draft','Spam') NOT NULL DEFAULT 'Inbox',
  `expanded` varchar(10) NOT NULL DEFAULT 'false',
  `added_date_time` datetime NOT NULL DEFAULT current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

-- --------------------------------------------------------

--
-- Table structure for table `orders`
--

CREATE TABLE `orders` (
  `order_id` int(11) NOT NULL,
  `order_number` varchar(15) NOT NULL,
  `cust_id` int(11) NOT NULL,
  `cust_name` varchar(255) NOT NULL,
  `seller_name` varchar(100) NOT NULL,
  `seller_address` text NOT NULL,
  `buyer_name` varchar(100) NOT NULL,
  `buyer_address` text NOT NULL,
  `bill_to` text NOT NULL,
  `bill_from` text NOT NULL,
  `sub_total` varchar(25) NOT NULL,
  `vat` varchar(10) NOT NULL,
  `grand_total` varchar(25) NOT NULL,
  `order_status` enum('Pending','Processing','Delivered') NOT NULL DEFAULT 'Pending',
  `order_date` date NOT NULL,
  `currency` varchar(10) NOT NULL,
  `added_date_time` datetime NOT NULL DEFAULT current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `orders`
--

INSERT INTO `orders` (`order_id`, `order_number`, `cust_id`, `cust_name`, `seller_name`, `seller_address`, `buyer_name`, `buyer_address`, `bill_to`, `bill_from`, `sub_total`, `vat`, `grand_total`, `order_status`, `order_date`, `currency`, `added_date_time`) VALUES
(2, '12345', 1, 'cust_name', 'rtt', 'retrtt', 'rrrteee', 'erretrtr', '', '', '', '', '', 'Pending', '2019-07-17', '', '2019-07-17 12:12:37'),
(3, '12', 1, 'cust_name', 'ertretrttrt', 'erttt', 'rtrett', 'ertrt', '', '', '739', '12.5', '831.375', 'Delivered', '2019-07-17', '', '2019-07-17 12:19:57'),
(4, '3', 1, 'cust_name', 'fdgf', 'dfgfdg', 'dfgfdg', 'fdgfg', '', '', '3373', '5', '3541.65', 'Delivered', '2019-07-17', '$', '2019-07-17 12:23:19');

-- --------------------------------------------------------

--
-- Table structure for table `order_details`
--

CREATE TABLE `order_details` (
  `order_detail_id` int(11) NOT NULL,
  `order_id` int(11) NOT NULL,
  `item_name` varchar(255) NOT NULL,
  `item_unit` varchar(10) NOT NULL,
  `item_price` varchar(10) NOT NULL,
  `item_id` int(11) NOT NULL,
  `added_date_time` datetime NOT NULL DEFAULT current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `order_details`
--

INSERT INTO `order_details` (`order_detail_id`, `order_id`, `item_name`, `item_unit`, `item_price`, `item_id`, `added_date_time`) VALUES
(1, 2, 'eeree', '4', '45', 0, '2019-07-17 12:12:37'),
(2, 2, 'trtrtrtrt', '78', '68', 0, '2019-07-17 12:12:37'),
(20, 4, 'fdf', '65', '45', 0, '2019-07-18 16:09:30'),
(21, 4, 'item2', '8', '56', 0, '2019-07-18 16:09:30'),
(22, 3, 'dfdfsdds', '6', '45', 0, '2019-07-18 19:09:36'),
(23, 3, 'errwerr', '7', '67', 0, '2019-07-18 19:09:36');

-- --------------------------------------------------------

--
-- Table structure for table `product`
--

CREATE TABLE `product` (
  `product_id` int(11) NOT NULL,
  `name` text NOT NULL,
  `description` text NOT NULL,
  `category` varchar(255) NOT NULL,
  `tags` text NOT NULL,
  `price1` varchar(10) NOT NULL,
  `price2` varchar(10) NOT NULL,
  `main_image` text NOT NULL,
  `sub_image1` varchar(255) NOT NULL,
  `sub_image2` varchar(255) NOT NULL,
  `sub_image3` varchar(255) NOT NULL,
  `sub_image4` varchar(255) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `product`
--

INSERT INTO `product` (`product_id`, `name`, `description`, `category`, `tags`, `price1`, `price2`, `main_image`, `sub_image1`, `sub_image2`, `sub_image3`, `sub_image4`) VALUES
(1, 'Wireless Bluetooth V4.0 Portable Speaker with HD Sound and Bass', 'Wireless Bluetooth V4.0 Portable Speaker with HD Sound and Bass', 'Speaker', 'sunt sunt culpa', '32', '54', 'speaker-1.jpg', '', '', '', ''),
(2, 'Portable Speaker with HD Sound', 'Portable Speaker with HD Sound', 'Speaker', 'Loremnisiad', '25', '43', 'speaker-2.jpg', '', '', '', ''),
(3, 'Lightweight On-Ear Headphones - Black', 'Lightweight On-Ear Headphones - Black', 'headphone', 'euirureproident', '29', '55', 'headphone-2.jpg', '', '', '', ''),
(4, 'Automatic-self-wind mens Watch 5102PR-001 (Certified Pre-owned)', 'Automatic-self-wind mens Watch 5102PR-001 (Certified Pre-owned)', 'watch', 'laborum minim tempor', '33', '58', 'watch-2.jpg', '', '', '', ''),
(5, 'Automatic-self-wind mens Watch 5102PR-001', 'Automatic-self-wind mens Watch 5102PR-001', 'watch', 'Lorem dolor duis', '38', '50', 'watch-1.jpg', '', '', '', ''),
(6, 'On-Ear Headphones - Black', 'On-Ear Headphones - Black', 'headphone', 'magna veniam sunt', '38', '54', 'headphone-3.jpg', '', '', '', ''),
(7, 'Duis exercitation nostrud anim\r\n', 'Duis exercitation nostrud anim\r\n', 'phone', 'doaliquairure', '22', '44', 'iphone-1 (1).jpg', '', '', '', ''),
(8, 'Dolor eu nostrud excepteur\r\n', 'Dolor eu nostrud excepteur\r\n\r\n', 'phone', 'laborum nulla sit', '31', '40', 'iphone-2 (1).jpg', '', '', '', ''),
(9, 'Duis exercitation nostrud anim', 'Duis exercitation nostrud anim', 'phone', 'doaliquairure', '31', '40', 'iphone-1.jpg', '', '', '', ''),
(10, 'Dolor eu nostrud excepteur\r\n', 'Dolor eu nostrud excepteur\r\n', 'phone', 'laborumnullasit', '50', '55', 'iphone-2.jpg', '', '', '', '');

-- --------------------------------------------------------

--
-- Table structure for table `product_rating`
--

CREATE TABLE `product_rating` (
  `pr_id` int(11) NOT NULL,
  `product_id` int(11) NOT NULL,
  `user_id` int(11) NOT NULL,
  `rating_value` varchar(10) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `product_rating`
--

INSERT INTO `product_rating` (`pr_id`, `product_id`, `user_id`, `rating_value`) VALUES
(1, 1, 1, '4'),
(2, 1, 2, '3'),
(3, 2, 1, '2'),
(4, 2, 2, '5'),
(5, 3, 1, '3'),
(6, 3, 2, '3'),
(7, 4, 1, '5'),
(8, 4, 2, '2'),
(9, 5, 1, '1'),
(10, 5, 2, '5'),
(11, 6, 1, '4'),
(12, 6, 2, '1');

-- --------------------------------------------------------

--
-- Table structure for table `users`
--

CREATE TABLE `users` (
  `user_id` int(11) NOT NULL,
  `first_name` varchar(255) DEFAULT NULL,
  `last_name` varchar(255) DEFAULT NULL,
  `email_id` varchar(255) NOT NULL,
  `username` varchar(255) CHARACTER SET macroman NOT NULL,
  `password` varchar(255) NOT NULL,
  `mobile_no` varchar(15) DEFAULT NULL,
  `profile_photo` text NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `users`
--

INSERT INTO `users` (`user_id`, `first_name`, `last_name`, `email_id`, `username`, `password`, `mobile_no`, `profile_photo`) VALUES
(1, 'Bhushan', 'Jire', 'bhushanjire@gmail.com', 'bhushanjire@gmail.com', '827ccb0eea8a706c4c34a16891f84e7b', '9763075620', '/assets/images/users/profile.jpeg'),
(2, 'Rishbh', 'Pant', 'rishbh@rapidera.com', 'bhushanjire@rapidera.com', '827ccb0eea8a706c4c34a16891f84e7b', NULL, '/assets/images/users/14.jpg'),
(4, 'Frank', 'Powell', 'Frank@gmail.com', 'frank', '26253c50741faa9c2e2b836773c69fe6', '123456789', '/assets/images/users/1.jpg'),
(5, 'Betty', 'Diaz', 'betty@gmail.com', 'betty', '82b054bd83ffad9b6cf8bdb98ce3cc2f', '123456856', '/assets/images/users/2.jpg'),
(6, 'Brian', 'Stephens', 'Brian@gmail.com', 'Brian', '4d236810821e8e83a025f2a83ea31820', '78877787877', '/assets/images/users/3.jpg'),
(7, 'Jacqueline', 'Day', 'Jacqueline@gmail.com', 'Jacqueline', '86c9e46243a93ecbd27c36296f90c4d2', '8529637412', '/assets/images/users/4.jpg'),
(8, 'Arthur', 'Mendoza', 'Arthur@gmail.com', 'Arthur', '6e7ad9b8cbd15010cb39e80d80d7e753', '8778787878', '/assets/images/users/5.jpg'),
(9, 'Jeremy', 'Lee', 'Jeremy@gmail.com', 'Jeremy', 'Jeremy', '8529637412', '/assets/images/users/7.jpg'),
(10, 'Johnny', 'Newman', 'Johnny@gmail.com', 'Johnny', 'Johnny', '78877787877', '/assets/images/users/8.jpg'),
(11, 'Jeffrey', 'Little', 'Jeffrey@gmail.com', 'Jeffrey', '6aa8d4d501a7e1d67c6dbf8c8138b897', '8529637412', '/assets/images/users/9.jpg'),
(12, 'Barbara', 'Romero', 'Barbara@gmail.com', 'Barbara', 'Barbara', '78877787877', '/assets/images/users/10.jpg'),
(13, 'Daniel', 'James', 'Daniel@gmail.com', 'Daniel', '262031397020fd8df478ec13b4b096c5', '8529637412', '/assets/images/users/11.jpg'),
(14, 'Alice', 'Sanders', 'Alice@gmail.com', 'Alice', '64489c85dc2fe0787b85cd87214b3810', '78877787877', '/assets/images/users/12.jpg'),
(15, 'John', 'Doe', 'Doe@gmail.com', 'Doe', 'ad695f53ae7569fb981fc95598e27e67', '8529637412', '/assets/images/users/13.jpg'),
(16, 'Virendra', 'Sehwagh', 'Virendra@gmail.com', 'Virendra', '77bdf7ad5ba63d05c6acf93b951f5699', '78877787877', '/assets/images/users/6.jpg');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `cart`
--
ALTER TABLE `cart`
  ADD PRIMARY KEY (`cart_id`);

--
-- Indexes for table `chats`
--
ALTER TABLE `chats`
  ADD PRIMARY KEY (`chat_id`);

--
-- Indexes for table `customers`
--
ALTER TABLE `customers`
  ADD PRIMARY KEY (`cust_id`);

--
-- Indexes for table `email_box`
--
ALTER TABLE `email_box`
  ADD PRIMARY KEY (`mail_id`);

--
-- Indexes for table `orders`
--
ALTER TABLE `orders`
  ADD PRIMARY KEY (`order_id`);

--
-- Indexes for table `order_details`
--
ALTER TABLE `order_details`
  ADD PRIMARY KEY (`order_detail_id`);

--
-- Indexes for table `product`
--
ALTER TABLE `product`
  ADD PRIMARY KEY (`product_id`);

--
-- Indexes for table `product_rating`
--
ALTER TABLE `product_rating`
  ADD PRIMARY KEY (`pr_id`);

--
-- Indexes for table `users`
--
ALTER TABLE `users`
  ADD PRIMARY KEY (`user_id`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `cart`
--
ALTER TABLE `cart`
  MODIFY `cart_id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=40;

--
-- AUTO_INCREMENT for table `chats`
--
ALTER TABLE `chats`
  MODIFY `chat_id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=9;

--
-- AUTO_INCREMENT for table `customers`
--
ALTER TABLE `customers`
  MODIFY `cust_id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=13;

--
-- AUTO_INCREMENT for table `email_box`
--
ALTER TABLE `email_box`
  MODIFY `mail_id` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `orders`
--
ALTER TABLE `orders`
  MODIFY `order_id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=10;

--
-- AUTO_INCREMENT for table `order_details`
--
ALTER TABLE `order_details`
  MODIFY `order_detail_id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=24;

--
-- AUTO_INCREMENT for table `product`
--
ALTER TABLE `product`
  MODIFY `product_id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=11;

--
-- AUTO_INCREMENT for table `product_rating`
--
ALTER TABLE `product_rating`
  MODIFY `pr_id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=13;

--
-- AUTO_INCREMENT for table `users`
--
ALTER TABLE `users`
  MODIFY `user_id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=17;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
