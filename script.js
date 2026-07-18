//Calculator Logic
let num1 = 10;
let num2 = 5;

let operator = "/";

if(operator === "+"){
    console.log(num1+num2);
    
}
else if(operator === "-"){
    console.log(num1-num2);
    
}
else if(operator === "*"){
    console.log(num1*num2);
    
}
else if(operator === "/"){
    num2 != 0 ? console.log(num1/num2):console.log("num2 cannot be zero");
   
   
    
}
else{
    console.log("Invalid");
    
}

// Tasks

let marks = 92;
let bonus = 5;
let grade;

if(marks >= 90){
    marks+=bonus;
    grade = "A";
    
}
else if (marks >= 70 && marks < 90){
    marks+=bonus;
    grade = "B";
    

}
else if(marks >= 50 && marks < 70){
    grade = "C"
    
}
else {
    grade = "F"
    
}

let result = marks >= 50  ? "Pass" : "Fail";

let remarks;

switch(grade){
    case "A":
        remarks = "Excellent";
        break;

    case "B":
        remarks = "Good";
        break; 
        
    case "C":
        remarks = "Average";
        break; 
        
    case "F":
        remarks = "Needs Improvement";
        break;
        
    default:
        console.log("Invalid Grade!");
            

}


console.log("Marks : " +marks+" , " , 
            "Grade : " +grade+" , ",
            "Result : "+result+" , ",
            "Remarks : "+remarks
);



