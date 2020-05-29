import React from 'react';

import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import Hero from './Hero';
import Video from './Video';
import Header from './Header';
import Login from './Login';
import Register from './Register';
import News from './News';
import Landing from './Landing';
import ListaNew from './ListaNew';

class App extends React.Component{

	render() {
		return(
		<div className="App"> 
			<Router>
				<Header/>
				<Switch>
					<Route exact path="/">
							<Hero/>
						<div className="container">
							<News/>
							<Video/>
							<a href="#" className="scroll top"><i className="fas fa-angle-double-up"></i></a>
							<div className="text-center">
							<button className="btn btn-MoreNews">More News</button>
							</div>
							<ListaNew/>
						</div>
					</Route>
					<Route path="/login">
						<div className="container">
							<Login/>	
						</div>
					</Route>
					<Route path="/register">
						<div className="container">
							<Register/>	
						</div>
					</Route>
					<Route component={Landing}>
					</Route>
				</Switch>
			</Router>
		</div>	
		);
	  }
};

export default App;

