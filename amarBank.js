document.getElementById('depositAmountField').addEventListener('click', function(){
    const depositAmountSring=document.getElementById('depositStringValue');
    const depositAmount=depositAmountSring.value;
    const depositAmountFloat=parseFloat(depositAmount);
    depositAmountSring.value='';
    // console.log(depositAmountFloat);
    const oldDeposit=document.getElementById('previusDeposit');
    const oldDepositString=oldDeposit.innerText;
    const oldDepositFloat=parseFloat(oldDepositString);
    const newDeposit=depositAmountFloat + oldDepositFloat;
    oldDeposit.innerText=newDeposit;
    
    const balanceElementField=document.getElementById('balanceEnquary');
    const balanceElementString=balanceElementField.innerText;
    const balanceElementFloat=parseFloat(balanceElementString);
    balanceElementField.innerText=depositAmountFloat + balanceElementFloat;
})
document.getElementById('yourWithdrow').addEventListener('click', function(){
    const withdrowElementField=document.getElementById('getWithdrow');
    const withdrowElementString=withdrowElementField.value;
    const withdrowElementFloat=parseFloat(withdrowElementString);
    withdrowElementField.value='';
    
    const previousWithdrow=document.getElementById('amarWithdrow');
    const previousWithdrowElementString=previousWithdrow.innerText;
    const previousWithdrowElementFloat=parseFloat(previousWithdrowElementString);
    previousWithdrow.innerText=withdrowElementFloat + previousWithdrowElementFloat;

    const balanceElementField=document.getElementById('balanceEnquary');
    const balanceElementString=balanceElementField.innerText;
    const balanceElementFloat=parseFloat(balanceElementString);
    if(withdrowElementFloat>balanceElementFloat){
        alert('Your account not Suficient balance')
    }
    else{
        balanceElementField.innerText=balanceElementFloat - withdrowElementFloat;
    }
    
    
})