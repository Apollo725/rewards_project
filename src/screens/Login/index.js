import React, { Component } from 'react'
import { View, Image, Dimensions } from 'react-native';
import {RkButton, RkAvoidKeyboard, RkStyleSheet} from 'react-native-ui-kitten';

import {scale, scaleModerate, scaleVertical} from '../../utils/scale';
import {GradientButton} from '../../components/gradientButton';

class LoginScreen extends Component {
  render() {
    let contentHeight = scaleModerate(375, 1);
    let height = Dimensions.get('window').height - contentHeight;
    let width = Dimensions.get('window').width;
    return (
      <RkAvoidKeyboard>
        <Image 
          style={[styles.image, {height, width}]}
          source={require('../../assets/images/loginbg.jpg')} 
        />
          <View style={styles.container}>
            <View style={styles.buttons}>
              <RkButton 
                onPress={() => {this.props.navigation.navigate('Home')}} 
                style={styles.save} >Login with facebook
              </RkButton>
              </View>
          </View>
      </RkAvoidKeyboard>
    );
  }
}

const styles = RkStyleSheet.create(theme => ({
  screen: {
    flex: 1,
    alignItems: 'center',
    backgroundColor: theme.colors.screen.base
  },
  image: {
    resizeMode: 'cover',
    marginBottom: scaleVertical(10),
  },
  container: {
    paddingHorizontal: 17,
    paddingBottom: scaleVertical(22),
    alignItems: 'center',
    flex: -1
  },
  footer: {
    justifyContent: 'flex-end',
    flex: 1
  },
  buttons: {
    flexDirection: 'row',
    marginBottom: scaleVertical(24)
  },
  button: {
    marginHorizontal: 14
  },
  save: {
    marginVertical: 13
  },
  textRow: {
    justifyContent: 'center',
    flexDirection: 'row',
  }
}));

export default LoginScreen;