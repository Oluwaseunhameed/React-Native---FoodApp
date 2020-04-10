import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createDrawerNavigator } from "@react-navigation/drawer";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { createStackNavigator } from "@react-navigation/stack";
import { Ionicons } from "@expo/vector-icons";

import CategoriesScreen from "../screens/CategoriesScreen";
import CategoryMealsScreen from "../screens/CategoryMealsScreen";
import MealDetailScreen from "../screens/MealDetailScreen";
import FavoritesScreen from "../screens/FavoritesScreen";
import FiltersScreen from "../screens/FiltersScreen";

import { Colors } from "../constants";

const Drawer = createDrawerNavigator();
const MealTab = createBottomTabNavigator();
const MealStack = createStackNavigator();
const FavStack = createStackNavigator();
const FiltersStack = createStackNavigator();

const defaultHeaderSettings = {
  headerTintColor: Colors.primaryColor,
  headerTitleAlign: "center",
  headerTitleStyle: { fontFamily: "open-sans-bold" },
};

const FiltersNav = () => (
  <FiltersStack.Navigator screenOptions={defaultHeaderSettings}>
    <FiltersStack.Screen name="Filters" component={FiltersScreen} />
  </FiltersStack.Navigator>
);

const FavNavigation = () => (
  <FavStack.Navigator screenOptions={defaultHeaderSettings}>
    <FavStack.Screen name="Favorites" component={FavoritesScreen} />
    <FavStack.Screen name="Meal Detail" component={MealDetailScreen} />
  </FavStack.Navigator>
);

const MealStackScreen = () => (
  <MealStack.Navigator screenOptions={defaultHeaderSettings}>
    <MealStack.Screen
      name="Meal Categories"
      component={CategoriesScreen}
      options={{
        title: "Meal Categories",
      }}
    />
    <MealStack.Screen name="Category Meal" component={CategoryMealsScreen} />
    <MealStack.Screen name="Meal Detail" component={MealDetailScreen} />
  </MealStack.Navigator>
);

const MealsTab = () => (
  <MealTab.Navigator
    tabBarOptions={{
      activeTintColor: Colors.accentColor,
      labelStyle: { fontFamily: "open-sans-bold" },
    }}
  >
    <MealTab.Screen
      name="Meals"
      component={MealStackScreen}
      options={{
        tabBarIcon: ({ color }) => (
          <Ionicons name="ios-restaurant" color={color} size={25} />
        ),
      }}
    />
    <MealTab.Screen
      name="Favorites"
      component={FavNavigation}
      options={{
        tabBarIcon: ({ color }) => (
          <Ionicons name="ios-star" color={color} size={25} />
        ),
      }}
    />
  </MealTab.Navigator>
);

const MealsNavigator = () => {
  return (
    <NavigationContainer>
      <Drawer.Navigator
        drawerContentOptions={{
          activeTintColor: Colors.accentColor,
          labelStyle: {
            fontFamily: "open-sans-bold",
          },
        }}
      >
        <Drawer.Screen name="Meals" component={MealsTab} />
        <Drawer.Screen name="Filters" component={FiltersNav} />
      </Drawer.Navigator>
    </NavigationContainer>
  );
};

export default MealsNavigator;
