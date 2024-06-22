// import logo from './logo.svg';
// import './App.css';

// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }

// export default App;
// App.js
import React from "react";
import NavBar2 from "./Components/NavBar2";
import NavBar1 from "./Components/NavBar1";
import News from "./Components/News";
import { BrowserRouter, Route, Routes } 
	from "react-router-dom";
	

function App() {
	return (
		<>
			<div className="App">
				<BrowserRouter>
					<NavBar1 />
					<NavBar2 />

					<div className="container">
						<div className="row">
							<div className="col-md">
								<Routes>
									<Route
										path="/"
										element={
											<News key="general"
											category="general" />}
									/>
									<Route
										path="/Entertainment"
										element={
											<News key="entertainment"
											category="entertainment" />
										}
									/>
									<Route
										path="/Technology"
										element={
											<News key="technology"
											category="technology" />}
									/>
									<Route
										path="/Sports"
										element={
											<News key="sports"
											category="sports" />}
									/>
									<Route
										path="/Business"
										element={
											<News key="business"
											category="business" />}
									/>
									<Route
										path="/Health"
										element={
											<News key="health"
											category="health" />}
									/>
									<Route
										path="/Science"
										element={
											<News key="science"
											category="science" />}
									/>
								</Routes>
							</div>
						</div>
					</div>
				</BrowserRouter>
			</div>
		</>
	);
}

export default App;
