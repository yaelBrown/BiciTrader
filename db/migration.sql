create database if not exists bicitrader;

use bicitrader;

CREATE TABLE `test` (
  `id` int NOT NULL AUTO_INCREMENT,
  `name` varchar(30) NOT NULL,
  `age` int NOT NULL,
  PRIMARY KEY (`id`)
);

insert into test(name, age) values('Yael', 34);
insert into test(name, age) values('Steve', 30);
insert into test(name, age) values('Ariel', 22);
insert into test(name, age) values('Vanessa', 28);

CREATE TABLE `Users` (
  `id` int NOT NULL AUTO_INCREMENT,
  `name` varchar(255) NOT NULL,
  `password` varchar(255) NOT NULL,
  `email` varchar(255) NOT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `name` (`name`),
  UNIQUE KEY `email` (`email`)
);

insert into Users(name,password,email) values ('admin','admin','admin@bicitrader.com');
insert into Users(name,password,email) values ('user','user','user@bicitrader.com');

CREATE TABLE `Bikes` (
  `id` int NOT NULL AUTO_INCREMENT,
  `brand` varchar(255) DEFAULT NULL,
  `type` varchar(255) DEFAULT NULL,
  `gender` varchar(255) DEFAULT NULL,
  `size` int DEFAULT NULL,
  `location` varchar(255) DEFAULT NULL,
  `price` float DEFAULT NULL,
  `date` date NOT NULL,
  `author_id` int NOT NULL,
  `active_listing` tinyint(1) DEFAULT NULL,
  `image` int DEFAULT NULL,
  `title` varchar(255) DEFAULT NULL,
  `subtitle` varchar(255) DEFAULT NULL,
  `body` text,
  PRIMARY KEY (`id`),
  KEY `author_id` (`author_id`),
  CONSTRAINT `Bikes_ibfk_1` FOREIGN KEY (`author_id`) REFERENCES `Users` (`id`)
);

CREATE TABLE `Images` (
  `id` int NOT NULL AUTO_INCREMENT,
  `url` varchar(255) NOT NULL,
  `author_id` int NOT NULL,
  `bike_id` int NOT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `url` (`url`),
  KEY `author_id` (`author_id`),
  KEY `bike_id` (`bike_id`),
  CONSTRAINT `Images_ibfk_1` FOREIGN KEY (`author_id`) REFERENCES `Users` (`id`),
  CONSTRAINT `Images_ibfk_2` FOREIGN KEY (`bike_id`) REFERENCES `Bikes` (`id`)
);









