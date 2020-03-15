import React from 'react';
import { View, Image, SafeAreaView, ScrollView,Text,StyleSheet } from 'react-native';
import { List, ListItem } from 'native-base';
import { IMAGE1 } from "../assets/index";
export class HamburgerNavigation extends React.Component {
  render() {
    return (
      <SafeAreaView style={{ flex: 1 }}>
        <View style={{ height: 150, alignItems: 'center', justifyContent: 'center', backgroundColor: '#000000' }}>
          <Image source={IMAGE1} resizeMode="contain" style={{ height: 120, width: 120, borderRadius: 60 }} />
        </View>
        <ScrollView style={{backgroundColor: '#000000'}}>

          <List>
            <ListItem onPress={() => this.props.navigation.navigate('Settings')}>
              <Text style={styles.itemList}>Settings</Text>
            </ListItem>
            <ListItem onPress={() => this.props.navigation.navigate('Profile')}>
              <Text style={styles.itemList}>Profile</Text>
            </ListItem>
          </List>
        </ScrollView>
      </SafeAreaView>

    );
  }

}
const styles = StyleSheet.create({
  itemList: {
    color: "white",
  }
})