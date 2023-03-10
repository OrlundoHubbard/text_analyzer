// Text-processing API Url 
const API_URL = "https://japerk-text-processing.p.rapidapi.com/sentiment/";

// RapidAPI request headers
const REQUEST_HEADERS = {
    'X-RapidAPI-Host': 'japerk-text-processing.p.rapidapi.com',
    'X-RapidAPI-Key': 'd968401bc8msh7581eec7927eb40p19d28fjsn7086ddd64c2e',
    'Content-Type': 'application/x-www-form-urlencoded'
}

const analyzeComment = (comment, callback) => {
    // Creating an object to send to the server
    const data = {
        text: comment,
        language: 'english'
    };

    // Encoding data for application/x-www-form-urlencoded content type
    const formattedData = Qs.stringify(data);
    // Post request to server
    axios.post(API_URL, formattedData, { headers: REQUEST_HEADERS })
        .then(response => {
            const data = response.data;
            // Calling a callback function with data from the server
            callback(data)
        })
        .catch(error => console.error(error))
}