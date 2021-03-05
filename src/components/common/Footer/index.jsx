import { Segment, Header } from 'semantic-ui-react';
import './footer.css';

const Footer = () => {
  return (
    <Segment textAlign='center' className='footer' as='footer' padded>
      <Header as='h3'>
        &copy; React Google Sheets 2021
      </Header>
    </Segment>
  )
}

export default Footer;
