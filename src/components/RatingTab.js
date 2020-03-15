import React, { Component } from "react";
import { Text, View, Image, StyleSheet, TouchableOpacity } from "react-native";
import { ICON, TAG, LIKE, FLAG, SHARE } from "../assets";
import LikeShareTab from "./LikeShareTab";
import RadioForm, {
  RadioButton,
  RadioButtonInput,
  RadioButtonLabel
} from "react-native-simple-radio-button";

const RatingTab = props => {
  // var radio_props = [
  //     { label: 'Template', value: 'template' },
  //     { label: 'Basic Marker Based AR Eperience', value: 'markerbased' },
  //     { label: 'Basic Marker Less AR Eperience', value: 'markerless' }
  // ];

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
      <View
        style={{
          flexDirection: "row",
          padding: 10,
          justifyContent: "space-between"
        }}
      >
        <Text style={styles.desc}> {props.description} </Text>
        <Text style={styles.views}>{props.views}</Text>
      </View>
      <View
        style={{ flexDirection: "row", justifyContent: "center", padding: 20 }}
      >
        <RadioForm
          style={{ fontSize: 12 }}
          radio_props={props.radio_props}
          initial={0}
          onPress={props.onPress}
          formHorizontal={false}
          animation={false}
          buttonSize={10}
          buttonOuterSize={20}
          borderWidth={0.5}
        />
        <Text
          style={{
            fontSize: 12,
            color: "#6F6D6D",
            justifyContent: "space-between"
          }}
        >
          {props.percentage}
        </Text>
      </View>

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
    alignSelf: "flex-end",
    marginRight: 50
  },
  desc: {
    fontSize: 10,
    // marginRight: 50,
    alignSelf: "flex-start"
  }
});

export default RatingTab;
