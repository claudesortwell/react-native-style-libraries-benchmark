import { Button, StyleSheet, Text, View } from "react-native";
import { useCallback, useState } from "react";
import StyledComponents from "./components/StyledComponents";
import Native from "./components/ReactNative";
import Tamagui from "./components/Tamagui";
import Restyle from "./components/Restyle";
import { useFonts } from "expo-font";
import NativeWind from "./components/NativeWind";
export default function App() {
  const [styleType, setStyleType] = useState(undefined);

  const onStyleTypePress = (curry) => () => {
    setStyleType(curry);
  };

  const renderStyleLibrary = useCallback(() => {
    switch (styleType) {
      case "React Native":
        return <Native />;
      case "Styled Components":
        return <StyledComponents />;
      case "Tamagui":
        return <Tamagui />;
      case "Restyle":
        return <Restyle />;
      case "NativeWind":
        return <NativeWind />;
      default:
        return null;
    }
  }, [styleType]);

  const [loaded] = useFonts({
    Inter: require("@tamagui/font-inter/otf/Inter-Medium.otf"),
    InterBold: require("@tamagui/font-inter/otf/Inter-Bold.otf"),
  });

  if (!loaded) {
    return null;
  }

  return (
    <View style={styles.container}>
      <Text>Tap a style library to start rendering</Text>
      <Button title="React Native" onPress={onStyleTypePress("React Native")} />
      <Button
        title="Styled Components"
        onPress={onStyleTypePress("Styled Components")}
      />
      <Button title="Tamagui" onPress={onStyleTypePress("Tamagui")} />
      <Button title="Restyle" onPress={onStyleTypePress("Restyle")} />
      <Button title="NativeWind" onPress={onStyleTypePress("NativeWind")} />
      {styleType ? <Text>Rendering with {styleType}</Text> : null}
      {renderStyleLibrary()}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
