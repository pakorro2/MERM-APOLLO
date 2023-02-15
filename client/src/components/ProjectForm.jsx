import { useMutation } from '@apollo/client';
import React, { useState } from 'react'
import { CREATE_PROJECT, GET_PROJECTS } from '../graphql/projects'

const ProjectForm = () => {

  const [project, setProject] = useState({
    name: '',
    description: ''
  });

  const [createProject, { loading, error }] = useMutation(CREATE_PROJECT, {
    refetchQueries: ['getProjects']
  })


  const hadleChange = ({ target: { name, value } }) =>
    setProject({
      ...project,
      [name]: value,
    })
  const hadleSubmit = (e) => {
    e.preventDefault()
    createProject({
      variables: {
        name: project.name,
        description: project.description
      }
    })
    e.target.reset()
    e.target.name.focus()
  }
  return (
    <form onSubmit={hadleSubmit} className='w-2/5'>
      {error && <p>{error.message}</p>}
      <input
        type='text'
        name='name'
        placeholder='write a title'
        onChange={hadleChange}
        className='bg-zinc-800 text-white rounded-lg shadow-lg p-4 block w-full mb-3'
      />

      <textarea
        name="description"
        rows="3"
        placeholder='Write a description'
        onChange={hadleChange}
        className='bg-zinc-800 text-white rounded-lg shadow-lg p-4 block w-full mb-3'
      >

      </textarea>

      <button disabled={!project.name || !project.description || loading}
        className='bg-blue-500 px-4 py-1 rounded-md text-lg mb-3 disabled:bg-zinc-400'
      >Save</button>

    </form>
  )
}

export default ProjectForm
