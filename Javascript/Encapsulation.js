//Encapsulation.js

//Encapsulation means wrapping data (varaibles) and methods (functions) into single unit (class) and restricting direct access to the data 

//Encapsultion = Data Hiding + Controlled Data

class BankAccount
{
    #balance
    constructor(amount)
    {
        this.#balance = amount
    }
    deposit(amount)
    {
        if(amount>0)
        {
            this.#balance += amount
        }
    }
    withdraw(amount)
    {
        if(amount<=this.#balance)
        {
            this.#balance -= amount
        }
    }
    getBalance()
    {
        return this.#balance
    }
}

let b1 = new BankAccount(5000)
console.log(b1.getBalance())
b1.deposit(5000)
console.log(b1.getBalance())
b1.withdraw(20000)
console.log(b1.getBalance())

