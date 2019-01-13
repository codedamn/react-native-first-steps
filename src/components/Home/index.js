import React, {Component} from 'react'
import { Text, View, Alert } from 'react-native'
import { Button } from 'react-native-paper'
import styles from './styles'
import Header from '../Header'
import { AsyncStorage } from 'react-native'

export default class Home extends Component {

	state = {
		joke: "Loading..."
	}

	async getAnotherJoke() {
		try {

			// fetch(URL, config) --> Promise --> json --> update the state

			const value1 = await AsyncStorage.getItem('explicit')
			const value2 = await AsyncStorage.getItem('nerdy')

			const categoryArray = []
			let url

			if (value1 === '1') {
				categoryArray.push('explicit')
			}

			if(value2 === '1') {
				categoryArray.push('nerdy')
			}

			if(categoryArray.length === 0) {
				url = 'https://api.icndb.com/jokes/random'
			} else {
				url = `https://api.icndb.com/jokes/random?limitTo=[${categoryArray.join(',')}]`
			}

			console.log('URL => ', url)

			const joke = await fetch(url)
			
			const json = await joke.json()

			if(json.type === 'success') {
				this.setState({ 
					joke: json.value.joke
				})
			} else {
				throw new Error('Problems with fetch request')
			}

		} catch(error) {
			Alert.alert('Error!', error.message, [{ text: 'Ok' }])
		}
	}

	componentDidMount() {
		this.getAnotherJoke()
	}

	render() {
		return (<View style={styles.outerParent}>
				<Header />
				
				<View style={styles.contentArea}>

					<Text style={styles.text}>{this.state.joke.replace(/&quot;/g, '"')}</Text>
					<Button icon="sentiment-very-satisfied" mode="contained" onPress={() => this.getAnotherJoke()}>
						Another one!
					</Button>
				</View>
			</View>)
	}
}