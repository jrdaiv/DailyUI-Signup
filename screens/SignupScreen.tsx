import React, { useState } from 'react';
import SignupInput from 'components/SignupInput';
import { Text, View, Alert } from 'react-native';
import { signupUser } from 'services/api';
import Button from 'components/Button';


const SignupScreen = () => {
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSignup = async () => {
    if (!username || !email || !password) {
      Alert.alert('Error', 'All fields are required!');
      return;
    }

    try {
      const response = await signupUser({ username, email, password });
      Alert.alert('Success', 'User signed up successfully!');
      console.log(response);
    } catch (error) {
      Alert.alert('Error', 'Something went wrong');
    }
  };

  return (
    <>
      <View className="flex-1 items-center justify-center p-4 ">
        <Text className="text-black text-lg font-bold ">Sign Up</Text>
        <SignupInput placeholder="Username" value={username} onChangeText={setUsername} />
        <SignupInput placeholder="Email" value={email} onChangeText={setEmail} />
        <SignupInput
          placeholder="Password"
          value={password}
          onChangeText={setPassword}
          secureTextEntry
        />
        <Button title="Sign Up" onPress={handleSignup} />
      </View>
    </>
  );
};

export default SignupScreen;
