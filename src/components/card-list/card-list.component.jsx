import { Component } from "react";
import './card-list.style.css' ;
class CardList extends Component {
  render() {
    console.log("render from CardList");
    const { monsters } = this.props;
    console.log(monsters);
    return (
      <div className="card-list">
    {monsters.map((monster) => {
      const {name,email,id} = monster;
      return(
      
      <div className="card-container" key={id}>
        <img
          alt={`monster ${name}`}
          src={`https://robohash.org/${id}?set=set2&size=180x180`}
        />
        <h2>{name}</h2>
        <p>{email}</p>
      </div>
      
    )})}
      </div>
    );
  }
}

export default CardList;
