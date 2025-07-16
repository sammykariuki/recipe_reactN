import Meal from "@/models/meal";
import { StyleSheet, View, FlatList, ListRenderItemInfo } from "react-native";
import MealItem from "./MealItem";
import { useNavigation } from "@react-navigation/native";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { RootStackParamList } from "@/types/navigation";

type Props = {
  items: Meal[];
};

export default function MealsList({ items }: Props) {
  const navigation =
    useNavigation<NativeStackNavigationProp<RootStackParamList>>();
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
        data={items}
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
