/* 
Export categories
Create FlatLits
Render function
Extract function
*/

import { FlatList } from "react-native";
import { Categories } from "../data/dummy-data";
import CategoryGridTitle from "../components/CategoryGridTitle";

function renderCategoryItem({ item }) {
  return <CategoryGridTitle title={item.title} color={item.color} />;
}

export function CategoriesScreen() {
  return (
    <FlatList
      data={Categories}
      keyExtractor={(category) => category.id}
      renderItem={renderCategoryItem}
    />
  );
}
