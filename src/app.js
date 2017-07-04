/**
 * 
 * author: Aaron Biliyok, receives a number n and generate prime nos from 0 to n 
 */
function getPrimes(n){
    /**returns invalid if less than or equal to 1,
     * if not type of number
     * **/
    if(n <= 1 || typeof(n) !== 'number'||n % 1 > 0 || n === null){return 'Invalid'}

     
    
    let flag = [], primes = [];
    for (let i = 2; i <= n; ++i) {
        if (!flag[i]) {
            // i has not been marked -- it is prime
            primes.push(i); //pushed as a prime number
            for (let j = i << 1; j <= n; j += i) {
                flag[j] = true; //marks if it is a prime number//
            }
        }
    }
    return primes; 
}



export default getPrimes



