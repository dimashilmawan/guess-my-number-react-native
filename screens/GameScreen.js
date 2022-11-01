import { useState, useEffect } from "react";
import { StyleSheet, View, Alert, FlatList, Button, Text } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import NumberContainer from "../components/game/NumberContainer";
import Card from "../components/UI/Card";
import InstructionText from "../components/UI/InstructionText";
import PrimaryButton from "../components/UI/PrimaryButton";
import Title from "../components/UI/Title";
import GuessLogItem from "../components/game/GuessLogItem";

const generateRandomBetween = (min, max, exclude) => {
	const rndNum = Math.floor(Math.random() * (max - min)) + min;

	if (rndNum === exclude) {
		return generateRandomBetween(min, max, exclude);
	} else {
		return rndNum;
	}
};

let minBoundary = 1;
let maxBoundary = 100;

const GameScreen = ({ userNumber, onGameOver }) => {
	const initialGuess = generateRandomBetween(1, 100, userNumber);
	const [currentGuess, setCurrentGuess] = useState(initialGuess);
	const [guessRounds, setGuessRounds] = useState([initialGuess]);

	useEffect(() => {
		if (userNumber === currentGuess) {
			onGameOver(guessRounds.length);
			minBoundary = 1;
			maxBoundary = 100;
		}
	}, [userNumber, currentGuess]);

	const nextGuessHandler = direction => {
		if (
			(direction === "lower" && currentGuess < userNumber) ||
			(direction === "greater" && currentGuess > userNumber)
		) {
			Alert.alert("Dont't Lie!", "You know that this is wrong...", [
				{ text: "Sorry", style: "default" },
			]);
			return;
		}
		if (direction === "lower") {
			maxBoundary = currentGuess;
		}
		if (direction === "greater") {
			minBoundary = currentGuess + 1;
		}
		const newRandomNumber = generateRandomBetween(
			minBoundary,
			maxBoundary,
			currentGuess
		);
		setCurrentGuess(newRandomNumber);
		setGuessRounds(prevGuessRounds => [newRandomNumber, ...prevGuessRounds]);
	};

	return (
		<View style={styles.screen}>
			<Title>Opponent's Guess</Title>
			<NumberContainer>{currentGuess}</NumberContainer>
			<Card>
				<InstructionText style={styles.instructionText}>
					Higher or Lower ?
				</InstructionText>
				<View style={styles.buttonsContainer}>
					<View style={styles.buttonContainer}>
						<PrimaryButton onPress={nextGuessHandler.bind(this, "lower")}>
							<Ionicons name="md-remove" size={24} color="white" />
						</PrimaryButton>
					</View>
					<View style={styles.buttonContainer}>
						<PrimaryButton onPress={nextGuessHandler.bind(this, "greater")}>
							<Ionicons name="md-add" size={24} color="white" />
						</PrimaryButton>
					</View>
				</View>
			</Card>
			<View style={styles.listContainer}>
				<FlatList
					data={guessRounds}
					renderItem={({ index, item }) => (
						<GuessLogItem roundNumber={index} guess={item} />
					)}
					keyExtractor={item => item}
				/>
			</View>
		</View>
	);
};

export default GameScreen;

const styles = StyleSheet.create({
	screen: {
		flex: 1,
		paddingVertical: 34,
		paddingHorizontal: 16,
		alignItems: "center",
	},
	buttonsContainer: {
		flexDirection: "row",
	},
	buttonContainer: {
		flex: 1,
	},
	instructionText: {
		marginBottom: 16,
	},
	listContainer: {
		flex: 1,
		paddingVertical: 16,
		// paddingHorizontal: 28,
	},
});
