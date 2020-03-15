import * as React from "react";
import { Image, StyleSheet, View, ImageBackground, StatusBar, Text, TouchableOpacity } from "react-native";
import Button from "../../components/Button";
import FormTextInput from "../../components/FormTextInput";
import { LOGIN, LOGO } from "../../assets";
import colors from "../../config/color";
import strings from "../../config/string";
import { color } from "react-native-reanimated";
import { SocialIcon } from 'react-native-elements';
//import to show social icons

class LoginScreen extends React.Component {
  state = {
    email: "",
    password: ""
  };

  handleEmailChange = (email) => {
    this.setState({ email: email });
  };

  handlePasswordChange = (password) => {
    this.setState({ password: password });
  };

  handleLoginPress = () => {
    console.log("Login button pressed");
    this.props.navigation.navigate('Home');
  };

  render() {
    return (
      <ImageBackground
        source={LOGIN}
        style={{ flex:1 }}
      >
        <View style={styles.container}>
          <StatusBar
          backgroundColor="#1c313a"
          bar-style="light-content"
          >
          </StatusBar>
          <View style ={styles.logoContainer}>
            <Image source={LOGO} style={styles.circleShapeViewlogo} />
          </View>    
                {/* Form View */}
          <View style={styles.form}>
            <FormTextInput
              value={this.state.email}
              onChangeText={this.handleEmailChange}
              placeholder={strings.PHONE_PLACEHOLDER}
              placeholderColor= {colors.WHITE}
            />
            <FormTextInput
              value={this.state.password}
              onChangeText={this.handlePasswordChange}
              placeholder={strings.PASSWORD_PLACEHOLDER}
              placeholderColor= {colors.WHITE}
            />
            <Button label={strings.LOGIN} onPress={this.handleLoginPress} btnBackgroundColor="Red"/> 
            <Text style={styles.forgetTextStyle}> Forgot Password ?</Text>
          </View> 

          <View style={styles.loginText}>
          <Text style={styles.loginTextStyle}> Login With</Text>
          </View>

          <View style={styles.socialButtonsCont}>
            <SocialIcon
              type="facebook"
              onPress={() => {
                alert('facebook');
              }}
            />
            <SocialIcon
              type="google"
              onPress={() => {
                alert('Google');
              }}
            />
          </View>
          <View style={styles.signUpTextCont}>
           <Text style={styles.signUpTextStyle}>
            Don't have account yet ?
           </Text> 
            <TouchableOpacity
              onPress={() => { this.props.navigation.navigate('SignUp') }}>
              <Text style={styles.signUpButtonStyle}>
                SignUp
              </Text>
            </TouchableOpacity>
          </View>
        </View>       
      </ImageBackground>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    //padding:50,
  },
  logoContainer: {
    flexGrow: 1,
    //marginVertical: 10,
    alignSelf: "center",
    justifyContent: "flex-end",
},
  circleShapeViewlogo: {
    width: 100,
    height: 100,
    borderRadius: 100/2,
    marginVertical: 5,
},
  form: {
    flexGrow: 1,
    paddingVertical: 10,
    justifyContent: "center",
    alignContent:"center",
    width: "80%",
  },
  loginTextStyle: {
    left:0,
    fontFamily: 'Roboto',
    fontSize: 20,
    lineHeight: 23,
    color:"#ffffff",
  },
  forgetTextStyle: {
    left:70,
    fontFamily: 'Roboto',
    fontSize: 20,
    lineHeight: 23,
    color:"#F12B7E",
  },
  socialButtonsCont: {
    flexGrow: 1,
    alignSelf: "center",
    justifyContent: "flex-end",
    //paddingVertical:10,
    flexDirection:"row",
},
  signUpTextCont: {
    flexGrow: 1,
    alignSelf: "center",
    justifyContent: "flex-end",
    paddingVertical:10,
    flexDirection:"row",
},
loginText: {
  alignSelf: "center",
  justifyContent: "flex-end",
},
  signUpTextStyle: {
    fontFamily: 'Roboto',
    fontSize: 20,
    lineHeight: 23,
    color:"#ffffff",
  },
  signUpButtonStyle: {
    fontFamily: 'Roboto',
    fontSize: 20,
    lineHeight: 23,
    color:"#F12B7E",
  }
  
});

export default LoginScreen;