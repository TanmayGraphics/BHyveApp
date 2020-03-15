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
import CustomHeader from '../navigation/CustomHeader';

class Settings extends React.Component {
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
          
         <View style = {{ flex: 1 }}>
              <CustomHeader  navigation={this.props.navigation}/>
             <View style={{flex:1, justifyContent: 'center', alignItems:'center'}}>
                <Text>Settings Screen</Text>     
            </View> 
          </View>  

   
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

export default Settings;
