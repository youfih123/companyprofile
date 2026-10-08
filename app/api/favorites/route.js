import { getAllFavorites, addFavorite } from "@/lib/services/favoriteService";

export async function GET() {
  try {
    return Response.json(await getAllFavorites());
  } catch (error) {
    return Response.json(
      { error: error.message },
      { status: error.status || 500 }
    );
  }
}

export async function POST(request) {
  try {
    let body;
    try {
      body = await request.json();
    } catch {
      return Response.json(
        { error: "Body request kosong atau bukan JSON yang valid" },
        { status: 400 }
      );
    }

    const result = await addFavorite(body);

    if (!result.success) {
      return Response.json({ error: result.error }, { status: result.status });
    }

    return Response.json(result.data, { status: result.status });
  } catch (error) {
    return Response.json(
      { error: error.message },
      { status: error.status || 500 }
    );
  }
}