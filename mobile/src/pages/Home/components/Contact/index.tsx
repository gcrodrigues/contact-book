import React from "react";
import { RectButton } from "react-native-gesture-handler";
import { View, Text } from "react-native";

import styles from "./styles";

interface Props {
  color: Function;
  name: string;
  phone: string;
}

const Contact: React.FC<Props> = ({ color, name, phone }) => {
  return (
    <RectButton style={styles.container}>
      <View
        style={[styles.initialLetterContainer, { backgroundColor: color() }]}
      >
        <Text style={styles.initialLetter}>{name.substr(0, 1)}</Text>
      </View>
      <View style={styles.contactInfo}>
        <Text style={styles.name}>{name}</Text>
        <Text style={styles.phone}>{phone}</Text>
      </View>
    </RectButton>
  );
};

export default Contact;
