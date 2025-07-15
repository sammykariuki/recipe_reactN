import Meal from "@/models/meal";
import { StyleSheet, Text, TextStyle, View } from "react-native";

type Props = {
  Meal?: Meal;
  textStyle?: TextStyle;
};

export default function MealDetails({ Meal, textStyle }: Props) {
  return (
    <View style={styles.details}>
      <Text style={[styles.detailItem, textStyle]}>{Meal?.duration}m</Text>
      <Text style={[styles.detailItem, textStyle]}>
        {Meal?.complexity.toUpperCase()}
      </Text>
      <Text style={[styles.detailItem, textStyle]}>
        {Meal?.affordability.toUpperCase()}
      </Text>
    </View>
  );
}
const styles = StyleSheet.create({
  details: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    padding: 8,
  },
  detailItem: {
    marginHorizontal: 4,
    fontSize: 12,
  },
});
