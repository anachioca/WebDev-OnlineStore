#  SCC0219 - Web Development
## MAPlantinhas Online Shop - Plants and Gardening Tools
Online shop website, that contains products for gardening, like plants, soil, vases and tools. The application suports two types of users: admin (to manage products, promotions and other users) and clients (that can buy products and add their favorite to cart). <br>
The specific application for this kind business is the possibility to teach the user how to take care of the product they intend to buy, like a little manual.

You can access our website on http://maplantinhas.herokuapp.com/

## Group:
* Ana Laura Chioca Vieira - 9866531
* Maria Fernando Lucio de Mello - 11320860
* Paulo Matana - 10892676

## Requirements:
* The system must have 2 types of users: Clients and Administrators.
  * Administrators are responsible for registering/managing administrators, customers, and products/services provided. The application already comes with an account admin@gmail.com with password admin. Admins are a special kind of user.
  * Customers are users who access the system to buy products/services.
* The admin record includes: name, id, phone, email and password.
* Each customer's record includes: name, id, address, phone, email and password.
* Product/services records includes: name, id, photo, description, price, size, quantity (in stock), quantity sold.
* Selling Products: Products are selected, their quantity chosen, and are included in a cart. Products are purchased using a credit card number (any number is accepted by the system). The quantity of product sold is subtracted from the quantity in stock and added to the quantity sold. Carts are emptied only on payment or by customers.
* Product Management: Administrators can create/update/read/delete products and services.
* Your functionality: In this website, for all plants in the sales catalog, there will be a small manual on how to take care of it.
* The system must provide accessibility requirements and provide good usability. The system must be responsive.

## Project Description:

The following diagram shows how our website works:

Logged user:
![diagramaLogado](public/img/userLogado.png)

Unlogged user:
![diagramaNLogado](public/img/nãoLogado.png)

Administrator user:
![diagramaADMIN](public/img/ADMINn.png)

#### Navbar
The navbar appears in every page of our application, and was made using Bootstrap's navbar component. A specific stylesheet was used to apply different colors to the navbar. We load the navbar onto each page using javascript. The navbar is presented in a different manner depending on the type of the user (administrator, client or unlogged). On the navbar, the user can access the products page, the cart (if they are a client) or the admin page (if they are an admin), and the user page.

#### Admin Page (and subsequent pages)
This page is shown in the navbar when the administrator is logged in.
In this page the admin can manage the available products or the users that are registered on the plataform. He can turn a normal user (client) into a new administrator. He could also add new products or edit the already existing ones.

#### User Page
In the user page, which can be accessed through the green button on the right side of the navbar, the user can view their information, log out from their acconut, delete their account and, if they are an administrator they can also stop being an administrator.

#### Login Page
In this page the user can login the website's system using a registerd email and password. After connected the user will be redirected to the main page, if logged with a client account, or to admin page if logged with an admin account.<br>
If the user doesn't have a registered account, he can access the register page from this page.<br>

##### Login as Admin (mocked)
Login: admin@gmail.com <br>
Password: admin

##### Login as regular user
Login: m@m.com <br>
Password: 123<br>

#### Products Page
This page shows all the products available in our online shop. The product cards are loaded in this page using javascript. All products are saved in local storage, and we load each of them separately. This way, if an administrator adds a new product or edits an already existing one, the products page will be automatically updated.
This page also presents our group's functionality. For every product that belongs to the category "plant", there will be a button "cuidados" which opens a modal with instructions on how to care for your plant.

#### Cart and Payments Page
This page displays all the products selected by the user. It's possible to change the desired quantity of each product, as well as remove them. The sidebar display the current cost of all products in the cart and the shipment options. After the user is done with shopping, they can go to the payment page, where they'll fill in the forms with shipment and payment information. After the payment is concluded, the user is redirected to the main page. 

#### Main Page
The main page is responsive, and the background image changes according to the size of the screen. 
 
## Comments About the Code:

In this project, CSS3, HTML5, Bootstrap, JavaScript and Python (for the server) were used.

## Test Plan:

Our tests were made manually. 

## Test Results:

We performed multiples tests for each funcionality of our system. To test the functionalities it was necessary to use some type of database, in this project we used the local storage as a fake database, this way we could save Product and User objects and simulate a database API call inside the functionalities javascript code. 

* Login systems is working well for all types of users. After loging in user is redirected to the correspondent page depending on it's type (admin or client).
* Users can loggout from their account. 
* Registration page is working well. After registering the user's informations are saved in the database and the user is redirected to the login page.
* Administrator pages are working well. 
  * The administrator can make other users in the local storage administrators. One administrator can not remove another administrator's role, but only their own. Everything is working as expected.
  * The administrator can add new products or edit the ones already in local storage. Both actions are working well and the product infos are being saved in local storage correctly.
* Clients can add products to the cart only once, and can change the desired quantity in the cart page. Once a product is already inside the cart, it cannot be added again, but only removed or have it's quantity changed.
* The cart is interactive and displays the current sum of all the products in the shopping cart.

#### Forms testing:
The following forms were tested:
* Payment: We verify many inputs from the user, like the name, which can not contain numbers, and the phone number, which can not contain letters, but may contain special characters. All inputs except for the "complemento" input are required. We tested the form validation trying to submit the payment with many "wrong" inputs. The forms validation works and the payment is only submitted if every informtion required is filled and correct.  
* SignUp: We verify many inputs from the user, like the name, which can not contain numbers, the phone number, which can not contain letters, but may contain special characters, and the passwords. All inputs except for the "complemento" input are required. We tested the form validation trying to submit the new user with many "wrong" inputs. The forms validation works and the new user can only be registered if every information required is filled and correct.   
* Edit/Add Products: We do not allow numbers in the name of the product and prices that are equal or bellow 0. Every input except for the "cuidados" input is required. We tested this form trying to submit the product with missing information or wrong values, and the form works.   


#### Back-End testing:  


## Build Procedure:

To execute our program, you must install [npm](https://www.npmjs.com/) and [NodeJS](https://nodejs.org/en/)

To install the dependencies run `npm install`.   
To run our website, run `npm start` in the same directory as the project's folders are.  
Type `http://localhost:3000/` on your browser to access our main page.

Or simply access our webpage [here](http://maplantinhas.herokuapp.com/)   


## Problems:
 We had some problems to implement a single navbar html file and use it in all the other pages, and now (2nd milestone) we are able to do this by using javascipt.
 In the last Peer Review, the reviwers noticed that the modal for the "cuidados" button doesn't work if you add the care instructions to products that didn't previously have it. We have fixed that problem.

## Comments:
 We did not implement safety and data security and protection.
