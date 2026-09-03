import { greet } from "./Modules.js";
import {add, sub} from "../Javascript/Modules.js"
import { message, fruits, user } from "./Modules.js";
import { Students as Stud } from "./Modules.js"; //alias

import Animal from "./Modules.js"

greet()
add(6, 7)
sub(10, 5)
console.log(message)
console.log(fruits)

console.log(user.uaddress)

let s2 = new Stud("Mani", 101)
s2.display()

let a = new Animal()
a.eat()
a.sleep()