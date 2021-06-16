class Mobile {
    //let a = 244;   -> Error : let cannot be used inside the Class  , can only be used within the method
    //const c = 35;   -> Error : const cannot be used inside the Class, can only be used within the method
    //var d ="Syrgs"  -> Error : var cannot be used inside the Class, can only be used within the method
    constructor(modelName, modelNumber) {
        this.IMEI = "8070724EIJSDJI";
        this.color = "Steel";
        this.modelName = modelName;
        this.modelNumber = modelNumber;
    }
    static soldUnit() {
        return this.Unit++;
    }
    soldHeadset() {
        return Mobile.headset++;
    }
    getColor() {
        return this.color;
    }
    makeCall() {
        console.log("Ringing.....");
    }
    pickCall() {
        console.log("Picking !!");
    }
    cutCall() {
        console.log("Ignoring...");
        return "hey";
    }
}
Mobile.Unit = 0; // Static Variable
Mobile.headset = 0;
const myMobile = new Mobile("OnePlus", 6);
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
const NewMobObj = new Mobile("iPhone", 5);
console.log(NewMobObj.soldHeadset());
console.log(NewMobObj.soldHeadset());
console.log(NewMobObj.soldHeadset());
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiQ2xhc3Nlcy5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLzAxVFNiYXNpY3MvQ2xhc3Nlcy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFFQSxNQUFNLE1BQU07SUFZUixxR0FBcUc7SUFDckcsc0dBQXNHO0lBQ3RHLG9HQUFvRztJQUdwRyxZQUFZLFNBQWdCLEVBQUMsV0FBa0I7UUFadkMsU0FBSSxHQUFXLGdCQUFnQixDQUFDO1FBQ2pDLFVBQUssR0FBVyxPQUFPLENBQUM7UUFhM0IsSUFBSSxDQUFDLFNBQVMsR0FBQyxTQUFTLENBQUM7UUFDekIsSUFBSSxDQUFDLFdBQVcsR0FBQyxXQUFXLENBQUM7SUFDakMsQ0FBQztJQUVELE1BQU0sQ0FBQyxRQUFRO1FBRVgsT0FBTyxJQUFJLENBQUMsSUFBSSxFQUFFLENBQUM7SUFDdkIsQ0FBQztJQUVBLFdBQVc7UUFFUixPQUFPLE1BQU0sQ0FBQyxPQUFPLEVBQUUsQ0FBQztJQUM1QixDQUFDO0lBSUQsUUFBUTtRQUVKLE9BQU8sSUFBSSxDQUFDLEtBQUssQ0FBQztJQUN0QixDQUFDO0lBRUQsUUFBUTtRQUNKLE9BQU8sQ0FBQyxHQUFHLENBQUMsY0FBYyxDQUFDLENBQUM7SUFFaEMsQ0FBQztJQUVELFFBQVE7UUFFSixPQUFPLENBQUMsR0FBRyxDQUFDLFlBQVksQ0FBQyxDQUFDO0lBRTlCLENBQUM7SUFFRCxPQUFPO1FBRUgsT0FBTyxDQUFDLEdBQUcsQ0FBQyxhQUFhLENBQUMsQ0FBQztRQUMzQixPQUFPLEtBQUssQ0FBQztJQUNqQixDQUFDOztBQS9DTSxXQUFJLEdBQVksQ0FBQyxDQUFDLENBQUcsa0JBQWtCO0FBRXZDLGNBQU8sR0FBVyxDQUFDLENBQUE7QUFpRDlCLE1BQU0sUUFBUSxHQUFHLElBQUksTUFBTSxDQUFDLFNBQVMsRUFBQyxDQUFDLENBQUMsQ0FBQTtBQUV4Qyx5QkFBeUI7QUFFekIsdUJBQXVCO0FBQ3ZCLHFHQUFxRztBQUNyRyw4QkFBOEI7QUFDOUIscUhBQXFIO0FBQ3JILG1DQUFtQztBQUluQyxnSUFBZ0k7QUFDaEksbUNBQW1DO0FBQ25DLG1DQUFtQztBQUNuQyxtQ0FBbUM7QUFHbkMsdUNBQXVDO0FBQ3ZDLHVDQUF1QztBQUN2Qyx1Q0FBdUM7QUFFdkMsZ0NBQWdDO0FBRWhDLDJDQUEyQztBQUUzQyx3Q0FBd0M7QUFDeEMsd0NBQXdDO0FBQ3hDLHdDQUF3QztBQUl4QyxPQUFPLENBQUMsR0FBRyxDQUFDLFFBQVEsQ0FBQyxXQUFXLEVBQUUsQ0FBQyxDQUFDO0FBQ3BDLE9BQU8sQ0FBQyxHQUFHLENBQUMsUUFBUSxDQUFDLFdBQVcsRUFBRSxDQUFDLENBQUM7QUFDcEMsT0FBTyxDQUFDLEdBQUcsQ0FBQyxRQUFRLENBQUMsV0FBVyxFQUFFLENBQUMsQ0FBQztBQUVwQyxPQUFPLENBQUMsR0FBRyxDQUFDLGVBQWUsQ0FBQyxDQUFDO0FBRTdCLE1BQU0sU0FBUyxHQUFHLElBQUksTUFBTSxDQUFDLFFBQVEsRUFBQyxDQUFDLENBQUMsQ0FBQTtBQUV4QyxPQUFPLENBQUMsR0FBRyxDQUFDLFNBQVMsQ0FBQyxXQUFXLEVBQUUsQ0FBQyxDQUFDO0FBQ3JDLE9BQU8sQ0FBQyxHQUFHLENBQUMsU0FBUyxDQUFDLFdBQVcsRUFBRSxDQUFDLENBQUM7QUFDckMsT0FBTyxDQUFDLEdBQUcsQ0FBQyxTQUFTLENBQUMsV0FBVyxFQUFFLENBQUMsQ0FBQyJ9