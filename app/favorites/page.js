"use client";

import UserCard from "@/components/UserCard";
import { useFavorite } from "@/context/FavoriteContext";

export default function FavoritesPage() {
  const { favorites } = useFavorite();

  return (
    <section className="relative">
      <div className="bg-grid bg-radial-fade absolute inset-0 -z-10" />

      <div className="mx-auto max-w-6xl px-6 py-20">
        <div className="max-w-2xl">
          <p className="text-sm font-semibold text-primary">
            Favorites
          </p>

          <h1 className="mt-2 text-4xl font-bold tracking-tight md:text-5xl">
            Favorite Users
          </h1>

          <p className="mt-4 text-muted-foreground">
            Users yang kamu tambahkan ke daftar favorite.
          </p>
        </div>

        {favorites.length === 0 ? (
          <div className="mt-10 rounded-2xl border border-white/10 bg-foreground/[0.03] p-10 text-center">
            <p className="text-muted-foreground">
              Belum ada user yang ditambahkan ke Favorite.
            </p>

            <p className="mt-2 text-sm text-muted-foreground">
              Silakan tambahkan user dari halaman Users.
            </p>
          </div>
        ) : (
          <div className="mt-8 grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
            {favorites.map((user) => (
              <UserCard
                key={user.id}
                user={user}
              />
            ))}
          </div>
        )}
      </div>
    </section>
  );
}