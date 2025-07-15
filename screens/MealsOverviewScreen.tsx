import { View, FlatList, StyleSheet, ListRenderItemInfo } from "react-native";

import { MEALS, CATEGORIES } from "@/data/dummy-data";
import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { RootStackParamList } from "@/types/navigation";
import MealItem from "@/components/MealItem";
import Meal from "@/models/meal";
import { useEffect } from "react";

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

  function renderMealItem(itemData: ListRenderItemInfo<Meal>) {
    function pressHandler(id: string) {
      navigation.navigate("MealsDetails", {
        mealId: id,
      });
    }
    return <MealItem Meal={itemData.item} onPress={pressHandler} />;
  }

  return (
    <View style={styles.container}>
      <FlatList
        data={displayedMeals}
        keyExtractor={(itemData) => itemData.id}
        renderItem={renderMealItem}
      />
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
  },
});
