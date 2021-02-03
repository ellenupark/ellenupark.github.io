import './index.css';
import MainContainer from './containers/MainContainer'
import AboutContainer from './containers/AboutContainer'
import ProjectsContainer from './containers/ProjectsContainer'
import BlogContainer from './containers/BlogContainer.js'
import ContactContainer from './containers/ContactContainer'

function App() {
  return (
    <div>
        <MainContainer />
        <AboutContainer />
        <ProjectsContainer />
        <BlogContainer />
        <ContactContainer />
    </div>
  );
}

export default App;
