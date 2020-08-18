import React from "react";
import { Feather } from "@expo/vector-icons";
import { View, Text } from "react-native";
import { RectButton } from "react-native-gesture-handler";
import { useNavigation } from "@react-navigation/native";

import styles from "./styles";

const SearchBar: React.FC = () => {
  const navigation = useNavigation();
  return (
    <View style={styles.container}>
      <Text style={{ color: "#fff", fontSize: 18 }}>Phone</Text>

      <View style={{ flexDirection: "row", alignItems: "center" }}>
        <RectButton
          onPress={() => navigation.navigate("Create")}
          rippleColor="white"
          style={styles.button}
        >
          <Feather name="plus" color="#fff" size={26} />
        </RectButton>

        <RectButton rippleColor="white" style={styles.button}>
          <Feather name="search" color="#fff" size={26} />
        </RectButton>
      </View>
    </View>
  );
};

export default SearchBar;
