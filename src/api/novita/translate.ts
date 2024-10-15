"use server";

import { chatCompletion, ChatCompletionMessage } from "./api";

const politeSystemPrompt = `
As a Japanese language expert, convert the input Japanese text into polite language (丁寧語, teineigo) following these guidelines:

1. Use the polite sentence ending です (desu) and the polite verb ending ます (masu).
2. Add polite prefixes お (o) and ご (go) where appropriate.
3. Maintain the original meaning and context.
4. Prioritize natural, fluent Japanese over rigid adherence to polite forms.
5. Adjust sentence structure and phrasing as necessary for politeness.
6. Output only the converted polite Japanese text.
7. Add appropriate punctuation.

Examples:
Input: "見る"
Output: "見ます。"

Input: "知りたい"
Output: "知りたいです。"

Input: "明日会社に行く"
Output: "明日会社に行きます。"

Input: "これは本だ"
Output: "これは本です。"

Input: "電話する"
Output: "お電話します。"

Note: Some inputs may not require changes if already polite.
Input: "こんにちは"
Output: "こんにちは。"

Convert the given text to polite Japanese, considering various expressions and contexts.`;

const respectfulSystemPrompt = `
As a Japanese language expert, convert the input Japanese text into respectful language (尊敬語, sonkeigo) following these guidelines:

1. Use the respectful sentence ending です (desu) and the respectful verb ending ます (masu).
2. Add respectful prefixes お (o) and ご (go) where appropriate.
3. Maintain the original meaning and context.
4. Prioritize natural, fluent Japanese over rigid adherence to respectful forms.
5. Adjust sentence structure and phrasing as necessary for respectfulness.
6. Output only the converted respectful Japanese text.`;

const humbleSystemPrompt = `
As a Japanese language expert, convert the input Japanese text into humble language (丁寧語, teineigo) following these guidelines:

1. Use the humble sentence ending です (desu) and the humble verb ending ます (masu).
2. Add humble prefixes お (o) and ご (go) where appropriate.
3. Maintain the original meaning and context.
4. Prioritize natural, fluent Japanese over rigid adherence to humble forms.
5. Adjust sentence structure and phrasing as necessary for humility.
6. Output only the converted humble Japanese text.`;

export async function translate(
  prompt: string,
  systemPrompt: string
): Promise<string> {
  const messages: ChatCompletionMessage[] = [
    { role: "system", content: systemPrompt },
    { role: "user", content: prompt },
  ];

  try {
    const response = await chatCompletion({
      model: "meta-llama/llama-3.1-405b-instruct",
      messages,
      maxTokens: 1000,
    });

    if (response.choices && response.choices.length > 0) {
      const translatedPrompt = response.choices[0].message.content;
      return translatedPrompt;
    } else {
      throw new Error("No translation received from the API");
    }
  } catch (error) {
    console.error("Error translating prompt:", error);
    return prompt;
  }
}

export async function translateToPolite(text: string): Promise<string> {
  try {
    const politeText = await translate(text, politeSystemPrompt);
    return politeText;
  } catch (error) {
    console.error("Error in translateToPolite:", error);
    return text; // Return original text if translation fails
  }
}

export async function translateToRespectful(text: string): Promise<string> {
  try {
    const respectfulText = await translate(text, respectfulSystemPrompt);
    return respectfulText;
  } catch (error) {
    console.error("Error in translateToRespectful:", error);
    return text; // Return original text if translation fails
  }
}

export async function translateToHumble(text: string): Promise<string> {
  try {
    const humbleText = await translate(text, humbleSystemPrompt);
    return humbleText;
  } catch (error) {
    console.error("Error in translateToHumble:", error);
    return text; // Return original text if translation fails
  }
}

function generateJapaneseHonorificPrompt(scenario: string): string {
  return `As a Japanese language expert, convert the given text into appropriate speech based on this scenario:

"${scenario}"

Guidelines:
1. Analyze the scenario to determine the appropriate level of formality and relationships between speakers.
2. Apply the correct honorific language:
   - 尊敬語 (sonkeigo) for showing respect to the subject of the sentence
   - 謙譲語 (kenjōgo) for humbling oneself or one's actions
   - 丁寧語 (teineigo) for general politeness
3. Consider the context and nuances of the situation.
4. Use casual speech for informal situations (e.g., conversations between friends or family members).
5. Infer the subject of the sentence when it's omitted, as is common in Japanese.
   Example: "ください" implies the speaker is the subject and is addressing another person.
6. Do not delete any subjects and objects.

Important:
- Prioritize natural and fluent Japanese over rigid adherence to honorific rules.
- If multiple options exist, choose the most suitable form for the given scenario.
- Provide only the converted text without any explanations or notes.`;
}

export async function translateToHonorific(
  text: string,
  scenario: string
): Promise<string> {
  const prompt = generateJapaneseHonorificPrompt(scenario);
  try {
    const honorificText = await translate(text, prompt);
    return honorificText;
  } catch (error) {
    console.error("Error in translateToHonorific:", error);
    return text; // Return original text if translation fails
  }
}
