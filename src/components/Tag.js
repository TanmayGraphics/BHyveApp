import React, { Component } from "react";
import { Text, View, Image, StyleSheet, TouchableOpacity } from "react-native";
import { BASKET } from "../assets";

const Tag = props => {
  return (
    <TouchableOpacity
      style={[styles.container, props.style]}
      onPress={props.onPress}
    >
      <Image source={props.source} resizeMode="contain" />
      <Text style={{ alignSelf: "center", fontSize: 10, marginTop: 5 }}>
        {props.title}
      </Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 5
  }
});

export default Tag;
