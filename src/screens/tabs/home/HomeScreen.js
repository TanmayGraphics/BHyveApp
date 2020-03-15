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
import Swiper from "react-native-swiper";
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
  IMAGE2,
  IMAGE1
} from "../../../assets/index";
import Tag from "../../../components/Tag";
import { ScrollView } from "react-native-gesture-handler";
import OffersTab from "../../../components/OffersTab";
import BestTab from "../../../components/BestTab";
import Icon from "react-native-vector-icons/MaterialIcons";
import {
  NAV_ICON,
  BELL_ICON,
  CART,
  COMMENT,
  LOCATION_ICON
} from "../../../assets/icons";
import {SafeAreaView} from 'react-navigation';
import CustomHeader from '../../navigation/CustomHeader';

class HomeScreen extends React.Component {
  
  constructor(props) {
    super(props);

    this.state = {
      width: 400
    };
  }

  componentDidMount() {
    const { width, heigth } = Dimensions.get("window");
    this.setState({ width });
  }

  UNSAFE_componentWillReceiveProps(nextProps) {
    const { width, heigth } = Dimensions.get("window");
    this.setState({ width });
  }

  
  render() {
    return (
      <SafeAreaView style={{ flex: 1, justifyContent: 'space-between'}}>
        <CustomHeader isHome={true} navigation={this.props.navigation}/>
      <ScrollView
        style={styles.container}
        contentContainerStyle={{ alignItems: "center" }}
      >
        <View style={styles.view1}>
          <View style={styles.carousel}>
            <StatusBar backgroundColor="#000000" barStyle="light-content" />
            <Swiper>
              <View style={styles.slide1}>
                <Image
                  source={IMAGE}
                  resizeMode="contain"
                  style={{ flex: 1 }}
                />
              </View>
              <View style={styles.slide2}>
                <Image
                  source={IMAGE1}
                  resizeMode="contain"
                  style={{ flex: 1 }}
                />
              </View>
              <View style={styles.slide3}>
                <Image
                  source={IMAGE2}
                  resizeMode="contain"
                  style={{ flex: 1 }}
                />
              </View>
            </Swiper>
          </View>

          <View style={styles.tags}>
            <Tag source={BASKET} title="Grocries" />
            <Tag source={FASTFOOD} title="Food" />
            <Tag source={HEALTH} title="Health" />
            <Tag source={DRESS} title="Clothing" />
            <Tag source={BASKET} title="Basket" />
          </View>

          <View style={[styles.tags, { paddingTop: -20 }]}>
            <Tag source={BASKET} title="Basket" />
            <Tag source={BASKET} title="Basket" />
            <Tag source={BASKET} title="Basket" />
            <Tag source={BASKET} title="Basket" />
            <Tag source={BASKET} title="Basket" />
          </View>
        </View>

        <View style={styles.view2}>
          <Text>Offers Around</Text>
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

        <View style={styles.view2}>
          <Text>Best in fasion</Text>
          <View style={{ flexDirection: "row" }}>
            <ScrollView
              horizontal={true}
              showsHorizontalScrollIndicator={false}
              contentContainerStyle={{ justifyContent: "space-between" }}
            >
              <BestTab
                image={BEST1}
                dp={DP2}
                title="Robinsons Mart"
                dist="3.3 km"
                rating="4.3"
                duration="50 min"
                type="ONGOING OFFER"
              />
              <BestTab
                image={BEST2}
                dp={DP1}
                title="Eleezo"
                dist="2 km"
                rating="5.0"
                duration="50 min"
                type="CUSOMER FRIENDLY"
              />
              <BestTab
                image={BEST1}
                dp={DP2}
                title="Robinsons Mart"
                dist="3.3 km"
                rating="4.3"
                duration="50 min"
                type="ONGOING OFFER"
              />
            </ScrollView>
          </View>
        </View>
      </ScrollView>
      </SafeAreaView>
    );
  }
}


const styles = StyleSheet.create({
  header: {
    flexDirection: "row",
    // width: width - 24,
    backgroundColor: "#171616"
  },

  headerText: {
    letterSpacing: 12,
    color: "white",
    fontWeight: "bold"
  },

  container: {
    flex: 1,
    // alignItems: 'center',
    backgroundColor: "#E5E5E5",
    padding: 10
  },
  view1: {
    padding: 15,
    backgroundColor: "white",
    alignItems: "stretch"
  },
  view2: {
    backgroundColor: "white",
    // flexDirection: 'row',
    marginTop: 20,
    padding: 20,
    width: "100%"
  },
  carousel: {
    width: "100%",
    height: 200,
    alignSelf: "center"
  },
  tags: {
    flexDirection: "row",
    justifyContent: "space-between",
    padding: 20
  },
  slide1: {
    alignSelf: "center"
  },
  slide2: {
    alignSelf: "center"
  },
  slide3: {
    alignSelf: "center"
  },
  text: {
    color: "#fff",
    fontSize: 30,
    fontWeight: "bold"
  }
});

export default HomeScreen;
