"use strict";
// console.log("AL I")
// console.log("zain");
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });


/*
-------------------------------------------------------------------------------------
-------------------------------------------------------------------------------------
*/


// const promptSync = req('prompt-Sync' )();
// let username = promptSync("Enter your name");
// console.log("your name is: ",username);
// function greet()
// {
//     let name:String = 'Ali';
//     console.log("Hello"+name) ;
// }
//  greet();
//  function greet1()
// {
//     let name:String = 'Ali';
//     console.log("Hello"+name) ;
// }
//  greet1();
//  //arrow function
//  let greet2 = () =>
//  {
//      let name:String = 'Ali';
//      console.log("Hello"+name) ;
//  }
//   greet2();
// function gateentry(havecard:boolean)
//   {
//     if(havecard == true)
//     {
//         return ('Allowed');
//     }
//     else
//     {
//         return('Not allowed');
//     }
//   }
//   let havecard = true;
//   console.log(gateentry(true));
//   gateentry(true);
//  function creditscore (balance:number, minibal:number, maxbalance:number)
//  {
//   let result: number = balance + minibal + maxbalance;
//         if(result >= 300)
//     {
//         return ('A+');
//     }
//     else if(result >= 250)
//     {
//         return ('B');
//     }
//     else if(result >= 220)
//     {
//         return ('C');
//     }
//     else if(result >= 180)
//     {
//         return ('D');
//     }
//     else
//     {
//         return('LOW');
//     }
//  }
//  creditscore(500,50,300);
// Define an interface for the grading scale
// interface GradingScale {
//     grade: string;
//     minScore: number;
//   }
//   // Define the grading scales and their corresponding minimum scores
//   const gradingScales: GradingScale[] = [
//     { grade: 'A', minScore: 90 },
//     { grade: 'B', minScore: 80 },
//     { grade: 'C', minScore: 70 },
//     { grade: 'D', minScore: 60 },
//     { grade: 'F', minScore: 0 },
//   ];
//   // Function to calculate the grade based on the score
//   function calculateGrade(score: number): string {
//     for (const scale of gradingScales) {
//       if (score >= scale.minScore) {
//         return scale.grade;
//       }
//     }
//     return 'N/A'; // If the score does not fall within any defined grading scale
//   }
//   // Example usage:
//   const studentScore = 85;
//   const studentGrade = calculateGrade(studentScore);
//   console.log(`Student score: ${studentScore}`);
//   console.log(`Student grade: ${studentGrade}`);
/*
-------------------------------------------------------------------------------------
-------------------------------------------------------------------------------------
*/

const readline = __importStar(require("readline"));
// Define the grading scales and their corresponding minimum scores
const gradingScales = [
    { grade: 'A', minScore: 90 },
    { grade: 'B', minScore: 80 },
    { grade: 'C', minScore: 70 },
    { grade: 'D', minScore: 60 },
    { grade: 'F', minScore: 0 },
];
// Function to calculate the grade based on the score
function calculateGrade(score) {
    for (const scale of gradingScales) {
        if (score >= scale.minScore) {
            return scale.grade;
        }
    }
    return 'N/A'; // If the score does not fall within any defined grading scale
}
// Example usage with user input:
function getUserInput(promptText) {
    const rl = readline.createInterface({
        input: process.stdin,
        output: process.stdout,
    });
    return new Promise((resolve) => {
        rl.question(promptText, (input) => {
            rl.close();
            const score = parseFloat(input);
            resolve(isNaN(score) ? NaN : score);
        });
    });
}
function main() {
    return __awaiter(this, void 0, void 0, function* () {
        const studentScore = yield getUserInput('Enter the student score: ');
        if (isNaN(studentScore)) {
            console.log('Invalid input. Please enter a numeric score.');
        }
        else {
            const studentGrade = calculateGrade(studentScore);
            console.log(`Student score: ${studentScore}`);
            console.log(`Student grade: ${studentGrade}`);
        }
    });
}
// Call the main function to start the program
main();
