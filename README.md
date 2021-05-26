#  SCC0219 - Web Development
## Online Shop - Plants and Gardening Tools
Online shop website, that contains products for gardening, like plants, soil, vases and tools. The application suports two types of users: admin (to manage products, promotions and other users) and clients (that can buy products and add their favorite to cart). <br>
The specific application for this kind business is the possibility to teach the user how to take care of the plant they intend to buy, like a little manual.


## Group:
* Ana Laura Chioca Vieira - 9866531
* Maria Fernando Lucio de Mello - 11320860
* Paulo Matana - 10892676

## Requirements:
* The system must have 2 types of users: Clients and Administrators.
  * Administrators are responsible for registering/managing administrators, customers, and products/services provided. The application already comes with an account admin with password admin.
  * Customers are users who access the system to buy products/services.

* The admin record includes, at least: name, id, phone, email.
* Each customer's record includes, at least: name, id, address, phone, email.
* Product/services records include, at least: name, id, photo, description, price, size, quantity (in stock), quantity sold.
* Your store may sell products, services or both (you decide).
* Selling Products (or services): Products are selected, their quantity chosen, and are included in a cart. Products are purchased using a credit card number (any number is accepted by the system). The quantity of product sold is subtracted from the quantity in stock and added to the quantity sold. Carts are emptied only on payment or by customers.
* Product/Service Management: Administrators can create/update/read/delete (crud) new products and services. For example, they can change the stock quantity.
* Your functionality: In this website, for all plants in the sales catalog, there will be a little manual on how to take care of it.
* The system must provide accessibility requirements and provide good usability. The system must be responsive.

## Project Description:

The following diagram shows how our website works:

![diagrama](./img/web_diagram(2).png)

#### Navbar
The navbar appears in every page of our application, and was made using Bootstrap's navbar component. A specific stylesheet was used to apply different colors to the navbar. 

#### Admin Page
This page (admin.html) is shown when the administrator is logged in and now he can access new functionalities. <br>
This user can manage the available products, manage the current promotions and manage the users (clientes) that are cadastrated on the plataform. <br>
There he can normally access all the other pages, but, of course, has some of the privilegies told before.
The "Bem vindo, Fulano" button will redirect the user to a page where they can edit their own infos (username, password, etc). This page has not yet been made.

#### Login Page
In this page the user can login the website's system using a registerd email and password. After connected the user will be redirected to the main page, if logged with a client account, or to admin page if logged with an admin account.<br>
If the user doesn't have a registerd account, from this page he can access the register page.

#### Products Page
This page shows all the products available in our online shop. If the client clicks the "produtos" button in the navbar, they are redirected to this page. If they click another button, such as "acessórios" or "terra", they will be redirected to the same products page, but a filter will be applied (in the next milestone of the project). The products page was built using Bootstrap's cards and grid system.

#### Main Page
The main page is responsive, and the background image changes according to the size of the screen.

#### Other pages
Some other pages will be made for this project, such as the cart page, which will list all the products chosen by the user, and the user page, in which the user will be able to change it's infos (name, password, etc).
 
## Comments About the Code:

In this project, CSS3, HTML5 and Bootstrap were used.

## Test Plan:



## Test Results:



## Build Procedure:


## Problemms:
  We had some problems to implemet a single navbar html file and use it in all the other pages. For now we have created one navbar code for each page.

## Comments:
