/**
 * Andela have decided to pay their midlevel developers
 * on an hourly rate per week (40 hours/week)*base pay with an overtime
 * overtime is of overtime hours*20% of the pay(with a 60 hours cap) 
 * Every developer must be proficient in one programming language
 */
import Developer from '../src/developer.js'

class MidlevelDeveloper extends Developer{
    
    constructor(name,phone,pay,language,hours_worked){
        super(name,phone,pay,language);
        this.hours_worked = hours_worked
        this.base_hours=40
        this.cap_hours=60
    }

    earnings(){
     
      if(this.hours_worked>this.base_hours && this.hours_worked<this.cap_hours ){
          return (this.base_hours*this.pay)+(this.hours_worked-this.base_hours)*(0.2*this.pay)
      }
      else if(this.hours_worked > this.cap_hours){
          return (this.base_hours*this.pay)+(this.cap_hours-this.base_hours)*(0.2*this.pay)
      }
      
      return this.hours_worked*this.pay
    }

    getDetails(){
        return `Midlevel Developer: ${super.getDetails()}`
    }
    
    getHoursWorked(){
        return this.hours_worked;
    }

    setHoursWorked(hours){
        if(typeof(hours)!='number'){
            return 'Invalid hours worked'
        }
        return this.hours_worked=hours;
    }


}

export default MidlevelDeveloper