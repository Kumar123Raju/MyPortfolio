'use server';

/**
 * @fileOverview Adapts the 'About Me' section content based on user interaction.
 *
 * - adaptAboutMeContent - A function that dynamically adjusts the 'About Me' content based on user interaction.
 * - AdaptAboutMeContentInput - The input type for the adaptAboutMeContent function.
 * - AdaptAboutMeContentOutput - The return type for the adaptAboutMeContent function.
 */

import {ai} from '@/ai/genkit';
import {z} from 'genkit';

const AdaptAboutMeContentInputSchema = z.object({
  timeSpentOnPage: z
    .number()
    .describe('The time spent on the About Me page in seconds.'),
  navigationPattern: z
    .string()
    .describe(
      'A string describing the users navigation pattern on the website.'
    ),
  currentContent: z
    .string()
    .describe('The current content of the About Me section.'),
});
export type AdaptAboutMeContentInput = z.infer<typeof AdaptAboutMeContentInputSchema>;

const AdaptAboutMeContentOutputSchema = z.object({
  adaptedContent: z
    .string()
    .describe('The adapted content for the About Me section.'),
});
export type AdaptAboutMeContentOutput = z.infer<typeof AdaptAboutMeContentOutputSchema>;

export async function adaptAboutMeContent(
  input: AdaptAboutMeContentInput
): Promise<AdaptAboutMeContentOutput> {
  return adaptAboutMeContentFlow(input);
}

const prompt = ai.definePrompt({
  name: 'adaptAboutMeContentPrompt',
  input: {schema: AdaptAboutMeContentInputSchema},
  output: {schema: AdaptAboutMeContentOutputSchema},
  prompt: `You are an expert at creating personalized website content. Based on the user's interaction with the About Me section, you will adapt the content to be more relevant and engaging.

User Interaction Data:
- Time spent on the page: {{{timeSpentOnPage}}} seconds
- Navigation pattern: {{{navigationPattern}}}
- Current content: {{{currentContent}}}

Instructions:
1.  Analyze the user interaction data to understand the user's interests and needs.
2.  If the user has spent a significant amount of time on the page (e.g., more than 30 seconds), provide more in-depth information about your skills and experience. Highlight projects that align with their navigation pattern, and add a call to action to contact you. Use more informal, engaging tone.
3.  If the user has a navigation pattern indicating interest in back-end technologies, focus more on back-end skills. Similarly, if the pattern indicates more interest in front-end, focus on the front-end.
4.  Ensure that the adapted content is concise, easy to read, and relevant to the user's interests.
5.  The output should be engaging and encourage the user to learn more or contact you.
6.  Maintain a professional but personable tone.

Adapted Content:`, // Ensure the prompt ends with what you want the model to generate
});

const adaptAboutMeContentFlow = ai.defineFlow(
  {
    name: 'adaptAboutMeContentFlow',
    inputSchema: AdaptAboutMeContentInputSchema,
    outputSchema: AdaptAboutMeContentOutputSchema,
  },
  async input => {
    const {output} = await prompt(input);
    return output!;
  }
);
