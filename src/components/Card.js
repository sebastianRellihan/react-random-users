import React, { Component } from 'react';

class Card extends Component {
  constructor(props) {
    super(props);
    this.state = {
      detailShow: false
    }
  }

  detailShowTrigger() {
    if(this.state.detailShow === false) {
      this.setState({detailShow: true})
    } else {
      this.setState({detailShow: false})  
    }
  }

  render() {
    // console.log(this.props.contact.login.uuid)
    return (
      <article className="card">
        <img src={this.props.contact.picture.large} alt=""/>
        <div className="card-main-content">
          <h4>{this.props.contact.name.last}, {this.props.contact.name.first}</h4>
          <p><i className="far fa-envelope" /> {this.props.contact.email}</p>
          <p><i className="far fa-calendar-alt" /> {this.props.contact.dob.date.slice(0,10)} {`(edad: ${this.props.contact.dob.age})`}</p>
        </div>
        <div className={"card-aditional-content " + ( this.state.detailShow === false ? 'hide' : '')}>
          <p><i className="fas fa-map-pin" /> {`${this.props.contact.location.street.name} ${this.props.contact.location.street.number}`}</p>
          <p><i className="fas fa-map-marked-alt" /> {`${this.props.contact.location.city}, ${this.props.contact.location.country} (CP: ${this.props.contact.location.postcode})`}</p>
          <p><i className="far fa-calendar-alt" /> {this.props.contact.registered.date.slice(0,10)}</p>
          <p><i className="fas fa-mobile-alt" /> {this.props.contact.phone}</p>
        </div>
        <div className="card-actions">
          <button className="card-close-btn" onClick={() => this.props.removeCard(this.props.contact.login.uuid)}>
            <i className="fas fa-times" />
          </button>
  
          <button className={"card-detail-open " + ( this.state.detailShow === true ? 'hide' : '')} onClick={() => this.detailShowTrigger() }>Ver más <i className="fas fa-caret-down" /></button>
          <button className={"card-detail-close " + ( this.state.detailShow === false ? 'hide' : '')} onClick={() => this.detailShowTrigger() }>Ver menos <i className="fas fa-caret-up" /></button>
          <button className="card-move-l-btn" onClick={() => {this.props.moveLeft(this.props.contact.login.uuid)}}>
            <i className="fas fa-angle-left" />
          </button>
          <button className="card-move-r-btn" onClick={() => {this.props.moveRight(this.props.contact.login.uuid)}}>
            <i className="fas fa-angle-right" />
          </button>
        </div>
      </article>
    )
  };
}

export default Card;
