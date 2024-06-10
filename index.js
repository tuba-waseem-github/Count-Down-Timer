import inquirer from "inquirer";
import { differenceInSeconds } from "date-fns";
const res = await inquirer.prompt([
    {
        name: "userInput",
        type: "number",
        message: "please enter the amount of second",
        validate: (input) => {
            if (isNaN(input)) {
                return "please enter a valid number";
            }
            else if (input > 60) {
                return "seconds must be in 60";
            }
            else {
                return true;
            }
        }
    }
]);
let input = res.userInput;
function startTime(val) {
    const intTime = new Date().setSeconds(new Date().getSeconds() + val);
    const intervalTime = new Date(intTime);
    setInterval((() => {
        const currTime = new Date();
        const timeDiff = differenceInSeconds(intervalTime, currTime);
        if (timeDiff <= 0) {
            console.log("Timer has expired");
            process.exit();
        }
        const mint = Math.floor((timeDiff % (3600 * 24)) / 3600);
        const sec = Math.floor(timeDiff % 60);
        console.log(`${mint.toString().padStart(2, "0")}:${sec.toString().padStart(2, "0")}`);
    }), 1000);
}
startTime(input);
