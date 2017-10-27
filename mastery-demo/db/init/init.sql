CREATE TABLE master (
    id SERIAL PRIMARY KEY,
    name VARCHAR(30),
    company VARCHAR(30),
    phone BIGINT
);

INSERT INTO master(name, company, phone)
VALUES ('Seth', null, 5554443333)






/* I decided to use VARCHAR(30)
 for name because i dont want a users name
  to take up more than 30 characters.
   varchar also is quicker than TEXT.     
   
   
   I used the same structure for company. 
   for the same reasons

   I used BIGINT for the phone phone numbers that range from 7 digits to 10
   
                       */