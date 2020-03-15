import React, { Component } from "react";
import {
  View,
  Text,
  StyleSheet,
  Image,
  StatusBar,
  Dimensions
} from "react-native";
import Icon from "react-native-vector-icons/MaterialIcons";

import { XLENZ_LOGO } from "../assets/images";
import { TouchableOpacity } from "react-native-gesture-handler";

import { StackActions, NavigationActions } from "react-navigation";

class Header extends Component {
  constructor(props) {
    super(props);

    this.state = {
      width: 400,
      bellIcon: "notifications-none",
      helpIcon: "help-outline"
    };
  }

  componentDidMount() {
    const { width, heigth } = Dimensions.get("window");
    this.setState({ width });

    if (this.props.navigation.state.routeName == "NotificationsScreen") {
      this.setState({ helpIcon: "help-outline" });
      this.setState({ bellIcon: "notifications" });
    } else if (this.props.navigation.state.routeName == "HelpScreen") {
      this.setState({ helpIcon: "help" });
      this.setState({ bellIcon: "notifications-none" });
    } else {
      this.setState({ helpIcon: "help-outline" });
      this.setState({ bellIcon: "notifications-none" });
    }
  }

  UNSAFE_componentWillReceiveProps(nextProps) {
    const { width, heigth } = Dimensions.get("window");
    this.setState({ width });
  }

  // Icon Actions
  openMenu = () => {
    this.props.navigation.openDrawer();
  };

  onClickNotificationBtn = () => {
    this.props.navigation.navigate("NotificationsScreen");
    // this.setState({ helpIcon: 'help-outline' });
    // this.state.bellIcon == 'notifications-none' ?
    //     this.setState({ bellIcon: 'notifications' }) :
    //     this.setState({ bellIcon: 'notifications-none' })
  };

  onClickHelpBtn = () => {
    this.props.navigation.navigate("HelpScreen");
    // this.setState({ bellIcon: 'notifications-none' });
    // this.state.helpIcon == 'help-outline' ?
    //     this.setState({ helpIcon: 'help' }) :
    //     this.setState({ helpIcon: 'help-outline' })
  };

  render() {
    const goToMainMenu = StackActions.reset({
      index: 0,
      actions: [NavigationActions.navigate({ routeName: "MainMenu" })]
    });

    return (
      <View style={styles(this.state.width).header}>
        <StatusBar backgroundColor="#0471BE" barStyle="light-content" />
        <TouchableOpacity>
          <Icon
            name="menu"
            onPress={this.openMenu}
            color="white"
            size={28}
            style={{ marginRight: 20 }}
          />
        </TouchableOpacity>

        <View
          style={{
            flex: 1,
            alignItems: "center",
            justifyContent: "center"
          }}
        >
          <TouchableOpacity
            // onPress={() => this.props.navigation.dispatch(goToMainMenu)}
            onPress={() => this.props.navigation.navigate("MainMenu")}
            style={{ flexDirection: "row", marginTop: 5 }}
          >
            <Image
              style={{ alignSelf: "center" }}
              source={XLENZ_LOGO}
              width={36}
              height={21}
            />
            <Text style={styles(this.state.width).headerText}>XLENZ</Text>
          </TouchableOpacity>
        </View>

        <View
          style={{
            flexDirection: "row",
            alignItems: "flex-end"
          }}
        >
          <TouchableOpacity>
            <Icon
              name={this.state.bellIcon}
              onPress={this.onClickNotificationBtn}
              color="white"
              size={23}
            />
          </TouchableOpacity>

          <TouchableOpacity>
            <Icon
              name={this.state.helpIcon}
              onPress={this.onClickHelpBtn}
              color="white"
              size={23}
              style={{ marginLeft: 16, marginRight: 10 }}
            />
          </TouchableOpacity>
        </View>
      </View>
    );
  }
}

const styles = width =>
  StyleSheet.create({
    header: {
      flexDirection: "row",
      width: width - 24
    },

    headerText: {
      letterSpacing: 12,
      color: "white",
      fontWeight: "bold"
    }
  });

export default Header;
