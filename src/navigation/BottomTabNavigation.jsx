import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Home from '../screens/home/Home';
import Dummy from '../screens/home/Dummy';
import AddMoment from '../screens/home/AddMoment';
import { Colors } from '../constants/Colors';
import { PlusCircle } from 'lucide-react-native';

const Tab = createBottomTabNavigator();

export default function BottomTabNavigation() {
  return (
    <Tab.Navigator
      screenOptions={{ headerShown: false }}
      tabBar={props => <CustomTabBar {...props} />}
    >
      <Tab.Screen name="Oka" component={Home} />
      <Tab.Screen name="Add" component={AddMoment} />
      <Tab.Screen name="Bond" component={Dummy} />
    </Tab.Navigator>
  );
}

function CustomTabBar({ state, descriptors, navigation }) {
  return (
    <View style={styles.tabBarContainer}>
      {state.routes.map((route, index) => {
        const isFocused = state.index === index;
        const label =
          route.name === 'Oka'
            ? 'Oka (You)'
            : route.name === 'Bond'
            ? "Oka's"
            : 'Bond';

        const onPress = () => {
          const event = navigation.emit({
            type: 'tabPress',
            target: route.key,
          });

          if (!isFocused && !event.defaultPrevented) {
            navigation.navigate(route.name);
          }
        };

        if (route.name === 'Add') {
          return (
            <TouchableOpacity
              key={route.key}
              onPress={onPress}
              style={styles.addTabButton}
            >
              <View
                style={{ backgroundColor: Colors.primary, borderRadius: 100 }}
              >
                <PlusCircle size={48} color={Colors.primaryDark} />
              </View>
              <Text
                style={[styles.tabLabel,{marginTop:20}, isFocused && styles.tabLabelFocused]}
              >
                Bond
              </Text>
            </TouchableOpacity>
          );
        }

        return (
          <TouchableOpacity
            key={route.key}
            onPress={onPress}
            style={styles.tabItem}
          >
            <Text
              style={[styles.tabLabel, isFocused && styles.tabLabelFocused]}
            >
              {label}
            </Text>
          </TouchableOpacity>
        );
      })}
    </View>
  );
}

const styles = StyleSheet.create({
  tabBarContainer: {
    flexDirection: 'row',
    height: 55,
    backgroundColor: Colors.primary,
    borderTopWidth: 0.2,
    borderColor: '#ccc',
  },
  tabItem: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  tabLabel: {
    color: Colors.textDark,
    fontSize: 14,
  },
  tabLabelFocused: {
    fontWeight: 'bold',
  },
  addTabButton: {
    flex: 1,
    justifyContent: 'flex-start',
    alignItems: 'center',
    marginTop: -50,
  },
});
