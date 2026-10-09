import {View, Text, TextInput, TouchableOpacity} from 'react-native';
import React from 'react';
import {SafeAreaView} from 'react-native-safe-area-context';
import { Link } from 'expo-router';

const RegisterScreen = () => {
    return (
        <SafeAreaView className="flex-1 justify-center px-8 bg-white">
              {/* Logo */}
              <View className="items-center">
                <Text className="text-4xl text-active font-semibold mb-4 text-center">
                  Register
                </Text>
                <Text className="text-small mb-4 text-center">
                  Join and start sharing your moments!
                </Text>
              </View>
              {/* Form */}
              <View className="mt-5">
                <TextInput
                  placeholder="Full Name"
                  className="bg-gray-100  px-4 rounded-xl mb-4 text-base "
                />
                <TextInput
                  placeholder="Username"
                  className="bg-gray-100  px-4 rounded-xl mb-4 text-base "
                />
                <TextInput
                  placeholder="Email"
                  className="bg-gray-100  px-4 rounded-xl mb-4 text-base "
                />
                <TextInput
                  placeholder="Password"
                  secureTextEntry
                  className="bg-gray-100 px-4 rounded-xl mb-4 text-base"
                />
                <TouchableOpacity className="bg-active py-3 rounded-xl mb-4">
                  <Text className="text-white text-center text-base font-semibold">
                    Register
                  </Text>
                </TouchableOpacity>
               
              </View>
              {/* Footer */}
              <View className=" mb-5 flex-row justify-center">
                <Text className="text-gray-500">
                  Already have an account?  
                </Text>
                <Link href="/(auth)">
                  <Text className="text-active font-semibold">
                     Login
                  </Text>
                </Link>
                
              </View>
            </SafeAreaView>
    )
};

export default RegisterScreen;