import {
  createStackNavigator,
} from 'react-navigation';
import LoggedOut from '../screens/LoggedOut';
import LogIn from '../screens/LogIn';
import ForgotPassword from '../screens/ForgotPassword';
import TurnOnNotifications from '../screens/TurnOnNotifications';
import CreateUser from '../screens/CreateUser';
import UserEmail from '../screens/UserEmail';
import Features from '../screens/Features';
import { UserIdentityScreen } from '../screens/UserIdentityScreen';

const AppRouteConfigs = createStackNavigator({
  LoggedOut: { screen: LoggedOut },
  LogIn: { screen: LogIn },
  ForgotPassword: { screen: ForgotPassword },
  TurnOnNotifications: { screen: TurnOnNotifications },
  CreateUser: { screen: CreateUser },
  UserEmail: { screen: UserEmail },
  Features: {
    screen: Features
  },
  UserIdentityScreen : {
    screen: UserIdentityScreen
  }
});

export default AppRouteConfigs;
