import React, { Component } from "react";
import { connect } from 'react-redux';

import ContactForm from '../ContactForm';
import ContactList from '../ContactList';
import Filter from '../Filter';
import Container from '../Container';

import operations from '../../redux/contacts/contacts-operations';
import {getIsLoading} from '../../redux/contacts/contacts-selectors';


class Phonebook extends Component {

  componentDidMount() {
    this.props.fetchContacts();
  }

  // componentDidMount() {
  //   const contactList = JSON.parse(localStorage.getItem("contacts"))
  //   this.setState({
  //     contacts: contactList || []
  //   })
  // }

  // componentDidUpdate() {
  //   const { contacts } = this.state;
  //   const contactList = JSON.stringify(contacts);
  //   localStorage.setItem("contacts", contactList);
    
  // }
  render() {

    return (
    <Container>
    <h1>Phonebook</h1>
    <ContactForm/>
    <h2>Contacts</h2>
    <Filter />
    <ContactList />
        
    <div>
          {this.props.isLoadingContacts && <h1>Загружаем...</h1>}
    </div>
    </Container>
  )
  }
}

const mapStateToProps = state => ({
  isLoadingContacts: getIsLoading(state)
})

const mapDispatchToProps = dispatch => ({
  fetchContacts: () => dispatch(operations.fetchContacts)
})

export default connect(mapStateToProps,mapDispatchToProps)(Phonebook);

