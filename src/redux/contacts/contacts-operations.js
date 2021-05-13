import axios from 'axios';
import { addContactRequest, addContactSuccess, addContactError, deleteContactRequest, deleteContactSuccess, deleteContactError, fetchContactRequest, fetchContactSuccess, fetchContactError} from './contacts-actions';

axios.defaults.baseURL = 'http://localhost:3000';

const fetchContacts = () => dispatch => {
  dispatch(fetchContactRequest());

  axios.get('/contacts')
    .then(({ data }) => {
        dispatch(fetchContactSuccess(data))
      })
   .catch(error => dispatch(fetchContactError(error)));
}

const addContact = (newContact) => dispatch => {

  dispatch(addContactRequest());

    axios.post('/contacts', newContact)
      .then(({ data }) => {
        dispatch(addContactSuccess(data))
      })
        .catch(error => dispatch(addContactError(error)));
}

const deleteContact = id => dispatch => {
  dispatch(deleteContactRequest());

  axios.delete(`/contacts/${id}`)
  .then(() => dispatch(deleteContactSuccess(id)))
  .catch(error => dispatch(deleteContactError(error)));
}

const operations = {
  addContact,
  deleteContact,
  fetchContacts
}
export default operations;