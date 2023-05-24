import { Route, Routes } from 'react-router-dom';
import './App.css';
import { Layout } from './components';
import { About, AdultsClasses, Contact, FAQ, Fees, Groups, KidsClasses, Home, GradingExams, NotFound } from './pages';

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
          <Route path="kidsclasses" element={<KidsClasses />} />
          <Route path="grading" element={<GradingExams />} />
          <Route path="groups" element={<Groups />} />
          <Route path="contact" element={<Contact />} />
          <Route path="notfound" element={<NotFound />} />
        </Route>
      </Routes>
      
      <div>
        
      </div>
    </div>
  );
}

export default App;
