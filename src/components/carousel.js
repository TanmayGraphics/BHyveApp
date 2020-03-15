import React from "react";
import { TouchableOpacity, StyleSheet, Image } from "react-native";

const Carousel = props => {
  return (
    <TouchableOpacity>
      <Image
        source={props.image}
        style={{ height: 200, resizeMode: "stretch", margin: 5 }}
      />
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({});

export default Carousel;
