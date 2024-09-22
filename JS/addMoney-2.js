document.getElementById('btn-add-money').addEventListener('click',function(event){
    event.preventDefault();

    const addMoney = getInputFieldValueById('input-add-money')
    const pinNumber = getInputFieldValueById('input-pin-number');
    // console.log('add money inside addMoney2.js',addMoney,pinNumber);

    // wrong way to validate
    if(pinNumber === 1234){
      const balance = getTextFieldValueById('account-balance');
      const newBalance = balance + addMoney;

      document.getElementById('account-balance').innerText = newBalance;

      // transaction history  add
  
      const p = document.createElement('p');
      // $- template string
      p.innerText = `Added: ${addMoney} TK. Balance: ${newBalance}`;
      console.log(p);

      // should be a common function
      document.getElementById('transaction-container').appendChild(p);
    }
    else{
        alert('failed to add money')
    }
})
