"use client";

import { useState } from "react";

import { Button } from "@/components/ui/button";

import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

import { useFavorite } from "@/context/FavoriteContext";

export default function UserCard({ user }) {
  const { addFavorite, removeFavorite, isFavorite } = useFavorite();

  const [showProfile, setShowProfile] = useState(false);

  const favorite = isFavorite(user.id);

  const initials = user.name
    .split(" ")
    .map((part) => part[0])
    .slice(0, 2)
    .join("")
    .toUpperCase();

  const handleFavorite = () => {
    if (favorite) {
      removeFavorite(user.id);
    } else {
      addFavorite(user);
    }
  };

  return (
    <>
      <Card className="group border border-white/10 bg-foreground/[0.03] transition-all hover:-translate-y-1 hover:border-foreground/20 hover:shadow-xl hover:shadow-black/20">
        <CardHeader>
          <div className="flex items-center gap-3">
            <div className="flex size-10 shrink-0 items-center justify-center rounded-full bg-gradient-to-br from-primary/40 to-primary/10 text-sm font-semibold">
              {initials}
            </div>

            <CardTitle>{user.name}</CardTitle>
          </div>
        </CardHeader>

        <CardContent>
          <p className="text-sm text-muted-foreground">
            {user.email}
          </p>

          <p className="mt-1 text-sm text-muted-foreground">
            {user.company.name}
          </p>

          <Button
            onClick={() => setShowProfile(true)}
            className="mt-4 w-full rounded-full"
          >
            View Profile
          </Button>

          <Button
            onClick={handleFavorite}
            variant={favorite ? "default" : "outline"}
            className="mt-2 w-full rounded-full"
          >
            {favorite ? "♥ Remove Favorite" : "♡ Add Favorite"}
          </Button>
        </CardContent>
      </Card>

      {showProfile && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 p-4">
          <div className="w-full max-w-md rounded-2xl border border-white/10 bg-background p-6 shadow-2xl">
            <div className="text-center">
              <div className="mx-auto flex size-16 items-center justify-center rounded-full bg-gradient-to-br from-primary/40 to-primary/10 text-lg font-semibold">
                {initials}
              </div>

              <h2 className="mt-4 text-xl font-semibold">
                {user.name}
              </h2>

              <div className="mt-4 rounded-xl border border-white/10 bg-foreground/[0.03] p-4 text-left">
                <p className="text-sm text-muted-foreground">
                  Email
                </p>

                <p className="mt-1 text-sm font-medium">
                  {user.email}
                </p>

                <p className="mt-4 text-sm text-muted-foreground">
                  Company
                </p>

                <p className="mt-1 text-sm font-medium">
                  {user.company.name}
                </p>
              </div>

              <Button
                onClick={() => setShowProfile(false)}
                className="mt-5 w-full rounded-full"
              >
                Close
              </Button>
            </div>
          </div>
        </div>
      )}
    </>
  );
}