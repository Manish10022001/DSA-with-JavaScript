/*
Problem Statement: Best Time to Buy and Sell Stocks
You are given an array prices where prices[i] is the price of a given stock on the ith day. You want to maximize your profit by choosing a single day to buy one stock and choosing a different day in the future to sell that stock.

Return the maximum profit you can achieve from this transaction. If you cannot achieve any profit, return 0.

Example :
Input:prices = [7, 1, 5, 3, 6, 4]
Output:5
*/

let maxProfit = function (prices) {
  let minPrice = prices[0];
  let maxProfit = 0;

  for (let i = 0; i < prices.length; i++) {
    //we check if diff. between arr[i]-min is greater than maxProfit, then we will assign that diff to maxProfit
    if (prices[i] - minPrice > maxProfit) {
      maxProfit = prices[i] - minPrice;
    }

    //also we have to keep update the min value
    if (prices[i] < minPrice) {
      minPrice = prices[i];
    }
  }
  return maxProfit;
};

let prices = [7, 1, 5, 3, 6, 4];
let result = maxProfit(prices);
console.log(result);

/* Code 2: my version
function buyAndSell(arr){
  
  let min = arr[0];
  let maxProfit = 0;
  
  for(let i=0; i<arr.length; i++){
    
    //we check if diff. between arr[i]-min is greater than maxProfit, then we will assign that diff to maxProfit;
    if(arr[i]-min > maxProfit){
      maxProfit = arr[i]-min;
    }
    
    //also we have to keep update the min value
    if(arr[i]<min){
      min = arr[i];
    }
  }
  return maxProfit;
}
let arr = [31,38,35,31,6,4];
let result = buyAndSell(arr);
console.log(result);
*/

//Code 3:brute force
/*
var maxProfit = function (prices) {
  let maxProfit = 0;
  for (let i = 0; i < prices.length; i++) {
    for (let j = i + 1; j < prices.length; j++) {
      if (prices[j] - prices[i] > maxProfit) {
        maxProfit = prices[j] - prices[i];
      }
    }
  }
  return maxProfit;
};
let prices = [7, 1, 5, 3, 6, 4];
let result = maxProfit(prices);
console.log(result);
*/
