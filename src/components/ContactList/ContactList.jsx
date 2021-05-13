import React from 'react';

import ContactListItem from '../ContactListItem';
import { ReactComponent as UserIcon } from '../../icons/user.svg'
import { connect } from 'react-redux';
import operations from '../../redux/contacts/contacts-operations';
import { getContactsFilter, getContacts } from '../../redux/contacts/contacts-selectors';

const ContactList = ({ list, onDelete }) => {

    const contactElements = list.map((item) => <ContactListItem  key={item.id} {...item} onDelete={()=>onDelete(item.id)}> <UserIcon/> </ContactListItem>)
    return (
        <ul>
            {contactElements}
        </ul>
    
    )
};


const mapStateToProps = state => { 

    const normalizeFilter = getContactsFilter(state).toLowerCase();
    const visibleContacts = getContacts(state).filter(contact => contact.name.toLowerCase().includes(normalizeFilter))
    return {
        list: visibleContacts
    }
}

const mapDispatchToProps = dispatch => ({
    onDelete: id => dispatch(operations.deleteContact(id))
});

export default connect(mapStateToProps, mapDispatchToProps)(ContactList);
