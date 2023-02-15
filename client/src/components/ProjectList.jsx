import { useQuery } from '@apollo/client'
import { GET_PROJECTS } from '../graphql/projects'
import Loading from './Loading'
import ProjectCard from './ProjectCard'

const ProjectList = () => {

  const { loading, error, data } = useQuery(GET_PROJECTS)
  if (loading) return <Loading />
  if (error) return <p>error</p>

  return (
    <div className='overflow-y-auto w-full h-96 px-5'>
      {
        data.projects.map(project => (
          <ProjectCard key={project._id} project={project} />
        ))
      }
    </div>
  )
}

export default ProjectList
