import inquirer from "inquirer";
let myBalance = 10000; // Dollar
let myPin = 1234;
let pinAnswer = await inquirer.prompt([
    { name: "pin",
        message: "enter your pin",
        type: "number",
    }
]);
if (pinAnswer.pin === myPin) {
    console.log("correct pin code!!!");
    let operationAnswer = await inquirer.prompt([
        { name: "operation",
            message: "please select ans",
            type: "list",
            choices: ["withdrawl", "check balance"]
        }
    ]);
    console.log(operationAnswer);
    if (operationAnswer.operation === "withdrawl") {
        let amountAns = await inquirer.prompt([
            {
                name: "amount",
                message: "enter your amount",
                type: "number"
            }
        ]);
        myBalance -= amountAns.amount;
        console.log("your remaing balance is:" + myBalance);
    }
}
else {
    console.log("Incorrect pin code!!!");
}
