/**
 * Andela have decided to pay their Junior developers
 * a weekly based salary + 10% of clients budget brought by the developer for incentive to bring clients
 * Every developer must be proficient in one programming language
 */
import Developer from '../src/developer.js'


class JuniorDeveloper extends Developer{
    
    constructor(name,phone,pay,language,client_budget){
        super(name,phone,pay,language);
        this.client_budget=client_budget
    }

    earnings(){
        return this.pay + (0.10*this.client_budget)
    }

    getDetails(){
        return `Junior Developer: ${super.getDetails()}`
    }

    getClientBudget(){
        if(typeof(this.client_budget)!='number'){
            return 'Invalid'
        }
        return this.client_budget
    }

    setClientBudget(budget){
        if(typeof(budget)!='number'){
            return 'Invalid'
        }
        return this.client_budget=budget

    }
}

export default JuniorDeveloper
