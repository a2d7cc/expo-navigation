/* 
Export categories
Create FlatLits
Render function
Extract function
*/

import { FlatList } from "react-native";
import { Categories } from "../data/dummy-data";
import CategoryGridTitle from "../components/CategoryGridTitle";

function CategoriesScreen({ navigation }) {
  function renderCategoryItem({ item }) {
    function onNavigateHandler() {
      navigation.navigate("MealsOverviewScreen", {
        categoryId: item.id,
      });
    }

    return (
      <CategoryGridTitle
        title={item.title}
        color={item.color}
        onPress={onNavigateHandler}
      />
    );
  }

  return (
    <FlatList
      data={Categories}
      keyExtractor={(category) => category.id}
      renderItem={renderCategoryItem}
      numColumns={2}
    />
  );
}

export default CategoriesScreen;
