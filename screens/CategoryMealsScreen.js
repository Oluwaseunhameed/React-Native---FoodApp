import React from "react";
import { View, Text, StyleSheet } from "react-native";
import { useSelector } from "react-redux";
import { CATEGORIES } from "../data/dummy-data";
import MealList from "../components/MealList";

const CategoryMealScreen = (props) => {
  const { navigation, route } = props;
  const catId = route.params.categoryId;
  const selectedTitle = CATEGORIES.find((item) => item.id === catId);
  const availableMeals = useSelector((state) => state.meals.filteredMeals);
  const displayedMeals = availableMeals.filter(
    (meal) => meal.categoryIds.indexOf(catId) >= 0
  );

  if (displayedMeals.length === 0) {
    return (
      <View style={styles.content}>
        <Text style={styles.text}>
          No meals found, maybe check your filters?
        </Text>
      </View>
    );
  }
  React.useLayoutEffect(() => {
    navigation.setOptions({
      title: selectedTitle.title,
    });
  }, [navigation]);

  return <MealList listData={displayedMeals} navigation={navigation} />;
};

const styles = StyleSheet.create({
  content: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  text: {
    fontFamily: "open-sans",
  },
});

export default CategoryMealScreen;
