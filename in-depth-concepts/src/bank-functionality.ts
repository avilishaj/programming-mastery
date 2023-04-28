// TODO: create an account using existing annotations from type alias
/* TODO: Make the atm functionality that the user can deposit withdraw or check his/her balance
  - Create an account and set the default values 
  - deposit money but not a negative value 
  - withdraw money but not less than 5 and not more than the balance 
  - reset the balance after withdrawing the money 
  - get the nickname if it has one 
  - change the nickname 
*/
let currency = "euro";
class Account {
  constructor(
    public readonly id: number,
    public userName: string,
    public lastName: string,
    private _balance: number,
    public nickname?: string
  ) {}

  get statement(): string {
    return `
    Name : ${this.userName} \n
    Last Name : ${this.lastName} \n
    Balance: ${this._balance} ${currency}\n
    `;
  }
  get balance() {
    return this._balance;
  }
  // Deposit an amount
  deposit(amount: number): void {
    // this._balance = amount;
    if (amount < 0) console.log("You cant deposit a negative amount");
    else this._balance = amount;
  }
  // Withdraw an amount
  withdraw(amount: number): void {
    if (amount <= 5 || amount > this._balance) {
      console.log(
        `You cant withdraw less than 5 ${currency} nor more than ${this._balance} ${currency}`
      );
    } else {
      this.deposit(this._balance - amount);
      console.log(`You took ${amount} ${currency}`);
      console.log(`You have ${this._balance} ${currency} left`);
    }
  }
  // if there is no nickname it adds it and if there is it changes it

  setOrChangeNickname(nickname: string): void {
    this.nickname = nickname;
  }
}

const newAccount = new Account(1, "Arber", "Lisaj", 0, "the brogrammer");
// deposit money
newAccount.deposit(200);
// check the balance
newAccount.balance;
// withdraw money
newAccount.withdraw(120);
// get the nickname
newAccount?.nickname;
// change the nickname
newAccount.setOrChangeNickname("the owner");
// get full statement
newAccount.statement;

// Creating a random account | At least 4 parameters
const user456 = new Account(456, "Jane", "Doe", 0);
user456.setOrChangeNickname("thereisnonickname");
console.log(user456?.nickname);

// Creating 4 new accoutns

const user123 = new Account(123, "User", "Programmes", 0),
  user124 = new Account(124, "Jonathan", "Smith", 100_000_000),
  user125 = new Account(125, "Ivy", "Lisaj", 1_000_000_000),
  user131 = new Account(131, "Angel", "Di Maria", 167);

// store all the users in an array
const usersArray = [user123, user124, user125, user131];
function allStatements(people: Account[]): void {
  for (let person of people) {
    console.log(person.statement);
  }
}
// get all statements
allStatements(usersArray);
