import React from "react";
import { View, Text, Pressable, StyleSheet } from "react-native";
import colors from "../../constants/colors";

const PrimaryButton = ({ onPress, children }) => {
	return (
		<View style={styles.buttonOuterContainer}>
			<Pressable
				style={({ pressed }) =>
					pressed
						? [styles.pressed, styles.buttonInnerContainer]
						: styles.buttonInnerContainer
				}
				onPress={onPress}
				android_ripple={{ color: colors.primary800 }}
			>
				<Text style={styles.buttonText}>{children}</Text>
			</Pressable>
		</View>
	);
};

export default PrimaryButton;

const styles = StyleSheet.create({
	buttonOuterContainer: {
		margin: 4,
		borderRadius: 28,
		backgroundColor: colors.primary800,
		overflow: "hidden",
		///////////////////////////////
		// SHADOW FOR #ANDROID
		elevation: 8,
		// SHADOW FOR BOTH
		shadowColor: colors.primary600,
		// SHADOW FOR #IOS
		shadowOffset: { width: 0, height: 2 },
		shadowOpacity: 0.2,
		shadowRadius: 4,
	},
	buttonInnerContainer: {
		paddingVertical: 12,
		paddingHorizontal: 24,
	},
	buttonText: { color: "white", textAlign: "center", fontSize: 18 },
	pressed: { opacity: 0.8 },
});
