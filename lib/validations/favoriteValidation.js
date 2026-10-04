export function validateFavoriteInput(body) {
  if (!body || Object.keys(body).length === 0) {
    return { valid: false, error: "Body tidak boleh kosong" };
  }

  if (!body.id || !body.name) {
    return { valid: false, error: "id dan name wajib diisi" };
  }

  return { valid: true };
}