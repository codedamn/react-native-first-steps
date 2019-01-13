import * as React from 'react';
import { Appbar } from 'react-native-paper';

import { withNavigation } from 'react-navigation'

class Header extends React.Component {

	navigateToSettings() {
		this.props.navigation.navigate('Settings')
	}

	goBack() {
		this.props.navigation.goBack()
	}

	render() {

		const isSettings = this.props.type === "settings"

		const title = isSettings ? "Settings" : "Jokes App"
		const subtitle = isSettings ? "Wakanda joke do you like?" : "You'll die of laughter!"
		
		return (
			<Appbar.Header>

				{ isSettings && 
				<Appbar.BackAction onPress={_ => this.goBack()} />	
			}

				<Appbar.Content
					title={title}
					subtitle={subtitle}
				/>

				{ isSettings || <Appbar.Action icon="settings" onPress={_ => this.navigateToSettings()} /> }
			</Appbar.Header>
		);
	}
}

export default withNavigation(Header)