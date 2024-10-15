import { NextResponse } from "next/server";

export const POST = async (req, res) => {
  const bd = await req.json();
  const { fileContent, fileName } = bd;
  const GITHUB_TOKEN = "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";
  try {
    const response = await fetch({
      method: "put",
      url: `https://api.github.com/repos/dannymhmdi/beme-images/contents/${fileName}`,
      headers: {
        Authorization: `token ${GITHUB_TOKEN}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        message: `Upload ${fileName}`,
        content: fileContent,
      }),
    });
    const data = await response.json();
    return NextResponse.json({ data, status: true, message: "فایل آپلود شد" });
  } catch (error) {
    console.log("uplaod", error);
    return NextResponse.json({ status: false, message: error });
  }
};
