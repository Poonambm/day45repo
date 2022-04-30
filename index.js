//Function to reverse the number using split and reverse function
function reverseNumber()
{
    let  x = 349210;
    x = x+"";
    var reversed = x.split("").reverse().join("");
   return reversed;
}
console.log(reverseNumber())

//Sort the input word using split and sort function
function sort_words(string){
            
     var words = string.split('');
     words = words.sort();
    words = words.join("");
    console.log(words)
    
}
sort_words('webmaster');  

//function to convert to upper case
function convertToupperCase(str){
        const arr = str.split(" ");
    
     for (var i = 0; i < arr.length; i++) {
        arr[i] = arr[i].charAt(0).toUpperCase() + arr[i].slice(1);
    }

    const str2 = arr.join(" ");
    console.log(str2);
}
convertToupperCase('the quick brown fox'); 

//function to check if number is prime or not
function checkPrime(data){
    
    const number = parseInt(data);
    let isPrime = true;

  if (number > 1) {

    
    for (let i = 2; i < number; i++) {
        if (number % i == 0) {
            isPrime = false;
            break;
        }
    }

    if (isPrime) {
        console.log(`${number} is a prime number`);
    } else {
        console.log(`${number} is a not prime number`);
    }
    }
    }
checkPrime(8);

//function to get unique characters out of sentence
function uniqueChar(str) {
    var unique_char="";
    for (var x=0;x < str.length;x++)
    {
        if(unique_char.indexOf(str.charAt(x))==-1)
        {
         unique_char += str[x]; 
        }
    }
     console.log(unique_char);   
}
 
uniqueChar('thequickbrownfoxjumpsoverthelazydog');  