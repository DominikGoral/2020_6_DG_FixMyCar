-------- ADDRESSES ---------- 
INSERT INTO Address(City, Street, HomeNumber, FlatNumber, ZipCode)
	VALUES ('Warszawa', 'Sikorskiego', '111a', 1, '22-758');
INSERT INTO Address(City, Street, HomeNumber, FlatNumber, ZipCode)
	VALUES ('Gorzów Wielkopolski', 'Warszawska', '13', 6, '66-400');
INSERT INTO Address(City, Street, HomeNumber, FlatNumber, ZipCode)
	VALUES ('Gorzów Wielkopolski', 'Żniwna', '2', NULL, '66-400');
INSERT INTO Address(City, Street, HomeNumber, FlatNumber, ZipCode)
	VALUES ('Krasowiec', NULL, '22', NULL, '66-446');
	
-------- CUSTOMERS ---------- 
INSERT INTO Customer(Email, FirstName, Surname, Id_address, Password, PhoneNumber, CreditCardNumber)
	VALUES ('michal.kowalski83@gmail.com', 'Michał', 'Kowalski', 1, 'Qwerty123', '+48669552564', NULL);
INSERT INTO Customer(Email, FirstName, Surname, Id_address, Password, PhoneNumber, CreditCardNumber)
	VALUES ('ania.makowskaaa@gmail.com', 'Ania', 'Makowska', 2, 'sbda12kdjab', '+48779545564', '2235453454178932');
INSERT INTO Customer(Email, FirstName, Surname, Id_address, Password, PhoneNumber, CreditCardNumber)
	VALUES ('maciek.maciek83@gmail.com', 'Maciej', 'Nowak', 3, 'hlcwdabla1', '+48669182564', NULL);
	
-------- VEHICLES --------
INSERT INTO Vehicle(VIN_Number, VehicleName, VehicleModel, Version, YearOfProduction, EngineCapacity, Fuel, Color, Type, Id_customer)
	VALUES ('2HGES26772H566107', 'Honda', 'Civic', 2, 2002, 1600, 'Benzyna', NULL, 'Hatchback', 'michal.kowalski83@gmail.com');
INSERT INTO Vehicle(VIN_Number, VehicleName, VehicleModel, Version, YearOfProduction, EngineCapacity, Fuel, Color, Type, Id_customer)
	VALUES ('JM3ER29L070133282', 'Mazda', 'CX 7', 5, 2007, 2261, 'Benzyna', NULL, 'SUV', 'michal.kowalski83@gmail.com');
INSERT INTO Vehicle(VIN_Number, VehicleName, VehicleModel, Version, YearOfProduction, EngineCapacity, Fuel, Color, Type, Id_customer)
	VALUES ('WP0AA29966S716557', 'Porsche', '911', 997, 2006, 3824, 'Benzyna', NULL, 'Coupe', 'ania.makowskaaa@gmail.com');
INSERT INTO Vehicle(VIN_Number, VehicleName, VehicleModel, Version, YearOfProduction, EngineCapacity, Fuel, Color, Type, Id_customer)
	VALUES ('JM1FE173540138012', 'Mazda', 'RX 8', 2, 2004, 1299, 'Benzyna', 'Srebrny', 'Coupe', 'ania.makowskaaa@gmail.com');
INSERT INTO Vehicle(VIN_Number, VehicleName, VehicleModel, Version, YearOfProduction, EngineCapacity, Fuel, Color, Type, Id_customer)
	VALUES ('KMHDU4AD5AU136970', 'Hyundai', 'Elantra', 2, 2010, 1591, 'Olej napędowy', NULL, 'Sedan', 'maciek.maciek83@gmail.com');
	
-------- WORKSHOPS --------
INSERT INTO Workshop(NIP, WorkshopName, Category, Id_address, Password, Description)
	VALUES('5993045632', 'Zakład mechaniki pojazdowej Marian Kowalski', 'Mechanika', 4, 'latwehaslo3234', NULL);

-------- SERVICES --------
INSERT INTO Service(ServiceName) VALUES ('Wymiana opon');
INSERT INTO Service(ServiceName) VALUES ('Przegląd techniczny');
INSERT INTO Service(ServiceName) VALUES ('Diagnoza');
INSERT INTO Service(ServiceName) VALUES ('Wymiana uszczelki pod głowicą');
INSERT INTO Service(ServiceName) VALUES ('Zmiana oleju');
INSERT INTO Service(ServiceName) VALUES ('Zmiana filtru powietrza');

-------- OFFERED SERVICES --------
INSERT INTO OfferedServices(Id_service, Id_workshop, Price, ServiceDurationTime)
	VALUES(1, '5993045632', 23.50, '0,25 h');
INSERT INTO OfferedServices(Id_service, Id_workshop, Price, ServiceDurationTime)
	VALUES(2, '5993045632', 100, '0,75 h');
INSERT INTO OfferedServices(Id_service, Id_workshop, Price, ServiceDurationTime)
	VALUES(3, '5993045632', 50, '0,75 h');
INSERT INTO OfferedServices(Id_service, Id_workshop, Price, ServiceDurationTime)
	VALUES(4, '5993045632', 1000, '8 h');
INSERT INTO OfferedServices(Id_service, Id_workshop, Price, ServiceDurationTime)
	VALUES(5, '5993045632', 79.99, '1 h');
	
	-------- ADVERTISEMENTS --------
INSERT INTO Advertisement(Id_workshop, Rate) VALUES ('5993045632', 3.8);

-------- COMMENTS --------
INSERT INTO Comment(Id_advertisement, Id_customer, CommentContent)
	VALUES (1, 'maciek.maciek83@gmail.com', 'Bardzo przyjemna obsługa. Wszystkie prace na wysokim standardzie
	polecam każdemu!');
INSERT INTO Comment(Id_advertisement, Id_customer, CommentContent)
	VALUES (1, 'maciek.maciek83@gmail.com', 'Po raz kolejny polecam. I tym razem wszystko zrobione na czas');
	
	-------- VISITS --------
INSERT INTO Visit(Id_workshop, Id_customer, Id_vehicle, VisitDate, VisitDescription, VisitDurationTime, TotalPrice, PaymentMethod)
	VALUES ('5993045632', 'maciek.maciek83@gmail.com', 'KMHDU4AD5AU136970', STR_TO_DATE('20200120 0800', '%Y%m%d %H%i'), 'Wymiana uszczelki pod głowicą', '8 h', 1649.54, 'gotówka'); 
INSERT INTO Visit(Id_workshop, Id_customer, Id_vehicle, VisitDate, VisitDescription, VisitDurationTime, TotalPrice, PaymentMethod)
	VALUES ('5993045632', 'maciek.maciek83@gmail.com', 'KMHDU4AD5AU136970', STR_TO_DATE('20190411 1500', '%Y%m%d %H%i'), 'Wymiana uszczelki pod głowicą', '8 h', 1649.54, 'gotówka'); 
INSERT INTO Visit(Id_workshop, Id_customer, Id_vehicle, VisitDate, VisitDescription, VisitDurationTime, TotalPrice, PaymentMethod)
	VALUES ('5993045632', 'ania.makowskaaa@gmail.com', '2HGES26772H566107', STR_TO_DATE('20191130 1300', '%Y%m%d %H%i'), 'Został dokonany przegląd techniczny', '0.75 h', 100, 'karta- przy odbiorze'); 
INSERT INTO Visit(Id_workshop, Id_customer, Id_vehicle, VisitDate, VisitDescription, VisitDurationTime, TotalPrice, PaymentMethod)
	VALUES ('5993045632', 'michal.kowalski83@gmail.com', 'JM3ER29L070133282', STR_TO_DATE('20190923 0800', '%Y%m%d %H%i'), 'Został dokonany przegląd techniczny i wymiana oleju', '1.75 h', 266.83, 'przelew'); 
	
	-------- SERVICES IN VISIT --------
INSERT INTO ServicesInVisit(Id_visit, Id_service) VALUES (1,4);
INSERT INTO ServicesInVisit(Id_visit, Id_service) VALUES (2,4);
INSERT INTO ServicesInVisit(Id_visit, Id_service) VALUES (3,2);
INSERT INTO ServicesInVisit(Id_visit, Id_service) VALUES (4,2);
INSERT INTO ServicesInVisit(Id_visit, Id_service) VALUES (4,5);