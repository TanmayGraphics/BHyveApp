import * as React from "react";
import { StyleSheet, TextInput, TextInputProps } from "react-native";
import colors from "../config/color";



class FormTextInput extends React.Component {
    render() {
        const { style, placeholderColor, ...restProps } = this.props;
        return (
            <TextInput
                selectionColor={colors.DODGER_BLUE}
                style={[styles.textInput, style]}
                placeholderTextColor= {placeholderColor}
                {...restProps}
            />
        );
    }
}

const styles = StyleSheet.create({
    textInput: {
        height: 40,
        borderColor: colors.WHITE,
        borderBottomWidth: StyleSheet.hairlineWidth,
        marginBottom: 20,
        color:"#ffffff",
        fontFamily: "Roboto",
        fontStyle: 'normal',
    }
});

export default FormTextInput;