/**
 * Andela have decided to pay their senior developers
 * a base salary and 0.1% on the company's profit that is if profitable and 0 if not
 * 
 * Every developer must be proficient in one programming language
 */
import Developer from '../src/developer.js'

class SeniorDeveloper extends Developer{
    
    constructor(name,phone,pay,language,profit){
        super(name,phone,pay,language);
        this.profit = profit
    }

    earnings(){
     
      if(this.profit > 0){
          return this.pay +(0.001*this.profit)
      }

      return this.pay
    }

    getDetails(){
        return `Senior Developer: ${super.getDetails()}`
    }

    company_profit(){

        return this.profit
    }

    

}