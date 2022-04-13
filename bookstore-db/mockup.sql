insert into `admin`(username, `password`,date_of_brith,fname,lname,position) value('admin1','123456','1998-01-01','Peter','Parker','manager');
insert into `admin`(username, `password`,fname,lname,position) value('admin2','123456','Nida','Nadia','intern');

insert into customer(username, `password`,date_of_brith,fname,lname) value('Kpunzaa','123456','1998-01-01','Natawat','Samsee');

insert into publisher(publisher_name) value("Kaidee COMPANY");
insert into author(author_name) value('xxxx');

insert into set_book(set_name) value("Harry potter : The Prisoner of azkaban");

insert into book_type(`type_name`) value('นิยาย');


insert into ebook(title, abstract, book_path, price, publisher_id,`type_id`, set_id) value("Harry potter Vol.1", "สวัสดี Harry", "test", 100, 1,1,1);
insert into ebook(title, abstract, book_path, price, publisher_id,`type_id`, set_id) value("Harry potter Vol.2", "สวัสดี Harry", "test", 100, 1,1,1);
insert into ebook(title, abstract, book_path, price, publisher_id,`type_id`, set_id) value("Harry potter Vol.3", "สวัสดี Harry", "test", 100, 1,1,1);
insert into ebook(title, abstract, book_path, price, publisher_id,`type_id`, set_id) value("Harry potter Vol.4", "สวัสดี Harry", "test", 100, 1,1,1);
insert into ebook(title, abstract, book_path, price, publisher_id,`type_id`, set_id) value("Harry potter Vol.5", "สวัสดี Harry", "test", 100, 1,1,1);


insert into author_ebook(ebook_id, author_id) value(1,1);
insert into author_ebook(ebook_id, author_id) value(2,1);
insert into author_ebook(ebook_id, author_id) value(3,1);
insert into author_ebook(ebook_id, author_id) value(4,1);
insert into author_ebook(ebook_id, author_id) value(5,1);



