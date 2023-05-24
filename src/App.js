import { Route, Routes } from 'react-router-dom';
import './App.css';
import { Layout } from './components';
import { About, AdultsClasses, Contact, FAQ, Fees, Groups, KidsClasses, Home, GradingExams, NotFound } from './pages';
import Button from 'react-bootstrap/Button';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircleChevronUp } from '@fortawesome/free-solid-svg-icons';
import { SelectedVenue, ScheduleHQ, ScheduleBPCC, ScheduleFLC, ScheduleLMS, ScheduleSMSH, SchedulePRPS, ScheduleWCC } from './components/schedule/kids';


function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="about" element={<About />} />
          <Route path="faq" element={<FAQ />} />
          <Route path="fees" element={<Fees />} />
          <Route path="adultsclasses" element={<AdultsClasses />} />
          <Route path="kidsclasses" element={<KidsClasses />}>
            <Route path="kidsclasses" element={<SelectedVenue />}>
              <Route index element={<ScheduleHQ />} />
              <Route index element={<ScheduleBPCC />} />
              <Route index element={<ScheduleFLC />} />
              <Route index element={<ScheduleLMS />} />
              <Route index element={<ScheduleSMSH />} />
              <Route index element={<SchedulePRPS />} />
              <Route index element={<ScheduleWCC />} />
            </Route>            
          </Route>
          <Route path="grading" element={<GradingExams />} />
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
