const Bank = function(){
    let _moneyAmount  = 500;
    const _deposit = (cnt) => _moneyAmount += cnt;
    const _showBalance = (cnt) => console.log(_moneyAmount);
    return {
        deposit: _deposit,
        showBalance: _showBalance
    }
}

const bank = Bank()
bank.deposit(200)
bank.deposit(250)
bank.showBalance() //should print 950