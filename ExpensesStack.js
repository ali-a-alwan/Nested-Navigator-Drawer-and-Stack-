// ExpensesStack.js
import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

const Stack = createStackNavigator();

const ExpensesStack = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Expenses" component={ExpensesScreen} />
      <Stack.Screen name="ExpenseDetails" component={ExpenseDetailsScreen} />
      <Stack.Screen name="AddExpense" component={AddExpenseScreen} />
    </Stack.Navigator>
  );
};

export default ExpensesStack;
