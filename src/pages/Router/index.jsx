import React from "react";
import { HashRouter as Router, Route, Link } from 'react-router-dom';
import './index.scss';

function Home() {
  return <h2>Home</h2>;
}

function About() {
  return <h2>About</h2>;
}
function Topic({ match }) {
  console.log(match, '11111111')
  return <h3>Requested Param: {match.params.id}</h3>
}
function Topics({ match }) {
  console.log(match, '2222222')
  return (
    <div>
      <h2>Topics</h2>
      <ul>
        <li>
          <Link to={`${match.url}/components`}>Components</Link>
        </li>
        <li>
          <Link to={`${match.url}/props-v-state`}>Props v. State</Link>
        </li>
      </ul>

      <Route path={`${match.url}/:id`} component={Topic} />
      <Route path={match.path} exact render={() => <h3>Please select a topic.</h3>} />
    </div>
  )
}

// const functionComp = function () {
//   const [c1, setC1] = useState(0);
//   const increment = c => c + 1

//   const handleClick = useCallback(() => setC1(increment), [c1])
//   return (
//     <div className="wrapper">
//       <div className='text'>{increment}</div>
//       <button onClick={handleClick}>点击事件</button>
//     </div>
//   )
// }

function Header() {
  return (
    <ul>
      <li>
        <Link to="/route/home">Home</Link>
      </li>
      <li>
        <Link to="/route/about">About</Link>
      </li>
      <li>
        <Link to="/route/topics">Topics</Link>
      </li>
    </ul>
  );
};


class RouterIndex extends React.Component {
  constructor(props) {
    super(props);
  }

  jupmToHook() {
    //  this.props.history.push('/hook/999')
    this.props.history.push({
      pathname: '/hook/999',
      state: { id: 999 }
    })
  }

  render() {
    return (
      // <Router>
      <div>
        <Header />

        <Route exact path="/route/home" component={Home} />
        <Route path="/route/about" component={About} />
        <Route path="/route/topics" component={Topics} />

        <button onClick={this.jupmToHook.bind(this)}>函数页面跳转</button>
      </div>
      // </Router>
    )
  }
}

export default RouterIndex;