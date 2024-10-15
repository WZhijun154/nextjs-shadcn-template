// "use server";

// import { TranslationServiceClient } from "@google-cloud/translate";
// import { GoogleAuth } from "google-auth-library";

// const projectId =
//   process.env.GOOGLE_TRANSLATION_PROJECT_ID || "sonorous-summer-434507-k9";

// const credentials = JSON.parse(
//   process.env.GOOGLE_APPLICATION_CREDENTIALS_JSON || "{}"
// );
// const auth = new GoogleAuth({
//   credentials,
//   scopes: ["https://www.googleapis.com/auth/cloud-platform"],
// });

// const translationClient = new TranslationServiceClient({ auth });

// export async function translate2English(text: string) {
//   try {
//     const [translation] = await translationClient.translateText({
//       parent: `projects/${projectId}/locations/global`,
//       contents: [text],
//       mimeType: "text/plain",
//       sourceLanguageCode: "ja",
//       targetLanguageCode: "en",
//     });

//     return translation.translations?.[0]?.translatedText || null;
//   } catch (error) {
//     console.error("Error in translate2English:", error);
//     if (error instanceof Error) {
//       console.error("Error message:", error.message);
//       console.error("Error stack:", error.stack);
//     }
//     throw error; // Re-throw the error for the caller to handle
//   }
// }
