

class Mobile{

    phoneModel = "OnePlus";
    #unlockPIN = 1234;


    makeCall(){
        console.log("Calling....");
    }

   

    sendSMS(phoneNumber){
        console.log("Sending Phone ..."+phoneNumber);
    }

    sendSMS(){
        console.log("Sending ...");
    }

}


const myMobile = new Mobile();

myMobile.sendSMS(244);