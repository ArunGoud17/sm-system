import React from "react";
import {
  View,
  Text,
  TouchableOpacity,
  ImageBackground,
} from "react-native";
import styles from "./homeStyles"; // Importing the styles

export default function HomeScreen({ navigation }) {
  const handleStart = () => {
    navigation.navigate("Next");
  };

  return (
    <View style={styles.container}>
      {/* Header */}
      <View style={styles.header}>
        <Text style={styles.title}>School Management App</Text>
      </View>

      {/* Middle with Background Image */}
      <View style={styles.middle}>
        <ImageBackground
          // source={require("../assets/classwork.jpg")}
          style={styles.bgImage}
        >
          <TouchableOpacity onPress={handleStart} style={styles.button}>
            <Text style={styles.buttonText}>Let's Get Started</Text>
          </TouchableOpacity>
        </ImageBackground>
      </View>

      {/* Footer */}
      <View style={styles.footer}>
        <TouchableOpacity>
          <Text style={styles.footerText}>Help</Text>
        </TouchableOpacity>
        <TouchableOpacity>
          <Text style={styles.footerText}>About</Text>
        </TouchableOpacity>
        <TouchableOpacity>
          <Text style={styles.footerText}>Contact</Text>
        </TouchableOpacity>
        <TouchableOpacity>
          <Text style={styles.footerText}>Partners</Text>
        </TouchableOpacity>
        <TouchableOpacity>
          <Text style={styles.footerText}>T&C</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}
