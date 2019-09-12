import React, { useContext } from 'react';

import { Context } from '../context/BlogContext';
import PostForm from '../components/PostForm';

const CreateScreen = ({ navigation }) => {
  const { addBlogPost } = useContext(Context);

  return <PostForm 
            onSubmit={(title, content) => {
              addBlogPost(title, content, () => navigation.navigate('Index'))
            }}  
          />
}

export default CreateScreen;
