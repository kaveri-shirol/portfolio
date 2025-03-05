function ProjectCard({src,link,heading,pname}) {
  return (
    <a href={link}>
            <img  className ="hover" src={src} alt={`${heading} logo`} />
            <h3>{heading}</h3>
            <p>{pname}</p>
            </a>
  )
}

export default ProjectCard