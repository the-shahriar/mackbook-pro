
// function to get the button id and change amount field.
function changePriceField(buttonId, amount){
    buttonValue = document.getElementById(buttonId);
    buttonValue.innerText = amount;
    buttonValueAmount = parseInt(buttonValue.innerText);
};

// function to calculate total price
function updateTotalPrice(total){
    const basePrice = document.getElementById('base-price').innerText;
    const basePriceAmount = parseInt(basePrice);
    const memoryPrice = document.getElementById('extra-memory-cost').innerText;
    const memoryPriceAmount = parseInt(memoryPrice);
    const storagePrice = document.getElementById('extra-storage-cost').innerText;
    const storagePriceAmount = parseInt(storagePrice);
    const deliveryCost = document.getElementById('delivery-cost').innerText;
    const deliveryCostAmount = parseInt(deliveryCost);
    const totalPrice = document.getElementById(total);
    totalPrice.innerText = basePriceAmount + memoryPriceAmount + storagePriceAmount + deliveryCostAmount;
};

// event handler to apply promo code
document.getElementById('promo-btn').addEventListener('click', function(){
    const promoCodeInput = document.getElementById('promo-input');
    const promoCodeText = promoCodeInput.value.toLowerCase();
    const actualTotalPrice = document.getElementById('total-price');
    const actualTotalPriceAmount = parseInt(actualTotalPrice.innerText);
    const promoMessage = document.getElementById('promo-message');
    if(promoCodeText == 'stevekaku'){ 
        actualTotalPrice.innerText = actualTotalPriceAmount - ((actualTotalPriceAmount * 0.2));
        promoCodeInput.value = '';
        promoMessage.innerText = 'Promo code applied';
        promoMessage.style.backgroundColor = 'lightcyan';
        promoMessage.style.padding = '10px';

    }
    else{
        promoCodeInput.value = '';
        promoMessage.innerText = 'Invalid promo code';
        promoMessage.style.backgroundColor = 'red';
        promoMessage.style.padding = '10px';
    }
});

// event handler for 8gb memory
document.getElementById('memory-8gb').addEventListener('click', function(){
    changePriceField('extra-memory-cost', 0);
    updateTotalPrice('total');
    updateTotalPrice('total-price');
});

// event handler for 16gb memory
document.getElementById('memory-16gb').addEventListener('click', function(){
    changePriceField('extra-memory-cost', 180);
    updateTotalPrice('total');
    updateTotalPrice('total-price');
});

// event handler for 256gb ssd-card
document.getElementById('ssd-256gb').addEventListener('click', function(){
    changePriceField('extra-storage-cost', 0);
    updateTotalPrice('total');
    updateTotalPrice('total-price');
});

// event handler for 512gb ssd-card
document.getElementById('ssd-512gb').addEventListener('click', function(){
    changePriceField('extra-storage-cost', 100);
    updateTotalPrice('total');
    updateTotalPrice('total-price');
});

// event handler for 1tb ssd-card
document.getElementById('ssd-1tb').addEventListener('click', function(){
    changePriceField('extra-storage-cost', 180);
    updateTotalPrice('total');
    updateTotalPrice('total-price');
});

// event handler for free delivery
document.getElementById('free-delivery').addEventListener('click', function(){
    changePriceField('delivery-cost', 0);
    updateTotalPrice('total');
    updateTotalPrice('total-price');
});

// event handerler for paid delivery
document.getElementById('paid-delivery').addEventListener('click', function(){
    changePriceField('delivery-cost', 20);
    updateTotalPrice('total');
    updateTotalPrice('total-price');
});