import React from 'react';
import Card from './Card';

function Cards(props) {
  return (
    <section className="cards">
      { props.contacts.map((contact, idx) => {
        return <Card removeCard={props.removeCard} moveRight={props.moveRight} moveLeft={props.moveLeft} contact={contact} key={idx}/>  
      }) }
    </section>
  );
}

export default Cards;
