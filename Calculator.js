let op;
  function func(){

      let num1= Number(document.getElementById("num1").value);
      let num2= Number(document.getElementById("num2").value);
  
     function Func (num1,num2) {
          this.num1=num1; 
          this.num2=num2;
        }
      
      Func.prototype.result = function (){
        let result;
         switch (op){
          case 'add':
          result=this.num1+this.num2;
          break;
          case 'subtract':
              result=this.num1-this.num2;
              break;
          case 'multiply':
          result=this.num1*this.num2;
         break;
         case 'divide':
           if (this.num2==0){
             alert("Hа ноль делить нельзя!");
              return;
           }
           result=this.num1/this.num2;
        break;
      }
      return result;
      };
      let cal = new Func (num1,num2);
      
document.getElementById("result").innerHTML=cal.result();
  }


