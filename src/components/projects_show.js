import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import { fetchProject } from '../actions/index';
import { Link } from 'react-router';

class ProjectsShow extends Component {
  static contextTypes = {
    router: PropTypes.object
  };

  componentWillMount() {
    console.log('in projects-show: ', this.props.params.id);
    this.props.fetchProject(this.props.params.id);
  }


  render() {
    const { project } = this.props;

    if (!project) {
      return <div>Loading...</div>;
    }

    return (
      <div>
        <Link to="/">Back To Index</Link>
        <h3>{project.name}</h3>
        <h6>Descriptions: {project.description}</h6>
        <p>{project.details}</p>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return { project: state.projects.project };
}

export default connect(mapStateToProps, { fetchProject })(ProjectsShow);
