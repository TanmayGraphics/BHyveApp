import React from "react";
import {
  Text,
  Image,
  StyleSheet,
  View,
  TouchableOpacity,
  StatusBar,
  Dimensions
} from "react-native";
import {
  IMAGE,
  BASKET,
  FLAT,
  FASTFOOD,
  HEALTH,
  DRESS,
  OFFER1,
  OFFER2,
  BEST1,
  DP2,
  BEST2,
  DP1,
  CARD3,
  CARD2,
  CARD1,
  DP3,
  THUMBNAIL1,
  THUMBNAIL2,
  THUMBNAIL3,
  PIC,
  DP4,
  BACKBUTTON,
  CARD4
} from "../assets/index";
import Tag from "../components/Tag";
import { ScrollView, TextInput } from "react-native-gesture-handler";
import VendorBestTab from "../components/VendorBestTab";
import OffersTab from "../components/OffersTab";
import InfoTab from "../components/InfoTab";

class ExploreScreen extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      width: 400,
      value: ""
    };
  }

  render() {
    return (
      <ScrollView style={styles.container}>
        <TouchableOpacity style={{}}>
          <Image source={BACKBUTTON} style={{ alignSelf: "flex-start" }} />
        </TouchableOpacity>
        <View style={{ padding: 12 }}>
          <VendorBestTab
            image={CARD4}
            dp={DP4}
            title="Robinsons Mart"
            rating="4.3"
            duration="50 min"
            thumbnail1={THUMBNAIL1}
            subtitle="Madhapur"
          />
        </View>
        <View style={styles.view2}>
          <Text>Ongoing Offers </Text>
          <View style={{ flexDirection: "row" }}>
            <ScrollView
              horizontal={true}
              showsHorizontalScrollIndicator={false}
              contentContainerStyle={{ justifyContent: "space-between" }}
            >
              <OffersTab
                source={OFFER1}
                title="Buy one get one free"
                subText="Fasion Mart"
              />
              <OffersTab source={FLAT} title="Flat 70%" subText="SVR World" />
              <OffersTab
                source={OFFER2}
                title="Buy one get one free "
                subText="Trinity"
              />
            </ScrollView>
          </View>
        </View>
        <View>
          <InfoTab />
        </View>
      </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#E5E5E5",
    marginTop: 30
  },
  text1: {
    fontSize: 16,
    fontWeight: "bold",
    padding: 15
  },
  tags: {
    flexDirection: "row",
    justifyContent: "space-between",
    padding: 20
  },
  view2: {
    backgroundColor: "white",
    // flexDirection: 'row',
    marginTop: 20,
    padding: 20,
    width: "100%"
  }
});

export default ExploreScreen;
