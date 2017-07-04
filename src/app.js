import Developer from '../src/developer.js'

class JuniorDeveloper extends Developer{
    
    constructor(name,phone,pay,sales){
        super(name,phone,pay);
        this.sales=sales
    }

    earnings(){
        return this.pay + (0.10*this.sales)
    }

    getDetails(){
        return `Junior Developer: ${super.getDetails()}`
    }
}

const aaron =new JuniorDeveloper('Aaron','07060884816',100,5000)
console.log(aaron.getDetails())