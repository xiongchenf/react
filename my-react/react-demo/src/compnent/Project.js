import React, { Component } from 'react';
import ProjectItem from "./ProjectItem";
export default class Project extends Component {
    constructor(props) {
        super(props);
    }
    render() {
        let projectItems;
        if (this.props.projects) {
            projectItems = this.props.projects.map(project => {
                return <ProjectItem key={project.title} project={project}/>
            })
        }

        return (
            <div className={'projects'}>
                {projectItems}
            </div>
        )
    }
}