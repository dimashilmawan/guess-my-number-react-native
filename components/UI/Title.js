import { StyleSheet, Text } from "react-native";
import Colors from "../../constants/colors";
import colors from "../../constants/colors";
const Title = ({ children }) => {
	return <Text style={styles.title}>{children}</Text>;
};

export default Title;

const styles = StyleSheet.create({
	title: {
		fontSize: 36,
		fontFamily: "open-sans-bold",
		fontWeight: "bold",
		padding: 12,
		textAlign: "center",
		color: Colors.accent400,
	},
});
