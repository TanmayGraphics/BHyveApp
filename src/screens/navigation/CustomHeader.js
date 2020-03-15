import { Container, Header, Left,Text, Body, Right, Button, Icon, Title, View } from 'native-base';
import React, { Component } from "react";
import {
  NAV_ICON,
  BELL_ICON,
  CART,
  COMMENT,
  LOCATION_ICON
} from "../../assets/icons";
import {
  Image,StyleSheet,
} from "react-native";
import ModalDropdown from 'react-native-modal-dropdown';

export default class CustomHeader extends Component {
    constructor(props) {
        super(props);
        this.state = {
          locationArr : [
            "location1", "Location2"
          ]
        }
    }
 
 
render() {
  const { state, navigate } = this.props.navigation;    

  let {title, isHome} = this.props
    return(
<Header style={{backgroundColor: "#000000"}}>
  <Left>
    {
      isHome?
  <Button transparent onPress={() => this.props.navigation.openDrawer()}>
    <Image source={NAV_ICON} resizeMode="contain" />
    </Button>:
      <Button transparent onPress={() => this.props.navigation.navigate.goBack()}>
      <Icon name='arrow-back' />
    </Button>
    
}

  </Left>
  <Body>
    <View>
  <Button style={styles.locationTitle}>
            <Text>Location</Text>
          </Button>
  <Button style={styles.location} transparent onPress={() => this.props.navigation.goBaack()}>
  <Image source={LOCATION_ICON}/>
    </Button>
    </View>
  </Body>
  <Right>
  <Button transparent onPress={() => this.props.navigation.goBaack()}>
  <Image source={BELL_ICON}  resizeMode="contain" />
    </Button>
    <Button style={styles.msgIcon} transparent onPress={() => navigate('HomeScreen', { go_back_key: state.key })}>
    <Image source={COMMENT}  resizeMode="contain"  />
    </Button>
  </Right>
</Header>
 );
}
}

const styles = StyleSheet.create({
location:{
  bottom: 22,
  right: 10,
},
locationTitle:{
  backgroundColor: '#000000',
  borderBottomColor: '#ffffff',
  borderBottomWidth: 1,
  top: 15,
  paddingTop: 20,
  left: 20,
},
msgIcon:{
  top: 2,
},
dropDown:{
  left: 50,
  top: 22,
  backgroundColor: "#ffffff",
  color: '#ffffff'
}
})