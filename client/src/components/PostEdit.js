import React from 'react'
import { Edit, SimpleForm, TextInput, DateInput } from 'react-admin'

const PostEdit = (props) => {
  return (
    <Edit title='Edit post' {...props} >
        <SimpleForm>
            <TextInput disabled source='title' />
            <TextInput source='title' />
            <TextInput multiline source='body' />
            <DateInput label="Published" source='PublishedAt' />
        </SimpleForm>
    </Edit>
  )
}

export default PostEdit