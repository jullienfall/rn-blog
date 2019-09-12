import React, { useContext } from 'react';

import { Context } from '../context/BlogContext';
import PostForm from '../components/PostForm';

const EditScreen = ({ navigation }) => {
  const id = navigation.getParam('id');
  const { state, editBlogPost } = useContext(Context);
  const blogPost = state.find((blogPost) => blogPost.id === id);

  return <PostForm 
          initialValues={blogPost} 
          onSubmit={(title, content) => {
            editBlogPost(id, title, content, () => navigation.pop())
          }}  
        />
};

export default EditScreen;
