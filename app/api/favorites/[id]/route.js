
import { removeFavorite, updateFavoriteNote } from "@/lib/services/favoriteService";

// PATCH: ubah note pada favorite
export async function PATCH(request, { params }) {
  const { id } = await params;

  let body;
  try {
    body = await request.json();
  } catch {
    return Response.json(
      { error: "Body request kosong atau bukan JSON yang valid" },
      { status: 400 }
    );
  }

  if (typeof body?.note !== "string") {
    return Response.json(
      { error: "Field 'note' wajib diisi dan berupa teks" },
      { status: 400 }
    );
  }

  const result = await updateFavoriteNote(id, body.note);

  if (!result.success) {
    return Response.json({ error: result.error }, { status: result.status });
  }

  return Response.json(result.data);
}

export async function DELETE(request, { params }) {
  const { id } = await params;
  const result = await removeFavorite(id);

  if (!result.success) {
    return Response.json({ error: result.error }, { status: result.status });
  }

  return Response.json({ message: result.message });
}