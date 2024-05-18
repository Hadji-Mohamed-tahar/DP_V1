import { Platform, View, Text } from "react-native";
import React, { useEffect } from "react";
import Router from "./src/router/Router";
import Menu from "./src/components/Menu";
import { GestureHandlerRootView } from "react-native-gesture-handler";
import { Provider } from "react-redux";
import store from "./src/reducers/store";

const App = () => {
  return (
    <Provider store={store}>
      <GestureHandlerRootView style={{ flex: 1 }}>
        <Menu>
          <Router />
        </Menu>
      </GestureHandlerRootView>
    </Provider>
  );
};

export default App;
