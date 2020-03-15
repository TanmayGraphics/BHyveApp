import React from "react";
import {
  Text,
  Image,
  StyleSheet,
  View,
  TouchableOpacity,
  StatusBar,
  Dimensions,
} from "react-native";
import {ScrollView} from "react-native-gesture-handler";
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
} from "../../../assets/index";
import Tag from "../../../components/Tag";
import OffersTab from "../../../components/OffersTab";
import Categories from "../../../components/Categories";
import PlaceCard from "../../../components/PlaceCard";
import RatingTab from "../../../components/RatingTab";
import ExploreBestTab from "../../../components/ExploreBestTab";
import {SafeAreaView} from 'react-navigation';
import CustomHeader from '../../navigation/CustomHeader';

class ExploreScreen extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      width: 400,
      value: "",
    };
  }

  render() {
    return (
      <SafeAreaView style={{ flex: 1, justifyContent: 'space-between'}}>
      <CustomHeader isHome={true} navigation={this.props.navigation}/>
      <ScrollView style={styles.container}>
        <View>
          <Text style={styles.text1}>Top Offers Near You</Text>
          <View style={{flexDirection: "row"}}>
            <ScrollView
              horizontal
              showsHorizontalScrollIndicator={false}
              contentContainerStyle={{justifyContent: "space-between"}}
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

        <View style={styles.tags}>
          <Tag source={BASKET} title="Grocries" />
          <Tag source={FASTFOOD} title="Food" />
          <Tag source={HEALTH} title="Health" />
          <Tag source={DRESS} title="Clothing" />
          <Tag source={BASKET} title="Basket" />
        </View>

        <View style={[styles.tags, {paddingTop: -20}]}>
          <Tag source={BASKET} title="Basket" />
          <Tag source={BASKET} title="Basket" />
          <Tag source={BASKET} title="Basket" />
          <Tag source={BASKET} title="Basket" />
          <Tag source={BASKET} title="Basket" />
        </View>
        <View style={{flexDirection: "row", alignSelf: "center"}}>
          <Categories title="New" />
          <Categories title="Shopping" />
          <Categories title="Events" />
          <Categories title="Clothing" />
          <Categories title="Party" />
          <Categories title="Food" />
        </View>
        <View style={{paddingLeft: 10, marginTop: 20}}>
          <PlaceCard
            dp={DP1}
            title="Street Store"
            place="Madhapur"
            image={CARD1}
            tag1="Clothing"
            tag2="Offer"
            tag3="Shopping"
            tag4="New"
            views="025 Views"
            description=" is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley"
          />
        </View>
        <View style={{paddingLeft: 10, marginTop: 10}}>
          <RatingTab
            dp={DP3}
            title="The Sports Bar"
            place="Madhapur"
            description=" is simply dummy text of the printing and typesetting industry. inter took a galley"
            views="787 views"
            radio_props={[
              {label: "Manchester United", value: "manchesterunited"},
              {label: "Manchester City", value: "manchestercity"},
            ]}
          />
        </View>

        <View style={{flexDirection: "row", marginTop: 10}}>
          <ScrollView
            horizontal
            showsHorizontalScrollIndicator={false}
            contentContainerStyle={{justifyContent: "space-between"}}
          >
            <ExploreBestTab
              image={PIC}
              dp={DP2}
              title="Robinsons Mart"
              dist="3.3 km"
              rating="4.3"
              duration="50 min"
              thumbnail1={THUMBNAIL1}
              subtitle="clothing"
            />
            <ExploreBestTab
              image={BEST2}
              dp={DP1}
              title="Eleezo"
              dist="2 km"
              rating="5.0"
              duration="50 min"
              thumbnail1={THUMBNAIL2}
              thumbnail2={THUMBNAIL3}
              subtitle="football"
            />
            <ExploreBestTab
              image={BEST1}
              dp={DP2}
              title="Robinsons Mart"
              dist="3.3 km"
              rating="4.3"
              duration="50 min"
            />
          </ScrollView>
        </View>

        <View style={{paddingLeft: 10, marginTop: 20}}>
          <PlaceCard
            dp={DP1}
            title="LA Pizzaria"
            place="Madhapur"
            image={CARD2}
            tag1="Food"
            tag2="Offer"
            tag3="Shopping"
            tag4="New"
            views="025 Views"
            description=" is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley"
          />
        </View>

        <View style={{paddingLeft: 10, marginTop: 10}}>
          <RatingTab
            dp={DP3}
            title="Robinsons Super Mart"
            place="Madhapur"
            onPress={value => {
              this.setState({value});
            }}
            description=" What Brand Tea do you Prefer"
            views="787 views"
            radio_props={[
              {label: "Taj Mahal United", value: "tajmahalunited"},
              {label: "Lamra ", value: "lamra"},
              {label: "Red Label", value: "redlabel"},
              {label: "Others ", value: "others"},
            ]}
          />
        </View>

        <View style={{paddingLeft: 10, marginTop: 20}}>
          <PlaceCard
            dp={DP1}
            title="The Sport"
            place="Madhapur"
            image={CARD3}
            tag1="Sports "
            tag2="Offer"
            tag3="Event"
            tag4="New"
            views="025 Views"
            description=" is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley"
          />
        </View>
      </ScrollView>
      </SafeAreaView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "white",
  },
  text1: {
    fontSize: 16,
    fontWeight: "bold",
    padding: 15,
  },
  tags: {
    flexDirection: "row",
    justifyContent: "space-between",
    padding: 20,
  },
});

export default ExploreScreen;
