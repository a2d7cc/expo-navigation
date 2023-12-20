import { StyleSheet, Text, View } from "react-native";

function CategoryGridTitle({ title, color }) {
  return (
    <View style={styles.category}>
      <Text>{title}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  category: {
    flex: 1,
    height: 150,
  },
});

export default CategoryGridTitle;
