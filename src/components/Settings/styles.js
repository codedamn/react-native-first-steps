import { StyleSheet } from 'react-native'

export default StyleSheet.create({
	checkbox: {
		flexDirection: 'row',
		justifyContent: 'center',
		alignItems: 'center',
		paddingTop: 15,
		paddingBottom: 15,
		
	},

	parent: {
		flex: 1,
		justifyContent: 'center',
	},

	bordered: {
		borderBottomWidth: 2,
		borderBottomColor: '#eee',
		marginTop: 10,
		marginBottom: 10
	},
	text: {
		fontSize: 25,
		marginTop: 20,
		textAlign: 'center'
	},

	button: {
		padding: 10
	}
})