class Customer
{
    constructor(name)
    {
        this.name = name
    }
    cousterDetails()
    {
        console.log("Customer Name: ", this.name)
    }
}

class Order extends Customer
{
    constructor(name, orderID, amount)
    {
        super(name)
        this.orderID = orderID
        this.amount = amount
    }
    displayOrder()
    {
        super.cousterDetails()
        console.log("Order ID: " , this.orderID)
        console.log("Amount: " , this.amount)
    }
}

class EMIPayment extends Order
{
    constructor(name, orderID, amount, months)
    {
        super(name, orderID, amount)
        this.months = months
    }
    calculateEMI()
    {
        let emi = this.amount / this.months
        
        console.log("EMI Months: ", this.months)
        console.log("Monthly EMI ", emi)
    }
}


let order1 = new Order("Bala", 1446554, 5000)
order1.displayOrder()

let emi1 = new EMIPayment("Bala", 12424, 21000, 6)
emi1.calculateEMI()

// super() //Parent Class Constructor perperities access
// super.methodname() //Parent class method call
