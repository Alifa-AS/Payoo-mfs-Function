document.getElementById('show-add-money-form').addEventListener('click',function(){
    console.log('transaction click');
    showSectionById('add-money-form')
})

document.getElementById('show-cash-out-form').addEventListener('click',function(){
    showSectionById('cash-out-form');
})

document.getElementById('show-transaction-history').addEventListener('click', function(){
    showSectionById('transaction-section');
})