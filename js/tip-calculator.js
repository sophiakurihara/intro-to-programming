"use strict";

$(document).ready(function(){

    function calculateTip(total,tip){
        return parseFloat(total) + (total * tip/100);
    }
    // var buttonVal = $('#test').innerHTML;
    $('#calculate').click(function(){
        var billAmount = $('#bill-amount').val();
        var customPercent = $('#custom-percent').val();
        console.log(calculateTip(billAmount,customPercent));
    });

});

