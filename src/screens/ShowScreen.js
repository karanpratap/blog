import React, { useContext } from "react";
import { View, StyleSheet, Text } from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";
import { Context } from "../context/BlogContext";
import { EvilIcons } from "@expo/vector-icons"

const ShowScreen = ({ navigation }) => {
    const { state } = useContext(Context);

    const blogPost = state.find((blogPost) => blogPost.id === navigation.getParam('id'));

    return <View style={styles.windowStyle}>
        <Text style={styles.titleStyle}>{blogPost.title}</Text>
        <Text style={styles.textStyle}>{blogPost.content}</Text>
    </View>
};

ShowScreen.navigationOptions = ({ navigation }) => {
    return {
        headerRight: () => (
            <TouchableOpacity onPress={() => navigation.navigate('Edit', { id: navigation.getParam('id') })}>
                <EvilIcons name="pencil" size={35} marginRight={20} />
            </TouchableOpacity>
        )
    };
}

const styles = StyleSheet.create({
    titleStyle: {
        fontSize: 30,
        fontWeight: 'bold',
        marginBottom: 20,
    },
    textStyle: {
        fontSize:14
    },
    windowStyle: {
        margin: 15
    }
});

export default ShowScreen;
