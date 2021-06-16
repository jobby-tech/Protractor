
// Javascript implementation to print the character and
// its frequency in order of its occurrence
     
    let SIZE = 26;
     
    // function to print the character and its
    // frequency in order of its occurrence
    function printCharWithFreq(str)
    {
     
        // size of the string 'str'
        let n = str.length;
  
        // 'freq[]' implemented as hash table
        let freq = new Array(SIZE);
        for(let i = 0; i < freq.length; i++)
        {
            freq[i] = 0;
        }
  
        // accumulate freqeuncy of each character
        // in 'str'
        for (let i = 0; i < n; i++)
            freq[str[i].charCodeAt(0) - 'a'.charCodeAt(0)]++;
  
        // traverse 'str' from left to right
        for (let i = 0; i < n; i++) {
  
            // if frequency of character str.charAt(i)
            // is not equal to 0
            if (freq[str[i].charCodeAt(0) - 'a'.charCodeAt(0)] != 0) {
  
                // print the character along with its
                // frequency
                console.log(str[i]);
                console.log(" is repeated "+freq[str[i].charCodeAt(0) - 'a'.charCodeAt(0)] + " times ");
  
                // update frequency of str.charAt(i) to
                // 0 so that the same character is not
                // printed again
                freq[str[i].charCodeAt(0) - 'a'.charCodeAt(0)] = 0;
            }
        }
    }
     
    // Driver program to test above
    let str = "ajin";
    printCharWithFreq(str);
     
