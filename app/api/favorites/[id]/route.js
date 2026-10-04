import { favorites } from "@/lib/db";
import { removeFavorite } from "@/lib/services/favoriteService";

// PATCH: ubah note pada favorite (tidak diubah)
export async function PATCH(request, { params }) {
  const { id } = await params;
  const favorite = favorites.find((f) => String(f.id) === String(id));

  if (!favorite) {
    return Response.json({ error: "Data tidak ditemukan" }, { status: 404 });
  }

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

  favorite.note = body.note;
  return Response.json(favorite);
}

// DELETE: sekarang lewat Service
export async function DELETE(request, { params }) {
  const { id } = await params;
  const result = removeFavorite(id);

  if (!result.success) {
    return Response.json({ error: result.error }, { status: result.status });
  }

  return Response.json({ message: "Berhasil dihapus" });
}