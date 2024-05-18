import React, { useState, useEffect } from "react";
import { View, Text, TouchableOpacity, Animated } from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import { AntDesign } from "@expo/vector-icons";
import { useDispatch, useSelector } from 'react-redux';
import { setLanguage, setDirection} from "../actions/actions"
import i18n from "../Languages/i18n";
import { I18nManager } from "react-native";

const ChooseLanguage = ({ navigation }) => {
  const dispatch = useDispatch();
  
  const [nextPage, setNextPage] = useState(false);
  const [fadeAnim] = useState(new Animated.Value(0));

  useEffect(() => {
    const timer = setTimeout(() => {
      setNextPage(true);
    }, 1000);
    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    Animated.timing(fadeAnim, {
      toValue: nextPage ? 1 : 0,
      duration: 1000,
      useNativeDriver: true,
    }).start();
  }, [nextPage]);

  const selectLanguage = (languageCode) => {
    dispatch(setLanguage(languageCode));
    dispatch(setDirection(languageCode === 'ar' ? 'RTL' : 'LTR'));
    i18n.locale = languageCode;
    // I18nManager.forceRTL(languageCode === 'ar');
    navigation.navigate("ClientOrTrucker");
  };

  return (
    <LinearGradient
      style={{ flex: 1, alignItems: "center", justifyContent: "center" }}
      colors={["#F9B776", "#FF621F"]}
    >
      <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
        <Text
          style={{
            fontSize: 24,
            fontWeight: "bold",
            marginBottom: 12,
            color: "white",
          }}
        >
          اختر اللغة
        </Text>
        <Animated.View style={{ opacity: fadeAnim }}>
          {nextPage ? (
            <>
              <TouchableOpacity
                style={{
                  flexDirection: "row",
                  width: 160,
                  height: 50,
                  borderRadius: 30,
                  alignItems: "center",
                  justifyContent: "center",
                  backgroundColor: "white",
                  marginBottom: 10,
                }}
                onPress={() => selectLanguage("en")}
              >
                <Text
                  style={{ color: "#FF621F", fontWeight: "bold", fontSize: 18 }}
                >
                  English
                </Text>
                <AntDesign name="arrowright" size={24} color="#FF621F" />
              </TouchableOpacity>
              <TouchableOpacity
                style={{
                  flexDirection: "row",
                  width: 160,
                  height: 50,
                  borderRadius: 30,
                  alignItems: "center",
                  justifyContent: "center",
                  backgroundColor: "white",
                }}
                onPress={() => selectLanguage("ar")}
              >
                <Text
                  style={{ color: "#FF621F", fontWeight: "bold", fontSize: 18 }}
                >
                  العربية
                </Text>
                <AntDesign name="arrowright" size={24} color="#FF621F" />
              </TouchableOpacity>
            </>
          ) : null}
        </Animated.View>
      </View>
    </LinearGradient>
  );
};

export default ChooseLanguage;
