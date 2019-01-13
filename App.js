import React, {Component} from 'react'
import { StatusBar, View } from 'react-native'
import { Provider as PaperProvider } from 'react-native-paper'
import { createStackNavigator, createAppContainer } from "react-navigation"

// components
import Home from './src/components/Home'
import Settings from './src/components/Settings'

export default class App extends Component {
	render() {
		return	<View style={{flex: 1}}>
				<StatusBar
					backgroundColor="#6200ee"
					barStyle="light-content"
				/>
				<PaperProvider>
					<AppContainer />
				</PaperProvider>
			</View>
	}
}


const AppNavigator = createStackNavigator({
	Home,
	Settings
}, {
	headerMode: 'none',
	navigationOptions: {
		headerVisible: false
	}
})
  
const AppContainer = createAppContainer(AppNavigator)