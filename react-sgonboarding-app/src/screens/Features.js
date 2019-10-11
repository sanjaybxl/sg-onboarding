import React, { Component } from "react"
import { connect } from 'react-redux';
import { Text, View, StyleSheet } from "react-native"
import Swiper from '../helpers/swiper';
import Icon from "react-native-vector-icons/FontAwesome";
import NavBarButton from '../components/buttons/NavBarButton';
import colors from '../styles/colors';
import transparentHeaderStyle from '../styles/navigation';
import { PropTypes } from 'prop-types';
import { bindActionCreators } from 'redux';
import ActionCreators from '../redux/actions';

class Features extends Component {
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
        super(props);
    }

    render() {
        const { navigation } = this.props;
        return (
            <Swiper navigation={navigation}>
                {/* First screen */}
                <View style={[styles.slide, { backgroundColor: '#C04DEE' }]}>
                    <Icon name="bank" {...iconStyles} />
                    <Text style={styles.header}>Feature A</Text>
                    <Text style={styles.text}>Place holder for Feature A details</Text>
                </View>
                {/* Second screen */}
                <View style={[styles.slide, { backgroundColor: '#4AAFEE' }]}>
                    <Icon name="bank" {...iconStyles} />
                    <Text style={styles.header}>Feature B</Text>
                    <Text style={styles.text}>Place holder for Feature B details</Text>
                </View>
                {/* Third screen */}
                <View style={[styles.slide, { backgroundColor: '#FC515B' }]}>
                    <Icon name="bank" {...iconStyles} />
                    <Text style={styles.header}>Feature C</Text>
                    <Text style={styles.text}>Place holder for Feature C details</Text>
                </View>
            </Swiper>
        );
    }
}

const iconStyles = {
    size: 100,
    color: '#FFFFFF',
};

const styles = StyleSheet.create({
    // Slide styles
    slide: {
        flex: 1,                    // Take up all screen
        justifyContent: 'center',   // Center vertically
        alignItems: 'center',       // Center horizontally
    },
    // Header styles
    header: {
        color: '#FFFFFF',
        fontFamily: 'Avenir',
        fontSize: 30,
        fontWeight: 'bold',
        marginVertical: 15,
    },
    // Text below header
    text: {
        color: '#FFFFFF',
        fontFamily: 'Avenir',
        fontSize: 18,
        marginHorizontal: 40,
        textAlign: 'center',
    },
});


const mapStateToProps = state => ({
});

const mapDispatchToProps = dispatch => bindActionCreators(ActionCreators, dispatch);

Features.propTypes = {
    navigation: PropTypes.shape({
        navigate: PropTypes.func,
        goBack: PropTypes.func,
    }).isRequired,
};

export default connect(mapStateToProps, mapDispatchToProps)(Features);
