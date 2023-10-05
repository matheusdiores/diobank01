import { CompanyAccount } from './class/CompanyAccount'
import { EspecialAccount } from './class/EspecialAccount'
import { PeopleAccount } from './class/PeopleAccount'

const peopleAccount: PeopleAccount = new PeopleAccount(1, 'Nath', 10)
peopleAccount.deposit(100)
console.log(peopleAccount)
const companyAccount: CompanyAccount = new CompanyAccount('DIO', 20)
companyAccount.deposit(100)
console.log(companyAccount)
const especialAccount: EspecialAccount = new EspecialAccount('Matheus', 21)
especialAccount.deposit(100)
console.log(especialAccount)

console.log(companyAccount.getBalance())
companyAccount.withdraw(50)
console.log(companyAccount.getBalance())
companyAccount.getLoan(500)
console.log(companyAccount.getBalance())

console.log(especialAccount.getBalance())
especialAccount.withdraw(50)
console.log(especialAccount.getBalance())
especialAccount.deposit(50)
console.log(especialAccount.getBalance())