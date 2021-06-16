

class Mobile
{
 
   private modelName:string;    //Class Variables    // Access Modifiers private public protracted
   public modelNumber:number;    // Explicitly specifying the Data Type
   readonly IMEI : string ="8070724EIJSDJI";
   private color : string ="Steel"; 

    static Unit : number = 0;   // Static Variable
    
    static headset :number = 0

    //let a = 244;   -> Error : let cannot be used inside the Class  , can only be used within the method
    //const c = 35;   -> Error : const cannot be used inside the Class, can only be used within the method
    //var d ="Syrgs"  -> Error : var cannot be used inside the Class, can only be used within the method


    constructor(modelName:string,modelNumber:number){

        this.modelName=modelName;
        this.modelNumber=modelNumber;
    }

    static soldUnit(){

        return this.Unit++;
    }

     soldHeadset(){

        return Mobile.headset++;
    }



    getColor(){

        return this.color;
    }

    makeCall(){
        console.log("Ringing.....");
        
    }

    pickCall():void{

        console.log("Picking !!");
        
    }

    cutCall():string{

        console.log("Ignoring...");
        return "hey";
    }
}


const myMobile = new Mobile("OnePlus",6)

// console.log(myMobile);

// myMobile.makeCall();
// myMobile.cutCall().bold();  // String Methods automatically suggested as the return type is string
// console.log(myMobile.IMEI);
//myMobile.IMEI="Change Value"   // Error -> As its a Readyonly, cannot be changed, but can be used outside the Class
//console.log(myMobile.getColor());



// console.log(Mobile.soldUnit());    // Directly use ClassName dot Static Function Name -> Use ClassName to acess static member
// console.log(Mobile.soldUnit()); 
// console.log(Mobile.soldUnit()); 
// console.log(Mobile.soldUnit()); 


// console.log(myMobile.soldHeadset());
// console.log(myMobile.soldHeadset());
// console.log(myMobile.soldHeadset());

// console.log("-------------");

// const NewMobObj = new Mobile("iPhone",5)

// console.log(NewMobObj.soldHeadset());
// console.log(NewMobObj.soldHeadset());
// console.log(NewMobObj.soldHeadset());



console.log(myMobile.soldHeadset());
console.log(myMobile.soldHeadset());
console.log(myMobile.soldHeadset());

console.log("-------------");

const NewMobObj = new Mobile("iPhone",5)

console.log(NewMobObj.soldHeadset());
console.log(NewMobObj.soldHeadset());
console.log(NewMobObj.soldHeadset());

    
