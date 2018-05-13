import React, { Component } from 'react';
import { BrowserRouter, Route, Link } from 'react-router-dom';

const App = () => (
  <BrowserRouter>
    <div>
      <ul>
        <li><Link to='/'>Home</Link></li>
        <li><Link to='/about'>About</Link></li>
        <li><Link to='/issues'>Issues</Link></li>
      </ul>

      <hr />

      <Route exact path='/' component={Home} />
      <Route path='/about' component={About} />
      <Route path='/issues' component={Issues} />
    </div>
  </BrowserRouter>
);

const IssuesData = [
  {
    'id': '1',
    'name': '1',
    'nameAAA': 'Love Challenge!',
    'date': '20150705T000001+0900',
    'event': '落とし神 Fall in Love FLAG 4.0',
    'specSize': 'B5',
    'specPage': 'モノクロ30頁',
    'specPress': '50',
    'specPressAdd': '20',
    'specPrice': '500',
    'class': '0',
    'theme': '猪突猛進結桂本',
    'remarks': ''

  },
  {
    'id': '2',
    'name': '2',
    'nameAAA': '健全',
    'date': '20150705T000002+0900',
    'event': '落とし神 Fall in Love FLAG 4.0',
    'specSize': '160cm × 50cm',
    'specPage': '',
    'specPress': '20',
    'specPressAdd': '',
    'specPrice': '3500',
    'class': '0',
    'theme': '五位堂結 抱き枕カバー',
    'remarks': ''
  },
  {
    'id': '3',
    'name': '3',
    'nameAAA': 'My Sweet Angels',
    'date': '20160504T000001+0900',
    'event': '落とし神 Fall in Love FLAG 4.0',
    'specSize': 'A4',
    'specPage': 'フルカラ24頁',
    'specPress': '50',
    'specPressAdd': '20',
    'specPrice': '800',
    'class': '0',
    'theme': 'けいおん中心よろずイラスト本',
    'remarks': '「PULP FICTION STORE」名義'
  }
];

const issueByName = id => IssuesData.find( issue => issue.id === id );

const Home = () => (
  <div>
    <h2>Home</h2>
    <p>Welcome to Momokuri-Rock</p>
  </div>
);
const About = () => (
  <div>
    <h2>About</h2>
    <p>Momokuri-Rock Presents are</p>
  </div>
);


class Issues extends Component {
  constructor() {
    super();
    this.state = {}
    this.handleVote = this.handleVote.bind(this);
  }
  componentWillMount() {
    IssuesData.forEach(issue => {
      this.setState({
        ...this.state,
        [issue.id]: 0
      });
    });
  }
  handleVote(id) {
    this.setState({
      [id]: this.state[id] + 1
    })
  }

  render(){
    return(
      <div>
        <h2>Issues</h2>
        <Route exact path='/issues' render={props => <IssueList handleVote={this.handleVote} /> }/>
        <Route path='/issues/:id' render={props => <Issue match={props.match} votes={this.state}/> }/>
      </div>
    );
  }
}

/*
const Issues = () => (
  <div>
    <h2>Issues</h2>
    <Route exact path='/issues' component={IssueList} />
    <Route path='/issues/:name' component={Issue} />
  </div>
);
*/

const IssueList = props => (
  <div>
    {IssuesData.map(issue =>(
      <li key={issue.id}>
        <Link to={`/issues/${issue.id}`}>{issue.nameAAA}</Link>
        <button onClick={() => props.handleVote(issue.id)}>+</button>
      </li>
    ))}
  </div>
);

const Issue = props => {
  const { id } = props.match.params;
  const issue = issueByName(id);
  const vote = props.votes[id];
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
        <p>{issue.nameAAA}</p>
        <p>{issue.event}</p>
        <p>{issue.specSize} / {issue.specPage}</p>
        <p>{issue.theme}</p>
      </div>
      <h1>Vote: {vote}</h1>
    </div>
  );
}

export default App;
/*
import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  render() {
    return (
        <header className='App-header'>
          <img src={logo} className='App-logo' alt='logo' />
          <h1 className='App-title'>Welcome to React123</h1>
        </header>
        <p className='App-intro'>
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
      </div>
    );
  }
}

export default App;
*/
