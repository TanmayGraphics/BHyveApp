import React from  'react';
import {View} from 'react-native';
import {Text} from 'native-base';
import { CustonHeader} from '../../navigation/CustomHeader';

export class ExploreDetails extends React.Component {
    render() {
        return (
          <View style = {{ flex: 1 }}>
              <CustonHeader title="Explore detail" navigation= {this.props.navigation}/>
             <View style={{flex:1, justifyContent: 'center', alignItems:'center'}}>
                <Text>ExploreDetails Screen</Text>     
            </View> 
          </View>  
        );
    }
}