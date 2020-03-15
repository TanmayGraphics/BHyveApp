import React, { Component } from "react";
import { Text, View, Image, StyleSheet, TouchableOpacity } from "react-native";
import { ICON, TAG, LIKE, FLAG, SHARE } from "../assets";
import LikeShareTab from "./LikeShareTab";

const PlaceCard = props => {
  return (
    <TouchableOpacity
      style={[styles.container, props.style]}
      onPress={props.onPress}
    >
      <View
        style={{
          flexDirection: "row",
          marginTop: 10,
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
          <Text style={{ fontSize: 12 }}>{props.title}</Text>
          <Text style={{ fontSize: 10 }}>{props.place}</Text>
        </View>
        <TouchableOpacity style={{ padding: 5, alignContent: "flex-end" }}>
          <Image source={ICON} />
        </TouchableOpacity>
      </View>
      <Image source={props.image} style={{ alignSelf: "center" }} />

      <View
        style={{
          flexDirection: "row",
          marginTop: 10,
          justifyContent: "space-between"
        }}
      >
        <Image source={TAG} style={{ marginLeft: 15, marginRight: 15 }} />
        <Text style={styles.tag}>{props.tag1}</Text>
        <Text style={styles.tag}>{props.tag2}</Text>
        <Text style={styles.tag}>{props.tag3}</Text>
        <Text style={styles.tag}>{props.tag4}</Text>

        <Text style={styles.views}>{props.views}</Text>
      </View>
      <Text style={styles.desc}> {props.description} </Text>
      <View style={{ paddingLeft: 40, paddingRight: 40 }}>
        <LikeShareTab />
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
  tag: {
    fontSize: 10,
    borderRadius: 10,
    borderWidth: 0.5,
    borderColor: "black",
    marginRight: 13,
    padding: 5
  },
  views: {
    fontSize: 9,
    color: "#6F6D6D",
    justifyContent: "flex-end"
  },
  desc: {
    fontSize: 10,
    // marginTop: 13,
    padding: 20
  }
});

export default PlaceCard;
