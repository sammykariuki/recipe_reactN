import CategoryGridTile from "@/components/CategoryGridTile";
import { CATEGORIES } from "@/data/dummy-data";
import { FlatList } from "react-native";

import {
  CompositeNavigationProp,
  useNavigation,
} from "@react-navigation/native";
import { DrawerNavigationProp } from "@react-navigation/drawer";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { RootDrawerParamList, RootStackParamList } from "@/types/navigation";

type NavigationProps = CompositeNavigationProp<
  DrawerNavigationProp<RootDrawerParamList, "Categories">,
  NativeStackNavigationProp<RootStackParamList>
>;

export default function CategoriesScreen() {
  const navigation = useNavigation<NavigationProps>();
  function pressHandler(id: string) {
    navigation.navigate("MealsOverview", {
      categoryId: id,
    });
  }

  return (
    <FlatList
      data={CATEGORIES}
      keyExtractor={(item) => item.id}
      numColumns={2}
      renderItem={(itemData) => (
        <CategoryGridTile
          title={itemData.item.title}
          color={itemData.item.color}
          onPress={() => pressHandler(itemData.item.id)}
        />
      )}
    />
  );
}
