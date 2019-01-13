import React, {Component} from 'react'
import { Text, View, AsyncStorage, Alert } from 'react-native'
import Header from '../Header'
import { Checkbox, Button } from 'react-native-paper'
import styles from './styles.js'

export default class Settings extends Component {

	state = {
		checkbox1: false,
		checkbox2: false
	}

	async componentWillMount() {
		const checkbox1 = await AsyncStorage.getItem('explicit')
		const checkbox2 = await AsyncStorage.getItem('nerdy')

		this.setState({
			checkbox1: checkbox1 === '1',
			checkbox2: checkbox2 === '1'
		})
	}

	async storeData() {
		const { checkbox1, checkbox2 } = this.state

		try {
			if(checkbox1) {
				await AsyncStorage.setItem('explicit', '1')
			} else {
				await AsyncStorage.setItem('explicit', '0')
			}

			if(checkbox2) {

				await AsyncStorage.setItem('nerdy', '1')
			} else {
				await AsyncStorage.setItem('nerdy', '0')
			}

			Alert.alert('Success!', 'Your settings were saved', [{ text: 'Okay' }])

		} catch(error) {
			Alert.alert('Error!', error.message)
		}


	}

	render() {

		const {checkbox1, checkbox2} = this.state

		return <View style={{flex: 1}}>
			<Header type="settings" />

			<View style={styles.parent}>
			<Text style={styles.text}>What kind of jokes do you want?</Text>

			<View style={[styles.checkbox, styles.bordered]}>
				<Text>Explicit</Text>
				<Checkbox
					status={checkbox1 ? 'checked' : 'unchecked'}
					onPress={() => { this.setState({ checkbox1: !checkbox1 }); }}
				/>
			</View>


			<View style={styles.checkbox}>
				<Text>Nerdy</Text>
				<Checkbox
					status={checkbox2 ? 'checked' : 'unchecked'}
					onPress={() => { this.setState({ checkbox2: !checkbox2 }); }}
				/>
			</View>

			<Button style={styles.button} icon="save" mode="outlined" onPress={() => this.storeData()}>
				Save
			</Button>
			</View>
		</View>
	}
}