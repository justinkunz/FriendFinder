drop database if exists friend_finder_db;

create database friend_finder_db;

use friend_finder_db;

create table user_info(
id int auto_increment,
name varchar(45) not null,
imgLink varchar(120) not null,
q1 int not null,
q2 int not null,
q3 int not null,
q4 int not null,
q5 int not null,
q6 int not null,
q7 int not null,
q8 int not null,
q9 int not null,
q10 int not null,
primary key(id)
);


