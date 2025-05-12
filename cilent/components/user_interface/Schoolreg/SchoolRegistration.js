import React, { useState } from "react";
import * as ImagePicker from "expo-image-picker";
import { Image, Platform, TextInput, TouchableOpacity, View, Text, ScrollView, KeyboardAvoidingView } from "react-native";
import { FontAwesome } from "@expo/vector-icons";
import styles from "./SchoolRegistrationStyles"; // fixed import path for styles

export default function SchoolRegistration() {
  const [formData, setFormData] = useState({
    schoolName: "",
    registrationNumber: "",
    schoolType: "",
    affiliation: "",
    state: "",
    district: "",
    city: "",
    pincode: "",
    photo: null,
  });

  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const pickImage = async () => {
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.Images,
      allowsEditing: true,
      aspect: [4, 3],
      quality: 1,
      base64: true,
    });

    if (!result.canceled) {
      setFormData({ ...formData, photo: result.assets[0].base64 });
    }
  };

  const handleInputChange = (name, value) => {
    setFormData({
      ...formData,
      [name]: value.trim(),
    });
  };

  const handleSubmit = async () => {
    if (loading) return;

    const requiredFields = [
      "schoolName",
      "registrationNumber",
      "schoolType",
      "affiliation",
      "state",
      "district",
      "city",
      "pincode",
    ];
    const emptyField = requiredFields.find((key) => !formData[key].trim());

    if (emptyField) {
      setError(`Please fill in the ${emptyField}`);
      return;
    } else {
      setError("");
    }

    try {
      setLoading(true);
      const BASE_URL =
        Platform.OS === "android"
          ? "http://192.168.31.141:5000"
          : "http://localhost:5000";

      const response = await fetch(`${BASE_URL}/register-school`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      const data = await response.json();
      console.log(data);

      if (response.ok) {
        setFormData({
          schoolName: "",
          registrationNumber: "",
          schoolType: "",
          affiliation: "",
          state: "",
          district: "",
          city: "",
          pincode: "",
          photo: null,
        });
        setError("");
      } else {
        setError(data.error || "Something went wrong!");
      }
    } catch (error) {
      console.error("Submission error:", error);
      setError("Failed to submit registration.");
    } finally {
      setLoading(false);
    }
  };

  return (
      <KeyboardAvoidingView
      style={[styles.outer, { flex: 1 }]}
        behavior={Platform.OS === "ios" ? "padding" : "height"}
        keyboardVerticalOffset={Platform.OS === "ios" ? 60 : 0}
      >
        <ScrollView
          contentContainerStyle={[styles.schoolRegistrationContainer, { flexGrow: 1 }]}
          showsVerticalScrollIndicator={false}
        >
        <Text style={styles.heading}>Register a School</Text>

        <View style={styles.formCard}>
          {[
            {
              label: "School Name",
              name: "schoolName",
              placeholder: "Enter school name",
            },
            {
              label: "Registration Number",
              name: "registrationNumber",
              placeholder: "Enter registration number",
              keyboardType: "number-pad",
            },
            {
              label: "Type of School",
              name: "schoolType",
              placeholder: "Public/Private/International",
            },
            {
              label: "Desired Affiliation",
              name: "affiliation",
              placeholder: "CBSE/ICSE/State Board",
            },
            { label: "State", name: "state", placeholder: "Enter state" },
            { label: "District", name: "district", placeholder: "Enter district" },
            { label: "City", name: "city", placeholder: "Enter city" },
            {
              label: "Pincode",
              name: "pincode",
              placeholder: "Enter pincode",
              keyboardType: "number-pad",
              maxLength: 6,
            },
          ].map((field) => (
              <View key={field.name} style={styles.inputGroup}>
                <Text style={styles.label}>{field.label}</Text>
                <TextInput
                  style={[styles.input, { width: '100%' }]}
                placeholder={field.placeholder}
                placeholderTextColor="#B0B0B0"
                value={formData[field.name]}
                onChangeText={(text) => handleInputChange(field.name, text)}
                autoCapitalize="words"
                keyboardType={field.keyboardType || "default"}
                maxLength={field.maxLength || undefined}
              />
            </View>
          ))}

          <View style={globalStyles.inputGroup}>
            <Text style={globalStyles.label}>School Photo</Text>
            <TouchableOpacity style={styles.photoButton} onPress={pickImage}>
              <Text style={styles.photoButtonText}>Pick a Photo</Text>
            </TouchableOpacity>
            {formData.photo && (
              <Image
                source={{ uri: `data:image/jpeg;base64,${formData.photo}` }}
                style={styles.photo}
              />
            )}
          </View>
        </View>

        {error ? (
          <Text style={{ color: "red", marginBottom: 10 }}>{error}</Text>
        ) : null}

        <TouchableOpacity
          style={[styles.submitButton, loading && { opacity: 0.6 }]}
          onPress={handleSubmit}
          disabled={loading}
        >
          <FontAwesome name="send" size={18} color="white" />
          <Text style={styles.submitButtonText}>
            {loading ? "Submitting..." : "Submit Registration"}
          </Text>
        </TouchableOpacity>
      </ScrollView>
    </KeyboardAvoidingView>
  );
}
