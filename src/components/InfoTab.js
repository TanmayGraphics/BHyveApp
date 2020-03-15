import React, { Component } from "react";
import { Text, View, Image, StyleSheet, TouchableOpacity } from "react-native";
import { PERCENTAGE, BIG_PLUS, TIME, LOCATION } from "../assets";
import Carousel from "./carousel";

const InfoTab = props => {
  return (
    <View style={[styles.container, props.style]} onPress={props.onPress}>
      <View style={{ flexDirection: "row", justifyContent: "space-between" }}>
        <TouchableOpacity onPress={props.onPress}>
          <View style={{ flexDirection: "column" }}>
            <Text style={{ fontWeight: "bold" }}> Home </Text>
            <View
              style={{
                backgroundColor: "#F12B7E",
                borderRadius: 10,
                height: 7,
                width: "100%"
              }}
            />
          </View>
        </TouchableOpacity>
        <TouchableOpacity onPress={props.onPress}>
          <Text> Posts </Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={props.onPress}>
          <Text> Photos</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={props.onPress}>
          <Text>Forums </Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={props.onPress}>
          <Text>Details </Text>
        </TouchableOpacity>
      </View>

      <View style={{ flexDirection: "row", justifyContent: "space-between" }}>
        <View style={{ flexDirection: "row", justifyContent: "space-between" }}>
          <Text style={{ fontStyle: 16 }}>Timings</Text>
          <Image source={TIME} />
        </View>
        <View style={{ flexDirection: "row", justifyContent: "space-between" }}>
          <Text style={{ fontStyle: 16 }}>Directions</Text>
          <Image source={LOCATION} />
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: "white",
    elevation: 3,
    padding: 15,
    margin: 4
  }
});

export default InfoTab;
