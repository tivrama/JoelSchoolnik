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
        <li className="list-group-item" key={post.id}>
          <Link to={"projects/" + post.id}>
            <span className="pull-xs-right">{post.categories}</span>
            <strong>{post.title}</strong>
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
  return { projects: state.projects.all };
}

export default connect(mapStateToProps, { fetchProjects })(ProjectsIndex);
