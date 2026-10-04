import { NextResponse } from "next/server";

export async function GET() {
  const profile = {
    name: "Youfih Herlina",
    role: "peserta bootcamp",
    favoriteTech: ["HTML", "CSS", "JavaScript", "PHP", "CorelDRAW", "Canva", "Figma"]
  };

  return NextResponse.json(profile);
}