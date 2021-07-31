import React, { Component } from 'react';
import Filters from './Filters';
import Cards from './Cards';


class Main extends Component {
  constructor(props) {
    super(props);
    this.state = {
      contacts: [],
      originalContacts: [],
      filterBy: "first-name",
      filterKeyword: "",
      orderBy: "first-name-asc",
      isLoaded: false
    }
  }

  componentDidMount() {
    fetch("https://randomuser.me/api/?page=2&results=10&seed=foobar")
      .then(response => response.json())
      .then(users => {
        this.setState({
          contacts: users.results,
          originalContacts: users.results,
          isLoaded: true
        });
      })
  }

  addCard(quantity){
    if (quantity <= 20 && quantity > 0) {
      fetch("https://randomuser.me/api/?results=" + quantity)
      .then(response => response.json())
      .then(users => {
        this.setState({
          contacts: this.state.contacts.concat(users.results)
        });
      })
      .catch(e => console.log(e))
    }else{
      alert("Solo se pueden agregar entre 1 y 20 tarjetas")
    }  
  }

  removeCard(contactId) {
    let contacts = this.state.contacts.filter(contact => contact.login.uuid !== contactId);
    this.setState({
      contacts: contacts
    });
  }

  resetCards() {
    this.setState({
      contacts: this.state.originalContacts
    })
  }

  filterBy(event) {
    this.setState({
      filterBy: event.target.value
    }, () => {
      this.filterCards();
    });
  }

  filterKeyword(event) {
    this.setState({
      filterKeyword: event.target.value
    }, () => {
      this.filterCards();
    });
  }

  filterCards() {
    let filterBy = this.state.filterBy.toLowerCase();
    let filterKeyword = this.state.filterKeyword.toLowerCase();
    let result;
    if (filterKeyword !== "") {
      if (filterBy === "first-name") {
        result = this.state.contacts.filter(contact => {
          return contact.name.first.toLowerCase().includes(filterKeyword);
        });
        this.setState({
          contacts: result
        })
      } else if (filterBy === "last-name"){
        result = this.state.contacts.filter(contact => {
          return contact.name.last.toLowerCase().includes(filterKeyword);
        });
        this.setState({
          contacts: result
        })
      } else {
        result = this.state.contacts.filter(contact => {
          return contact.dob.age.toString().indexOf(filterKeyword) !== -1;
        });
        this.setState({
          contacts: result
        })
      }
    } else {
      this.setState({
        contacts: this.state.originalContacts
      })
    }
  }

  orderBy(event) {
    let orderBy = event.target.value;
    let result = [];
    if (orderBy === 'first-name-asc') {
      result = this.state.contacts.sort((a, b) => {
        if (a.name.first < b.name.first) {
          return -1;
        } else {
          return 1;
        }
      })
    } else if (orderBy === 'first-name-desc') {
      result = this.state.contacts.sort((a, b) => {
        if (a.name.first < b.name.first) {
          return 1;
        } else {
          return -1;
        }
      })
    } else if (orderBy === 'last-name-asc') {
      result = this.state.contacts.sort((a, b) => {
        if (a.name.last < b.name.last) {
          return -1;
        } else {
          return 1;
        }
      })
    } else if (orderBy === 'last-name-desc') {
      result = this.state.contacts.sort((a, b) => {
        if (a.name.last < b.name.last) {
          return 1;
        } else {
          return -1;
        }
      })
    } else if (orderBy === 'age-asc') {
      result = this.state.contacts.sort((a, b) => {
        if (a.dob.age < b.dob.age) {
          return -1;
        } else {
          return 1;
        }
      })
    } else if (orderBy === 'age-desc') {
      result = this.state.contacts.sort((a, b) => {
        if (a.dob.age < b.dob.age) {
          return 1;
        } else {
          return -1;
        }
      })
    }
    return this.setState({
      contacts: result
    });
  }

  moveRight(id) {
    let position = this.state.contacts.findIndex(result => result.login.uuid === id);
    let contacts = this.state.contacts;
    let contact = this.state.contacts[position];
    
    contacts.splice(position, 1);
    position = position + 1;
    contacts.splice(position, 0, contact)

    this.setState({
      contacts: contacts
    });
  }

  moveLeft(id) {
    let position = this.state.contacts.findIndex(result => result.login.uuid === id);
    let contacts = this.state.contacts;
    let contact = this.state.contacts[position];
    
    contacts.splice(position, 1);
    position = position - 1;
    contacts.splice(position, 0, contact)

    this.setState({
      contacts: contacts
    });
  }

  // RENDER 
  render() {
    if (!this.state.isLoaded) {
      return <div className="loading"><img className="" src="/images/loading-buffering.gif" alt="Loading GIF" /></div>
    } else {
      return (
        <main>
          <Filters filterShow={this.props.filterShow} addCard={this.addCard.bind(this)} resetCards={this.resetCards.bind(this)} filterBy={this.filterBy.bind(this)} filterKeyword={this.filterKeyword.bind(this)} orderBy={this.orderBy.bind(this)}/>
          <Cards contacts={this.state.contacts} removeCard={this.removeCard.bind(this)} moveRight={this.moveRight.bind(this)} moveLeft={(id) => this.moveLeft(id)}/> 
        </main>
      );
    }
  }
}

export default Main;
