// import React, { createContext, useState } from 'react';
// import ListCharacted from "./components/ListCharacted";
// import { Route, Switch } from 'react-router-dom';
// import Details from './components/Details';
// import ProgresBar from './components/ProgresBar'

// import './App.css';

// export const DataContext = createContext({
//   list: [],
//   setList: () => { }
// })

// const App = () => {
//   const [list, setList] = useState([])

//   return (
//     <div className="App">
//       <DataContext.Provider value={{
//         list,
//         setList,
//       }}>
//         <Switch>
//           <Route path="/details/:id" exact component={Details}></Route>
//           <Route path="/" exact component={ListCharacted}></Route>
//           <Route path="/progresBar" exact component={ProgresBar}></Route>
//         </Switch>
//       </DataContext.Provider>
//     </div>
//   )
// }

// // state = {
// //   listItem: null
// // }

// // setListItem = (listItem) => {
// //   this.setState({ listItem })
// // }

// export default App;
