import { StyleSheet, View } from "react-native";
import Colors from "../../constants/colors";

const Card = ({ children }) => {
	return <View style={styles.card}>{children}</View>;
};

export default Card;

const styles = StyleSheet.create({
	card: {
		alignItems: "center",
		marginTop: 24,
		// marginHorizontal: 16,
		padding: 16,
		borderRadius: 8,
		backgroundColor: Colors.primary700,
		// SHADOW FOR #ANDROID
		elevation: 4,
		// SHADOW FOR #IOS
		shadowColor: Colors.primary700,
		shadowOffset: { width: 0, height: 2 },
		shadowRadius: 8,
		shadowOpacity: 0.2,
	},
});
