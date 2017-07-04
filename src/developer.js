class Developer{
  constructor(name,phone,pay,language){

        this.name=name
        this.phone=phone
        this.pay=pay
        this.language=language
   }
   getDetails(){
     
     return `${this.name} | ${this.phone} | proficient in ${this.language}`;
   }

   earnings(){
      return this.pay;
   }

   proficient_language(){
      return this.language;
   }

   getPhone(){
       return this.phone;
   }

   setPhone(phone){
       if(phone.length===11){
           return this.phone=phone;
       }
       return 'Invalid number'
      

   }
   getName(){
       return this.name;
   }

   setName(name){
      return this.name = name;
   }

    setPay(pay){
       if(typeof(pay)!='number'){
          return 'Invalid'
       }
          return this.pay = pay
  }


}

export default Developer;
