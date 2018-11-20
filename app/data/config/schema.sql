drop database if exists friend_finder_db;

create database friend_finder_db;

use friend_finder_db;

create table user_info(
id int auto_increment,
user_data json not null,
primary key(id)
);

