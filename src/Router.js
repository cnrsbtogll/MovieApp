import React from 'react';
import { createAppContainer} from 'react-navigation';
import { createBottomTabNavigator } from 'react-navigation-tabs';
import Icon from 'react-native-vector-icons/FontAwesome';

//auth stack
import SignIn from './screens/SignIn';
import SignUp from './screens/SignUp';


const AuthStack= createBottomTabNavigator(
    {
        SignIn:{
            screen:SignIn,
            navigationOptions:{
                title:'Sign In',
                tabBarIcon:({tintColor}) => <Icon name="sign-in" style={{color: tintColor}}/>
            }
        },
        SignUp:{
            screen:SignUp,
            navigationOptions:{
                title:'Sign Up',
                tabBarIcon:({tintColor}) => <Icon name="user-plus" style={{color: tintColor}}/>
            }
        },
    },
    {
        initialRouteName:'SignUp',
        tabBarOptions:{
            activeTintColor:'#fff',
            inactiveTintColor:'#586589',
            style:{
            backgroundColor:'#171f33'
            }            
        }
    }
)
export default createAppContainer(AuthStack);