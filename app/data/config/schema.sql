drop database if exists friend_finder_db;

create database friend_finder_db;

use friend_finder_db;

create table user_info(
id int auto_increment,
user_data json not null,
primary key(id)
);

use friend_finder_db;

insert into user_info(user_data)
values 
('{"img": "https://media1.popsugar-assets.com/files/thumbor/eOF2Umn-mqNGnohxrtjeurwWDmI/fit-in/2048xorig/filters:format_auto-!!-:strip_icc-!!-/2018/08/20/677/n/1922283/1118a12c5b7adb1e342de9.55515725_/i/Michael-Scott-Misquotations-Office-Video.jpg", "name": "Michael Scott", "answers": ["5", "2", "3", "1", "5", "3", "2", "4", "5", "3"]}'),
('{"img": "https://pbs.twimg.com/profile_images/549268771484229632/WnatiHzT_400x400.jpeg", "name": "Dwight K. Schrute", "answers": ["3", "5", "5", "5", "1", "5", "5", "4", "4", "5"]}'),
('{"img": "https://pbs.twimg.com/profile_images/3171824697/ef75d90df2e65ce326acf30262df5918_400x400.jpeg", "name": "Jim Halpert", "answers": ["4", "3", "2", "3", "4", "2", "5", "5", "2", "4"]}'),
('{"img": "https://pbs.twimg.com/profile_images/58052592/happypam_400x400.jpg", "name": "Pam Halpert", "answers": ["5", "2", "1", "2", "5", "2", "3", "5", "3", "2"]}');

use top_songsdb;

show tables;

select * from top5000;

select concat(artist, song) as song 
where year >= 1990
and position <=1000
order by position desc;