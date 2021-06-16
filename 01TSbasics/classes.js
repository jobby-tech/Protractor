var Mobile = /** @class */ (function () {
    //let a = 244;   -> Error : let cannot be used inside the Class  , can only be used within the method
    //const c = 35;   -> Error : const cannot be used inside the Class, can only be used within the method
    //var d ="Syrgs"  -> Error : var cannot be used inside the Class, can only be used within the method
    function Mobile(modelName, modelNumber) {
        this.IMEI = "8070724EIJSDJI";
        this.color = "Steel";
        this.modelName = modelName;
        this.modelNumber = modelNumber;
    }
    Mobile.soldUnit = function () {
        return this.Unit++;
    };
    Mobile.prototype.soldHeadset = function () {
        return Mobile.headset++;
    };
    Mobile.prototype.getColor = function () {
        return this.color;
    };
    Mobile.prototype.makeCall = function () {
        console.log("Ringing.....");
    };
    Mobile.prototype.pickCall = function () {
        console.log("Picking !!");
    };
    Mobile.prototype.cutCall = function () {
        console.log("Ignoring...");
        return "hey";
    };
    Mobile.Unit = 0; // Static Variable
    Mobile.headset = 0;
    return Mobile;
}());
var myMobile = new Mobile("OnePlus", 6);
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
var NewMobObj = new Mobile("iPhone", 5);
console.log(NewMobObj.soldHeadset());
console.log(NewMobObj.soldHeadset());
console.log(NewMobObj.soldHeadset());
