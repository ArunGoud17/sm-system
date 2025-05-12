import React, { useState, useEffect } from "react";
import {
  View,
  Text,
  TouchableOpacity,
  Platform,
  ScrollView,
  KeyboardAvoidingView,
  ActivityIndicator,
  Alert,
  StatusBar,
} from "react-native";
import { Picker } from "@react-native-picker/picker";
import { useNavigation } from "@react-navigation/native";
import { MaterialIcons } from "@expo/vector-icons";
import styles from "./PreRegisterStyles";

export default function PreRegister() {
  const navigation = useNavigation();
  const [selectedSchool, setSelectedSchool] = useState("");
  const [isPickerFocused, setIsPickerFocused] = useState(false);
  const [schoolList, setSchoolList] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchSchools = async () => {
      try {
        const BASE_URL =
          Platform.OS === "android"
            ? "http://192.168.31.141:5000"
            : "http://localhost:5000";

        const response = await fetch(`${BASE_URL}/retrieveschool`);
        const data = await response.json();
        console.log(data.data);
        if (data.status === "success") {
          const schoolData = data.data.map(
            (school) =>
              `${school.school_name},${school.registration_number},${school.city}`
          );
          setSchoolList(schoolData);
        } else {
          Alert.alert("Error", "Failed to fetch schools.");
        }
      } catch (error) {
        console.error("Fetch Error:", error);
        Alert.alert("Network Error", "Could not connect to the server.");
      } finally {
        setLoading(false);
      }
    };

    fetchSchools();
  }, []);

  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === "ios" ? "padding" : "height"}
      style={styles.container}
    >
      <ScrollView contentContainerStyle={styles.scrollContainer}>
        {/* School Selection */}
        <View style={styles.upperSection}>
          <MaterialIcons
            name="school"
            size={50}
            color="#3f51b5"
            style={styles.icon}
          />
          <Text style={styles.heading}>Select your School</Text>

          <View
            style={[
              styles.pickerWrapper,
              isPickerFocused && styles.pickerFocused,
            ]}
          >
            {loading ? (
              <ActivityIndicator size="large" color="#3f51b5" />
            ) : (
              <Picker
                selectedValue={selectedSchool}
                onValueChange={(itemValue) => setSelectedSchool(itemValue)}
                style={styles.picker}
                dropdownIconColor="#3f51b5"
                onFocus={() => setIsPickerFocused(true)}
                onBlur={() => setIsPickerFocused(false)}
              >
                <Picker.Item label="Choose School" value="" />
                {schoolList.map((school, index) => (
                  <Picker.Item key={index} label={school} value={school} />
                ))}
                <Picker.Item label="Naagarjuna" value="Naagarjuna" />
                <Picker.Item label="St. Claret" value="St. Claret" />
                <Picker.Item label="ZPHS" value="ZPHS" />
              </Picker>
            )}
          </View>

          {selectedSchool && (
            <TouchableOpacity
              style={styles.continueButton}
              onPress={() => navigation.navigate("Login")}
            >
              <Text style={styles.continueButtonText}>Continue</Text>
            </TouchableOpacity>
          )}
        </View>

        {/* Divider */}
        <View style={styles.divider}>
          <View style={styles.dividerLine} />
          <Text style={styles.dividerText}>OR</Text>
          <View style={styles.dividerLine} />
        </View>

        {/* School Registration */}
        <View style={styles.lowerSection}>
          <Text style={styles.subText}>
            Want to register your school in our App?
          </Text>

          <TouchableOpacity
            style={styles.registerBox}
            onPress={() => navigation.navigate("Register")}
            activeOpacity={0.7}
          >
            <MaterialIcons name="add-circle-outline" size={24} color="white" />
            <Text style={styles.registerText}>Register a School</Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </KeyboardAvoidingView>
  );
}
