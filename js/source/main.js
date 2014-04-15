(function() {
   'use strict';

   $(document).ready(initialize);

   var balance = 1000;
   var amount;

   function initialize() {
     $('#withdraw').click(withdraw);
     $('#deposit').click(deposit);
   }

   function withdraw() {
     amount = $('#amount').val() * 1;
     balance -= amount;
     newLedger('withdraw');
   }

   function deposit() {
      amount = $('#amount').val() * 1;
      balance += amount;
      newLedger('deposit');
   }

   function newLedger(type) {
     var $td1 = $('<td class="fee">');
     var $td2 = $('<td class="deposit">');
     var $td3 = $('<td class="withdraw">');
     var $td4 = $('<td class="balance">');
     var $tr = $('<tr>');

     if (type === 'withdraw'){
       $td3.text('$' + amount + '.00');
       if(balance < 0){
         balance -= 50;
         $td1.text('$' + 50 + '.00');
       }
     }else if(type === 'deposit'){
       $td2.text('$' + amount + '.00');
     }

     if (balance < 0){
       $td4.text('$(' + balance * -1 + '.00)');
     } else {
       $td4.text('$' + balance + '.00');
     }
     
    $tr.append($td1, $td2, $td3, $td4);
    $('#ledger > tbody').append($tr);
    $('#balance > span').text('$' + balance + '.00');
   }

})();
