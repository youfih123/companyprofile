"use client";

import { createContext, useContext, useEffect, useState } from "react";

const FavoriteContext = createContext(undefined);

export function FavoriteProvider({ children }) {
  const [favorites, setFavorites] = useState([]);

  // GET (dipakai saat awal dan setelah tambah data)
  async function fetchFavorites() {
    try {
      const res = await fetch("/api/favorites");
      const data = await res.json();
      if (!res.ok) throw new Error(data.error || "Gagal memuat favorites");
      setFavorites(Array.isArray(data) ? data : []);
    } catch (error) {
      console.error(error.message);
    }
  }

  useEffect(() => {
    fetchFavorites();
  }, []);

  // POST
  async function addFavorite(user) {
    try {
      const res = await fetch("/api/favorites", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ user_id: user.user_id ?? user.id }),
      });
      const data = await res.json();
      if (!res.ok) throw new Error(data.error || "Gagal menambah favorite");

      // ambil ulang supaya data app_users ikut terbawa
      await fetchFavorites();
    } catch (error) {
      console.error(error.message);
    }
  }

  // PATCH: ubah note
  async function updateNote(userId, note) {
    try {
      const res = await fetch(`/api/favorites/${userId}`, {
        method: "PATCH",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ note }),
      });
      const updated = await res.json();
      if (!res.ok) throw new Error(updated.error || "Gagal mengubah note");

      setFavorites((prev) =>
        prev.map((f) => (f.user_id === userId ? { ...f, ...updated } : f))
      );
    } catch (error) {
      console.error(error.message);
    }
  }

  // DELETE
  async function removeFavorite(userId) {
    try {
      const res = await fetch(`/api/favorites/${userId}`, { method: "DELETE" });
      if (!res.ok) {
        const data = await res.json();
        throw new Error(data.error || "Gagal menghapus favorite");
      }

      setFavorites((prev) => prev.filter((f) => f.user_id !== userId));
    } catch (error) {
      console.error(error.message);
    }
  }

  function isFavorite(userId) {
    return favorites.some((f) => f.user_id === userId);
  }

  const value = { favorites, addFavorite, updateNote, removeFavorite, isFavorite };

  return (
    <FavoriteContext.Provider value={value}>
      {children}
    </FavoriteContext.Provider>
  );
}

export function useFavorite() {
  const context = useContext(FavoriteContext);
  if (context === undefined) {
    throw new Error("useFavorite harus dipakai di dalam <FavoriteProvider>");
  }
  return context;
}