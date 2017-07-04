class Developer{
    constructor(name,phone,pay){

        this.name=name
        this.phone=phone
        this.pay=pay
   }
    getDetails(){
     
     return `${this.name} | ${this.phone}`
   }

   earnings(){
      return this.pay
   }

}

export default Developer;
