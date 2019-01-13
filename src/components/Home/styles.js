import { StyleSheet } from 'react-native'


export default StyleSheet.create({
	outerParent: {
		flex: 1,
	},

	contentArea: {
		flex: 1,
		justifyContent: 'center',
		alignItems: 'center'
	},

	text: {
		color: 'black',
		fontSize: 25,
		textAlign: 'center',
		borderWidth: 2,
		borderColor: 'black',
		padding: 30,
		margin: 20
	}
})