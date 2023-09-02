
// BEST TIME TO BUY AND SELL STOCKS !!

let price = [7,2,5,1,8];

let maxProfit = function (price) {
    let curMin = price[0]; // atleast buy day 0
    let profit = 0;
    for (let i = 0; i < price.length; i++){
        //can I sell 
        if (price[i] > curMin) {
            //you  can sell,but check is it better than prev profit ? 
            profit=Math.max(profit,price[i]-curMin)
        }
        // can I buy ?
        if (price[i]<curMin) {
            curMin = price[i]
        }
    }
    return profit;
}
console.log(maxProfit(price));