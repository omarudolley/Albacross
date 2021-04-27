class Stack {
    constructor(){
      this.data =[]
      this.size = 0
      if (arguments){
          for (const argument of arguments){
            this.data.push(argument)
            this.size = this.size + 1
         }
      }
    }



   length() {
      return this.size
   }


   push(element) {
      this.data[this.size] = element
      this.size = this.size + 1
   }


   pop() {
      if( !this.isEmpty()) {
         this.size = this.size -1
         return this.data.pop() 
       }
       return null
   }


   peek() {
      if(!this.isEmpty()){
         return this.data[this.size-1]
      }
      return null
   }



   swap(){
      if (this.size >= 2){
      return [this.data[this.size-1], this.data[this.size-2]] = [this.data[this.size-2], this.data[this.size-1]]
      }
      return null 
   }



   isEmpty() {
      return this.size === 0 
   }
 

}



module.exports = Stack

