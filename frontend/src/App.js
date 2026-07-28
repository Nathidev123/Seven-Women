import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from './pages/Home';
import Navbar from './Components/Navbar';
import FormOne from './pages/FormOne';
import FormTwo from './pages/FormTwo';
import FormThree from './pages/FormThree';
import FormFour from './pages/FormFour';
import EventPage from './pages/EventPage'
import SignUp from './pages/SignUp';
import Login from './pages/Login';
import OpinionPiecePage from './pages/OpinionPiecePage'
import PeaceInitiative from './pages/PeaceInitiative'
import Footer from './Components/Footer'
import ScrollToHash from "./Components/ScrollToHash";
import ScrollToTop from './Components/ScrollToTop';
import MemberProfile from './pages/MemberProfile';
import Dashboard from './pages/Dashboard';
import AdminEventPage from './pages/AdminEventPage';
import Archives from './pages/Archives';

function App() {
  return (

    <div className="App">
    <BrowserRouter>
    <Navbar />
    <div className='pages'>

    <ScrollToTop />
    <ScrollToHash />
    <Routes>
    

    <Route
    path='/'
    element={<Home />}
    />

    <Route
    path='/formOne'
    element={<FormOne />}
    />

    <Route
    path='/formTwo'
    element={<FormTwo />}
    />

    <Route
    path='/formThree'
    element={<FormThree />}
    />

    <Route
    path='/formFour'
    element={<FormFour/>}
    />

    <Route
    path='/eventPage/:id'
    element={<EventPage/>}
    />

    <Route
    path='/login'
    element={<Login/>}
    />

    <Route
    path='/signup'
    element={<SignUp/>}
    />

    <Route
    path='/opinion-piece-page'
    element={<OpinionPiecePage/>}
    />

    <Route
    path='/peace-initiative'
    element={<PeaceInitiative/>}
    />

    <Route
    path='/member-profile/:id'
    element={<MemberProfile/>}
    />

    <Route
    path='/dashboard'
    element={<Dashboard/>}
    />

    <Route
    path='/adminevent/:id'
    element={<AdminEventPage/>}
    />

    <Route
    path='/archives'
    element={<Archives/>}
    />
    
    </Routes>
    </div>
    
    <Footer />
    </BrowserRouter>
    </div>
  );
}

export default App;
