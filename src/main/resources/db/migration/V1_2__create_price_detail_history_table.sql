CREATE TABLE public.price_detail_history (
	id serial not null,
	price float8 NULL,
	"date_time" timestamp NULL,
	price_detail_id int4 NULL,
	CONSTRAINT price_detail_history_fk FOREIGN KEY (price_detail_id) REFERENCES public.price_detail(id)
);
