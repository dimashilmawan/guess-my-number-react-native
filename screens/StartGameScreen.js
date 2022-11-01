import React, { useState } from "react";
import { View, TextInput, StyleSheet, Alert } from "react-native";
import PrimaryButton from "../components/UI/PrimaryButton";
import Card from "../components/UI/Card";
import Title from "../components/UI/Title";
import InstructionText from "../components/UI/InstructionText";
import colors from "../constants/colors";

const StartGameScreen = ({ onPickNumber }) => {
	const [enteredNumber, setEnteredNumber] = useState("");

	const resetInputHandler = () => {
		setEnteredNumber("");
	};

	const confirmInputHandler = () => {
		const chosenNumber = parseInt(enteredNumber);

		if (isNaN(chosenNumber) || chosenNumber <= 0 || chosenNumber > 99) {
			Alert.alert(
				"Invalid number!",
				"Number has to be a number between 1 and 99",
				[
					{
						text: "Okay",
						style: "default", // #IOS
						onPress: resetInputHandler,
					},
				]
			);
			return;
		}

		onPickNumber(chosenNumber);
	};

	const inputChangeHandler = enteredText => {
		setEnteredNumber(enteredText);
	};

	return (
		<View style={styles.rootContainer}>
			<Title>Guess My Number</Title>
			<Card>
				<InstructionText>Enter a number</InstructionText>
				<TextInput
					style={styles.inputNumber}
					maxLength={2}
					keyboardType="number-pad"
					autoCapitalize="none"
					autoCorrect={false}
					value={enteredNumber}
					onChangeText={inputChangeHandler}
				/>
				<View style={styles.buttonsContainer}>
					<View style={styles.buttonContainer}>
						<PrimaryButton onPress={resetInputHandler}>Reset</PrimaryButton>
					</View>
					<View style={styles.buttonContainer}>
						<PrimaryButton onPress={confirmInputHandler}>Confirm</PrimaryButton>
					</View>
				</View>
			</Card>
		</View>
	);
};

export default StartGameScreen;

const styles = StyleSheet.create({
	rootContainer: { flex: 1, alignItems: "center", marginTop: 100 },
	inputNumber: {
		height: 50,
		width: 50,
		marginBottom: 16,
		textAlign: "center",
		color: colors.accent500,
		fontSize: 32,
		fontWeight: "bold",
		borderColor: colors.accent500,
		borderBottomWidth: 2,
	},
	buttonsContainer: {
		flexDirection: "row",
	},
	buttonContainer: {
		flex: 1,
	},
});
