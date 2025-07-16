import { createContext, PropsWithChildren, useState } from "react";

type FavoritesContextType = {
  ids: string[];
  addFavorite: (id: string) => void;
  removeFavorite: (id: string) => void;
};

export const FavoritesContext = createContext<FavoritesContextType>({
  ids: [],
  addFavorite: () => {},
  removeFavorite: () => {},
});

type Props = PropsWithChildren<{}>;

function FavoritesContextProvider({ children }: Props) {
  const [favoriteMealIds, setFavoriteMealIds] = useState<string[]>([]);

  function addFavorite(id: string) {
    setFavoriteMealIds((f) => [...f, id]);
  }

  function removeFavorite(id: string) {
    setFavoriteMealIds((f) => f.filter((mealId) => mealId !== id));
  }

  const value: FavoritesContextType = {
    ids: favoriteMealIds,
    addFavorite,
    removeFavorite,
  };

  return (
    <FavoritesContext.Provider value={value}>
      {children}
    </FavoritesContext.Provider>
  );
}
export default FavoritesContextProvider;
