import React from 'react';
import styles from './Filter.module.css';
import { connect } from 'react-redux';
import { changeFilter } from '../../redux/contacts/contacts-actions';
import { getContactsFilter } from '../../redux/contacts/contacts-selectors';

const Filter = ({value, onChange }) =>  {
   
    return (
        <label className={styles.label}>
            Find contacts by name
        <input className={styles.input}
            type="text"
            name="name"
            value={value}
            onChange = {onChange}
            placeholder="Search for name..."
            />
        </label>
    )
};

const mapStateToProps = state => ({ 
     value: getContactsFilter(state)
})

const mapDispatchToProps = dispatch => ({ onChange: (evt) => dispatch(changeFilter(evt.target.value))})

export default connect(mapStateToProps, mapDispatchToProps)(Filter);


