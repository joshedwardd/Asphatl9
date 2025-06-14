document.addEventListener("DOMContentLoaded", function() {
    let prizePoolElement = document.getElementById("prize_pool_value");
    let prizePool = 20000000; 
    let currentValue = 0;
    let interval = setInterval(function() {
        if (currentValue >= prizePool) {
            clearInterval(interval);
            prizePoolElement.textContent = "$" + prizePool.toLocaleString();
        }else{
            currentValue += Math.floor(Math.random() * 500000);
            prizePoolElement.textContent = "$" + currentValue.toLocaleString();
        }
    }, 35);
});

