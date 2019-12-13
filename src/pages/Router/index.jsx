import React from "react";
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
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
        <Link to="/">Home</Link>
      </li>
      <li>
        <Link to="/about">About</Link>
      </li>
      <li>
        <Link to="/topics">Topics</Link>
      </li>
    </ul>
  );
};


class RouterIndex extends React.Component {
  constructor(props) {
    super(props);
  }
  handleTouchStart(e){
    console.log(e, 'touchStart')
  }

  handleTouchMove(e) {
    console.log(e.currentTarget[0], 'touchMove')
  }

  render() {
    return (
      <Router>
        <div>
          <Header />

          <Route exact path="/home" component={Home} />
          <Route path="/about" component={About} />
          <Route path="/topics" component={Topics} />

          {/* <functionComp /> */}

          <div className="move-area">
            <div className="move-view" onTouchStart={this.handleTouchStart} onTouchMove={this.handleTouchMove}></div>
          </div>
        </div>
      </Router>
    )
  }
}

export default RouterIndex;