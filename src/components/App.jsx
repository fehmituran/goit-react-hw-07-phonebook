import Header from './Header/Header';
import Section from './Section/Section';
import ContactForm from './ContactForm/ContactForm';
import Filter from './Filter/Filter';
import ContactList from './ContactList/ContactList';
import Notification from './Notification/Notification';
import { useDispatch, useSelector } from 'react-redux';
import { selectContacts, selectError, selectIsLoading } from 'redux/selectors';
import { useEffect } from 'react';
import { fetchContacts } from 'redux/operations';
import Loader from './Loader/Loader';


export const App = () => {

  const dispatch = useDispatch();
  
 
 const contacts = useSelector(selectContacts);
 const isLoading = useSelector(selectIsLoading);
 const error = useSelector(selectError);
 

 useEffect(() => {
   dispatch(fetchContacts());
 }, [dispatch]);
 



  return (
    <div>
      <Header />
      <Section title="Phone Book">
        <ContactForm />
      </Section>
      <Section title="Contacts">
      {isLoading && !error && <Loader />}
      
         {contacts.length > 0 &&  <>
          <Filter/>
          <ContactList
          />
          </>}
          {!isLoading && !error && contacts.length === 0 &&  (
        <Notification message="Contact list is empty" />)}
          
        </Section>
    </div>
  );
};
