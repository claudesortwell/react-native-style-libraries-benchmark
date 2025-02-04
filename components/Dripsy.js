import React from "react";
import { View } from "react-native";
import { View as ViewD } from "dripsy";
import { DripsyProvider, makeTheme } from "dripsy";

const theme = makeTheme({});

const Dripsy = () => {
  return (
    <DripsyProvider theme={theme}>
      <View style={{ display: "flex", flexDirection: "row" }}>
        {new Array(1000).fill(0).map((_, i) => (
          <ViewD
            key={i}
            sx={{
              borderColor: "red",
              borderWidth: 2,
              padding: 5,
            }}
          />
        ))}
      </View>
    </DripsyProvider>
  );
};

export default Dripsy;
