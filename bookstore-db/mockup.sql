-- Admin
insert into admin(username, password,date_of_birth,fname,lname,position) value('MingChanoknan','123456','1998-01-01','Chanoknan','Numnoi','manager');
insert into admin(username, password,fname,lname,position) value('FrameKulanit','123456','Kulanit','Choongam','manager');
-- Customer
insert into customer(username, `password`,date_of_birth,fname,lname) value('Kpunzaa','123456','1998-01-01','Natawat','Samsee');
-- Publisher
insert into publisher(publisher_name) value("เมษาริน");
insert into publisher(publisher_name) value("JINGUY");
insert into publisher(publisher_name) value("R-Publishing");
insert into publisher(publisher_name) value("กัลฐิดา");
insert into publisher(publisher_name) value("กุหลาบขาว.214052");
insert into publisher(publisher_name) value("ชี้ดาบ");
insert into publisher(publisher_name) value("เอคิจิบ");
insert into publisher(publisher_name) value("คาบิว สุบรรณเจิด");
insert into publisher(publisher_name) value("เอเลี่ยนในซานฟรานซิสโก");
insert into publisher(publisher_name) value("พิมพิดา กาญจนเวทางค์");

insert into publisher(publisher_name) value("Siam Inter Comics");
insert into publisher(publisher_name) value('ศุภวัฒน์ พุกเจริญ');
insert into publisher(publisher_name) value("อันวีกษณา, มูลนิธิ");
insert into publisher(publisher_name) value("ศุภณัฐ ไพโรหกุล");
insert into publisher(publisher_name) value("สูตรไพศาล, สนพ.");
insert into publisher(publisher_name) value("นานมีบุ๊คส์, บจก.");
insert into publisher(publisher_name) value("ไอดีซี พรีเมียร์, บจก.");
insert into publisher(publisher_name) value("ประยงค์ อู่ประสิทธิ์วงศ");
insert into publisher(publisher_name) value("ซิมพลิฟาย, สนพ.");
insert into publisher(publisher_name) value("ผศ.ดร. กอบเกียรติ สระอุบล");
-- author
insert into author(author_name) value('เมษาริน');
insert into author(author_name) value('JINGUY');
insert into author(author_name) value('เมริน');
insert into author(author_name) value('กัลฐิดา');
insert into author(author_name) value('กุหลาบขาวN');
insert into author(author_name) value('ขิม');
insert into author(author_name) value('เอคิจิบ');
insert into author(author_name) value('คาบิว สุบรรณเจิด');
insert into author(author_name) value('ชี้ดาบ');
insert into author(author_name) value('Think Beyond');

insert into author(author_name) value('Tatsuya Endo');
insert into author(author_name) value('รศ.ดร. ศุภวัฒน์ พุกเจริญ');
insert into author(author_name) value('J. Krishnamurti (จ. กฤษณมูรติ)');
insert into author(author_name) value('ดร. ศุภณัฐ ไพโรหกุล');
insert into author(author_name) value('ศุภากาญจน์ ทิบชัย');
insert into author(author_name) value('กองบรรณาธิการภาษาจีนนานมีบุ๊คส์');
insert into author(author_name) value('รศ.ดร. ปานใจ ธารทัศนวงศ์');
insert into author(author_name) value('ประยงค์ อู่ประสิทธิ์วงศ์');
insert into author(author_name) value('จีราวุธ วารินทร์');

-- set_book
insert into set_book(set_name) value("SPY x FAMILY");

insert into book_type(`type_name`) value('นิยาย');
insert into book_type(`type_name`) value('การ์ตูน');
insert into book_type(`type_name`) value('ท่องเที่ยว');
insert into book_type(`type_name`) value('การศึกษา');
insert into book_type(`type_name`) value('เทคโนโลยี');

-- นิยาย
insert into ebook(title, abstract, book_path, price, publisher_id,`type_id`) value("Faded Memory ภาพสีจางกับบางความทรงจำ", "“ปีรู้จักพลอย?”
“รู้จักสิ” ปีใหม่มองนามสกุลบนเสื้อพละ “อ๋อ...จางมาจากนามสกุลนี่เอง”
“ไม่ใช่...จางมาจากจางๆ ไม่สำคัญ ไม่น่าจดจำ”

จิวรี หรือ พลอยจาง หนึ่งในห้าพลอยห้องควีน เธอถูกพูดถึงน้อยที่สุด ไม่น่าจดจำที่สุด เพราะความธรรมดา ไม่มีอะไรโดดเด่น แต่คืนวันเหล่านั้นเปลี่ยนไป เมื่อมี ปีใหม่ เด็กเรียนห้องคิงเข้ามาในชีวิต...
ความสัมพันธ์ของสองหนุ่มสาวเกิดขึ้นในห้องสมุดเพียงช่วงสั้นๆ ก่อนที่ปีใหม่จะหายไป...และกลับมาพร้อม...ภาพสีจางๆ ในความทรงจำ

**************************

ซีรีส์ “หนังสือรุ่น” ประกอบด้วย
- The only Regret สิ่งเดียวที่เสียดาย ในวันวัยที่สวยงาม โดย Nenechan
- Moving around You ดาวหมุนรอบฉัน ตะวันหมุนรอบเธอ โดย ภาพิมล
- Secretly Love เพราะเธอคือความลับของหัวใจ โดย ติญญา
- Busy February หรือเดือนกุมภามันสั้น เราเลยรักกันไม่ได้เสียที โดย ใบสน
- Faded Memory ภาพสีจางกับบางความทรงจำ โดย เมษาริน", "test", 149, 1,1);


insert into ebook(title, abstract, book_path, price, publisher_id,`type_id`) value("คุณครูขี้อายกับผู้กองขี้ซึน", 'โอกาสมาฝึกสอนที่ต่างจังหวัดและได้พบพานกับหนุ่มหล่อขี้ซึน "อาทิตย์ โชคชะตาฟ้าลิขิตที่มีอุปสรรคและปมปริศนารวมถึงสิ่งที่พวกเขาต้องฟันฝ่าจนกว่าจะถึงวันที่ได้รักกันจะเป็นเช่นไร ในช่วงเวลาหนึ่งปีของเขาสองคนจะเปลี่ยนแปลงชีวิตไปในทิศทางใดกันเขาจะได้อยู้ด้วยกันตลอดไปหรือไม่?', "test", 289, 2,1);
insert into ebook(title, abstract, book_path, price, publisher_id,`type_id`) value("คุณพ่อฝึกหัดรัก [ ซีรีส์ คุณพ่อมือใหม่ ]", "ซีรีส์ คุณพ่อมือใหม่
[ 3 เล่ม อ่านแยกได้ ]
.
คุณพ่อฝึกหัดรัก / คุณพ่อเดิมพันรัก / คุณพ่อชุลมุนรัก
[ เมริน ]
.
[ คุณพ่อฝึกหัดรัก ]
นิยายเรื่องนี้มีเด็ก และมีผู้ชายรักเด็ก

เมื่อคนเย็นชาเพิ่งรู้ว่า ผู้หญิงที่ตัวเองหลงรักและมีสัมพันธ์ชั่วคราวเพียงคืนเดียว มีข่าวว่าหนีไปกับผู้ชายอีกคนที่เขาเหม็นขี้หน้า พอเธอกลับมามีหรือที่เขา
จะยอมรับเด็กที่เธออุ้มมาด้วย ทั้งที่เธอก็ไม่ได้ขอให้เขาเป็นพ่อเสียหน่อย

ทว่าทำไมหน้าเด็กคนนั้นมันฟ้องดีเอ็นเอขนาดนั้น เขาเลยต้องหาทางพิสูจน์ว่าจริงแล้ว เด็กนั่นลูกของเขาหรือของไอ้หมอนั่น

แต่ยิ่งสืบ ก็ยิ่งหลงรักทั้งเด็กและแม่เด็ก จะลูกใครก็ช่าง เขารักเด็กไปซะแล้วสิ
.
.
[ เมริน ]", "test", 119, 3,1);
insert into ebook(title, abstract, book_path, price, publisher_id,`type_id`) value("Jay's Day Vol. 06 Ark Gramson", "วันดีๆ ของเจย์ สก็อตในเมืองวิชชอร์เต็มไปเรื่องราวมากมาย วันนี้ เป็นเรื่องราวของคนที่เราเห็นเพียงผ่านๆ อย่างสารวัตรผู้ตรวจการแคว้นแบรนโคลด์ ชายผู้อาจมีความลับส่วนตัวมากมาย แต่นั่นก็คงไม่มากเท่ากับการที่การมาของเขาจะทำให้เราได้ล้วงลึกเข้าไปในความลับของเจย์ สก็อตมากขึ้นไปอีก

เรื่องราวในเล่มนี้ จึงเป็นอีกช่วงเวลาแสนวิเศษที่จะทำให้ทุกคนได้กลับไปเยือนเมืองแห่งความฝันอีกครั้ง", "test", 180, 4,1);
insert into ebook(title, abstract, book_path, price, publisher_id,`type_id`) value("ศึกรักเสน่หา", '"หนุ่มเกาหลี ที่พึ่งมาประเทศไทยครั้งแรก ร่างกายสูงใหญ่ยาวเข่าดี ผิวขาว หน้าตาหล่อ เป็นที่รักของสาวๆเมืองไทย แต่เขายังไม่เคยสนใจผู้หญิงเลย เพราะเป้าหมายของเขาคือ ชายไทย เท่านั้น

ชายไทย ตัวเล็ก ผู้คลั่งรักหลงใหลในหนุ่มเกาหลี ทั้งการแต่งตัว เสื้อผ้า อาหาร รวมถึงหนังร้อนรัก ก็ชอบของเกาหลีนะ แม้ว่า สันจะเป็นที่สนใจของสาวๆเมืองไทยมากมาย แต่เขาก็ไม่เคยสนใจสาวๆเมืองไทยเลย ตั้งแต่ที่จำความได้ เขาก็รู้ใจตัวเอง ว่าเขาชอบชายเกาหลีที่สุด

"ความแซ่บ ระดับสูง"', "test", 349, 5,1);
-- คู่มือท่องเที่ยว
insert into ebook(title, abstract, book_path, price, publisher_id,`type_id`) value("ตามติดชีวิตอินเดีย", '"เราชื่อขิม เป็นคนยังไงก็ได้
เช่น ไม่รู้ว่าตัวเองชอบอะไรสอบติดอะไรก็เรียน
ใครบอกอะไรก็ทำ จบออกมาเริ่มเห็นเพื่อน
ไปเรียนต่อนอก เกิดอิจฉาเริ่มอยากไปบ้าง
มีช้อบส์ตั้งแต่ อเมริกา อังกฤษ ออสเตรเลีย
เราบอกยังไงก็ได้ สุดท้ายเลยมาได้ "อินเดีย"
พอมาถึง ก็รู้ว่าประเทศนี้แม่งยังไงก็ได้ยิ่งกว่าเรา...."', "test", 235.50, 6,3);
insert into ebook(title, abstract, book_path, price, publisher_id,`type_id`) value("เจแปน บำบัด", 'เมื่อถูกมิตรสหายเททริปท่องเที่ยวในฝัน จึงเป็นที่มาของการฉายเดี่ยวเที่ยวคนเดียว และพบว่า การเดินทางโดยลำพังไม่น่ากังวลอย่างที่คิด แถมติดใจเสียแล้ว', "test", 159, 7,3);
insert into ebook(title, abstract, book_path, price, publisher_id,`type_id`) value("Melbourne is happy ชีวิตดีดีไม่เคยปราณีใคร", 'Melbourne is happy ชีวิตดีดีไม่เคยปรานีใคร
เป็นเรื่องราวที่เกิดขึ้นจริงของหญิงสาวบ้านนอก ที่ครอบครัวมีอาชีพทำนา เลี้ยงควาย และเป็นแม่ค้า จึงทำให้มีข้อจำกัดทางการเงิน เธอต้องการเดินทางไปใช้ชีวิตอยู่ในมหานครเมลเบิร์น ประเทศออสเตเรีย เล่าถึงประสบการณ์ การไปเรียนต่อ การทำงาน การท่องเที่ยวและการใช้ชีวิต ในมหานครเมลเบิร์น เมืองที่ขึ้นชื่อว่ามีความสุขที่สุดในโลกในวันที่เธอก้าวเท้าไปถึง แต่ไม่เคยปราณี
ผู้หญิงธรรมดาๆอย่างเธอเลย จักรวาลเหวี่ยงเธอไปเจอเรื่องเซอร์ไพรส์ต่างๆมากมาย ณ เมืองแห่งนี้
จะหรรษาหรือหวาดเสียวแค่ไหน ไปลุ้นกัน!', "test", 289, 8,3);
insert into ebook(title, abstract, book_path, price, publisher_id,`type_id`) value("เอเลี่ยนในซานฟรานซิสโก", 'ผมหนีจากประเทศไทย...
นั่งเครื่องบินมาลงสนามบินซานฟรานซิสโก
ออกมาสูดอากาศ หลังอ้วกแตกบนเครื่อง
กว่า 30 ชั่วโมง ลงเครื่องด้วยความเบิกบานใจ
.
ที่นี่ไม่ใช่ไทย ที่นี่ไม่ใช่ไทย โบกแท็กซี่คันแรกที่เห็น
แล้วตะโกนใส่หน้า ว่ากูจะไป…
"ซัดเต้อ สะตีด!!" (Sutter street)
.
…แท็กซี่สบตากูผ่านกระจก และถามกู
มาประโยคเดียวว่า "Are you from Thailand?"
…เดี๋ยวๆๆ...มึงรู้ได้ไงวะ?', "test", 199, 9, 3);
insert into ebook(title, abstract, book_path, price, publisher_id,`type_id`) value("เที่ยวลาว วังเวียง เวียงจันทน์ หลวงพระบาง", "วันดีๆ ของเจย์ สก็อตในเมืองวิชชอร์เต็มไปเรื่องราวมากมาย วันนี้ เป็นเรื่องราวของคนที่เราเห็นเพียงผ่านๆ อย่างสารวัตรผู้ตรวจการแคว้นแบรนโคลด์ ชายผู้อาจมีความลับส่วนตัวมากมาย แต่นั่นก็คงไม่มากเท่ากับการที่การมาของเขาจะทำให้เราได้ล้วงลึกเข้าไปในความลับของเจย์ สก็อตมากขึ้นไปอีก", "test", 215, 10, 3);
-- การ์ตูน
insert into ebook(title, abstract, book_path, price, publisher_id,`type_id`, set_id) value("SPY x FAMILY เล่ม 01", 'สุดยอดสปาย <สนธยา> ได้รับคำสั่งให้สร้าง "ครอบครัว" เพื่อลอบเข้าไปในโรงเรียนชื่อดัง แต่ "ลูกสาว" ที่เขาได้พบ ดันเป็นผู้มีพลังจิตอ่านใจคน! "ภรรยา" เป็นมือสังหาร!?
โฮมคอเมดี้สุดฮาของครอบครัวปลอมๆ ที่ต่างฝ่ายต่างปกปิดตัวจริงของกันและกัน ที่ต้องเผชิญหน้ากับการสอบเข้าและปกป้องโลก!!', "test", 69, 11,2,1);
insert into ebook(title, abstract, book_path, price, publisher_id,`type_id`, set_id) value("SPY x FAMILY เล่ม 02", 'ตระกูลฟอเจอร์สอบเข้าโรงเรียนดัง เพื่อทำภารกิจปกป้อง ความสงบสุขระหว่างออสทาเนียและเวสทาลิส แต่เพื่อเข้าใกล้เป้าหมายเดสมอนต์ อาเนียจะต้องเป็นนักเรียนดีเด่นให้ได้!!
สนธยาจึงเริ่มปฏิบัติการ "แผนตีสนิทชิดเชื้อ"...!?', "test", 69, 11,2,1);
insert into ebook(title, abstract, book_path, price, publisher_id,`type_id`, set_id) value("SPY x FAMILY เล่ม 03", 'ยูริ น้องชายของยอร์ มาเยือนบ้านฟอเจอร์!! สนธยาและยูริต่างปิดบังตัวจริงของตัวเองที่เป็นสปาย และตำรวจลับเข้าล้วงความลับกันอย่างดุเดือด แล้วยูริผู้รักและเทิดทูนพี่สาว ก็ได้บอกให้สนธยาพิสูจน์ว่าทั้งสองเป็นคู่รักกันจริงๆ...!!', "test", 69, 11,2,1);
insert into ebook(title, abstract, book_path, price, publisher_id,`type_id`, set_id) value("SPY x FAMILY เล่ม 04", 'ผู้ก่อการร้ายคิดจะใช้หมาติดระเบิดลอบสังหารรัฐมนตรีของเวสทาลิส!
ทั้งครอบครัวได้ออกมาหาหมาให้อาเนียเลี้ยง แต่สนธยาก็ต้องเข้าร่วมภารกิจด่วนเพื่อหยุดผู้ก่อการร้าย...!!
ส่วนทางอาเนียก็ได้พบกับหมาปริศนา ที่รู้จักครอบครัวฟอเจอร์ได้ยังไงก็ไม่รู้ !?', "test", 69, 11,2,1);
insert into ebook(title, abstract, book_path, price, publisher_id,`type_id`, set_id) value("SPY x FAMILY เล่ม 05", 'เมื่อรับบอนด์สุนัขผู้หยั่งรู้อนาคต เข้ามาเป็นสมาชิกใหม่
ก็ ดูเหมือนโอเปอเรชั่น STRIX และชีวิตครอบครัวจะไปได้
สวย--- แต่อาเนียก็ต้องมาตกที่นั่งลำบากเมื่อต้องเจอกับ
สอบประเมินผลกลางภาค!? การสอบที่มีสเตล่าและโทบิโห่
เป็นเดิมพันจะออกมาเป็นเช่นไร...!!', "test", 69, 11,2,1);
insert into ebook(title, abstract, book_path, price, publisher_id,`type_id`, set_id) value("SPY x FAMILY เล่ม 06", 'เพื่อตามหาเบาะแสของเอกสารลับจากยุคสงคราม สนธยา
กับย่ำค่ำจึงเข้าร่วมการแข่งขันเทนนิสใต้ดิน!!
แต่คู่สามีภรรยาครอบครัวฟอเจอร์กลับถึงคราววิกฤติ
เพราะย่ำค่ำเห็นว่าตัวเองเหมาะกับบทบรรยายของลอยด์
มากกว่า...!?', "test", 69, 11,2,1);
insert into ebook(title, abstract, book_path, price, publisher_id,`type_id`, set_id) value("SPY x FAMILY เล่ม 07", 'ในที่สุด "สนธยา" ก็ได้พบกับ "เดสมอนด์" เป็นครั้งแรก ด้วยการเข้าไปแทรกการสนทนาระหว่าง "เดสมอนด์" และ "ดาเมียน" ลูกชายคนรอง!! สนธยาพยายามชวนเป้าหมายคุยเพื่อดูว่าอีกฝ่ายเป็นคนอย่างไรแต่...!?', "test", 69, 11,2,1);
-- การศึกษา
insert into ebook(title, abstract, book_path, price, publisher_id,`type_id`) value("ตะลุยโจทย์ Error 500 ข้อ", 'รวมสุดยอดแนวข้อสอบครบทุกประเด็น พร้อมเฉลยและคำอธิบายอย่างละเอียด รู้ใจ GAT O-NET CU-TEP CU-AAT TU-GET SMART-I และสอบตรงทุกสนาม', "test", 159, 12,4);
insert into ebook(title, abstract, book_path, price, publisher_id,`type_id`) value("ความรู้คือพันธนาการ : Why Knowledge does not Free", 'หนังสือ "ความรู้คือพันธนาการ : Why Knowledge Does Not Free" เล่มนี้ แปลมาจากหนังสือซึ่งรวบรวมจดหมายที่ "กฤษณมูรติ" เขียนถึงครูและนักเรียนโรงเรียนต่าง ๆ ที่เขาก่อตั้งขึ้น (มีสองเล่มคือ Letters to the Schools Volume 1 และ Letters to the Schools Volume 2 "ความรู้คือพันธนาการ" เป็นครึ่งหลังของหนังสือเล่มแรก) ผู้แปลเริ่มต้นแปลเรื่องนี้ตั้งแต่กลางปี พ.ศ. 2543 แต่ไม่แล้วเสร็จ ต่อมาทางมูลนิธิอันวีกษณาได้เสนอให้แปลต่อจนจบ

    เนื้อหาภายในเล่มจะทำให้คุณรู้สึกว่าอาชีพครูหรือนักการศึกษาเป็นงานอันประเสริฐสุด เหนืองานอาชีพใด ๆ เพราะเป็นงานเกี่ยวกับการสรรค์สร้างความเป็นมนุษย์ ไม่ได้จำกัดอยู่เพียงการถ่ายทอดวิชาชีพเท่านั้น งานเช่นนี้จึงถือได้ว่าเป็นการศึกษาที่แท้ เพราะปัญหาที่ท้าทายมนุษย์อยู่ ไม่ได้มีเพียงเรื่องวิชาความรู้และการอาชีพเท่านั้น แต่เป็นปัญหาความอยู่รอดของมวลมนุษย์ด้วย ปัญหาในโลกกว้างใหญ่ไพศาลเกินกว่าจะแก้ไขได้ด้วยความรู้ทางวิทยาศาสตร์หรือทางเทคนิค หรือความรู้ทางรัฐศาสตร์หรือทางเศรษฐศาสตร์หรือความรู้แขนงใด ๆ ฉะนั้น หนังสือเล่มนี้จึงเป็นงานที่ต่างจากปรัชญาทางการศึกษาทั่วไป', "test", 230, 13,4);
insert into ebook(title, abstract, book_path, price, publisher_id,`type_id`) value("Biology", 'สรุปสาระสำคัญทั้งความรู้พื้นฐานและเนื้อหาที่ใช้สำหรับในการต่อยอดทางด้าน...ชีววิทยา เหมาะสำหรับนักเรียนในระดับมัธยมศึกษา และนักเรียนที่เตรียมตัวสอบแข่งขันในระดับต่างๆ อาทิ สอวน. ชีวิทยารอบแรก หรือ การสอบคัดเลือกเพื่อศึกษาต่อในระดับมหาวิทยาลัย โดยเฉพาะอย่างยิ่ง ในสาขาชีววิทยาโดยตรง หรือในสาขาวิทยาศาสตร์สาธารณสุขกลุ่มต่างๆ นอกจากนี้ ยังเหมาะกับบุคคลทั่วไปที่มีความสนใจเพิ่มเติมทางด้านชีววิทยาอีกด้วย', "test", 590, 14,4);
insert into ebook(title, abstract, book_path, price, publisher_id,`type_id`) value("พระราชบัญญัติลิขสิทธิ์ ปรับปรุงใหม่ พ.ศ. 2565", 'ใหม่ พ.ศ.2565 + 3 ปี พ.ศ. พร้อมกฎกระทรวง ฉบับที่ 1 ถึงปัจจุบัน ประกาศ ระเบียบ คำสั่ง ข้อบังคับ สิ่งที่ต้องรู้เกี่ยวกับอาวุธปืน', "test", 120, 15,4);
insert into ebook(title, abstract, book_path, price, publisher_id,`type_id`) value("พจนานุกรมจิ๋ว จีน-ไทย", 'รวมคำศัพท์ภาษาจีนพื้นฐานที่ควรเรียนรู้ในชีวิตประจำวันมากกว่า 3,000 คำ แบ่งออกเป็นหมวดหมู่สำคัญ จำนวน 50 หมวด เช่น ตัวเลข ร่างกาย ครอบครัว คน อุปนิสัย การศึกษา อาหารและเครื่องดื่ม งานอดิเรก เป็นต้น', "test", 125, 16,4);

insert into ebook(title, abstract, book_path, price, publisher_id,`type_id`) value("	
Fundamental of Software Engineering & Digital Transformation", 'หนังสืออธิบายกระบวนการการปรับเปลี่ยนสู่ดิจิทัลด้วยวิศวกรรมซอฟต์แวร์ นอกจากนี้ยังได้รวบรวมแนวคิดในการพัฒนาซอฟต์แวร์แบบใหม่ๆ และกรณีศึกษาเพื่อให้ผู้อ่านได้ก้าวทันตามการเปลี่ยนแปลงของเทคโนโลยี', "test", 590, 17,5);
insert into ebook(title, abstract, book_path, price, publisher_id,`type_id`) value("พื้นฐานการเขียนโปรแกรมและอัลกอริทึมภาษา C", '    หนังสือเล่มนี้ใช้ภาษาซีล่าสุดคือ C18 และเครื่องมือเขียนโปรแกรม Dev-C++ ประกอบด้วยหลักพื้นฐานสำคัญต่างๆ ของภาษาซีที่ควรทราบ รวมถึงหลักการทำงานตามลำดับขั้นตอนในการเขียนโปรแกรมซึ่งเรียกว่าอัลกอริทีม ช่วยให้เกิดแนวคิดในการเขียนโปรแกรมที่เป็นไปอย่างมีประสิทธิภาพ เหมาะกับผู้เริ่มต้นที่สนใจและศึกษาด้วยตนเอง หรือต้องการทบทวนทำความเข้าใจให้มากยิ่งขึ้นในการเขียนโปรแกรมด้วยภาษาซี นอกจากนี้ในแต่ละบทยังมีแบบฝึกหัดทบทวน เพื่อให้ผู้เรียนได้ฝึกฝนทำความเข้าใจและเฉลยโจทย์ที่เกี่ยวกับการแก้ไขปัญหา', "test", 255, 18,5);
insert into ebook(title, abstract, book_path, price, publisher_id,`type_id`) value("พัฒนาเว็บแอพพลิเคชันด้วย Vue.js Vuex + Bootstrap", 'หนังสือเล่มนี้ ได้กล่าวถึงวิธีใช้งาน Vue.js ตั้งแต่เริ่มต้นจนถึงระดับที่สามารถนำไปพัฒนาแอพพลิเคชันจริง เพียงผู้อ่านมีความรู้พื้นฐานเกี่ยวกับ HTML และ JavaScript ก็สามารถศึกษาวิธีใช้งาน Vue.js ได้อย่างไม่ยาก นอกจากนั้นหนังสือเล่มนี้ยังได้กล่าวถึงวิธีตกแต่ง Vue.js ด้วยการใช้ Bootstrap 4 ผลลัพธ์แอพพลิเคชันที่ได้ จึงมีหน้าตาสวยงาม และสามารถแสดงผลบนอุปกรณ์ที่มีขนาดหน้าจอที่แตกต่างกันได้', "test", 590, 19,5);
insert into ebook(title, abstract, book_path, price, publisher_id,`type_id`) value("เรียนรู้ AI : Deep Learning ด้วย Python", '"AI" เป็นเทคโนโลยีที่เข้ามามีบทบาทสำคัญต่อธุรกิจการทำงานและการใช้ชีวิตยุคปัจจุบันและอนาคต "Deep Learning" เป็นกลไกสำคัญที่อยู่เบื้องหลังทำให้ AI มีความซาญฉลาดจนน่าทึ่ง

    หนังสือเล่มนี้ เรียบเรียงขึ้นสำหรับผู้เริ่มต้นเรียน Deep Learning แบบ Step-by-Step เน้นการเรียนรู้ด้วยการฝึกปฏิบัติ Workshop จากโค้ดตัวอย่าง การใช้เครื่องมือไลบรารีที่สำคัญ TensorFlow Keras เนื้อหาครอบคลุมตั้งแต่การติดตั้งระบบ พื้นฐานที่สำคัญ จนถึงการประยุกต์ใช้งาน ซึ่งการเรียนรู้ที่ดีจะไม่เพียงแค่ใช้ไลบรารีเป็นเท่านั้น ผู้ศึกษาจะต้องเรียนรู้หลักการหัวใจสำคัญด้วย ดังนั้น เนื่อหาจึงได้สอดแทรกทฤษฎีที่สำคัญเอาไว้ โดยใช้ภาษาที่เข้าใจง่าย มีส่วนที่เป็นคณิตศาสตร์น้อยที่สุด เน้นรูปภาพให้เข้าใจง่าย เหมาะสำหรับผู้เริ่มต้น', "test", 299, 20,5);
insert into ebook(title, abstract, book_path, price, publisher_id,`type_id`) value("การพัฒนาแอปพลิเคชั่นด้วยภาษา Java", '    หนังสือเล่มนี้เหมาะกับผู้ที่ต้องการศึกษาการใช้ภาษาจาวา เพื่อพัฒนาแอปพลิเคชั่นมาใช้งาน และก้าวไปสู่การเป็นนักพัฒนาแอปพลิเคชั่น โดยเนื้อหาที่นำเสนอเป็นจาวารุ่น 8 และใช้ได้กับรุ่นถัดไป แบ่งเนื้อหาเป็น 5 ตอน ในตอนที่ 1 และ 2 จะเป็นเรื่องพื้นฐานเบื้องต้นของภาษาจาวา และการเขียนโปรแกรมเชิงวัตถุ ใช้เป็นพื้นฐานความรู้สำคัญที่ใช้ศึกษาต่อในตอนถัดไป จึงเหมาะกับผู้ที่เริ่มต้นหรือผู้ที่ต้องการทบทวนความสามารถใหม่ๆ ที่มีในรุ่น 8 โดยมีการกล่าวถึงรุ่น 9 ในบางเรื่อง ส่วนผู้ที่มีความรู้ภาษาจาวามาแล้ว สามารถไปยังตอนที่ 3 4 5 เพื่อที่จะศึกษาการพัฒนาแอปพลิเคชั่น ซึ่งแบ่งออกเป็น แอปพลิเคชั่นที่พัฒนาด้วยจาวาสวิง แอปพลิเคชั่นที่ใช้ในงานฐานข้อมูล และแอปพลิเคชั่นที่พัฒนาด้วยจาวาเอฟเอ็กซ์ โดยในเล่มอธิบายเนื้อหาอย่างละเอียด เป็นขั้นตอน พร้อมตัวอย่างหลากหลาย ซึ่งผู้อ่านสามารถเรียนรู้ได้ด้วยตนเอง', "test", 415, 18,5);


insert into author_ebook(ebook_id, author_id) value(1,1);
insert into author_ebook(ebook_id, author_id) value(2,2);
insert into author_ebook(ebook_id, author_id) value(3,3);
insert into author_ebook(ebook_id, author_id) value(4,4);
insert into author_ebook(ebook_id, author_id) value(5,5);
insert into author_ebook(ebook_id, author_id) value(6,6);
insert into author_ebook(ebook_id, author_id) value(7,7);
insert into author_ebook(ebook_id, author_id) value(8,8);
insert into author_ebook(ebook_id, author_id) value(9,9);
insert into author_ebook(ebook_id, author_id) value(10,10);

insert into author_ebook(ebook_id, author_id) value(11,11);
insert into author_ebook(ebook_id, author_id) value(12,11);
insert into author_ebook(ebook_id, author_id) value(13,11);
insert into author_ebook(ebook_id, author_id) value(14,11);
insert into author_ebook(ebook_id, author_id) value(15,11);
insert into author_ebook(ebook_id, author_id) value(16,11);
insert into author_ebook(ebook_id, author_id) value(17,11);
insert into author_ebook(ebook_id, author_id) value(18,12);
insert into author_ebook(ebook_id, author_id) value(19,13);
insert into author_ebook(ebook_id, author_id) value(20,14);
insert into author_ebook(ebook_id, author_id) value(21,15);
insert into author_ebook(ebook_id, author_id) value(22,16);
insert into author_ebook(ebook_id, author_id) value(23,17);
insert into author_ebook(ebook_id, author_id) value(24,18);
insert into author_ebook(ebook_id, author_id) value(25,19);
insert into author_ebook(ebook_id, author_id) value(26,19);
insert into author_ebook(ebook_id, author_id) value(27,18);



insert into admin_ebook (ebook_id, admin_id,modify_type,modify_date) values (1,1,'add','2022-02-25');
insert into admin_ebook (ebook_id, admin_id,modify_type,modify_date) values (2,1,'add','2022-02-25');
insert into admin_ebook (ebook_id, admin_id,modify_type,modify_date) values (3,1,'add','2022-02-25');
insert into admin_ebook (ebook_id, admin_id,modify_type,modify_date) value (4,1,'add','2022-03-25');
insert into admin_ebook (ebook_id, admin_id,modify_type,modify_date) value (5,1,'add','2022-04-25');
insert into admin_ebook (ebook_id, admin_id,modify_type,modify_date) value (6,1,'add','2022-01-25');
insert into admin_ebook (ebook_id, admin_id,modify_type,modify_date) value (7,1,'add','2022-01-25');
insert into admin_ebook (ebook_id, admin_id,modify_type,modify_date) value (8,1,'add','2021-01-25');
insert into admin_ebook (ebook_id, admin_id,modify_type,modify_date) value (9,1,'add','2020-03-25');
insert into admin_ebook (ebook_id, admin_id,modify_type,modify_date) value (10,2,'add','2020-04-25');
insert into admin_ebook (ebook_id, admin_id,modify_type,modify_date) value (11,2,'add','2022-04-25');
insert into admin_ebook (ebook_id, admin_id,modify_type,modify_date) value (12,2,'add','2022-04-25');
insert into admin_ebook (ebook_id, admin_id,modify_type,modify_date) value (13,2,'add','2022-04-25');
insert into admin_ebook (ebook_id, admin_id,modify_type,modify_date) value (14,2,'add','2022-04-25');
insert into admin_ebook (ebook_id, admin_id,modify_type,modify_date) value (15,2,'add','2022-04-25');
insert into admin_ebook (ebook_id, admin_id,modify_type,modify_date) value (16,2,'add','2022-04-25');
insert into admin_ebook (ebook_id, admin_id,modify_type,modify_date) value (17,2,'add','2022-04-25');
insert into admin_ebook (ebook_id, admin_id,modify_type,modify_date) value (18,2,'add','2000-04-25');
insert into admin_ebook (ebook_id, admin_id,modify_type,modify_date) value (19,2,'add','2000-04-25');
insert into admin_ebook (ebook_id, admin_id,modify_type,modify_date) value (20,2,'add','2000-04-25');
insert into admin_ebook (ebook_id, admin_id,modify_type,modify_date) value (21,2,'add','2020-04-25');
insert into admin_ebook (ebook_id, admin_id,modify_type,modify_date) value (22,2,'add','2020-04-25');
insert into admin_ebook (ebook_id, admin_id,modify_type,modify_date) value (23,2,'add','2021-04-25');
insert into admin_ebook (ebook_id, admin_id,modify_type,modify_date) value (24,2,'add','2022-04-25');
insert into admin_ebook (ebook_id, admin_id,modify_type,modify_date) value (25,2,'add','2022-04-25');
insert into admin_ebook (ebook_id, admin_id,modify_type,modify_date) value (26,2,'add','2020-04-25');
insert into admin_ebook (ebook_id, admin_id,modify_type,modify_date) value (27,2,'add','2020-04-25');




