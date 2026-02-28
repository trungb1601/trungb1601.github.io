async function askAI(providerName, userMessage) {
  const response = await fetch("https://xai-grok-chathub.trungb1601.workers.dev/", {
    method: "POST",
    body: JSON.stringify({
      provider: providerName, // "grok", "gemini", or "openai"
      message: userMessage
    })
  });
  
  const result = await response.json();
  
  // Logic to pull the text out (each AI puts it in a different spot)
  if (providerName === "gemini") return result.candidates[0].content.parts[0].text;
  return result.choices[0].message.content; // Works for Grok and OpenAI
}v
