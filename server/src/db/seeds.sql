INSERT INTO customer(f_name, l_name, email, phone)
    VALUES('suzie', 'schredder', 'suzie@email.com', '5552223333'),
    ('ronald', 'rad', 'ronald@email.com', '5556669999'),
    ('don', 'duder', 'don@email.com', '5554447777');

INSERT INTO user(f_name, l_name, admin, email)
    VALUES('Sam', 'Gamgee', true, 'gamgee.em@gmail.com'),
    ('Bernadette', 'Knowles', false, 'bernadette@email.com');

INSERT INTO job(service_date, starting_address, inbetween_address, ending_address, hourly_rate, tolls, fuel, elevator, servicing_employees, misc_info, customer_id, user_id)
    VALUES(09202022, '123 test st, highland, ny, 12528', '456 test st, highland, ny, 12528', '789 test st, highland, ny, 12528', 169, 20, 50, false, 'sam, bern, krit', 'test misc info', 1, 2),
    (010212022, '1 test st, philadelphia, pa, 19125', '2 test st, philadelphia, pa, 19125', '3 test st, philadelphia, pa, 19125', 189, 10, 20, true, 'thao, mica, hop', 'test misc info again', 2, 1),
    (11222022, '123 test st, philadelphia, pa, 19125', '', '789 test st, highland, ny, 12528', 209, 75, 100, false, 'krit, sam, hop', 'test misc info one more time', 3, 1),
    (09202022, '123 test st, highland, ny, 12528', '456 test st, highland, ny, 12528', '789 test st, highland, ny, 12528', 169, 20, 50, false, 'sam, bern, krit', 'test misc info', 3, 1);
