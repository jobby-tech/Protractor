



// function reverStr(str1)
// {

// splistr=str1.split(' ');
// //console.log(splistr);

// let count1=splistr.length;
// newstr="";
// for(i=count1-1;i>=0;i--)
// {
    
//     newstr=newstr +' '+ splistr[i];
        
// }

// return newstr;

// }☻


// let str="Lin John Ajin"
// console.log(reverStr(str));




//Occurance of String
let str = "Ajin John Lin A"

chrAry=str.split('');
lengAry=chrAry.length;

newChr="";

for(i=0;i<lengAry-1;i++)
    {
        for(j=0;j<10;j++)
        {
            let count =0;

            if(newChr[i]===newChr[j])
            {
                return count++;
            }
          
        }

        console.log(i);

    }


    console.log(i);
