-- Multi-Table Query Practice

-- Display the ProductName and CategoryName for all products in the database. Shows 77 records.

    - SELECT p.ProductName, c.CategoryName from Product as p
      JOIN category as c ON p.CategoryId = c.Id

-- Display the order Id and shipper CompanyName for all orders placed before August 9 2012. Shows 429 records.

    select o.id, s.companyName
    from [order] as o
    join Shipper as s
    on s.id = o.shipVia
    where o.orderDate < '2012-08-09';

-- Display the name and quantity of the products ordered in order with Id 10251. Sort by ProductName. Shows 3 records.


    SELECT p.ProductName, p.QuantityPerUnit from Product as p
    JOIN OrderDetail as od ON p.Id = od.ProductId
    WHERE od.OrderId = 10251

-- Display the OrderID, Customer's Company Name and the employee's LastName for every order. All columns should be labeled clearly. Displays 16,789 records.

    select o.Id, c.companyName, e.lastName
    from employee as e
    join [order] as o
    on o.employeeId = e.id
    join customer as c
    on o.CustomerId = c.id;