import coffee from "@data/coffee.json";

export async function GET() {
  return Response.json(coffee);
}
