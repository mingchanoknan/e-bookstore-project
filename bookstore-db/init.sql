DROP TABLE IF EXISTS `blogs`;
CREATE TABLE `ebook` (
  `id` bigint unsigned NOT NULL AUTO_INCREMENT,
  `title` varchar(255) NOT NULL,
  `Price` float(8,2) DEFAULT '0',
  `content` text NOT NULL,
  `status` enum('01','02') NOT NULL DEFAULT '01',
  `pinned` tinyint(1) NOT NULL DEFAULT '0',
  `like` int NOT NULL DEFAULT '0',
  `create_date` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP,
  `create_by_id` int DEFAULT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `id` (`id`)
)