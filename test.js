
const query = `
  mutation name {
    updateUserAccount(params: {email: "charlie@gembot.ai", password: "password", userId: "28762966-4807-4bd1-9195-46bc58840315"}) 
  }
`;

const url = 'https://api.gembot.ai/graphql';

async function sendGraphQLRequest() {
  try {
    const response = await fetch(url, {
      method: 'POST',
      credentials: 'include',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ query })
    });

    const responseData = await response.json();
    console.log(responseData);
  } catch (error) {
    console.error('Error:', error);
  }
}

sendGraphQLRequest();
