export function validateFavoriteInput(body) {
  if (!body || typeof body !== "object" || Object.keys(body).length === 0) {
    return { valid: false, error: "Body tidak boleh kosong" };
  }

  if (
    body.user_id === undefined ||
    body.user_id === null ||
    Number.isNaN(Number(body.user_id))
  ) {
    return { valid: false, error: "user_id wajib berupa angka" };
  }

  if (body.note !== undefined && typeof body.note !== "string") {
    return { valid: false, error: "note harus berupa teks" };
  }

  return { valid: true };
}