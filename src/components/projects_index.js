import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchProjects } from '../actions/index';
import { Link } from 'react-router';

class ProjectsIndex extends Component {
  componentWillMount() {
    this.props.fetchProjects();
  }

  renderProjects() {
    return this.props.projects.map((post) => {
      return (
        <li className="list-group-item" key={post._id}>
          <Link to={"projects/" + post.name}>
            <span className={ `link-${ post._id }` }></span>
            <span className="pull-xs-right">{post.url}</span>
            <strong>{post.name}</strong>
            <p>{post.description}</p>
          </Link>
        </li>
      );
    });
  }

  render() {
    return (
      <div>
        <h3>Projects</h3>
        <ul className="list-group">
          {this.renderProjects()}
        </ul>
      </div>
    );
  }
}

function mapStateToProps(state) {
  console.log('state: ', state.projects.all);
  return { projects: state.projects.all };
}

export default connect(mapStateToProps, { fetchProjects })(ProjectsIndex);
