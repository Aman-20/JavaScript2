const url = "https://weatherapi-com.p.rapidapi.com/timezone.json";

let getfact = async() => {
    console.log("fetching data.....");
    
    let response = await fetch(url);
    console.log(response);
    let data = await response.json();
    console.log(data);

}