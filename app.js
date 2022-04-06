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



// Chapter No 6 to 9//
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



// Chapter No 9 to 11
// USER INPUT & CONDITIONAL STATEMENT 

// 1. Write a program to take “city” name as input from user. If
// user enters “Karachi”, welcome the user like this:
// “Welcome to city of lights”

// var input1 = prompt("Enter Your City");
// if(input1 == "Karachi" || input1 == "karachi" || input1 == "KARACHI" ){
//     document.write("Welcome to City of Lights");
// }

// 2. Write a program to take “gender” as input from user. If the
// user is male, give the message: Good Morning Sir. If the
// // user is female, give the message: Good Morning Ma’am.

// var inputGender = prompt("Enter Your Gender");
// if(inputGender == "Male" || inputGender == "male" || inputGender == "MALE"){
//     document.write("Welcome Sir");
// }
// else if(inputGender == "Female" || inputGender == "female" || inputGender == "FEMALE"){
//     document.write("Welcome Madam");
// }

// else{
//     document.write("Please Enter a Valid value");

// }



// 3. Write a program to take input color of road traffic signal
// from the user & show the message according to this table:
// solution:

// var col1 = prompt("Enter color 1");
// var col2 = prompt("Enter color 2");
// var col3 = prompt("Enter color 3");

// var msg1 = "must stop";
// var msg2 = "ready to move";
// var msg3 = "move now";

// document.write("<table><thead><tr><th><p>Signal color</p></th><th><p>Signal color</p></th></tr></thead><tbody><tr><th>"+col1+"</th><th>"+msg1+"</th><tr><tr><th>"+col2+"</th><th>"+msg2+"</th><tr><tr><th>"+col3+"</th><th>"+msg3+"</th><tr></tbody></table>")

// 4. Write a program to take input remaining fuel in car (in
//     litres) from user. If the current fuel is less than 0.25litres,
//     show the message “Please refill the fuel in your car”

// solution
//  var fuelInput = +prompt("Enter Your Remaiing Fuel");
//  var minFuel = 0.25;
//  if(fuelInput < minFuel){
//      document.write("Please refill the fuel")
//     }
//     else{
//      document.write("You have enough fuel")

//  }




// 5. Run this script, & check whether alert message would be
// displayed or not. Record the outputs.
//  solution:
//part a;
// var a = 4;
// if(++a === 5){
//     alert("The Condition for variable a is true");
// }



//Part b:
// var b = 82;
// if (b++ === 83){
// alert("given condition for variable b is true");
// }
// else{
//     alert("The condition is not true")
// }




// part c.
//  var c = 12;
// if (c++ === 13){
// alert("condition 1 is true");
// }
// if (c === 13){
// alert("condition 2 is true");
// }
// if (++c < 14){
// alert("condition 3 is true");
// }
// if(c === 14){
// alert("condition 4 is true");
// }

// part d
// var materialCost = 20000;
// var labourCost = 2000;
// var totalCost = materialCost+labourCost;

// if(totalCost === (materialCost+labourCost)){
//     alert("Cost is Equal");
// }
// else{
//     alert("Cost isn't Equal");

// }

// part e.
//  var t =true;
//  var f = false;
//  if(!t){
// alert("This is True");
//  }
// else{
//     alert("This is False");
// }

// part f.
// if("car" < "cat"){
//     alert("car is smaller than cat");
//     }

// 6. Write a program to take input the marks obtained in three
// subjects & total marks. Compute & show the resulting
// percentage on your page. Take percentage & compute
// grade as per following table:
// var inputMarks1 = +prompt("Enter Marks of 1st Subject");
// var inputMarks2 = +prompt("Enter Marks of 2nd Subject");
// var inputMarks3 = +prompt("Enter Marks of 3rd Subject");
// var totalMarks = +prompt("Enter Total Marks");
// var grade;
// var remarks;
// var gradAPlus="A+";
// var gradA="A";
// var gradB="B"
// var gradF="Fail";

// var obtainMarks = inputMarks1+inputMarks2+inputMarks3; //sum of all marks
// var obtainPercentage = (obtainMarks/totalMarks)*100; //calculate percentage

// if(obtainPercentage>=80 || obtainMarks<=100){
//     document.write("Excellent ! You got "+ gradAPlus+"grade");
//     grade=gradAPlus;
//     remarks = "Excellent !";
// }
// else if(obtainPercentage>=70 || obtainMarks<80){
//     document.write("Good ! You "+gradA+"grade");
//     grade=gradA;
//     remarks = "Good";
// }
// else if(obtainPercentage>=60 || obtainMarks<70){
//     document.write("You need to improve ! got "+gradB+" grade");
//     grade=gradB;
//     remarks="You need to improve !";
// }
// else if(obtainPercentage>=0 || obtainMarks<60){
//     document.write("You are "+gradF+"! Sorry");
//     grade=gradF;
//     remarks="Sorry";
// }
// else{
//     document.write("Invalid Input");
// }
// document.write("<br /><br />"+"Total Marks = "+totalMarks+"<br />")
// document.write("you'r Obtained Marks = "+obtainMarks+"<br />");
// document.write("You'r Percentage = "+obtainPercentage+"%"+"<br />");
// document.write("Grade : "+grade+"<br />");
// document.write(remarks+"<br />");



// 7. Guess game:
// Store a secret number (ranging from 1 to 10) in a variable.
// Prompt user to guess the secret number.
// a. If user guesses the same number, show “Bingo! Correct
// answer”.
// b. If the guessed number +1 is the secret number, show
// “Close enough to the correct answer”.


// var secretNum = 6;
// var selectNum = +prompt("Guess the Number from 1 To 10");
// if(selectNum == secretNum){
//     alert("Bingo ! Correct Answer")
// }
// else if(++selectNum == secretNum){
//     alert("Close enough to Correct Answer");
// }
// else if(false){
// alert("You did not Enter");
// }
// else{
//     alert("Invalid Number");
// }


// var a = +prompt("Enter number");
// if(a==true){
// document.write("True");
// }
// if(a==false){
//     document.write("false");
// }

// var t=true;
// var f=false;
// var a = +prompt("Enter number");
// if(a==t){
// document.write("True");
// }
// else if(a==f){
//     document.write("false");
// }

// My practice
// var v = +prompt("Enter number")
// if(v){
//     document.write("True");
// }

// else if(v==false){
//     document.write("False");
// }
// else if(v===0){
//     document.write("You Enter zero");
// }
//     else{
//     document.write("Not a Number");

// }



// My practice
// var a = +prompt("Enter number");
// if(a){
// document.write("True");
// }
// else if(a==false){
//     document.write("false");
// }
// else{
//     document.write("Non a Number")
// }




// 8. Write a program to check whether the given number is
// divisible by 3. Show the message to the user if the number
// is divisible by 3.
//solution:
// var inputNum = +prompt("Enter a Number which should be divisible by Zero");
// if((inputNum%3)==0){
    //     document.write("Yes ! Number is Divisible by 3");
//     }
// else{
//         document.write("No ! Number is Not Divisible by 3");}


// 9. Write a program that checks whether the given input is an
// even number or an odd number.

//solution:
//  var inputNum = +prompt("Enter a Number which should be divisible by Zero");
// if((inputNum%2)==0){
//     document.write("Number is Even !")
// }
// else{
//     document.write("Number is Odd !")
// }


// 10. Write a program that takes temperature as input and
// shows a message based on following criteria
// a. T > 40 then “It is too hot outside.”
// b. T > 30 then “The Weather today is Normal.”
// c. T > 20 then “Today’s Weather is cool.”
// d. T > 10 then “OMG! Today’s weather is so Cool.”

// //solution:
// var inputTemp = +prompt("Enter Temp ");
// if(inputTemp >=0 && inputTemp<10){
//     document.write("Today’s Weather is less then 10 Degree Centegrade");
// }
// if(inputTemp >= 10 && inputTemp <20){
//     document.write("OMG! Today’s weather is so Cool.");
// }
// else if(inputTemp >= 20 && inputTemp <30){
//     document.write("Today’s Weather is cool.");
// }
// else if(inputTemp >= 30 && inputTemp <40){
//     document.write("The Weather today is Normal");
// }
// else if(inputTemp >= 40){
//     document.write("Its Too Hot Outside");
// }






// 11. Write a program to create a calculator for +,-,*, / & %
// using if statements. Take the following input:
// a. First number
// b. Second number
// c. Operation (+, -, *, /, %)
// Compute & show the calculated result to user.
//solution:

// var inputNum1 = +prompt("Enter 1st Number");
// var inputNum2 = +prompt("Enter 2nd Number");
// var inputOperator = prompt("Enter Operator");

// if(inputOperator=="+"){
//     document.write(inputNum1+inputNum2);
// }
// else if(inputOperator=="-"){
//     document.write(inputNum1-inputNum2);
// }
// else if(inputOperator=="/"){
//     document.write(inputNum1/inputNum2);
// }
// else if(inputOperator=="*"){
//     document.write(inputNum1*inputNum2);
// }




//Chapter 12 - 13
// IF…ELSE & ELSE IF STATEMENT,
// TESTING SET OF CONDITIONS 

// 1. Write a program that takes a character (number or string)
// in a variable & checks whether the given input is a
// number, uppercase letter or lower case letter. (Hint: ASCII
// codes:- A=65, Z=90, a=97, z=122).

//solution:
// var input = prompt("Enter Value");
// if (input.charCodeAt() >=97 && input.charCodeAt() <=122){
//     document.write("You Enter Input Lower Level Alphabets");
// }
// else if(input.charCodeAt() >=65 && input.charCodeAt() <=90){
//     document.write("You Enter Input Upper Level Alphabets");
// }
// else if(input.charCodeAt() >=48 && input.charCodeAt() <=57){
//     document.write("You Enter Input Number");
// }


// 2. Write a JavaScript program that accept two integers and
// display the larger. Also show if the two integers are equal.
//solution:
// var inputNum1 = +prompt("Enter number 1")
// var inputNum2 = +prompt("Enter number 2")
// if(inputNum1>inputNum2){
//     document.write("Number 1 is greater then Number 2")}
// else if(inputNum1<inputNum2){
//     document.write("Number 1 is lesser then Number 2")}
// else if(inputNum1==inputNum2){
//     document.write("Number 1 is Equal to Number 2")}

// 3. Write a program that takes input a number from user &
// state whether the number is positive, negative or zero.
//solution:

// var inputNum = +prompt("Enter a Number");
// if(inputNum==0){
//     document.write("Number is zero")
// }
// else  if(inputNum>0){
//     document.write("Number is Positive");
// }
// else  if(inputNum<0){
//     document.write("Number is Negative");
// }
// else{
//     document.write("Not a Number");
// }


// 4. Write a program that takes a character (i.e. string of
//     length 1) and returns true if it is a vowel, false otherwise
//solution:

// var inputCharacter =prompt("Enter a Character");
// if(inputCharacter.charCodeAt()==65 || inputCharacter.charCodeAt()==97 || inputCharacter.charCodeAt()==109 || inputCharacter.charCodeAt()==69 || inputCharacter.charCodeAt()==73 || inputCharacter.charCodeAt()==105 || inputCharacter.charCodeAt()==111 || inputCharacter.charCodeAt()==79 || inputCharacter.charCodeAt()==85 || inputCharacter.charCodeAt()==117){
//     document.write(true+"You enter a Vowel")
// }
// else{
//     document.write(false);
// }

// 5. Write a program that
// a. Store correct password in a JS variable.
// b. Asks user to enter his/her password
// c. Validate the two passwords:
// i. Check if user has entered password. If not, then
// give message “ Please enter your password”
// ii. Check if both passwords are same. If they are
// same, show message “Correct! The password you
// entered matches the original password”. Show
// “Incorrect password” otherwise

// //solution:
// var password = "aunali_1234";
// var inputPassword = prompt("Enter Password");
// if(inputPassword==password){
//     alert("Password Match")
// }
// else if(inputPassword==false){
//     alert("Password is Empty");
// }
// else if(inputPassword!=password){
//     alert("Wrong Password")
// }

// 6. This if/else statement does not work. Try to fix it:
// var greeting;
// var hour = 13;
// if (hour < 18) {
// greeting = "Good day";
// else
// greeting = "Good evening";
// }

// solution:
// var greeting;
// var hour = 13;
// if (hour < 18) {
// // greeting = "Good day";
// document.write(greeting="Good Day")
// }
// else{
//     // greeting = "Good evening";
//     document.write(greeting="Good Evening")
// }

// 7. Write a program that takes time as input from user in 24
// hours clock format like: 1900 = 7pm. Implement the
// following case using if, else & else if statements




// -------------------- second Task Assigned --------------------
// ARRAYS 
// 1. Declare an empty array using JS literal notation to store
// student names in future
//solution:
// var aar = []; //literals notations
// console.log(aar);



//  2. Declare an empty array using JS object notation to store
//  student names in future.
//  solution:
    // var arr = new Array ("Aun Ali",24,"Student");//object notation Array

// 3. Declare and initialize a strings array.
// solution:
// var arrString = ["Aun Ali","Student","BS-CS","IU"];


// 4. Declare and initialize a numbers array.
// solution:
// var numArray = [1,2,4,5,6];


// 5. Declare and initialize a boolean array.
// solution:
// var booleanArray = [true,false] //Boolean Array

// 6. Declare and initialize a mixed array.
// solution:
// var mixArray = ["Aun Ali",24,"Male","Student",true];


// 7. Declare and Initialize an array and store available
// education qualifications in Pakistan (e.g. SSC, HSC, BCS,
// BS, BCOM, MS, M. Phil., PhD). Show the listed
// qualifications in your browser like:

// solution:
// var availableEducationDepartments = ["SSC", "HSC", "BCS","BS", "BCOM", "MS", "M.Phil", "PhD"];
// document.write("Qualifications :<br /><br />")

// for( var i=0;i<availableEducationDepartments.length;i++){
    // console.log(availableEducationDepartments[i]);
    // document.write("("+[i+1]+")  "+availableEducationDepartments[i]+"<br />")
    // }
    
    
    
// 8. Write a program to store 3 student names in an array.Take
// another array to store score of these three students.
// Assume that total marks are 500 for each student, display
// the scores & percentages of students like:
// solution:

// var studentNames = ["Aun Ali","Asim","Qasim"];
// var studentScores = [320,230,480];
// var totalMarks = 500;
// // document.write(studentNames)
// for (var i=0;i<studentNames.length;i++){
//     document.write("Score of "+studentNames[i]+ " is : "+studentScores[i] +" Percentage : "+(((studentScores[i])/(totalMarks))*100)+" % "+"<br />");
// }



// 9. Initialize an array with color names. Display the array
// elements in your browser.
// a. Ask the user what color he/she wants to add to the
// beginning & add that color to the beginning of the array.
// Display the updated array in your browser.
// b. Ask the user what color he/she wants to add to the end
// & add that color to the end of the array. Display the
// updated array in your browser.
// c. Add two more color to the beginning of the array.
// Display the updated array in your browser.
// d. Delete the first color in the array. Display the updated
// array in your browser.
// e. Delete the last color in the array. Display the updated
// array in your browser.
// f. Ask the user at which index he/she wants to add a color
// & color name. Then add the color to desired
// position/index. . Display the updated array in your
// browser.
// g. Ask the user at which index he/she wants to delete
// color(s) & how many colors he/she wants to delete. Then
// Arrays | JAVASCRIPT
// Page 3 of 6
// remove the same number of color(s) from user-defined
// position/index. . Display the updated array in your
// browser.

// solution:

var colorName = [];
var col1 = prompt("Enter Your Color Name");
colorName.unshift(col1);//add value in the begining of Array
console.log(colorName);//updated Array
var col2 = prompt("Enter Your end Color Name");
colorName.push(col2);//add value in the end of Array
console.log(colorName);//updated Array

var value1 =prompt("Enter color again");
var value2 =prompt("Enter second color again");
colorName.unshift(value1,value2);//add two colors in a Array
console.log(colorName);//updated array
colorName.shift();//delete the first color in a Array ! 
console.log(colorName); //updated Array
colorName.pop();//delete the last value of Array
console.log(colorName); //updated Array



document.write(colorName);
var desiredIndexPosition = +prompt("Enter Array Position to add Element");
var desiredColor = prompt("Enter Color to add at Position");
colorName.splice(desiredIndexPosition,0,desiredColor);
console.log(colorName); //updated Array


// -------------------My Prcatice -------------------------

// var arr = ["karachi","Lahore","Multan","faislabad"]
// // splice (targetPoint , deleteCount , items);
// //arr.splice(1,1)//start from 1 index and will delete only 1 element
// console.log(arr);
// arr.splice(1,2,"Aun Ali")//start from 1 index and will delete 2 elements
// arr.splice(1,0,"Aun Ali")//start from 1 index and will delete no element and add element at 1 index
// console.log(arr);
// -----------------------------------------------------------------

// 10. Write a program to store student scores in an array &
// sort the array in ascending order using Array’s sort
// method.

// //solution:
// var arr = [320,230,480,120];
// arr.sort();
// document.write(arr);


// 11. Write a program to initialize an array with city names.
// Copy 3 array elements from cities array to selectedCities
// array.

// var cities = ["Karachi","Lahore","Islamabad","Quetta", "Peshawar"];
// console.log(cities);
//my understanding:
//cities.copyArr(startingPoint,EndingPoint)
//cities.copyArr(index,Lenght)
//cities.copyArr(1,3) //copy from index 0 to length 3
//cities.copyArr(0,-1) //copy from index 0 & leave the last element in a Array
//cities.copyArr(0,-2) 
//cities.copyArr(-1) //will copy last value and leave remaing elements
//cities.copyArr(-2) //will copy 2nd-last value and leave remaing element
//cities.copyArr(1) //it has startPoint but no endPoint ,means it will copy all remaining elements start from 0 index.


//solution
// var copyArr = cities.slice(2,4);
// console.log(copyArr);

// 12. Write a program to create a single string from the
// below mentioned array:
// var arr = [“This ”, “ is ”, “ my ”, “ cat”];
// (Use array’s join method)

// var arr = ["This","is", "my", "cat"];
// console.log(arr);
// var arr1 = arr.join(" ");
// console.log(arr1);


// 13. Create a new array. Store values one by one in such a way
// that you can access the values in the order in which they
// were stored. (FIFO-First In First Out)
// solution:
// FIFO
// var newArray = [];
// var val1 = prompt("Enter Value 1 in a Array");
// var val2 = prompt("Enter Value 2 in a Array");
// var val3 = prompt("Enter Value 3 in a Array");

// newArray.unshift(val1,val2,val3);
// alert("Orignial Array : "+newArray);
// newArray.shift();
// alert("Shiift Method: "+newArray);



// 14. Create a new array. Store values one by one in such a way
// that you can access the values in reverse order. (Last InFirst Out)

//// solution:
//LIFO
// var newArray = [];
// var val1 = prompt("Enter Value 1 in a Array");
// var val2 = prompt("Enter Value 2 in a Array");
// var val3 = prompt("Enter Value 3 in a Array");

// newArray.push(val1,val2,val3);
// alert("Orignial Array : "+newArray);
// newArray.pop();
// alert("Shiift Method: "+newArray);



// 15. Write a program to store phone manufacturers (Apple,
//     Samsung, Motorola, Nokia, Sony & Haier) in an array.
//     Display the following dropdown/select menu in your
//     browser using document.write() method:

// var phone = ["Apple","Samsung","Motorola","Nokia","Sony","Haier"];
// //console.log(phone);
// document.write("<h3>Select these Options</h3>");
// document.write("<select><option>"+phone[0]+"</option><option>"+phone[1]+"</option><option>"+phone[2]+"</option><option>"+phone[3]+"</option></select>")































