import React, { Component } from "react";
import { Text, View, Image, StyleSheet, TouchableOpacity } from "react-native";
import { BASKET, IMAGE, FLAT } from "../assets";

const OffersTab = props => {
  return (
    <TouchableOpacity
      style={[styles.container, props.style]}
      onPress={props.onPress}
    >
      <Image source={props.source} style={{}} />
      <Text style={{ marginTop: 12 }}>{props.title}</Text>
      <Text style={{ marginTop: 8 }}>{props.subText}</Text>
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

export default OffersTab;
