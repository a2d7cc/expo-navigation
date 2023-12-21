import { Image, ScrollView, StyleSheet, Text, View } from "react-native";
import { Meals } from "../data/dummy-data";

function MealDetailScreen({ route }) {
  const mealId = route.params.mealId;
  console.log("mealId", mealId);

  const mealItem = Meals.find((meal) => meal.id === mealId);

  return (
    <ScrollView style={styles.rootContainer}>
      <Image source={{ uri: mealItem.imageUrl }} style={styles.image} />
      <Text style={styles.title}>{mealItem.title}</Text>
      {/* Make separate component for details info */}
      <View style={styles.details}>
        <Text style={styles.detailItem}>{mealItem.duration}m</Text>
        <Text style={styles.detailItem}>
          {mealItem.complexity.toUpperCase()}
        </Text>
        <Text style={styles.detailItem}>
          {mealItem.affordability.toUpperCase()}
        </Text>
      </View>

      {/* Make subtitle component for a list */}
      <View style={styles.listOuter}>
        <View style={styles.listInner}>
          {/* Subtitle */}
          <View style={styles.subtitleContainer}>
            <Text style={styles.subtitle}>Ingredients</Text>
          </View>
          {/* List */}
          {mealItem.ingredients.map((ingredient) => (
            <View style={styles.listItem}>
              <Text style={styles.itemText}>{ingredient}</Text>
            </View>
          ))}
        </View>
      </View>
      {/* Make a list component to map through the data */}
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  rootContainer: {
    flex: 1,
    marginBottom: 32,
  },
  image: {
    width: "100%",
    height: 350,
  },
  title: {
    textAlign: "center",
    fontSize: 26,
    color: "white",
    margin: 12,
  },
  details: {
    padding: 8,
    justifyContent: "center",
    alignContent: "center",
    flexDirection: "row",
  },
  detailItem: {
    marginHorizontal: 8,
    fontWeight: "bold",
    color: "white",
  },
  subtitleContainer: {
    padding: 6,
    marginVertical: 4,
    borderBottomColor: "#e2b497",
    borderBottomWidth: 2,
  },

  subtitle: {
    color: "#e2b497",
    fontSize: 18,
    fontWeight: "bold",
    textAlign: "center",
  },
  listOuter: {
    alignItems: "center",
  },
  listInner: {
    width: "80%",
  },
  listItem: {
    backgroundColor: "#e2b497",
    borderRadius: 6,
    marginVertical: 4,
    padding: 4,
  },
  itemText: {
    textAlign: "center",
    fontSize: 16,
    color: "white",
  },
});

export default MealDetailScreen;
