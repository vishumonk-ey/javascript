async function getData(input) {
  const APIKEY = "AIzaSyDtw-irYcc8Lk6r-zoEL5B4vQdJ6tkjXC8";
  const endpoint =
    "https://generativelanguage.googleapis.com/v1beta/models/gemini-1.5-flash:generateContent?key=AIzaSyDtw-irYcc8Lk6r-zoEL5B4vQdJ6tkjXC8";
  try {
    const dataToSend = {
      "contents": [
        {
          "parts": [{ "text": `tell me the stepwise recipe of ${input} ` }],
        },
      ],
    };
    const response = await fetch(endpoint, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(dataToSend),
    });
    console.error(response.status);
    const data = await response.json();
    console.log(data);
    console.log(data.candidates[0].content.parts[0].text);
    
  } catch (error) {
    console.error("error fetching data", error);
  }
}

getData("dal makhani in 30 minute");
