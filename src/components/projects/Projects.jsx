import React, {Component} from 'react';
import ProjectCard from '../ProjectCard/projectCard';
import projects from "../../projects.json";
import Wrapper from '../Wrapper/Wrapper';




class Projects extends Component {
  state = {
    projects
  };

  render() {
    return (
    <Wrapper>
      {this.state.projects.map(project => (
      <ProjectCard
      id={project.id}
      title={project.title}
      image={project.image}
      repository_link={project.repository_link}
      deployed_link={project.deployed_link}
      />
      ))}
    </Wrapper>
  )
}
}

export default Projects;