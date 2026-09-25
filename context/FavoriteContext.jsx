"use client";

import { createContext, useContext, useState } from "react";

const FavoriteContext = createContext();

export function FavoriteProvider({ children }) {
  const [favorites, setFavorites] = useState([]);

  const addFavorite = (user) => {
    setFavorites((prev) => {
      if (prev.some((item) => item.id === user.id)) {
        return prev;
      }

      return [...prev, user];
    });
  };

  const removeFavorite = (userId) => {
    setFavorites((prev) =>
      prev.filter((user) => user.id !== userId)
    );
  };

  const isFavorite = (userId) => {
    return favorites.some((user) => user.id === userId);
  };

  return (
    <FavoriteContext.Provider
      value={{
        favorites,
        addFavorite,
        removeFavorite,
        isFavorite,
      }}
    >
      {children}
    </FavoriteContext.Provider>
  );
}

export function useFavorite() {
  return useContext(FavoriteContext);
}