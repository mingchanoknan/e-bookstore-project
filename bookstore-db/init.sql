  SET FOREIGN_KEY_CHECKS = 0;

  DROP TABLE IF EXISTS `admin`;
  CREATE TABLE `admin` (
    `admin_id` int AUTO_INCREMENT PRIMARY KEY,
    `username` varchar(255) not NULL UNIQUE,
    `password` varchar(255) not NULL,
    `date_of_brith` date,
    `fname` varchar(255),
    `lname` varchar(255),
    `image_path` varchar(255),
    `position` varchar(255) NOT NULL,
    `resigned` bit DEFAULT 0,
    UNIQUE (`fname`, `lname`)
  );

  DROP TABLE IF EXISTS customer;
  CREATE TABLE `customer` (
    `customer_id` int AUTO_INCREMENT PRIMARY KEY,
    `username` varchar(255) not NULL UNIQUE,
    `password` varchar(255) not NULL,
    `date_of_brith` date,
    `fname` varchar(255),
    `lname` varchar(255),
    `image_path` varchar(255),
    `member_level` varchar(255) DEFAULT 'classic',
    UNIQUE (`fname`, `lname`)
  );

DROP TABLE IF EXISTS publisher;
CREATE TABLE publisher (
   `publisher_id` int NOT NULL AUTO_INCREMENT PRIMARY KEY,
   `publisher_name` varchar(255)  NOT NULL UNIQUE
);

DROP TABLE IF EXISTS set_book;
CREATE TABLE set_book (
  `set_id` int NOT NULL AUTO_INCREMENT PRIMARY KEY,
  `set_name`  varchar(255)  NOT NULL UNIQUE
);

DROP TABLE IF EXISTS book_type;
CREATE TABLE book_type (
  `type_id` int NOT NULL AUTO_INCREMENT PRIMARY KEY,
  `type_name` varchar(255)  NOT NULL
);

DROP TABLE IF EXISTS ebook;
CREATE TABLE ebook (
    `ebook_id` int AUTO_INCREMENT PRIMARY KEY,
    `title` varchar(255) not NULL,
    `abstract` text,
    `book_path` varchar(255) not null,
   `price` FLOAT(8,2),
   `average_rating` FLOAT(8,2) DEFAULT '0',
   `image_cover`  varchar(255),
   `deleted` bit DEFAULT 0,
   `publisher_id` int NOT NULL,
    `set_id` int ,
    `type_id` int NOT NULL,
    FOREIGN KEY (`publisher_id`) REFERENCES publisher(`publisher_id`),
    FOREIGN KEY (`set_id`) REFERENCES set_book(`set_id`),
    FOREIGN KEY (`type_id`) REFERENCES book_type(`type_id`)
);

DROP TABLE IF EXISTS admin_ebook;
CREATE TABLE admin_ebook (
   `ebook_id`  int NOT NULL ,
   `admin_id`int NOT NULL,
   modify_type varchar(255),
   modify_date  timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP,
    PRIMARY KEY (`ebook_id`,`admin_id`),
    FOREIGN KEY (`ebook_id`) REFERENCES `ebook` ( `ebook_id`),
    FOREIGN KEY (`admin_id`) REFERENCES `admin`(`admin_id`)
);

DROP TABLE IF EXISTS customer_ebook;
CREATE TABLE customer_ebook (
  `favorite` BIT DEFAULT 0,
  `bought` BIT DEFAULT 0,
  `interest` BIT DEFAULT 0,
  `ebook_id`  int NOT NULL ,
  `customer_id`int NOT NULL ,
  PRIMARY KEY (`ebook_id`,`customer_id`),
   FOREIGN KEY (`customer_id`) REFERENCES `customer`(`customer_id`),
   FOREIGN KEY (`ebook_id`) REFERENCES `ebook` ( `ebook_id`)
);


DROP TABLE IF EXISTS author;
CREATE TABLE author (
 `author_id` int  NOT NULL AUTO_INCREMENT PRIMARY KEY,
  `author_name` varchar(255)  NOT NULL UNIQUE
);

DROP TABLE IF EXISTS author_ebook;
CREATE TABLE author_ebook (
   `ebook_id`  int NOT NULL,
   `author_id` int NOT NULL,
   PRIMARY KEY (`ebook_id`,`author_id`),
   FOREIGN KEY (`ebook_id`) REFERENCES `ebook` ( `ebook_id`),
   FOREIGN KEY (`author_id`) REFERENCES  `author`(`author_id`)

);


DROP TABLE IF EXISTS comment;
CREATE TABLE comment (
  `comment` text ,
  `rate` int(1) DEFAULT 0,
  `comment_date` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP,
   `ebook_id`  int NOT NULL ,
   `customer_id`int NOT NULL ,
    PRIMARY KEY (`ebook_id`,`customer_id`),
   FOREIGN KEY (`ebook_id`) REFERENCES `ebook` ( `ebook_id`),
    FOREIGN KEY (`customer_id`) REFERENCES `customer`(`customer_id`)
);

DROP TABLE IF EXISTS cart;
CREATE TABLE cart (
  `cart_id` int  NOT NULL AUTO_INCREMENT PRIMARY KEY,
  `cart_date` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP,
  `total_price` FLOAT(8,2) DEFAULT '0',
  `status_payment` BIT DEFAULT 0,
  `customer_id` int not null,
  FOREIGN KEY (`customer_id`) REFERENCES `customer`(`customer_id`)
);

DROP TABLE IF EXISTS cart_item;
CREATE TABLE cart_item (
  `item_no` int  NOT NULL AUTO_INCREMENT,
  `unit_price` FLOAT(8,2) DEFAULT '0',
   `ebook_id`  int NOT NULL,
   `cart_id`int NOT NULL ,
   PRIMARY KEY (`item_no`, `cart_id`),
   FOREIGN KEY ( `ebook_id`) REFERENCES `ebook` ( `ebook_id`),
   FOREIGN KEY ( `cart_id`) REFERENCES `cart` ( `cart_id`)

);

  SET FOREIGN_KEY_CHECKS = 1;