import { NextResponse } from "next/server";
import { fetchData } from "../lib/api";


// GET
export async function GET() {
  try {
    const data = await fetchData();
    return NextResponse.json(data);

  } catch (error) {
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}


// POST
export async function POST(req) {
  try {
    const body = await req.json();
    const data = await fetchData("", "POST", body);
    return NextResponse.json(data, { status: 201 });

  } catch (error) {
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}


// PATCH
export async function PATCH(req) {
  try {
    const { id, ...updateData } = await req.json();
    const data = await fetchData(`/${id}`, "PATCH", updateData);
    return NextResponse.json(data, { status: 200 });

  } catch (error) {
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}


// PUT
export async function PUT(req) {
  try {
    const { id, ...updateData } = await req.json();
    const data = await fetchData(`/${id}`, "PUT", updateData);
    return NextResponse.json(data, { status: 200 });
    
  } catch (error) {
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}


// DELETE
export async function DELETE(req) {
  try {
    const { id } = await req.json();
    const data = await fetchData(`/${id}`, "DELETE");
    return NextResponse.json(data, { status: 200 });

  } catch (error) {
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}
