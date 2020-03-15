import React from  'react';
import {View} from 'react-native';
import {Text} from 'native-base';
import { CustonHeader} from '../../navigation/CustomHeader';

export class HomeDetails extends React.Component {
    render() {
        return (
          <View style = {{ flex: 1 }}>
              <CustonHeader title="Home detail" navigation= {this.props.navigation}/>
             <View style={{flex:1, justifyContent: 'center', alignItems:'center'}}>
                <Text>Home detail Screen</Text>     
            </View> 
          </View>  
        );
    }
}