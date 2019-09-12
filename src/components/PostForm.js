import React, { useState } from 'react';
import { View, Text, StyleSheet, TextInput, Button } from 'react-native';

const PostForm = ({ initialValues, onSubmit }) => {
  const [title, setTitle] = useState(initialValues.title);
  const [content, setContent] = useState(initialValues.content);

  const id = initialValues ? initialValues.id : null;
  return (
    <View>
      <Text style={styles.label}>Enter New Title:</Text>
      <TextInput style={styles.input} value={title} onChangeText={text => setTitle(text)} />
      <Text style={styles.label}>Enter New Content:</Text>
      <TextInput style={styles.input} value={content} onChangeText={text => setContent(text)} />
      <Button 
        title="Save" 
        onPress={() => onSubmit(title, content, id)} 
      />
    </View>
  )
};

PostForm.defaultProps = {
  initialValues: {
    title: '',
    content: '',
  }
}

const styles = StyleSheet.create({
    input: {
      fontSize: 18,
      borderWidth: 1,
      borderColor: 'black',
      marginBottom: 15,
      padding: 5,
      margin: 5,
    },
    label: {
      fontSize: 20,
      marginBottom: 5,
      marginLeft: 5,
    }
  });

export default PostForm;
