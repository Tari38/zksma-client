import { Route, Routes } from 'react-router-dom';
import './App.css';
import { Layout } from './components';
import { About, AdultsClasses, Contact, FAQ, Fees, KidsClasses, Home, GradingExams, NotFound, HavocGrappling, ScorpionMuayThai } from './pages';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="about" element={<About />} />
          <Route path="faq" element={<FAQ />} />
          <Route path="fees" element={<Fees />} />
          <Route path="adultsclasses" element={<AdultsClasses />}>
            <Route path="havoc" element={<HavocGrappling />} />
            <Route path="scorpion" element={<ScorpionMuayThai />} />
          </Route>
          <Route path="kidsclasses" element={<KidsClasses />} />
          <Route path="grading" element={<GradingExams />} />
          <Route path="contact" element={<Contact />} />
          <Route path="notfound" element={<NotFound />} />
          <Route path="locations" element={<About />} />
          <Route path="herts-locations" element={<About />} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;
