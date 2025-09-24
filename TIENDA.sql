CREATE DATABASE TIENDA;
USE TIENDA;

CREATE TABLE Producto (
 id INT auto_increment primary key,
 nombre VARCHAR(100) NOT NULL,
 precio DECIMAL(10,2) NOT NULL,
 cantidad INT NOT NULL
 );
 
 CREATE TABLE Ventas (
  id INT auto_increment primary key,
  total DECIMAL(10,2) NOT NULL,
  iva DECIMAL(10,2) NOT NULL,
  fecha TIMESTAMP DEFAULT current_timestamp
  );
  
  CREATE TABLE Productoventa (
   id INT auto_increment primary key,
   venta_id INT NOT NULL,
   producto_id INT NOT NULL,
   cantidadVendida INT NOT NULL,
   subtotal DECIMAL(10,2) NOT NULL,
   precioventa DECIMAL(10,2) NOT NULL,
   FOREIGN KEY(venta_id) REFERENCES Ventas(id),
   FOREIGN KEY(producto_id) REFERENCES Producto(id)
   );
   
   ALTER USER 'root'@'localhost' IDENTIFIED WITH mysql_native_password BY 'itson';
   GRANT ALL PRIVILEGES ON TIENDA.* TO 'root'@'localhost';
   flush privileges;