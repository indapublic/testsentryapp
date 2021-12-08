import * as Sentry from "@sentry/react-native";
import React, { FunctionComponent, ReactElement } from "react";
import { Button, SafeAreaView, ScrollView, StatusBar, Text } from "react-native";

const AppPure: FunctionComponent<{}> = (): ReactElement<{}> => (
  <SafeAreaView
    style={{
      flex: 1,
    }}
  >
    <StatusBar barStyle="dark-content" />
    <ScrollView
      contentInsetAdjustmentBehavior="automatic"
      style={{
        flex: 1,
      }}
      contentContainerStyle={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Text>It works</Text>
      <Button
        title="Crash me!"
        onPress={() => {
          throw new Error("Crashed!");
        }}
      />
    </ScrollView>
  </SafeAreaView>
);

export const App = Sentry.wrap(AppPure);
