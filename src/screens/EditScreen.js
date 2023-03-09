import React, { useContext } from "react";
import { View, StyleSheet } from "react-native";
import BlogPostForm from "../components/BlogPostForm";
import { Context } from "../context/BlogContext";

const EditScreen = ({ navigation }) => {
    const { state, editBlogPost } = useContext(Context);

    console.log(state);
    console.log(navigation.getParam('id'));
    const blogPost = state.find((blogPost) => blogPost.id === navigation.getParam('id'));

    console.log(blogPost);

    return <BlogPostForm initialValues={{title: blogPost.title, content: blogPost.content}} onSubmit={(title, content) => {
        console.log(title, content);
        editBlogPost(title, content, navigation.getParam('id'), () => {
            navigation.pop();
        });
    }} />
};

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

export default EditScreen;
