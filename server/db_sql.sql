create table vendors(
	id SERIAL primary KEY,
	first_name VARCHAR(50) not null,
	last_name VARCHAR(50) not null,
	pronouns VARCHAR(50),
	email VARCHAR(50) NOT NULL,
	goods_type TEXT,
	description TEXT,
	lower_price INTEGER,
	upper_price INTEGER
);

-- Please use this images table
create table images(
	id SERIAL primary Key,
	vendor_id INTEGER NOT NULL,
	is_profile_pic BOOLEAN,
	link TEXT
);

-- Deprecated, please use above images table
create table vendorsImages(
	id SERIAL primary KEY,
	profile_pic TEXT,
	image1 TEXT,
	image2 TEXT,
	image3 TEXT,
	image4 TEXT
);

COPY vendors(first_name, last_name, pronouns, email, goods_type, description, lower_price, upper_price)
FROM './vendorDetails.csv'
DELIMITER ','
CSV HEADER;

COPY images(vendor_id, link)
FROM './vendorImages.csv'
DELIMITER ','
CSV HEADER;
