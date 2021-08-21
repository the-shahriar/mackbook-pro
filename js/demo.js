// adding extra part price 
function changing_value(targetId, value) {
    const cost = document.getElementById(targetId);
    cost.innerText = value;
}
// To calculate total price 
function calcTotal(total) {
    const bestPrice = parseInt(document.getElementById('best-price').innerText);
    const memoryCost = parseInt(document.getElementById('memory-cost').innerText);
    const storageCost = parseInt(document.getElementById('ssd-cost').innerText);
    const deliveryCost = parseInt(document.getElementById('delivery-cost').innerText);
    const totalCost = document.getElementById('total-price');
    totalCost.innerText = bestPrice + memoryCost + storageCost + deliveryCost;
}

// promo code adding 
document.getElementById('apply-button').addEventListener('click', function () {
    const input = document.getElementById('promo-input');
    const inputValue = input.value;
    const totalPrice = document.getElementById('total');
    const totalPriceNum = parseInt(totalPrice.innerText);
    if (inputValue == 'stevekaku') {
        totalPrice.innerText = totalPrice.innerText = totalPriceNum - ((20 * totalPriceNum) / 100);
        input.value = '';
    }
});

document.getElementById('memory-8gb').addEventListener('click', function () {
    changing_value('memory-cost', 0);
    calcTotal('total-cost');
    calcTotal('total');
})
document.getElementById('memory-16gb').addEventListener('click', function () {
    changing_value('memory-cost', 180);
    calcTotal('total-cost');
    calcTotal('total');
})

document.getElementById('ssd-256').addEventListener('click', function () {
    changing_value('ssd-cost', 0)
    calcTotal('total-cost');
    calcTotal('total');
})
document.getElementById('ssd-512').addEventListener('click', function () {
    changing_value('ssd-cost', 100);
    calcTotal('total-cost');
    calcTotal('total');
})

document.getElementById('ssd-1tb').addEventListener('click', function () {
    changing_value('ssd-cost', 180);
    calcTotal('total-cost');
    calcTotal('total');
})

document.getElementById('delivery').addEventListener('click', function () {
    changing_value('delivery-cost', 0)
    calcTotal('total-cost');
    calcTotal('total');
})
document.getElementById('quick-delivery').addEventListener('click', function () {
    changing_value('delivery-cost', 20)
    calcTotal('total-cost');
    calcTotal('total');
})


