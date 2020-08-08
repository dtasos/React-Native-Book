import React from 'react';
import { StyleSheet, Text, View, TextInput } from 'react-native';

export default class SearchInput extends React.Component {
    render() {
        return (
            <View
                style={styles.container}>
                <TextInput
                    autoCorrect={false}
                    placeholder={this.props.placeholder}
                    placeholderTextColor="white"
                    underlineColorAndroid="transparent"
                    style={styles.textInput}
                    clearButtonMode="always"
                />
            </View>
        );
    }
}

const styles = StyleSheet.create({
    textInput: {
        flex: 1,
        color: 'white',
    },
    container: {
        backgroundColor: '#666',
        height: 40,
        width: 300,
        marginTop: 20,
        marginHorizontal: 40,
        paddingHorizontal: 10,
        borderRadius: 5,
    },
});
