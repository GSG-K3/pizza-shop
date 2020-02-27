# pizza-shop

<h2>It is a website that is designed to allow customers from pizaa online ordering</h2>

<a href="https://gsg-k3.github.io/pizza-shop/">Pizza Shop Website</a>

<h3>User Journy:</h3>
<p>As a customer I should be able to order a specific type of pizza by filling a form.<br>
As an employee I should be able to check all orders details.</p>

<h3>How To Run our project: </h3>
<ol>
<li>clone repo.</li>
<li>in terminal: npm i</li>
<li>create database in heroku.</li>
<li>create config.env file in the project.</li>
<li>take the database url from heroku and save it in config.env file like this: <br>
DATABASE_URL = < your database from heroku ></li>
<li>in the terminal : npm start</li>
<li>open localhost:3000 and the project will run.</li>
</ol>


<h3>IMPORTANT NOTE:</h3>
when you enter to employee page use : 123456 as a password

<h3>File Structure:</h3>

- public
   - css
        - index.css
        - customer.css
        - employee.css
        - password.css

   - js
       - employee.js
       - password.js
   - index.html
   - customer.html
   - employee.html
   - password.html

- server
   - database
       - queries
          - getData.js
          - postData.js
       - db_build.js
       - db_build.sql
       - db_connection.js
   - app.js

- test
   - test.js

<h3>DB Schema:</h3>
<img src="https://user-images.githubusercontent.com/54964739/75233563-b5493580-57c1-11ea-85c4-f128a13c9005.png">

<h3>Team</h3>
<ul>
<li>Banan</li>
<li>Duha</li>
<li>Hanan</li>
<li>Rahaf</li>
</ul>
