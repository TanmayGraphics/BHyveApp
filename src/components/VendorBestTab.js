import React, { Component } from "react";
import { Text, View, Image, StyleSheet, TouchableOpacity } from "react-native";
import { PERCENTAGE, BIG_PLUS } from "../assets";
import Carousel from "./carousel";

const VendorBestTab = props => {
  return (
    <TouchableOpacity
      style={[styles.container, props.style]}
      onPress={props.onPress}
    >
      <Carousel image={props.image} />
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
            borderColor: "black",
            borderWidth: 1,
            marginRight: -60
          }}
        />
        <View style={{ flexDirection: "column" }}>
          <Text style={{ fontSize: 14, fontWeight: "500", paddingTop: 5 }}>
            {props.title}
          </Text>
          <Text style={{ fontSize: 12 }}>{props.subtitle}</Text>
        </View>
        <TouchableOpacity style={styles.followbtn}>
          <Image source={BIG_PLUS} style={{ marginTop: 0 }} />
          <Text style={{ fontSize: 18, color: "white", marginLeft: 10 }}>
            Follow
          </Text>
        </TouchableOpacity>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: "white",
    elevation: 3,
    padding: 20,
    margin: 4,
    borderRadius: 5
    // marginRight: 22
  },
  followbtn: {
    flexDirection: "row",
    borderRadius: 5,
    backgroundColor: "#2F80ED",
    justifyContent: "space-between",
    padding: 12
  }
});

export default VendorBestTab;
