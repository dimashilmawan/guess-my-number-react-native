import { StyleSheet, Text, View } from "react-native";
import Colors from "../../constants/colors";
const GuessLogItem = ({ roundNumber, guess }) => {
	return (
		<View style={styles.listItem}>
			<Text style={styles.item}>#{roundNumber + 1}</Text>
			<Text style={styles.item}>Opponent's Guess : {guess}</Text>
		</View>
	);
};

export default GuessLogItem;

const styles = StyleSheet.create({
	listItem: {
		flexDirection: "row",
		justifyContent: "space-between",
		padding: 16,
		marginVertical: 8,
		borderRadius: 8,
		backgroundColor: Colors.accent500,
		elevation: 4,
		shadowColor: "black",
		shadowOffset: { width: 0, height: 2 },
		shadowOpacity: 0.2,
		shadowRadius: 2,
		width: "100%",
	},
	item: {
		fontFamily: "open-sans-bold",
	},
});
