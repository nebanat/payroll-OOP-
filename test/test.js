const assert = require('chai').assert;
import Developer from '../src/developer.js';
import JuniorDeveloper from '../src/junior_developer.js'
import MidlevelDeveloper from '../src/midlevel_developer.js'
import SeniorDeveloper from '../src/senior_developer.js'

describe("developer",()=>{
    describe("#developerclass", ()=>{
      //This test block is for the developer base class//
      let developer;
      
      beforeEach(()=>{
        //initialize a new object before each test block executed
         developer = new Developer('Aaron','07060884816',500,'Java')
      })
      
       it("returns the name", ()=>{
          assert.deepEqual(developer.name,'Aaron');
        });

        it("returns the details of the developer", ()=>{
          assert.deepEqual(developer.getDetails(),'Aaron | 07060884816 | proficient in Java');
        });

        it("returns Invalid when a string is entered as Pay", ()=>{
          assert.deepEqual(developer.setPay('twenty'),'Invalid');
        });

        it("returns Invalid Phone when a wrong phone number is entered", ()=>{
          assert.deepEqual(developer.setPhone('700594'),'Invalid number');
        });

     })
      //This test block tests juniordeveloper sub class//
    describe("#juniordeveloper", ()=>{
       let junior_developer;
      
      beforeEach(()=>{
        //initialize a new object before each test block executed
         junior_developer = new JuniorDeveloper('Dorathy','07060884816',1000,'Python',50000)
      })
      
       it("returns the junior developer's client budget", ()=>{
          assert.deepEqual(junior_developer.client_budget,50000);
        });

        it("returns the junior developers weekly earnings", ()=>{
          assert.deepEqual(junior_developer.earnings(),6000);
        });

         it("returns the details of the junior developer", ()=>{
          assert.deepEqual(junior_developer.getDetails(),'Junior Developer: Dorathy | 07060884816 | proficient in Python');
        });

        it("returns Invalid when a string is entered as the junior developer's client budget", ()=>{
          assert.deepEqual(junior_developer.setClientBudget('twenty'),'Invalid');
        });

        /**it("returns Invalid when a string is entered as Pay", ()=>{
          assert.deepEqual(developer.setPay('twenty'),'Invalid');
        });**/})

    //thus test block tests for midlevel developer sub class//
    describe("#midleveldeveloper", ()=>{ 
       let midlevel_developer;
      
       beforeEach(()=>{
        //initialize a new object before each test block executed
         midlevel_developer = new MidlevelDeveloper('Dorathy','07060884816',100,'COBOL',50)
       })
      
       it("returns the midlevel developer's hours worked", ()=>{
          assert.deepEqual(midlevel_developer.hours_worked,50);
        });

        it("returns the midlevel developers weekly earnings", ()=>{
          assert.deepEqual(midlevel_developer.earnings(),4200);
        });

         it("returns the details of the midlevel developer", ()=>{
          assert.deepEqual(midlevel_developer.getDetails(),'Midlevel Developer: Dorathy | 07060884816 | proficient in COBOL');
        });

        it("returns Invalid when a string is entered as the midlevel developer's client budget", ()=>{
          assert.deepEqual(midlevel_developer.setHoursWorked('forty'),'Invalid hours worked');
        });

        /**it("returns Invalid when a string is entered as Pay", ()=>{
          assert.deepEqual(developer.setPay('twenty'),'Invalid');
        });**/

     })

    describe("#seniordeveloper", ()=>{ 
       let senior_developer;
      
       beforeEach(()=>{
        //initialize a new object before each test block executed
         senior_developer = new SeniorDeveloper('Fidelis','08022442641',100000,'C++',1000000)
       })
      
       it("returns the company's profit for the weekly", ()=>{
          assert.deepEqual(senior_developer.profit,1000000);
        });

        it("returns the senior developers weekly earnings", ()=>{
          assert.deepEqual(senior_developer.earnings(),101000);
        });

         it("returns the details of the senior developer", ()=>{
          assert.deepEqual(senior_developer.getDetails(),'Senior Developer: Fidelis | 08022442641 | proficient in C++');
        });

        

        /**it("returns Invalid when a string is entered as Pay", ()=>{
          assert.deepEqual(developer.setPay('twenty'),'Invalid');
        });**/

     })

     





   

})


