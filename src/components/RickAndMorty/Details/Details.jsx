import React, { useContext, useMemo } from "react";
import { Link } from 'react-router-dom'
import { DataContext } from "../../../App";
import { Redirect, withRouter } from 'react-router-dom';
import './Details.css';

const Details = ({ match }) => {
  const { list } = useContext(DataContext)
  const item = useMemo(() => list.find(item => `${item.id}` === match.params.id), [list, match.params.id])
console.log(item)
  if (!item) {
    return <Redirect to="/" />
  }

  return (
    <>
      <div className="App">       
       </div>
      <div className="topConteiner">
      <button className="BackButton"><Link to={'/'}>Go Back</Link></button>
      <h1 className='detailsCharacted'>Детали персонажа</h1>
       <img src={item.image} className="avatar"></img>  
        <p className="info">Имя персонажа: {item.name}</p>
        <p className="info">Статус: {item.status}</p>
        <p className="info">Расса: {item.species}</p>
        <p className="info">Тип: {item.type}</p>
        <p className="info">Локация: {item.location.name}</p>
             
      </div>
    </>
  )
}

export default withRouter(Details);
