import React, { Component } from "react";
import { Text, View, Image, StyleSheet, TouchableOpacity } from "react-native";

const Categories = props => {
  return (
    <View style={{}}>
      <TouchableOpacity>
        <Text style={styles.title}>{props.title}</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  title: {
    fontSize: 10,
    borderWidth: 0.5,
    borderColor: "black",
    textAlign: "center",
    color: "black",
    marginRight: 20,
    padding: 5,
    borderRadius: 3.5
  }
});

export default Categories;
