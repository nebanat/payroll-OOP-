class Developer{
    constructor(name,phone,pay,language){

        this.name=name
        this.phone=phone
        this.pay=pay
        this.language=language
   }
   getDetails(){
     
     return `${this.name} | ${this.phone}| proficient in ${this.language}`
   }

   earnings(){
      return this.pay
   }

   proficient_language(){
      return this.language
   }

}

export default Developer;
