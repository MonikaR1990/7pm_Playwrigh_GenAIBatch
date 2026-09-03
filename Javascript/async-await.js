// function login()
// {
//     return new Promise((resolve)=>{
//         setTimeout(()=>{
//             console.log("1. Login Successful")
//             resolve()
//         })
//     })
// }

// function searchTrain()
// {
//     return new Promise((resolve)=>{
//         setTimeout(() => {
//             console.log("2. Train Found")
//             resolve()
//         }, 2000);
//     })
// }

// function selectSeat()
// {
//     return new Promise((resolve)=>{
//         setTimeout(() => {
//             console.log("3. Seat Selected")
//             resolve()
//         }, 2000);
//     })
// }

// function pay()
// {
//     return new Promise((resolve)=>{
//         setTimeout(()=>{
//             console.log("4. Payment Successfull")
//             resolve()
//         }, 2000)
//     })
// }

// function getTicket()
// {
//     return new Promise((resolve)=>{
//         setTimeout(()=>{
//             console.log("5. Ticket Downloaded")
//             resolve()
//         }, 2000)
//     })
// }

// //Promise Handle using then() and catch()

// // login()
// //     .then(()=>searchTrain())
// //     .then(()=>selectSeat())
// //     .then(()=>pay())
// //     .then(()=>getTicket())
// //     .then(()=>console.log("Train Ticked Booking Completed"))
// //     .catch((error)=>console.log(error))


// //async await 
// //Promise Handle using async and await

// async function bookTrainTicket()
// {
//     await login()
//     await searchTrain()
//     await selectSeat()
//     await pay()
//     await getTicket()

//     console.log("6. Train Ticked Booking Completed")
// }

// bookTrainTicket()

//async ==> a function that contain an asynchronous process (promise) that always return a promise

//await ==> Wait until that Promise is completed, then give us the result

function login(username, password)
{   
    return new Promise((resolve, reject)=>{
        if(username === "Admin" && password === "Admin@123")
        {
            resolve("Login Successful")
        }
        else
        {
            reject("Login Failed")
        }
    })
}

async function checkLogin()
{
    try
    {
    const result = await login("Admin", "Admin@12368768")
    console.log(result)
    }
    catch(error)
    {
        console.log(error)
    }
}

//checkLogin()

/*open website
| wait
enter username
| wait
enter password
| wait
click login */

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

async function checkInterviewResult()
{
    try
    {
        const result = await interviewProcess(87) 
        console.log(result.status)      
    }
    catch(error)
    {
        console.log(error)
    }
}

checkInterviewResult()