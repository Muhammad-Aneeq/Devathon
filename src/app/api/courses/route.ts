import { NextResponse, NextRequest } from "next/server";
import connection from "../../../db/connection";

connection();
// export async function GET(request: NextRequest) {
//   return NextResponse.json({ msg: "working" });
// }

export async function POST(request: NextRequest) {
  const body: any = JSON.parse(request.body as any);

  const res = await fetch("http://localhost:3000/api/courses", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(body),
  });

  const data = await res.json();

  return Response.json(data);
}
