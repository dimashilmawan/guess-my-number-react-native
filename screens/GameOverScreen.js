import { Text, View, Image, StyleSheet } from "react-native";
import PrimaryButton from "../components/UI/PrimaryButton";
import Title from "../components/UI/Title";
import Colors from "../constants/colors";

const GameOverScreen = ({ roundsNumber, userNumber, onStartNewGame }) => {
	return (
		<View style={styles.rootContainer}>
			<Title>Game Over</Title>
			<View style={styles.imageContainer}>
				<Image
					style={styles.image}
					source={require("../assets/images/success.png")}
				/>
			</View>
			<Text style={styles.summaryText}>
				Your phone needed{" "}
				<Text style={styles.highlightText}>{roundsNumber}</Text> round to guess
				the number <Text style={styles.highlightText}>{userNumber}</Text>
			</Text>
			<PrimaryButton onPress={onStartNewGame}>Start new game</PrimaryButton>
		</View>
	);
};

export default GameOverScreen;

const styles = StyleSheet.create({
	rootContainer: {
		padding: 24,
		flex: 1,
		justifyContent: "center",
		alignItems: "center",
	},
	imageContainer: {
		width: 300,
		height: 300,
		borderRadius: 150,
		borderWidth: 3,
		borderColor: Colors.primary600,
		overflow: "hidden",
		marginVertical: 24,
	},
	image: {
		width: "100%",
		height: "100%",
	},
	summaryText: {
		fontFamily: "open-sans",
		fontSize: 22,
		textAlign: "center",
		marginBottom: 16,
	},
	highlightText: {
		fontFamily: "open-sans-bold",
		color: Colors.primary700,
	},
});
