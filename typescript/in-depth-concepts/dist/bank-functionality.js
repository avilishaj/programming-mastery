"use strict";
let currency = "euro";
class BankAccount {
    constructor(id, userName, lastName, _balance, nickname) {
        this.id = id;
        this.userName = userName;
        this.lastName = lastName;
        this._balance = _balance;
        this.nickname = nickname;
    }
    get statement() {
        return `
    Name : ${this.userName} \n
    Last Name : ${this.lastName} \n
    Balance: ${this._balance} ${currency}\n
    `;
    }
    get balance() {
        return this._balance;
    }
    deposit(amount) {
        if (amount < 0)
            console.log("You cant deposit a negative amount");
        else
            this._balance = amount;
    }
    withdraw(amount) {
        if (amount <= 5 || amount > this._balance) {
            console.log(`You cant withdraw less than 5 ${currency} nor more than ${this._balance} ${currency}`);
        }
        else {
            this.deposit(this._balance - amount);
            console.log(`You took ${amount} ${currency}`);
            console.log(`You have ${this._balance} ${currency} left`);
        }
    }
    setOrChangeNickname(nickname) {
        this.nickname = nickname;
    }
}
var newAccount = new BankAccount(1, "Arber", "Lisaj", 0, "the brogrammer");
newAccount.deposit(200);
newAccount.balance;
newAccount.withdraw(120);
newAccount === null || newAccount === void 0 ? void 0 : newAccount.nickname;
newAccount.setOrChangeNickname("the owner");
newAccount.statement;
var user456 = new BankAccount(456, "Jane", "Doe", 0);
user456.setOrChangeNickname("thereisnonickname");
console.log(user456 === null || user456 === void 0 ? void 0 : user456.nickname);
var user123 = new BankAccount(123, "User", "Programmes", 0), user124 = new BankAccount(124, "Jonathan", "Smith", 100000000), user125 = new BankAccount(125, "Ivy", "Lisaj", 1000000000), user131 = new BankAccount(131, "Angel", "Di Maria", 167);
var usersArray = [user123, user124, user125, user131];
function allStatements(people) {
    for (let person of people) {
        console.log(person.statement);
    }
}
allStatements(usersArray);
//# sourceMappingURL=bank-functionality.js.map