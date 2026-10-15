import { createRoot } from 'react-dom/client'

import App from './App.jsx'
import Ai from './Ai.jsx'
import UrlLink from './UrlLink.jsx'
import Welcome from './Welcome.jsx'
import { Hello } from './Hello.jsx'
import AsynModule from './AsynModule.jsx'
// import 


//同一个 root 上调用两次 render，后一次会完全替换前一次的内容
const root = createRoot(document.getElementById('root'));

const refresh = () => {
  root.render(
    <>
      <App />
      <br />
      <Ai />
    </>
  )
}

// 每隔 1 秒刷新一次页面
setInterval(() => {
  refresh()
}, 1000)


const urlRoot = createRoot(document.getElementById('url-link'));
urlRoot.render(
  <>
    <br />
    <UrlLink />
    <Welcome name="wjy" gender="male" />
    <Hello name="WJY" age={21} />
    <br />
    <AsynModule />
  </>
)
