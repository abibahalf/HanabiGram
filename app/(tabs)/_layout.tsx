import {Feather} from '@expo/vector-icons';
import { Dimensions, } from 'react-native';
import {Tabs} from 'expo-router';
import { colors } from '../../utils/colors';
import React from 'react';
import {View, Text} from 'react-native';

const TabsLayout = () => {
    const {width, height} = Dimensions.get('window');

const buttonSize = width * 0.25; // Divide the width by the number of buttons (4 in this case)

  return (
    <Tabs 
        screenOptions={{
            tabBarActiveTintColor: colors.active, 
            tabBarInactiveTintColor: colors.inactive, 
            headerShown: false,
            tabBarStyle: {
                backgroundColor: colors.background,
                paddingTop: height * 0.02, // Adjust the padding as needed
                marginHorizontal: width * 0.05, // Adjust the horizontal margin as needed
                borderRadius: 24, // Adjust the border radius as needed
                bottom: height * 0.04, // Adjust the bottom position as needed
            },
        }}
    >
        <Tabs.Screen
            name="index"
            options={{
                title: '',
                tabBarIcon: ({color, size}) => (
                    <Feather name="home" size={size} color={color} /> 
                      
                ),
                tabBarItemStyle: {
                    width: buttonSize,
                },
            }}
        />
        <Tabs.Screen
            name="search"
            options={{
                title: '',
                tabBarIcon: ({color, size}) => (
                    <Feather name="search" size={size} color={color} /> 
                      
                ),
                tabBarItemStyle: {
                    width: buttonSize,
                },
            }}
        />
        <Tabs.Screen
            name="create"
            options={{
                title: '',
                tabBarIcon: ({focused}) => (
                    <View style={{
                        width: width * 0.17,
                        height: width * 0.17,
                        borderRadius: buttonSize / 2,
                        backgroundColor: colors.active, 
                        alignItems: 'center', 
                        justifyContent: 'center'
                        }}>
                        <Feather name="plus" size={30} color="black" /> 
                    </View>
                ),
                
            }}
        />
        <Tabs.Screen
            name="update"
            options={{
                title: '',
                tabBarIcon: ({color, size}) => (
                    <Feather name="settings" size={size} color={color} /> 
                      
                ),
                tabBarItemStyle: {
                    width: buttonSize,
                },
            }}
        />
        <Tabs.Screen
            name="profile"
            options={{
                title: '',
                tabBarIcon: ({color, size}) => (
                    <Feather name="user" size={size} color={color} /> 
                      
                ),
                tabBarItemStyle: {
                    width: buttonSize,
                },
            }}
        />

    </Tabs>
  );
};

export default TabsLayout;