// //Promise is a javascript Object that represents an eventual result (resolve, reject) of asynchronous

// //Promise 3 States
// //1. Pending
// //2. Fullfilled (resolved)
// //3. Rejected

// let myPromise = new Promise((resolve, reject)=>{
//     let success = false

//     if(success)
//     {
//         resolve("Success")
//     }
//     else
//     {
//         reject("Failed")
//     }
// })

// myPromise
//     .then(result=>console.log(result))
//     .catch(error=>console.log(error))

// function login(username, password)
// {
//     return new Promise((resolve, reject)=>{
//         setTimeout(()=>{
//             if(username === "Admin" && password === "admin123")
//             {
//                 resolve("Login Successful")
//             }
//             else
//             {
//                 reject("Login Failed")
//             }
//         }, 3000)
//     })
// }

// login("Admin", "admin123566")
//     .then(result=>console.log(result))
//     .catch(error=>console.log(error))

// /*    
// //Login
//     |
// //User enters usernam, password
//     |
// // Promise
//     |
// // Pending
//     |     |
// //success  Failure

// */

// function otpVerify(otp)
// {
//     return new Promise((resolve, reject)=>{
//         console.log("Verfying OTP")

//         setTimeout(()=>{
//             if(otp === "12345")
//             {
//                 resolve("OTP Verified Successfully")
//             }
//             else
//             {
//                 reject("Invalid OTP")
//             }
//         },3000)
//     })
// }

// otpVerify("12345")
//     .then(result=>console.log(result))
//     .catch(error=>console.log(error))


function otpVerify(otp)
{
        setTimeout(()=>{
            if(otp === "12345")
            {
                console.log("OTP Verified Successfully")
            }
            else
            {
                console.log("Invalid OTP")
            }
        },3000)
}

//otpVerify("12345")

function interviewProcess(canditateScore)
{   
    return new Promise((resolve, reject)=>{
        console.log("HR: Your Interview is completed")

        console.log("We will update your status in 3 days")

        setTimeout(()=>{
            if(canditateScore>=80)
            {
                resolve({
                    status: "Selected",
                    company: "TCS",
                    role: "Software Test Engineer",
                    salary: 100000
                })  
            }
            else
            {
                reject("Sorry !! Another canditate matched our requirements")
            }
        }, 5000)
    })
}

interviewProcess(85)
    .then(result=>{
        console.log("Congratulations!!")
        console.log(result.status)
        console.log(result.company)
        console.log(result.role)
        console.log(result.salary)
    })
    .catch(error=>console.log(error))

//let result = "Login Success"

// let result = {
//     status: "Selected",
//     company: "TCS",
//     role: "Software Test Engineer",
//     salary: 100000
// }
// result.status                  