
const needle = require('needle');

// The code below sets the bearer token from your environment variables
// To set environment variables on macOS or Linux, run the export command below from the terminal:
// export BEARER_TOKEN='YOUR-TOKEN'
const token = "AAAAAAAAAAAAAAAAAAAAANYBUwEAAAAAdk%2BfYezcdzVTYAPK1UOYYgQAvi0%3DuynF6NcdOAnlpCzOFDyrn471JrMuZst2huv39ReiUvPu6MYcYj";

const endpointURL = "https://api.twitter.com/2/users/by?usernames="

export async function getRequest() {

    // These are the parameters for the API request
    // specify User names to fetch, and any additional fields that are required
    // by default, only the User ID, name and user name are returned
    const params = {
        usernames: "colbreezekat",  // Edit usernames to look up
        "user.fields": "profile_image_url,description" // Edit optional query parameters here
    }

    // this is the HTTP header that adds bearer token authentication
    const res = await needle('get', endpointURL, params, {
        headers: {
            "User-Agent": "v2UserLookupJS",
            "authorization": `Bearer ${token}`
        }
    })

    if (res.body) {
        return res.body;
    } else {
        return('Unsuccessful request')
    }
}