#!/usr/bin/env node
import inquirer from "inquirer";
import chalk from "chalk";
let greet = await inquirer.prompt([{
    name: "g",
    type: "input",
  message: "Hello Dear user we offer three level of typing test \n Easy Hard and Diffcult its your choice what type of test you want to take\n and we give the particpate typing certificate if it win the round for start press enter"
}])
let s = await inquirer.prompt([{
    name: "st",
    type: "list",
    choices: ["sign up", "login"],
    message: chalk.yellow("if you have already account login or if you are new our page sign up please to start the test")
}])
if(s.st === "sign up"){
let sign = await inquirer.prompt([{
    name: "up",
    type: "input",
    message: chalk.green("Enter your email address")
},{
    name: "p",
    type: "input",
    message: chalk.green("create your five digit password")
},{
    name: "n",
    type: "input",
    message:chalk.green( "Enter your name")
}
])
let condition = true;

while(condition){
let e = await inquirer.prompt([{
    name : "s",
    type: "confirm",
    message: chalk.blue("Are you ready for test")
}])
if(e.s === true){
let user = await inquirer.prompt([{
    name: "mode",
    message: chalk.yellow("select your mode please"),
    type:"list",
    choices : ["easy","medium","hard"]
},{
    name: "start",
    message: "start typing",
    type: "confirm",
}
])
if(user.start === true){
        if(user.mode === "easy"){
            const startTime:number = Date.now();
            console.log(chalk.yellow("Type the given para"))
            console.log(chalk.green(`The quick brown fox jumps over the lazy dog`))
        let ty = await inquirer.prompt([{
            name: "type",
            message: chalk.blue("Enter your sentence here"),
            type: "string" 
        },{
            name: "stop",
            message: chalk.yellow("Are you complete your sentence "),
            type: "confirm"
        }
        ])
        let easy:string = `The quick brown fox jumps over the lazy dog`
            const endTime = Date.now();
            const timeInSeconds:number = (endTime - startTime) / 1000;
            const timeInMinutes:number = timeInSeconds / 60;
            const input = ty.type;
            const wordCount = input.split(" ").length;
     
            const wpm = wordCount/timeInMinutes
     
            
            
if(ty.type == easy && wpm >= 30){
    console.log(chalk.yellow(`You typing speed is  ${wpm.toFixed(2)} wpm.`))
    console.log(chalk.cyan(`             certifcate \n
                we verfiy that \n
    Mr/Miss  ${sign.n}  is succesfuly complete our easy level typing test and he/him typing speed is ${wpm.toFixed(2)}wpm he/she average typist\n
         Date : ${new Date()}
          `))
    }
    else if(ty.type !== easy){
        console.log(chalk.red(`you type this senctence: ${ty.type}\nbut the actuall sentence is : ${easy}`))
        console.log("focus on accuracy and try again")   
    }
        else{
    console.log(chalk.bgBlue(`You typing speed is ${wpm.toFixed(2)} wpm you need little bit emprovment to win.`))
    console.log(chalk.bgGreen(" you can do anything belive in your self \n (stay motivate)"))
    }
        }
}
if(user.mode === "medium"){
    const startTime:number = Date.now();
    console.log(chalk.yellow("Type the given sentenece"))
    console.log(chalk.green("Quick Brown Fox Jumps Over The Lazy Dog YOU HAVE TO WORK REALLY HARD FOR DREAM"))
let typ = await inquirer.prompt([{
    name: "ty",
    message: chalk.blue("Enter your sentence here"),
    type: "input" 
},{
    name: "sto",
    message: chalk.cyan("Are you complete your sentence "),
    type: "confirm"
}
])
            const input = typ.ty
            const endTime = Date.now();
            const timeInSeconds:number = (endTime - startTime) / 1000;
            const timeInMinutes:number = timeInSeconds / 60;
            const wordCount = input.split(" ").length;
            const wpm:number= (wordCount / timeInMinutes);
    
let es:string = "Quick Brown Fox Jumps Over The Lazy Dog YOU HAVE TO WORK REALLY HARD FOR DREAM"
if(typ.ty == es && wpm >=40){
    console.log(chalk.yellow("you win this mode "))

    console.log(chalk.cyan(`              certifcate \n
                we verfiy that\n
        ${sign.n} succesfuly complete our  medium level typing test and his/him typing speed is  ${wpm.toFixed(2)} wpm.\n
         ${new Date()}`))
    }
    else if(typ.ty !== es){
        console.log(chalk.red(`you type this ${typ.ty}sentence \n
            but the actuall sentence is ${es}`))
        console.log("focus on accuracy and try again")   
    }
    else{
        console.log(chalk.yellow(`You typing speed is ${wpm.toFixed(2)} wpm you need little bit emprovment to win`))
    console.log(chalk.bgBlue("practice makes perfect keep trying"))
}
}
    


if(user.mode === "hard"){
    const startTime:number = Date.now();
    console.log(chalk.blue("Type the given senteneces"))
    console.log(chalk.green("Quick brown FOX jumps Over The Lazy Dog And You can Do WHAT ever you want "))



let type = await inquirer.prompt([{
    name: "yt",
    message: chalk.green("Enter your sentence here"),
    type: "input" 
},{
    name: "stay",
    message: chalk.blue("Are you complete your sentence "),
    type: "confirm"
}
])
            const input = type.yt
            const endTime = Date.now();
            const timeInSeconds:number = (endTime - startTime) / 1000;
            const timeInMinutes:number = timeInSeconds / 60;
            const wordCount = input.split(" ").length;
            const wpm:number = (wordCount / timeInMinutes);
    let hard = "Quick brown FOX jumps Over The Lazy Dog And You can Do WHAT ever you want"
    

if(type.yt == hard && wpm >= 50){
    console.log(chalk.yellow("you win this mode "))
    console.log(chalk.cyan(`             certifcate\n
                we verfiy that\n
        ${sign.n} succesfuly complete our hard level typing test and him/her typing speed is  ${wpm.toFixed(2)}\n
    ${new Date()}`))
}
else if(type.yt !==hard ){
    console.log(chalk.red(`you type this ${type.yt}\n
        but the actuall senctence is ${hard}`))
    console.log("focus on accuracy and try again")   
}
else{
    console.log(chalk.yellow(`You typing speed is  ${wpm.toFixed(2)} wpm. you need a little bit emprovment to win`))
     console.log(chalk.bgYellow("Every expert once a begnnier"))
}

}

}
let last = await inquirer.prompt([{
    name: "exit",
    type: "confirm",
    message:"you want to restart"
 }])
 condition = last.exit
}


}
 



if(s.st === "login"){
    let email:string = "try234@gmail.com";
    let pass :number = 12390
        let sign = await inquirer.prompt([{
            name: "in",
            type: "string",
            message: chalk.green("Enter your email address")
        },{
            name: "password",
            type: "number",
            message: chalk.green("Enter your five digit password")
        }
        ])
    let con:boolean = true
        if(sign.in === email && sign.password === pass){

while(con){
let e = await inquirer.prompt([{
    name : "s",
    type: "confirm",
    message: chalk.blue("Are you ready for test")
}])
if(e.s === true){
let user = await inquirer.prompt([{
    name: "na",
    type: "input",
    message: "Enter your name please"
},{
    name: "mode",
    message: chalk.yellow("select your mode please"),
    type:"list",
    choices : ["easy","medium","hard"]
},{
    name: "start",
    message: "start typing",
    type: "confirm",
}
])
if(user.start === true){
        if(user.mode === "easy"){
            const startTime:number = Date.now();
            console.log(chalk.yellow("Type the given sentenece"))
            console.log(chalk.green("quick brown fox jumps over the lazy dog"))
        let ty = await inquirer.prompt([{
            name: "type",
            message: chalk.blue("Enter your sentence here"),
            type: "input" 
        },{
            name: "stop",
            message: chalk.yellow("Are you complete your sentence "),
            type: "confirm"
        }
        ])
        let easy:string = "quick brown fox jumps over the lazy dog"
            const input = ty.type;
            const endTime = Date.now();
            const timeInSeconds:number = (endTime - startTime) / 1000;
            const timeInMinutes:number = timeInSeconds / 60;
            const wordCount = input.split(" ").length;
            const wpm:number= (wordCount / timeInMinutes);
    
            
            
if( ty.type == easy && wpm >= 30){
    console.log(chalk.yellow(`You typing speed is ${wpm.toFixed(2)} wpm.`))
    console.log(chalk.cyan(`             certifcate \n
                we verfiy that \n
    Mr/Miss  ${user.na}  is succesfuly complete our easy level typing test in ${wpm.toFixed(2)} wpm we certifate that He/She average typist\n
         Date : ${new Date()}
          `))
    }
    else if(ty.type !== easy){
        console.log(chalk.red(`you type this senctence ${ty.type}\n
            but the actuall sentence is ${easy}`))
       console.log("focus on accuracy and try again")   
        }
        else{
    console.log(chalk.bgRed(`You typing speed is ${wpm.toFixed(2)} wpm. you need little bit emprovment for win`))
    console.log(chalk.bgCyan(" you can do anything belive in your self \n (stay motivate)"))
    }
        }
}
if(user.mode === "medium"){
    const startTime:number = Date.now();
    console.log(chalk.yellow("Type the given sentenece"))
    console.log(chalk.green( "Quick Brown Fox Jumps Over The Lazy Dog YOU HAVE TO WORK REALLY HARD FOR DREAM"))
let typ = await inquirer.prompt([{
    name: "ty",
    message: chalk.blue("Enter your sentence here"),
    type: "input" 
},{
    name: "sto",
    message: chalk.cyan("Are you complete your sentence "),
    type: "confirm"
}
])
            const input = typ.ty
            const endTime = Date.now();
            const timeInSeconds:number = (endTime - startTime) / 1000;
            const timeInMinutes:number = timeInSeconds / 60;
            const wordCount = input.split(" ").length;
            const wpm:number= (wordCount / timeInMinutes);
    
let es:string = "Quick Brown Fox Jumps Over The Lazy Dog YOU HAVE TO WORK REALLY HARD FOR DREAM"
if(typ.ty == es && wpm >= 40){
    console.log(chalk.yellow("you win this mode "))

    console.log(chalk.cyan(`              certifcate \n
                we verfiy that\n
        ${sign.n} succesfuly complete our medium level typing test in  ${wpm.toFixed(2)} wpm & we certifated that you are a fast typist.\n
         ${new Date()}`))
    }
    else if(typ.ty !== es){
        console.log(chalk.red(`you type this senctence ${typ.ty}\n
            but the actuall sentence is ${es}`))
            console.log("focus on accuracy and try again")   
        }
        else{
    console.log(chalk.bgRed(`You typing speed is ${wpm.toFixed(2)} wpm you need little bit emprovment to win`))
    console.log(chalk.bgBlue("practice makes perfect keep trying"))
}
}
    


if(user.mode === "hard"){
    const startTime:number = Date.now();
    console.log(chalk.blue("Type the given senteneces"))
    console.log(chalk.green("Quick brown FOX jumps Over The Lazy Dog And You can Do WHAT ever you want "))

let har ="Quick brown FOX jumps Over The Lazy Dog And You can Do WHAT ever you want "

let type = await inquirer.prompt([{
    name: "yt",
    message: chalk.green("Enter your sentence here"),
    type: "input" 
},{
    name: "stay",
    message: chalk.blue("Are you complete your sentence "),
    type: "confirm"
}
])
            const input = type.yt
            const endTime = Date.now();
            const timeInSeconds:number = (endTime - startTime) / 1000;
            const timeInMinutes:number = timeInSeconds / 60;
            const wordCount = input.split(" ").length;
            const wpm:number = (wordCount / timeInMinutes);

if(type.yt == har && wpm >=50){
    console.log(chalk.yellow("you win this mode "))
    console.log(chalk.cyan(`             certifcate\n
                we verfiy that\n
        Mr/Miss ${user.na} succesfuly complete our hard level typing test in ${wpm.toFixed(2)} wpm we certifate that you are a fastest typest\n
    ${new Date()}`))
}
else if(type.yt!==har){
    console.log(chalk.red(`you type this senctence ${type.yt}\n
        but the actuall sentence is ${har}`))
        console.log("focus on accuracy and try again")   
    }
    else{
console.log(chalk.bgRed(`You typing speed is ${wpm.toFixed(2)} wpm you need a little bit emprovment to win`))
     console.log(chalk.bgYellow("Every expert once a begnnier"))
}

}

}

let last = await inquirer.prompt([{
    name: "exit",
    type: "confirm",
    message:"you want to restart"
 }])
 con = last.exit
}
        }
        else{
            console.log(chalk.red("invalid user"))
        }
    }




       