create table my_price (
       id  serial not null,
        client_email varchar(255),
        email_sent boolean,
        new_price float8,
        price float8,
        url varchar(255),
        primary key (id)
    )