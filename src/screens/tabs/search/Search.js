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
import { SearchBar } from 'react-native-elements';

class SearchScreen extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      width: 400,
      search: '',

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
  updateSearch = search => {
    this.setState({ search });
  };
  render() {
    const { search } = this.state;

    return (
      <SafeAreaView style={{ flex: 1, justifyContent: 'space-between'}}>
         <CustomHeader isHome={true} navigation={this.props.navigation}/> 
           <SearchBar
        placeholder="Type Here..."
        onChangeText={this.updateSearch}
        value={search}
      />
      <ScrollView
        style={styles.container}
        contentContainerStyle={{ alignItems: "center" }}
      >

        <View style={styles.view1}>
    

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

export default SearchScreen;
