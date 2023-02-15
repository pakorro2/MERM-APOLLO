import React from 'react'
import { useParams, useNavigate, Link } from 'react-router-dom'
import { useMutation, useQuery } from '@apollo/client'
import { DELETE_PROJECT, GET_PROJECT } from '../graphql/projects'
import TaskForm from '../components/tasks/TaskForm'
import TasksList from '../components/tasks/TasksList'
import Loading from '../components/Loading'

const ProjectDetails = () => {
  const navigate = useNavigate();
  const params = useParams()
  const [deleteProject] = useMutation(DELETE_PROJECT, {
    refetchQueries: ['getProjects']
  })
  const handleDelete = () => {
    deleteProject({
      variables: {
        id: params.id
      },
    })
    return navigate('/')
  }
  const { data, loading, error } = useQuery(GET_PROJECT, {
    variables: {
      id: params.id
    },
    skip: !params.id
  })

  if (loading) return <Loading />
  if (error) return <p>error</p>

  return (
    <div>
      <Link to='/projects'>
        <button className='bg-sky-900 text-white px-3 py-2 mb-1'>Return projects</button>
      </Link>
      <div className="bg-zinc-900 mb-2 p-10 flex justify-between">
        <div>
          <h1 className='text-2xl'>{data.project.name}</h1>
          <p>{data.project.description}</p>
        </div>
      </div>
      <button
        onClick={handleDelete}
        className='bg-red-500 px-3 py-2 mb-1'
      >Delete</button>
      <TaskForm />
      <TasksList tasks={data.project.tasks} />
    </div>
  )
}

export default ProjectDetails
