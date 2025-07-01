import { useLocalSearchParams } from "expo-router";
import React from "react";
import { Text, View } from "react-native";

const MovieDetails = () => {
  const { id } = useLocalSearchParams();
  return (
    <View className="flex-1 justify-center items-center">
      <Text className="text-5xl text-accent font-bold">MovieDetails: {id}</Text>
    </View>
  );
};

export default MovieDetails;
