import { StyleSheet } from "react-native";

import { MEALS, CATEGORIES } from "@/data/dummy-data";
import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { RootStackParamList } from "@/types/navigation";
import { useEffect } from "react";
import MealsList from "@/components/MealsList/MealsList";

type Props = NativeStackScreenProps<RootStackParamList, "MealsOverview">;

export default function MealsOverviewScreen({ route, navigation }: Props) {
  const { categoryId } = route.params;

  const displayedMeals = MEALS.filter((mealItem) => {
    return mealItem.categoryIds.indexOf(categoryId) >= 0;
  });

  useEffect(() => {
    const category = CATEGORIES.find((cat) => cat.id === categoryId);
    if (category) {
      navigation.setOptions({ title: category.title });
    }
  }, [categoryId, navigation]);
  return <MealsList items={displayedMeals} />;
}
const styles = StyleSheet.create({});
