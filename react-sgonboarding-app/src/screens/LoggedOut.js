import React, { useState } from 'react';
import {
  Text,
  View,
  Image,
  TouchableHighlight,
  ScrollView,
  StyleSheet
} from 'react-native';
import colors from '../styles/colors';
import transparentHeaderStyle from '../styles/navigation';
import RoundedButton from '../components/buttons/RoundedButton';
import NavBarButton from '../components/buttons/NavBarButton';
import styles from './styles/LoggedOut';
import CountryPicker, { getAllCountries, getCallingCode } from 'react-native-country-picker-modal';
import Icon from "react-native-vector-icons/FontAwesome";

const brandLogo = require('../img/1200px-Societe_Generale_logo.png');

const LoggedOut = (props) => {

  const [countryCode, setCountryCode] = useState('FR')
  const [withCountryNameButton, setwithCountryNameButton] = useState(true)
  const [withTheme] = useState(darkTheme)
  const [country, setCountry] = useState(null)
  const [withFilter, setWithFilter] = useState(true)

  const onSelect = (country) => {
    setCountryCode(country.cca2)
    setCountry(country)
  }
  
  onFacebookPress = () => {
    alert('Facebook button pressed');
  }

  onCreateAccountPress = () => {
    const { navigation } = props;
    navigation.navigate('Features')
  }

  onMoreOptionsPress = () => {
    alert('More options button pressed');
  }

  return (
    <ScrollView style={styles.wrapper}>
      <View style={styles.welcomeWrapper}>
        <Image
          source={brandLogo}
          style={styles.logo}
        />
        <Text style={styles.welcomeText}>
          Welcome to Onboarding
          </Text>
        <RoundedButton
          text="Continue with Gmail"
          textColor={colors.green01}
          background={colors.white}
          handleOnPress={() => this.onFacebookPress()}
        />
        <RoundedButton
          text="Create Account"
          textColor={colors.white}
          handleOnPress={() => this.onCreateAccountPress()}
        />
        <View>
          <CountryPicker
            {...{
              withCountryNameButton,
              countryCode,
              withFilter,
              onSelect,
              withTheme
            }}
          />
        </View>
        <TouchableHighlight
          style={styles.moreOptionsButton}
          onPress={() => this.onMoreOptionsPress()}>
          <Text style={styles.moreOptionsButtonText}>
            More options
            </Text>
        </TouchableHighlight>
        <View style={styles.termsAndConditions}>
          <Text style={styles.termsText}>
            By tapping Continue, Create Account or More
            </Text>
          <Text style={styles.termsText}>
            {' options,'}
          </Text>
          <Text style={styles.termsText}>
            {"I agree to SG's "}
          </Text>
          <TouchableHighlight style={styles.linkButton}>
            <Text style={styles.termsText}>
              Terms of Service
              </Text>
          </TouchableHighlight>
          <Text style={styles.termsText}>
            ,
            </Text>
          <TouchableHighlight style={styles.linkButton}>
            <Text style={styles.termsText}>
              Privacy Policy
              </Text>
          </TouchableHighlight>
          <Text style={styles.termsText}>
            {' and, '}
          </Text>
          <TouchableHighlight style={styles.linkButton}>
            <Text style={styles.termsText}>
              Nondiscrimination Policy
              </Text>
          </TouchableHighlight>
          <Text style={styles.termsText}>
            .
            </Text>
        </View>
      </View>
    </ScrollView>
  );
}

LoggedOut.navigationOptions = ({ navigation }) => ({
  headerRight: <NavBarButton handleButtonPress={() => navigation.navigate('LogIn')} location="right" color={colors.white} text="Log In" />,
  headerStyle: transparentHeaderStyle,
  headerTransparent: true,
  headerTintColor: colors.white,
});

export default LoggedOut;

const DARK_COLOR = "#18171C";
const PLACEHOLDER_COLOR = "rgba(255,255,255,0.2)";
const LIGHT_COLOR = "#FFF";

const darkTheme = StyleSheet.create({
  modalContainer: {
    backgroundColor: DARK_COLOR
  },
  contentContainer: {
    backgroundColor: DARK_COLOR
  },
  header: {
    backgroundColor: DARK_COLOR
  },
  itemCountryName: {
    borderBottomWidth: 0
  },
  countryName: {
    color: LIGHT_COLOR
  },
  letterText: {
    color: LIGHT_COLOR
  },
  input: {
    color: LIGHT_COLOR,
    borderBottomWidth: 1,
    borderColor: LIGHT_COLOR
  }
});