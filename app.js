// -------Chapter No 1-------//
// Alert


// 1. Write a script to greet your website visitor using JS alert box.
// Solution: 
// alert("Hello How are You ?")

// 2. Write a script to display following message on your web page:
// Solution: 
// alert("Eror! Please Enter Valid Password.")


// 3. Write a script to display following message on your web page: (Hint : Use line break)
// Solution: 
// alert("Welcome to JS Land \nHappy Coding!")


// 4. Write a script to display following messages in sequence:
// Solution: 
// alert("Welcome to JS Land")
// alert("Happy Coding")

// 5. Generate the following message through browser’s developer console:
// Solution: 
// Browser Written Code in Console
// alert("\nHello I can run Js throught my Broswer Windows");





// Chapter No 2
// VARIABLES FOR STRINGS
// 1. Declare a variable called username.
// var userName ;


// 2. Declare a variable called myName & assign to it a string that represents your Full Name.
// solution:
// var myName = "Aun Ali";



// 3. Write script to
// a) Declare a JS variable, titled message.
// b) Assign “Hello World” to variable message
// c) Display the message in alert box
// solution:

// var message ; 
// message = "Hello World";
// alert(message);



// 4. Write a script to save student’s bio data in JS variables and show the data in alert boxes.
// solution:

// var studentName1 = "Aun Ali";
// var studentAge = 15;
// var studentCourse = "Web Mobile Application Development";
// alert("First Student Name : " + " "+ studentName1);
// alert("Student Age : " + " "+ studentAge);
// alert("Student Course : " + " "+ studentCourse);



// 5. Write a script to display the following alert using one JS variable:
// solution:
// alert("PIZZA\nPIZZ\nPIZ\nPI\nP")



// 6. Declare a variable called email and assign to it a string that represents your Email Address(e.g. example@example.com). Show the blow mentioned message in an alert box.(Hint: use string concatenation)
// solution:

// var email = "aun.43334@iqra.edu.pk";
// alert("Email Address Value : "+ email);


// 7. Declare a variable called book & give it the value “A smarter way to learn JavaScript”. Display the following message in an alert box:
// solution:

// var book = "A smarter way to learn JavaScript";
// alert(book);



// 8. Write a script to display this in browser through JS
// solution:
// solution:
// document.write("<h1>"+msg+"</h1>")


// 9. Store following string in a variable and show in alert and browser through JS
// var msg = "Yeah ! I can write HTMl Content in JavaScript";
// var char = "▬▬▬▬▬▬▬▬▬ஜ۩۞۩ஜ▬▬▬▬▬▬▬▬▬";
// alert(char);




// Chapter No 3
// VARIABLES FOR NUMBERS

// 1. Declare a variable called age & assign to it your age. Show your age in an alert box.
// Solution
//  var age = 24;
//  alert("My Age : " + age);



// 2. Declare & initialize a variable to keep track of how many times a visitor has visited a web page. Show his/her number of visits on your web page. For example: “You have visited this site N times”.


// 3. Declare a variable called birthYear & assign to it your birth year. Show the following message in your browser:
// Solution: 
// var birthYear = 1997;
// document.write("My Birth Year : "+ birthYear + "<br />");
//  // document.write("<br />")
// document.write("Data Type of my declared varriable is an Number")

// 4. A visitor visits an online clothing store www.xyzClothing.com . Write a script to store in variables the following information: a. Visitor’s name b. Product title c. Quantity i.e. how many products a visitor wants to order Show the following message in your browser: “John Doe ordered 5 T-shirt(s) on XYZ Clothing store” 

// Solution: 
// var userName = prompt("Enter Your Name", "Name");
// var productTitle = prompt("Enter Product Name", "Cars , Mobile etc");
// var Quantity = +prompt("Enter Quatity Number","Quantity");
// document.write("Customer Name : "+ userName+"<br />");
// document.write("Product Name : " + productTitle+"<br />");
// document.write("Quanity of Product : " + Quantity+"<br />");


// Chapter No 4 
// VARIABLE NAMES: LEGAL & ILLEGAL 

// 1. Declare 3 variables in one statement.
// solution:
// var name; var age ; var Class;


// 2. Declare 5 legal & 5 illegal variable names
// solution:


// 3. Display this in your browser
// solution:

// var a= "(a) A heading stating “Rules for naming JS variables";
// var b= "(b) Variable names can only contain ______, ______,______ and ______.";
// var c = "c) Variables must begin with a ______, ______ or_____. For example $name, _name or name";
// var d = "d) Variable names are case _________";
// var e = "e) Variable names should not be JS _________";
// document.write("<p>"+a+"<p/>"+"<p>"+b+"<p/>"+"<p>"+d+"<p/>"+"<p>"+e+"<p/>");


// Chapter No 5 
// MATH EXPRESSIONS

// 1. Write a program that take two numbers & add them in a new variable. Show the result in your browser.

// solution
// var num1 = +prompt("Enter Number 1");
// var num2 = +prompt("Enter Number 2");
// var result = num1 + num2;
// document.write(result); 

// 2. Repeat task1 for subtraction, multiplication, division & modulus
// solution
// var num1 = +prompt("Enter Number 1");
// var num2 = +prompt("Enter Number 2");
// var addResult = ("Addition : "+ (num1+num2));
// var subResult = ("Subtraction : "+ (num1-num2));
// var multiResult = ("Multiplication : "+ (num1*num2));
// var divResult = ("Division : "+ (num1/num2));
// var modResult = ("Division : "+ (num1%num2));

// document.write("<p>"+addResult+"<p/>"); 
// document.write("<p>"+subResult+"<p/>"); 
// document.write("<p>"+multiResult+"<p/>"); 
// document.write("<p>"+divResult+"<p/>"); 
// document.write("<p>"+modResult+"<p/>"); 
// --------------- OR ---------------------
// document.write(addResult+"<br/>"); 
// document.write(subResult+"<br/>"); 
// document.write(multiResult+"<br/>"); 
// document.write(divResult+"<br/>"); 
// document.write(modResult+"<br/>"); 



// 3. Do the following using JS Mathematic Expressions

// var num;
// document.write("Value after Declration is : " , num,"<br />");
// num = 45;
// document.write("Value after Initialization is : " , num,"<br />");
// num ++;
// document.write("Value after increment is : " , num,"<br />");
// num = num + 7;
// document.write("Value after addition of 7 is : " , num,"<br />");
// num --;
// document.write("Value after Decrement is : " , num,"<br />");
// num = num % 3;
// document.write("Remainder of Value : " , num,"<br />");


// 4. Cost of one movie ticket is 600 PKR. Write a script to store ticket price in a variable & calculate the cost of buying 5 tickets to a movie. Example output:

// var costPerTicket = 600;
// document.write("Cost Per Ticket : ",costPerTicket, "<br />");
// var noOfTicket = 5;
// document.write("No Of Ticket : ",noOfTicket, "<br />");
// var priceOfTicket = costPerTicket*noOfTicket;
// document.write("Price Of Ticket : ",priceOfTicket, " PKR<br />");


// 5. Write a script to display multiplication table of any number in your browser.

// var num = 4; //Table of 4
// document.write("Table of 4 ","<br />")
// document.write("4 x 1 = ",num*1,"<br />")
// document.write("4 x 2 = ",num*2,"<br />")
// document.write("4 x 3 = ",num*3,"<br />")
// document.write("4 x 4 = ",num*4,"<br />")
// document.write("4 x 5 = ",num*5,"<br />")
// document.write("4 x 6 = ",num*6,"<br />")
// document.write("4 x 7 = ",num*7,"<br />")
// document.write("4 x 8 = ",num*8,"<br />")
// document.write("4 x 9 = ",num*9,"<br />")
// document.write("4 x 10 = ",num*10,"<br />")


// 6. The Temperature Converter: It’s hot out! Let’s make a
// converter based on the steps here.
// a. Store a Celsius temperature into a variable.
// b. Convert it to Fahrenheit & output “NNoC is NNoF”.
// c. Now store a Fahrenheit temperature into a variable.
// d. Convert it to Celsius & output “NNoF is NNoC”.


// solution:

// var celsiusTemp = 20;
// document.write("Temp in  Celcius : ",celsiusTemp,"<br />");
// var farTemp = (celsiusTemp * (9/5)) + 32;
// document.write("Temp in  Fahrenheit after convert  : ",farTemp,"<br />");

// var farTemp2 = 80;
// document.write("Temp in  Fahrenheit : ",farTemp2,"<br />")
// var celsiusTemp2 =  (farTemp2-32)*(5/9);
// document.write("Temp in  Celsius after convert : ",celsiusTemp2,"<br />"    );




// 7. Write a program to implement checkout process of a shopping cart system for an e-commerce website. Store the following in variables
// solution

// var priceOfItem1 = 650 ;
// document.write("price Of Item1 = ",priceOfItem1,"<br />")
// var quanityOfItem1 = 3 ; 
// document.write("quanity Of Item1 = ",quanityOfItem1,"<br />")
// var priceOfItem2 =  100;
// document.write("price Of Item2 = ",priceOfItem2,"<br />")
// var quanityOfItem2 = 7 ;
// document.write("quanity Of Item2 = ",quanityOfItem2,"<br />")
// var shipingCharge = 100;

// document.write((priceOfItem1*quanityOfItem1)+(priceOfItem2*quanityOfItem2)+100);



// 8. Store total marks & marks obtained by a student in 2 variables. Compute the percentage & show the result in your browser
// solution
// var obtainMarks= 804;
// document.write("Obtained Marks : "+obtainMarks+ "<br />")
// var totalMarks= 980;
// document.write("Total Marks : "+totalMarks+ "<br />")
// var percentage = (obtainMarks/totalMarks)*100;
// document.write("Percentage  : "+ percentage+" %" +"<br />")


// 9. Assume we have 10 US dollars & 25 Saudi Riyals. Write a script to convert the total currency to Pakistani Rupees. Perform all calculations in a single expression. (Exchange rates : 1 US Dollar = 104.80 Pakistani Rupee and   Saudi Riyal = 28 Pakistani Rupee)

// solution
// var dollar = 104.80;
// var reyal = 28;
// var ans = (dollar*10)+(25*28);
// document.write("Total Pakistani Currency : " , ans)



// 10. Write a program to initialize a variable with some number and do arithmetic in following sequence: a. Add 5 b. Multiply by 10 c. Divide the result by 2 Perform all calculations in a single expression
// solution
//  var number = 25;
//  document.write("Number : ",number,"<br />")
//  document.write("ADD 5 = ",number = number+5,"<br />")
//  document.write("Multiply by 10 = ",number= (number*10) ,"<br />")
//  document.write("Divid by 2 = ",number= (number/2) ,"<br />")

//  11. The Age Calculator: Forgot how old someone is? Calculate it!
// var currentYear = 2022;
// document.write("Current year = ",currentYear, "<br />");
// var DOB = 1997;
// document.write("Date of Birth = ",DOB, "<br />");
// var age = currentYear-DOB;
// document.write("Age = ",age, "<br />");



// 12. The Geometrizer: Calculate properties of a circle.
// solution.

// var r = 20;
// document.write("Radius of a Circle = ",r,"<br />")
// var circumferenceOfCicle = 2*r*(3.142);
// document.write("Radius of a Circumference of a Circle = ",circumferenceOfCicle,r,"<br />")
// var Area = (3.142)*(r**2);
// document.write("Area of a Circle = ",Area);


// 13. The Lifetime Supply Calculator: Ever wonder how
// much a “lifetime supply” of your favorite snack is?
// Wonder no more.
// a. Store your favorite snack into a variable
// b. Store your current age into a variable.
// c. Store a maximum age into a variable.
// d. Store an estimated amount per day (as a number).
// e. Calculate how many would you eat total for the rest of
// your life.



// solution.
// var favSnack = "Lays";
// document.write("Favourite Snack = ",favSnack, "<br />")
// var age = 15;
// document.write("My age = ",age, "<br />");
// var maxAge = 65;
// document.write("Estimated Age = ",maxAge, "<br />")
// var amountPerDay = 3;
// document.write("estimated amount of Snacks eaten per day ",amountPerDay, "<br />")
// var restOfEatingSnacks = ((65-15)*3);
// document.write("Rest Of remainig Eating Snacks = ",restOfEatingSnacks);



// Chapter No 6 //
// MATH EXPRESSIONS 
// 
// 1. Write a program to take a number in a variable, do the required arithmetic to display the following result in your browser:

// var a = 10;
// document.write("The value of a = "+ a +"<br />");
// a++;
// document.write("The value of ++a = "+ a +"<br />");
// document.write("The Now value a = "+ a +"<br />");

// document.write("The value of a++ = "+ a +"<br />");
// document.write("The value of a = "+ ++a +"<br />");
// document.write("The value of --a = "+ --a +"<br />");
// document.write("now value of a = "+ a +"<br />");
// document.write("now value of a-- = "+ a-- +"<br />");
// document.write("now value of a = "+ a +"<br />");


// 2. What will be the output in variables a, b & result after
// execution of the following script:
// var a = 2, b = 1;
// var result = --a - --b + ++b + b--;
// Explain the output at each stage:
// --a;
// --a - --b;
// --a - --b + ++b;
// --a - --b + ++b + b--;


// solution:

// var a = 2;
// document.write(" a = "+ a + "<br />");
// var b = 1;
// document.write("b = " + b+ "<br />");
// var result = --a - --b + ++b + b--;
// document.write("The value of result = " + result+ "<br />");


// 3. Write a program that takes input a name from user & greet the user.

// solution
// var input = prompt("Enter your Name ","Name");
// document.write("Hey ! "+ input + " Welcome");


// 5. Write a program to take input a number from user & display it’s multiplication table on your browser. If user does not enter a new number, multiplication table of 5 should be displayed by default.

// document.write(num);


// var num = +prompt("Input a Number");
// if(num == 0){
//     num = 5;
// }
// else{
//     num = num ;
// }

    // document.write("Table of "+num +" is given below "+"<br />")
    // document.write(num +" X 1 = "+num*1 + "<br />");
    // document.write(num +" X 2 = "+num*2 + "<br />");
    // document.write(num +" X 3 = "+num*3 + "<br />");
    // document.write(num +" X 4 = "+num*4 + "<br />");
    // document.write(num +" X 5 = "+num*5 + "<br />");
    // document.write(num +" X 6 = "+num*6 + "<br />");
    // document.write(num +" X 7 = "+num*7 + "<br />");
    // document.write(num +" X 8 = "+num*8 + "<br />");
    // document.write(num +" X 9 = "+num*9 + "<br />");
    // document.write(num +" X 10 = "+num*10 + "<br />");
    
// 6.
// a) Take three subjects name from user and store them in 3
// different variables.
// b) Total marks for each subject is 100, store it in another
// variable.
// c) Take obtained marks for first subject from user and
// stored it in different variable.
// ALERTS | JAVASCRIPT

// d) Take obtained marks for remaining 2 subjects from user
// and store them in variables.
// e) Now calculate total marks and percentage and show the
// result in browser like this.(Hint: user table)

// var subjectName1 = prompt("Enter Name of First Subject")
// var subjectName2 = prompt("Enter Name of Second Subject")
// var subjectName3 = prompt("Enter Name of Third Subject")
// var totalMarks = 100;

// var MarksOfSubject1 = +prompt("Enter Marks of Subject 1");
// var MarksOfSubject2 = +prompt("Enter Marks of Subject 2");
// var MarksOfSubject3 = +prompt("Enter Marks of Subject 3");

// var percentageOfSubject1 = (MarksOfSubject1/totalMarks)*100;
// var percentageOfSubject2 = (MarksOfSubject2/totalMarks)*100;
// var percentageOfSubject3 = (MarksOfSubject3/totalMarks)*100;

// document.write("<table><thead><tr><th>Subject Marks</th><th>Obtained Marks</th><th>Percentage</th></tr></thead><tbody><tr><td>"+subjectName1+"</td><td>"+totalMarks+"</td><td>"+MarksOfSubject1+"</td><td>"+percentageOfSubject1+"</td></tr><tr><td>"+subjectName2+"</td><td>"+totalMarks+"</td><td>"+MarksOfSubject2+"</td><td>"+percentageOfSubject2+"</td></tr><tr><td>"+subjectName3+"</td><td>"+totalMarks+"</td><td>"+MarksOfSubject3+"</td><td>"+percentageOfSubject3+"</td></tr><tr><th></th><th>"+(totalMarks+totalMarks+totalMarks)+"</th><th>"+(MarksOfSubject1+MarksOfSubject2+MarksOfSubject3)+"</th><th>"+((percentageOfSubject1+percentageOfSubject2+percentageOfSubject3)/3)+"</th></tr></tbody></table>");


















