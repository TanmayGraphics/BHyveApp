import React, { Component } from "react";
import { Text, View, Image, StyleSheet, TouchableOpacity } from "react-native";
import { PERCENTAGE, PLUS } from "../assets";

const ExploreBestTab = props => {
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
              padding: 2,
              fontSize: 12,
              borderRadius: 5,
              backgroundColor: "#27AE60",
              color: "white",
              textAlign: "center"
            }}
          >
            {props.rating}
          </Text>
        </View>
      </View>
      <View
        style={{
          flexDirection: "row",
          padding: 5,
          justifyContent: "space-between"
        }}
      >
        <View style={{ flexDirection: "column" }}>
          <Image
            source={props.thumbnail1}
            style={{ borderRadius: 100, marginTop: 2 }}
          />
          <Text style={{ fontSize: 6 }}> {props.subtitle} </Text>
        </View>
        <View style={{ flexDirection: "column" }}>
          <Image
            source={props.thumbnail1}
            style={{ borderRadius: 100, marginTop: 2 }}
          />
          <Text style={{ fontSize: 6 }}> {props.subtitle} </Text>
        </View>
        <TouchableOpacity style={styles.followbtn}>
          <Image source={PLUS} style={{ marginTop: 2 }} />
          <Text style={{ fontSize: 10, color: "white", marginLeft: 10 }}>
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
    padding: 15,
    margin: 4,
    marginRight: 22
  },
  followbtn: {
    flexDirection: "row",
    borderRadius: 5,
    backgroundColor: "#2F80ED",
    justifyContent: "space-between",
    padding: 8
  }
});

export default ExploreBestTab;
