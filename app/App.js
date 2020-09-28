import * as React from 'react';
import {View, Text} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import HomeView from './Views/HomeView';

const Stack = createStackNavigator();

function App() {
    return (
        <NavigationContainer>
            <Stack.Navigator>
                <Stack.Screen name="Home" component={HomeView} options={{
                    headerShown: false
                }}/>
            </Stack.Navigator>
        </NavigationContainer>
    );
}

export default App;
