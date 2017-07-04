/**
 * Andela have decided to pay their Junior developers
 * a weekly based salary + 10% of clients budget brought by the developer for incentive to bring clients
 * Every developer must be proficient in one programming language
 */
import Developer from '../src/developer.js'

class JuniorDeveloper extends Developer{
    
    constructor(name,phone,pay,language,sales){
        super(name,phone,pay,language);
        this.sales=sales
    }

    earnings(){
        return this.pay + (0.10*this.sales)
    }

    getDetails(){
        return `Junior Developer: ${super.getDetails()}`
    }
}

const aaron =new JuniorDeveloper('Aaron','07060884816',100,'Java',5000)
console.log(aaron.getDetails())