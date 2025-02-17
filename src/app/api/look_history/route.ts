import { NextRequest } from "next/server";

export async function POST(req: NextRequest){
  try {
    const { item_code } = req.body;
    const sessionId = req.cookies.get("session_id");
    

  } catch (error) {
    
  }
}