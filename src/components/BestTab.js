import React, { Component } from "react";
import { Text, View, Image, StyleSheet, TouchableOpacity } from "react-native";
import { PERCENTAGE } from "../assets";

const BestTab = props => {
  return (
    <TouchableOpacity
      style={[styles.container, props.style]}
      onPress={props.onPress}
    >
      <Image source={props.image} style={{}} />
      <View
        style={{
          flexDirection: "row",
          marginTop: 10,
          justifyContent: "space-between",
          padding: 5
        }}
      >
        <Image
          source={props.dp}
          style={{
            borderRadius: 100,
            marginTop: 2,
            borderColor: "black",
            borderWidth: 1
          }}
        />
        <View style={{ flexDirection: "column" }}>
          <Text style={{ fontSize: 12, fontWeight: "bold" }}>
            {props.title}
          </Text>
          <Text style={{ fontSize: 10 }}>{props.dist}</Text>
        </View>
        <View style={{ flexDirection: "column" }}>
          <Text
            style={{
              fontSize: 12,
              borderRadius: 5,
              backgroundColor: "#27AE60",
              color: "white",
              textAlign: "center"
            }}
          >
            {props.rating}
          </Text>
          <Text style={{ fontSize: 10 }}>{props.duration}</Text>
        </View>
      </View>
      <View style={{ flexDirection: "row", padding: 5 }}>
        <Image
          source={PERCENTAGE}
          style={{ borderRadius: 100, marginTop: 2 }}
        />
        <Text
          style={{
            fontSize: 12,
            fontWeight: "bold",
            color: "#1576F9",
            marginTop: 5,
            marginLeft: 10
          }}
        >
          {props.type}
        </Text>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: "white",
    elevation: 3,
    padding: 15,
    margin: 4,
    marginRight: 22
  }
});

export default BestTab;
