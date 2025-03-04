// import { NextResponse } from "next/server";

// const API_URL = "https://679348b45eae7e5c4d8e2507.mockapi.io/user"

// // GET
// export async function GET() {
//   try {
//     const data = await fetch(`${API_URL}`);
//     if (!response.ok) throw Error("Failed to fetch data");
//     return NextResponse.json(data);
//   } catch (error) {
//     return NextResponse.json({ error: error.message }, { status: 500 });
//   }
// }

// // POST
// export async function POST(req) {
//   try {
//     const body = await req.json();
//     const response = await fetch(`${API_URL}`, {
//       method: "POST",
//       body: body,
//     });
//     if (!response.ok) throw Error("Failed to create data");
//     return NextResponse.json(data, { status: 201 });
//   } catch (error) {
//     return NextResponse.json({ error: error.message }, { status: 500 });
//   }
// }

// // PATCH
// export async function PATCH(req) {
//   try {
//     const { id, ...updateData } = await req.json();
//     const response = await fetchData(`/${id}`, "PATCH", updateData);
//     return NextResponse.json(data, { status: 200 });
//   } catch (error) {
//     return NextResponse.json({ error: error.message }, { status: 500 });
//   }
// }

// // PUT
// export async function PUT(req) {
//   try {
//     const { id, ...updateData } = await req.json();
//     const response = await fetch(`${API_URL}/${id}`, {
//       method: "PUT",
//       body: updateData,
//     });
//     if (!response.ok) throw Error("Failed to update data");
//     return NextResponse.json(data, { status: 200 });
//   } catch (error) {
//     return NextResponse.json({ error: error.message }, { status: 500 });
//   }
// }

// // DELETE
// export async function DELETE(req) {
//   try {
//     const { id } = await req.json();
//     const response = await fetch(`${API_URL}/${id}`, {
//       method: "DELETE",
//     });
//     if (!response.ok) throw Error("Failed to delete data");
//     return NextResponse.json(data, { status: 200 });
//   } catch (error) {
//     return NextResponse.json({ error: error.message }, { status: 500 });
//   }
// }
