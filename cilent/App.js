import React from "react";
import { Text, Platform as RNPlatform } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

// 👇 Main Screens
import HomeScreen from "./components/user_interface/homeScreen/HomeScreen";
import SchoolRegistration from "./components/user_interface/Schoolreg/SchoolRegistration";
import PreRegister from "./components/user_interface/PreRegister/PreRegister";
import LoginScreen from "./components/user_interface/login/LogInScreen";
import AdminLogin from "./components/user_interface/adminLogin/AdminLogin";
import TeacherLogin from "./components/user_interface/Teacherlog/TeacherLogin";
import StudentLogin from "./components/user_interface/StudentLog/StudentLogin";

// 👇 Dashboard & Modules
import DashboardScreen from "./components/dashboard/DashboardScreen";
import CalendarScreen from "./components/dashboard/CalendarScreen";
import SubjectScreen from "./components/dashboard/SubjectScreen";
import FeeScreen from "./components/dashboard/FeeScreen";
import PersonalInfoScreen from "./components/dashboard/PersonalInfoScreen";
import EventsScreen from "./components/dashboard/EventsScreen";
import NoticeScreen from "./components/dashboard/NoticeScreen";
import ChatScreen from "./components/dashboard/ChatScreen";
import TransportScreen from "./components/dashboard/TransportScreen";
import ClubScreen from "./components/dashboard/ClubScreen";
import ClubDetailsScreen from "./components/dashboard/ClubDetailsScreen";
import ReportCardScreen from "./components/dashboard/ReportCardScreen";
import ExamScreen from "./components/dashboard/ExamScreen";
import SyllabusScreen from "./components/dashboard/SyllabusScreen";
import AddActivityScreen from "./components/dashboard/AddActivityScreen";

// 👇 Platform-specific MapRoute component with error handling
let MapRoute;
const Platform = typeof RNPlatform !== 'undefined' ? RNPlatform : {
  OS: 'web',
  select: (objs) => objs.web(),
};
try {
  MapRoute = Platform.select({
    web: () => require("./components/dashboard/MapRoute.web").default,
    default: () => require("./components/dashboard/MapRoute.native").default,
  })();
} catch (error) {
  console.error("Failed to load MapRoute component:", error);
  MapRoute = () => <Text>Map feature not available on this platform</Text>;
}

// 👇 Linking config for web deep linking
const linking = {
  prefixes: ["/"],
  config: {
    screens: {
      Home: "",
      Next: "next",
      Register: "register",
      Login: "login",
      AdminLogin: "admin",
      TeacherLogin: "teacher",
      StudentLogin: "student",
      Dashboard: "dashboard",
      Calendar: "calendar",
      Subjects: "subjects",
      Syllabus: "syllabus",
      Fees: "fees",
      "Personal Info": "personal-info",
      Events: "events",
      Notice: "notice",
      Chat: "chat",
      Transport: "transport",
      MapRoute: "map-route",
      Clubs: "clubs",
      ClubDetails: "club-details",
      "Report Card": "report-card",
      Exams: "exams",
      AddActivity: "add-activity",
    },
  },
};

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer 
      linking={linking} 
      fallback={<Text>Loading...</Text>}
    >
      <Stack.Navigator 
        initialRouteName="Home" 
        screenOptions={{ 
          headerShown: false,
          animation: Platform.OS === 'ios' ? 'default' : 'fade',
        }}
      >
        {/* Auth & Registration */}
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="Next" component={PreRegister} />
        <Stack.Screen name="Register" component={SchoolRegistration} />
        <Stack.Screen name="Login" component={LoginScreen} />
        <Stack.Screen name="AdminLogin" component={AdminLogin} />
        <Stack.Screen name="TeacherLogin" component={TeacherLogin} />
        <Stack.Screen name="StudentLogin" component={StudentLogin} />

        {/* Main Dashboard & Features */}
        <Stack.Screen name="Dashboard" component={DashboardScreen} />
        <Stack.Screen name="Calendar" component={CalendarScreen} />
        <Stack.Screen name="AddActivity" component={AddActivityScreen} />
        <Stack.Screen name="Subjects" component={SubjectScreen} />
        <Stack.Screen name="Syllabus" component={SyllabusScreen} />
        <Stack.Screen name="Fees" component={FeeScreen} />
        <Stack.Screen name="Personal Info" component={PersonalInfoScreen} />
        <Stack.Screen name="Events" component={EventsScreen} />
        <Stack.Screen name="Notice" component={NoticeScreen} />
        <Stack.Screen name="Chat" component={ChatScreen} />
        <Stack.Screen name="Transport" component={TransportScreen} />
        <Stack.Screen name="MapRoute" component={MapRoute} />
        <Stack.Screen name="Clubs" component={ClubScreen} />
        <Stack.Screen name="ClubDetails" component={ClubDetailsScreen} />
        <Stack.Screen name="Report Card" component={ReportCardScreen} />
        <Stack.Screen name="Exams" component={ExamScreen} />
      </Stack.Navigator>
    </NavigationContainer>
)};
