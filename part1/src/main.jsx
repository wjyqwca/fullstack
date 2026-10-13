import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import Ai from './Ai.jsx'
import UrlLink from './UrlLink.jsx'
import Welcome from './Welcome.jsx'


const root = createRoot(document.getElementById('root'));
root.render(
  <>
    <App />
    <Ai />
  </>
)

const urlRoot = createRoot(document.getElementById('url-link'));
urlRoot.render(
  <>
    <UrlLink />
    <Welcome name="wjy" geneder="male" />
  </>
)
