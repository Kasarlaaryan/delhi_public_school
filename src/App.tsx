/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Layout from '@/src/components/layout/Layout';

// Home
import Home from '@/src/pages/Home';

// About
import OurStory from '@/src/pages/about/OurStory';
import HolisticApproach from '@/src/pages/about/HolisticApproach';
import Leadership from '@/src/pages/about/Leadership';
import Collaborations from '@/src/pages/about/Collaborations';
import Branches from '@/src/pages/about/Branches';

// Academics
import CBSE from '@/src/pages/academics/CBSE';
import Cambridge from '@/src/pages/academics/Cambridge';
import IBDP from '@/src/pages/academics/IBDP';
import EarlyYears from '@/src/pages/academics/EarlyYears';
import NIOS from '@/src/pages/academics/NIOS';
import Coaching from '@/src/pages/academics/Coaching';

// Campus Life
import Facilities from '@/src/pages/campus-life/Facilities';
import Sports from '@/src/pages/campus-life/Sports';
import ArtsCulture from '@/src/pages/campus-life/ArtsCulture';
import Clubs from '@/src/pages/campus-life/Clubs';
import Hostel from '@/src/pages/campus-life/Hostel';
import StudentWellbeing from '@/src/pages/campus-life/StudentWellbeing';

// Student Life
import Events from '@/src/pages/student-life/Events';
import EventDetail from '@/src/pages/student-life/EventDetail';
import Activities from '@/src/pages/student-life/Activities';
import Achievements from '@/src/pages/student-life/Achievements';
import Community from '@/src/pages/student-life/Community';

// Admissions
import AdmissionProcess from '@/src/pages/admissions/Process';
import AdmissionApply from '@/src/pages/admissions/Apply';
import AdmissionEnquiry from '@/src/pages/admissions/Enquiry';
import Scholarships from '@/src/pages/admissions/Scholarships';
import AdmissionTeam from '@/src/pages/admissions/AdmissionTeam';
import FAQs from '@/src/pages/admissions/FAQs';
import ScheduleSession from '@/src/pages/admissions/ScheduleSession';
import Results from '@/src/pages/admissions/Results';
import Prospectus from '@/src/pages/admissions/Prospectus';
import FeeStructure from '@/src/pages/admissions/FeeStructure';

// Media
import Gallery from '@/src/pages/media/Gallery';
import GalleryDetail from '@/src/pages/media/GalleryDetail';
import Videos from '@/src/pages/media/Videos';
import Testimonials from '@/src/pages/media/Testimonials';
import News from '@/src/pages/media/News';
import NewsDetail from '@/src/pages/media/NewsDetail';

// Others
import Alumni from '@/src/pages/Alumni';
import Contact from '@/src/pages/Contact';
import PrivacyPolicy from '@/src/pages/PrivacyPolicy';
import SearchResults from '@/src/pages/SearchResults';

export default function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          
          {/* About */}
          <Route path="about" element={<OurStory />} />
          <Route path="about/our-story" element={<OurStory />} />
          <Route path="about/holistic-approach" element={<HolisticApproach />} />
          <Route path="about/leadership" element={<Leadership />} />
          <Route path="about/collaborations" element={<Collaborations />} />
          <Route path="about/branches" element={<Branches />} />

          {/* Academics */}
          <Route path="academics" element={<CBSE />} />
          <Route path="academics/cbse" element={<CBSE />} />
          <Route path="academics/cambridge" element={<Cambridge />} />
          <Route path="academics/ibdp" element={<IBDP />} />
          <Route path="academics/early-years" element={<EarlyYears />} />
          <Route path="academics/nios" element={<NIOS />} />
          <Route path="academics/coaching" element={<Coaching />} />

          {/* Campus Life */}
          <Route path="campus-life" element={<Facilities />} />
          <Route path="campus-life/facilities" element={<Facilities />} />
          <Route path="campus-life/sports" element={<Sports />} />
          <Route path="campus-life/arts-culture" element={<ArtsCulture />} />
          <Route path="campus-life/clubs" element={<Clubs />} />
          <Route path="campus-life/hostel" element={<Hostel />} />
          <Route path="campus-life/student-wellbeing" element={<StudentWellbeing />} />

          {/* Student Life */}
          <Route path="student-life" element={<Events />} />
          <Route path="student-life/events" element={<Events />} />
          <Route path="student-life/events/:id" element={<EventDetail />} />
          <Route path="student-life/activities" element={<Activities />} />
          <Route path="student-life/achievements" element={<Achievements />} />
          <Route path="student-life/community" element={<Community />} />

          {/* Admissions */}
          <Route path="admissions" element={<AdmissionProcess />} />
          <Route path="admissions/process" element={<AdmissionProcess />} />
          <Route path="admissions/apply" element={<AdmissionApply />} />
          <Route path="admissions/enquiry" element={<AdmissionEnquiry />} />
          <Route path="admissions/scholarships" element={<Scholarships />} />
          <Route path="admissions/team" element={<AdmissionTeam />} />
          <Route path="admissions/faqs" element={<FAQs />} />
          <Route path="admissions/schedule" element={<ScheduleSession />} />
          <Route path="admissions/results" element={<Results />} />
          <Route path="admissions/prospectus" element={<Prospectus />} />
          <Route path="admissions/fees" element={<FeeStructure />} />

          {/* Media */}
          <Route path="media" element={<Gallery />} />
          <Route path="media/gallery" element={<Gallery />} />
          <Route path="media/gallery/:id" element={<GalleryDetail />} />
          <Route path="media/videos" element={<Videos />} />
          <Route path="media/testimonials" element={<Testimonials />} />
          <Route path="media/news" element={<News />} />
          <Route path="media/news/:id" element={<NewsDetail />} />

          <Route path="alumni" element={<Alumni />} />
          <Route path="contact" element={<Contact />} />
          <Route path="privacy-policy" element={<PrivacyPolicy />} />
          <Route path="search" element={<SearchResults />} />
        </Route>
      </Routes>
    </Router>
  );
}
