import React, { Component } from "react";
import { Text, View, Image, StyleSheet, TouchableOpacity } from "react-native";
import { LIKE, SHARE, FLAG } from "../assets";

const LikeShareTab = props => {
  return (
    <View style={styles.tab}>
      <TouchableOpacity style={styles.button}>
        <View style={{ flexDirection: "row" }}>
          <Image source={LIKE} />
          <Text style={styles.text}>Like</Text>
        </View>
      </TouchableOpacity>
      <View style={{ width: 1, height: "100%", backgroundColor: "black" }} />
      <TouchableOpacity>
        <View style={{ flexDirection: "row" }}>
          <Image source={FLAG} />
          <Text style={styles.text}>Save</Text>
        </View>
      </TouchableOpacity>
      <View style={{ width: 1, height: "100%", backgroundColor: "black" }} />
      <TouchableOpacity>
        <View style={{ flexDirection: "row", marginRight: 10 }}>
          <Image source={SHARE} />
          <Text style={styles.text}>Share</Text>
        </View>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  tab: {
    flexDirection: "row",
    borderRadius: 5,
    borderWidth: 1,
    borderColor: "black",
    justifyContent: "space-between",
    padding: 3
  },
  button: {
    paddingLeft: 10,
    paddingRight: 10
  },
  text: {
    fontSize: 10,
    marginLeft: 13
  }
});

export default LikeShareTab;
