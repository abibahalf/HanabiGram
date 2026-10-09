import { Link } from "expo-router";
import { Text, TextInput, TouchableOpacity, View, } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

const LoginScreen = () => {
  return (
    <SafeAreaView className="flex-1 justify-center px-8 bg-white">
      {/* Logo */}
      <View className="items-center">
        <Text className="text-6xl text-active font-title mb-4 text-center">
          HanabiGram
        </Text>
        <Text className="text-small mb-4 text-center">
          Welcome back! Please login to your account.
        </Text>
      </View>
      {/* Form */}
      <View className="mt-5">
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
            Login
          </Text>
        </TouchableOpacity>
        <TouchableOpacity>
          <Text className="text-active text-center text-base font-semibold">
            Forgot Password?
          </Text>
        </TouchableOpacity>
      </View>
      {/* Footer */}
      <View className=" mb-5 flex-row justify-center">
        <Text className="text-gray-500">
          Don't have an account? </Text>
          <Link href="/(auth)/register">
           <Text className="text-active font-semibold">
             Sign Up
           </Text>
          </Link>
        
      </View>
    </SafeAreaView>
  );
};

export default LoginScreen;
