import { StyleSheet, Text, View } from "react-native";
import colors from "../../constants/colors";

const NumberContainer = ({ children }) => {
	return (
		<View style={styles.container}>
			<Text style={styles.numberText}>{children}</Text>
		</View>
	);
};

export default NumberContainer;

const styles = StyleSheet.create({
	container: {
		alignItems: "center",
		paddingVertical: 24,
		paddingHorizontal: 38,
		marginTop: 0,
		marginBottom: 24,
		borderRadius: 8,
		borderWidth: 4,
		borderColor: colors.accent600,
		borderRadius: 100,
	},
	numberText: {
		fontSize: 36,
		fontWeight: "bold",
		color: colors.accent400,
	},
});
