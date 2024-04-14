import inquierer from "inquirer"
let todos =[] // Shopper[]
let condition =true

while(condition)
    {
let todoquestion = await inquierer.prompt(
    
    [
        {
            name:"firstQuestion",
            type:"input",
            message:"What would you like to add in your Todos?"
        },
        {
            name:"secondQuestion",
            type:"confirm",
            message:"Would you like to add more in your Todos",
            default:"true"
        }
    ]
)
todos.push(todoquestion.firstQuestion);
console.log(todos)
condition =todoquestion.secondQuestion;
}