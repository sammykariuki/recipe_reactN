import { NavigatorScreenParams } from "@react-navigation/native";
export type RootDrawerParamList = {
  Categories: undefined;
  Favorites: undefined;
};

export type RootStackParamList = {
  Drawer: NavigatorScreenParams<RootDrawerParamList>;
  MealsOverview: { categoryId: string };
  MealsDetails: { mealId: string };
};
