import React from "react";
import {
  View,
  Text,
  TouchableOpacity,
  ImageBackground,
  KeyboardAvoidingView,
  ScrollView,
  Platform,
} from "react-native";
import { useNavigation } from "@react-navigation/native";
import { MaterialIcons } from "@expo/vector-icons";
import { LinearGradient } from "expo-linear-gradient";
import { styles, cardWidth } from "./loginStyles"; // Import styles and calculated width

export default function LoginScreen() {
  const navigation = useNavigation();

  const handleLoginPress = (screen) => {
    navigation.navigate(screen);
  };

  const loginOptions = [
    { title: "Admin", screen: "AdminLogin", icon: "security", color: "#6a11cb" },
    { title: "Teacher", screen: "TeacherLogin", icon: "school", color: "#2575fc" },
    { title: "Student", screen: "StudentLogin", icon: "person", color: "#11998e" },
  ];

  return (
    <ImageBackground style={styles.background} blurRadius={2}>
      <KeyboardAvoidingView
        behavior={Platform.OS === "ios" ? "padding" : "height"}
        style={styles.container}
      >
        <ScrollView contentContainerStyle={styles.scrollContainer} keyboardShouldPersistTaps="handled">
          <View style={styles.overlay}>
            <View style={[styles.card, { width: cardWidth }]}>
              <Text style={styles.title}>Welcome.!</Text>
              <Text style={styles.subtitle}>Please select your login type</Text>

              {loginOptions.map((option, index) => (
                <TouchableOpacity key={index} onPress={() => handleLoginPress(option.screen)} activeOpacity={0.8}>
                  <LinearGradient
                    colors={[option.color, `${option.color}90`]}
                    style={styles.loginButton}
                    start={{ x: 0, y: 0 }}
                    end={{ x: 1, y: 1 }}
                  >
                    <MaterialIcons name={option.icon} size={24} color="white" style={styles.icon} />
                    <Text style={styles.buttonText}>{option.title}</Text>
                    <MaterialIcons name="arrow-forward" size={20} color="white" />
                  </LinearGradient>
                </TouchableOpacity>
              ))}

              <View style={styles.footer}>
                <Text style={styles.footerText}>Need help?</Text>
                <TouchableOpacity>
                  <Text style={styles.helpText}>Contact Support</Text>
                </TouchableOpacity>
              </View>
            </View>
          </View>
        </ScrollView>
      </KeyboardAvoidingView>
    </ImageBackground>
  );
}
