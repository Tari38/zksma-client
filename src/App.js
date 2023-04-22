import { Route, Routes } from 'react-router-dom';
import './App.css';
import { Layout } from './components';
import { About, AdultClasses, Contact, FAQ, Fees, Groups, KidsClasses, Landing, NotFound } from './pages';
import Button from 'react-bootstrap/Button';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircleChevronUp } from '@fortawesome/free-solid-svg-icons';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Landing />} />
          <Route path="about" element={<About />} />
          <Route path="faq" element={<FAQ />} />
          <Route path="fees" element={<Fees />} />
          <Route path="adultclasses" element={<AdultClasses />} />
          <Route path="kidsclasses" element={<KidsClasses />} />
          <Route path="groups" element={<Groups />} />
          <Route path="contact" element={<Contact />} />
          <Route path="notfound" element={<NotFound />} />
        </Route>
      </Routes>
      <div>
        <Button className="to-top-btn" href="#top">
        <FontAwesomeIcon className='to-top-btn-icon' icon={faCircleChevronUp} size="xs" style={{color: "#e61924",}} />
      
        </Button>
      </div>
      <div>
        
      </div>
    </div>
  );
}

export default App;
