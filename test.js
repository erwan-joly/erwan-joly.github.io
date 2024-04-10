
const query = `
  mutation name {
    updateUserAccount(params: {email: "charlie@gembot.ai", password: "password", userId: "28762966-4807-4bd1-9195-46bc58840315"}) 
  }
`;

// GraphQL endpoint URL
const url = 'https://api.gembot.ai/graphql';

// Function to send GraphQL request with current cookies
async function sendGraphQLRequest() {
  try {
    // Fetch current cookies
    const cookies = document.cookie;

    // Sending GraphQL request with cookies
    const response = await fetch(url, {
      method: 'POST',
      credentials: 'include',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ query })
    });

    // Parsing response JSON
    const responseData = await response.json();

    // Logging the response data
    console.log(responseData);
  } catch (error) {
    console.error('Error:', error);
  }
}

// Call the function to send the GraphQL request
sendGraphQLRequest();