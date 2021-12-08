// fetch('https://itunes.apple.com/search?term=beyonce');
// you have to check the promise wether it has been rejected or approved before handling the fetched data
// if the request is still pending ansycronise means the other parts of the code will start without waiting
// php is a sycronize language meaning the other parts waits for their stack to queue to come.
// if multiple responses.**********************
// fetch('https://itunes.apple.com/search?term=beyonce').
// then((response)=>{
//     return response.json();
// })
const url = 'https://itunes.apple.com/search?term=beyonce'; 
fetch(url).
then((response)=> response.json()).
then((data) =>{
    // console.log(data.results);
    const artists = data.results;
}).catch(error => console.log("there was an error.",error))
