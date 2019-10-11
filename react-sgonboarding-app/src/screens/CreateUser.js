import React, { Component } from 'react';
import { PropTypes } from 'prop-types';
import Icon from 'react-native-vector-icons/Feather';

import {
    View,
    Text,
    ScrollView,
    KeyboardAvoidingView,
} from 'react-native';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import ActionCreators from '../redux/actions';
import colors from '../styles/colors';
import transparentHeaderStyle from '../styles/navigation';
import InputField from '../components/form/InputField';
import NextArrowButton from '../components/buttons/NextArrowButton';
import NavBarButton from '../components/buttons/NavBarButton';
import styles from './styles/LogIn';

class CreateUser extends Component {
    static navigationOptions = ({ navigation }) => ({
        headerLeft: <NavBarButton
            handleButtonPress={() => navigation.goBack()}
            location="left"
            icon={<Icon name="arrow-left" color={colors.white} size={24} />}
        />,
        headerStyle: transparentHeaderStyle,
        headerTransparent: true,
        headerTintColor: colors.white,
    });

    constructor(props) {
        // StatusBarIOS.setHidden(true)
        super(props);

        this.handleFirstNameChange = this.handleFirstNameChange.bind(this);
        this.handleNextButton = this.handleNextButton.bind(this);
        this.handleLastNameChange = this.handleLastNameChange.bind(this);
        this.toggleNextButtonState = this.toggleNextButtonState.bind(this);

        let userLocaleCountryCode = 'US'
        // const userCountryData = getAllCountries()
        //     .filter(country => NORTH_AMERICA.includes(country.cca2))
        //     .filter(country => country.cca2 === userLocaleCountryCode)
        //     .pop()
        // let callingCode = null
        // let cca2 = userLocaleCountryCode
        // if (!cca2 || !userCountryData) {
        //     cca2 = 'US'
        //     callingCode = '1'
        // } else {
        //     callingCode = userCountryData.callingCode
        // }

        this.state = {
            firstName: '',
            lastName: '',
            loadingVisible: false,
        }
    }

    handleNextButton() {
        this.setState({ loadingVisible: true });
        const { navigation } = this.props;
        const { navigate } = navigation;
        const { firstName, lastName } = this.state;
        navigate('UserEmail', { firstName: firstName, lastName: lastName });
    }

    handleLastNameChange(lastName) {
        this.setState({ lastName: lastName });
    }

    handleFirstNameChange(firstName) {
        this.setState({ firstName: firstName });
    }

    toggleNextButtonState() {
        const { firstName, lastName } = this.state;
        if (firstName && lastName) {
            return false;
        }
        return true;
    }

    render() {
        const background = colors.green01;
        return (
            <KeyboardAvoidingView
                style={[{ backgroundColor: background }, styles.wrapper]}
                behavior="padding"
            >
                <View style={styles.scrollViewWrapper}>
                    <ScrollView style={styles.scrollView}>
                        <Text style={styles.loginHeader}>
                            What's you name?
            </Text>
                        <InputField
                            labelText="FIRST NAME"
                            labelTextSize={16}
                            labelColor={colors.white}
                            textColor={colors.white}
                            borderBottomColor={colors.white}
                            inputType="text"
                            customStyle={{ marginBottom: 30 }}
                            onChangeText={this.handleFirstNameChange}
                            autoFocus
                        />
                        <InputField
                            labelText="LAST NAME"
                            labelTextSize={16}
                            labelColor={colors.white}
                            textColor={colors.white}
                            borderBottomColor={colors.white}
                            inputType="text"
                            customStyle={{ marginBottom: 30 }}
                            onChangeText={this.handleLastNameChange}
                        />

                        {/* <CountryPicker
                            countryList={NORTH_AMERICA}
                            onChange={value => {
                                this.setState({ cca2: value.cca2, callingCode: value.callingCode })
                            }}
                            cca2={this.state.cca2}
                            translation="eng"
                        /> */}

                    </ScrollView>
                    <NextArrowButton
                        handleNextButton={this.handleNextButton}
                        disabled={this.toggleNextButtonState()}
                    />
                </View>
            </KeyboardAvoidingView>
        );
    }
}

const mapStateToProps = state => ({
    loggedInStatus: state.loggedInStatus,
});

const mapDispatchToProps = dispatch => bindActionCreators(ActionCreators, dispatch);

CreateUser.propTypes = {
    navigation: PropTypes.shape({
        navigate: PropTypes.func,
        goBack: PropTypes.func,
    }).isRequired,
};

export default connect(mapStateToProps, mapDispatchToProps)(CreateUser);
