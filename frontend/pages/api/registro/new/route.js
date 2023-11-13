import { connectToDatabase } from "@/utils/database";

export const POST = async (req, res) => {
  const { userId, prompt, tag } = await req.json();

  try {
    await connectToDatabase();
    const newPrompt = new Prompt({
      creator: userId,
      prompt,
      tag,
    });

    await newPrompt.save(); // Save the prompt to the database

    return new Response(JSON.stringify(newPrompt), { status: 201 });
  } catch (error) {
    return new Response(error, { status: 500 });
  }
};
