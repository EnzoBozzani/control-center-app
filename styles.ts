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
    },
    form: {
        width: '100%',
        justifyContent: 'center',
        alignItems: 'center',
        gap: 30,
        marginVertical: 40
    },
    formTitle: {
        fontSize: 22,
        fontWeight: 'bold',
        color: colors.green
    },
    formGroup: {
        width: '75%',
        gap: 10,
        justifyContent: 'center'
    },
    formLabel: {
        color: colors.white,
        fontWeight: 'bold'
    },
    input: {
        width: '100%',
        borderWidth: 1,
        borderColor: colors.white,
        padding: 10,
        borderRadius: 10,
        color: colors.white
    },
    formBtn: {
        width: '75%',
        backgroundColor: colors.green,
        borderRadius: 5,
        justifyContent: 'center',
        alignItems: 'center'
    },
    formBtnText: {
        fontSize: 18,
        paddingVertical: 5,
        color: colors.dark,
        fontWeight: 'bold'
    }
})