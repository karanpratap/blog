import React, { useState } from "react";
import { View, Text, StyleSheet, TextInput, Button } from "react-native";

const BlogPostForm = ({ onSubmit, initialValues }) => {
    const [title, setTitle] = useState(initialValues.title);
    const [content, setContent] = useState(initialValues.content);

    return <View>
        <Text style={styles.label}>Enter Title</Text>
        <TextInput value={title} style={styles.input} onChangeText={setTitle} />
        <Text style={styles.label}>Enter Content</Text>
        <TextInput value={content} style={styles.input} onChangeText={setContent} />
        <Button title="Save Blog Post" onPress={() => onSubmit(title, content)} />
    </View>
};

BlogPostForm.defaultProps = {
    initialValues: {
        title: '',
        content: ''
    }
}

const styles = StyleSheet.create({
    input: {
        borderWidth: 1,
        borderColor: 'black',
        marginBottom: 15,
        padding: 5,
        margin: 5
    },
    label: {
        fontSize: 20,
        marginBottom: 5,
        marginLeft: 5
    }
});

export default BlogPostForm;