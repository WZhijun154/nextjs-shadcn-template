"use server";
export interface ChatCompletionMessage {
  role: string;
  content: string;
}

interface ChatCompletionProps {
  model: string;
  messages: ChatCompletionMessage[];
  maxTokens: number;
}

interface ChatCompletionResponse {
  // Define the structure of the response based on the API documentation
  // This is a placeholder and should be updated with the actual response structure
  choices: {
    message: {
      role: string;
      content: string;
    };
  }[];
}

export async function chatCompletion({
  model,
  messages,
  maxTokens,
}: ChatCompletionProps): Promise<ChatCompletionResponse> {
  const url = "https://api.novita.ai/v3/openai/chat/completions";
  const headers = {
    "Content-Type": "application/json",
    Authorization: `Bearer ${process.env.NOVITA_TOKEN}`,
  };

  const body = JSON.stringify({
    model,
    messages,
    max_tokens: maxTokens,
  });

  try {
    const response = await fetch(url, {
      method: "POST",
      headers,
      body,
    });

    if (!response.ok) {
      throw new Error(`Error: ${response.statusText}`);
    }

    return await response.json();
  } catch (error) {
    console.error("Error in chat completion:", error);
    throw error;
  }
}
