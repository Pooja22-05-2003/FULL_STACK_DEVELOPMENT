/*
0.  API => Application Programming Interface.
1.  API basically runs on request, response cycles.[Hum api se kuch request krte hai and then return us with the response as the output].
2.  API are nothing but end points.[Jo humare url end points hote hai].
3. Fetch API
-> The Fetch API Provides an interface for fetching (sending / receiving) resources.
-> It uses Request and Response objects.
-> The Fetch() method is used to fetch a resource(data).

let promise=fetch(url,[options])

*/


const URL="https://cat-fact.herokuapp.com/facts";

// let promise=fetch(URL);

// console.log(promise);


// Making this task using promises(async and await).
// creating asynchronous function for doing the same.
const getfacts= async()=>{
    console.log("getting data ......");
    let response=  await fetch(URL); // await keyword added because api can take time to do this work(becaus it is asynchronous task hai).
    console.log(response);
    let data= await response.json();
    console.log(data);
}



/*
1. Initially data is sent in (AJAX=> is Asynchronous JS and XML) javascript object notation, but nowaday data is send using JSON(JSON is javascript Object Notation)
2. Nowadays maximum data in API is returned in AJAJ[Asynchronous Javacript and JSON] (also called JSON data return format).
3. Aaaj ke time mei, AJAX ke jagah log commonly JSON ko AJAJ bolne ki jagah AJAX hi bol dete hai.

Step2:  Response(JSON)--> convert to JS object.[js object is usable format, and for that we use special method called json() method]

json() methos : return a second promise that resolves with the result of parsing  the response body text as JSON, output is JS object)

** json() method se hum apna actual usable data nikalte hai , response object ke thorgh.
*/



// HTTP Request methods referrence link: https://developer.mozilla.org/en-US/docs/Web/HTTP/Methods

// HTTP reponse status code referrence link: https://developer.mozilla.org/en-US/docs/Web/HTTP/Status

// HTTP response headers also contain details about the responses, such as content type, HTTP status code etc.







