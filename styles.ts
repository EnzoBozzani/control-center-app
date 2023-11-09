import { StyleSheet } from "react-native"

export const colors = {
    green: '#01e85d',
    white: '#fff',
    dark: '#1b1b1b',
    lightGray: '#262626'
}

export const common = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: colors.dark
    }
})