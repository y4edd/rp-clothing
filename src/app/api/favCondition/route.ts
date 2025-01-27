import { handleAxiosError } from "@/lib/axios/axios";
import type { NextRequest, NextResponse } from "next/server";

export const GET = (req: NextRequest, res: NextResponse) => {
  try {
    const request = req.json();
    console.log(request);
  } catch (error) {
    return handleAxiosError(error);
  }
};
