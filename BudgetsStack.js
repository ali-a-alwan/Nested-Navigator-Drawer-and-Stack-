// BudgetsStack.js
import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

const Stack = createStackNavigator();

const BudgetsStack = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Budgets" component={BudgetsScreen} />
      <Stack.Screen name="BudgetDetails" component={BudgetDetailsScreen} />
      <Stack.Screen name="EditBudget" component={EditBudgetScreen} />
    </Stack.Navigator>
  );
};

export default BudgetsStack;