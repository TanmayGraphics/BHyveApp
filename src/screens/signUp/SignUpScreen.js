
import React, { Component } from 'react';
import { View, Text, ScrollView, Animated, ImageBackground, } from 'react-native';
import styles from './styles';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
import { LOGIN } from "../../assets";
import Button from "../../components/Button";
import FormTextInput from "../../components/FormTextInput";
import colors from "../../config/color";
import strings from "../../config/string";

class SignUpScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: "",
      password: ""
    };
  }

  handleEmailChange = (email) => {
    this.setState({ email: email });
  };

  handlePasswordChange = (password) => {
    this.setState({ password: password });
  };

  handleLoginPress = () => {
    console.log("Login button pressed");
  };

  render() {
    return (
      <ImageBackground source={LOGIN} style={{ flex: 1 }}>
        <KeyboardAwareScrollView
          contentContainerStyle={styles.container}
          scrollEnabled={true} >
          <View style={styles.form}>
            <FormTextInput
              value={this.state.email}
              onChangeText={this.handleEmailChange}
              placeholder={"Name"}
              placeholderColor={colors.WHITE}
            />
            <FormTextInput
              value={this.state.email}
              onChangeText={this.handleEmailChange}
              placeholder={"Email"}
              placeholderColor={colors.WHITE}
            />
            <FormTextInput
              value={this.state.email}
              onChangeText={this.handleEmailChange}
              placeholder={"Phone"}
              placeholderColor={colors.WHITE}
            />
            <FormTextInput
              value={this.state.email}
              onChangeText={this.handleEmailChange}
              placeholder={strings.PASSWORD_PLACEHOLDER}
              placeholderColor={colors.WHITE}
            />
            <FormTextInput
              value={this.state.password}
              onChangeText={this.handlePasswordChange}
              placeholder={"Confirm Password"}
              placeholderColor={colors.WHITE}
            />
            <Button label={"Sign Up"} onPress={this.handleLoginPress} btnBackgroundColor="Red" />
          </View>
        </KeyboardAwareScrollView>
      </ImageBackground>
    );
  }
};

export default SignUpScreen;