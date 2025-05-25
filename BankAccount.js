class BankAccount {
    holderName
    accountType
    balance
    creditLimit

    constructor(holderName, accountType, balance, creditLimit) {
        const checkAccountType = ['credit', 'debit'];
        this.holderName = holderName;
        this.accountType = checkAccountType.includes(accountType) ? accountType : 'debit';
        this.balance = balance;
        this.creditLimit = this.accountType === 'credit' ? creditLimit : 0;
    }

    deposit(amount) {
        if (amount <= 0){
            throw new Error('Amount must be positive');
        }
        this.balance += amount;
    }

    withdraw(amount) {
        if (amount <= 0) {
            throw new Error('Amount must be positive');
        }

        if (this.accountType === 'debit') {
            if (amount > this.balance) {
                throw new Error('The amount is not enough.');
            }
            this.balance -= amount;
        } else if (this.accountType === 'credit') {
            if (this.balance - amount < -this.creditLimit) {
                throw new Error('limit exceeded');
            }
            this.balance -= amount;
        }
    }

    getBalance() {
        return this.balance;
    }

    getHolderName() {
        return this.holderName;
    }

    getAccountType() {
        return this.accountType;
    }

    getCreditLimit() {
        return this.creditLimit;
    }

    getAvailableFunds() {
        if (this.accountType === 'debit') {
            return this.balance;
        } else {
            return this.balance + this.creditLimit;
        }
    }
}
const mishasAccount = new BankAccount ('მიშა ფაილოძე', 'credit', 500,  1000);
mishasAccount.deposit(2000);
mishasAccount.withdraw(100);
console.log(mishasAccount)

