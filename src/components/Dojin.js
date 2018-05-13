import React, { Component } from 'react';
import { Route, Link } from 'react-router-dom';
import ApiRequester from '../utility/ApiRequester.js';

class Dojin extends Component {
  constructor() {
    super();
    this.state = {
      issuesData: []
    }
  }
  componentDidMount() {
    ApiRequester('issuesData').done((data) => {
      this.setState({
        issuesData: data
      })
    })
  }
  render(){
    return(
      <div>
        <h2>Issues</h2>
        <Route exact path='/Dojin' render={props => <IssueList issuesData={this.state.issuesData} /> }/>
        <Route path='/Dojin/:id' render={props => <Issue issuesData={this.state.issuesData} match={props.match}/> }/>
      </div>
    );
  }
}

class IssueList extends Component {
  render() {
    return(
      <div>
        {this.props.issuesData.map(issue =>(
          <li key={issue.id}>
            <Link to={`/Dojin/${issue.id}`}>{issue.name}</Link>
          </li>
        ))}
      </div>
    )
  }
}

class Issue extends Component {
  issueByName(id, issuesData) {
    return issuesData.find( issue => issue.id === id );
  }
  render(){
    const { id } = this.props.match.params;
    const issue = this.issueByName(id, this.props.issuesData);
    if( typeof issue === 'undefined' ){
      return (
        <div>
          <p>Issues with name '{id}' is noe exist.</p>
        </div>
      );
    }
    const containStyle = { 'border':'1px gray solid', 'padding':'10px' }
    return (
      <div>
        <div style={containStyle}>
          <p>{issue.name}</p>
          <p>{issue.event}</p>
          <p>{issue.specSize} / {issue.specPage}</p>
          <p>{issue.theme}</p>
        </div>
      </div>
    );
  }
}

export default Dojin;
