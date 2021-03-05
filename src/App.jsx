import { Container, Header } from 'semantic-ui-react';
import Navbar from './components/common/Header';
import Footer from './components/common/Footer';
import AddForm from './components/AddForm';

const App = () => {
  return [
    <Navbar />,
    <Container as='main'>
      <Header as='h2' textAlign='center' className='my-2'>
        React Google Sheets
      </Header>
      <AddForm />
    </Container>,
    <Footer />,
  ];
};

export default App;
