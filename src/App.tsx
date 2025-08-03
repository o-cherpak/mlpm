import './App.css'
import {Header} from "./components/Header/Header.tsx";
import {MainSection} from "./components/MainSection/MainSection.tsx";
import {Footer} from "./components/Footer/Footer.tsx";

export function App() {
  return (

    <div className="relative min-h-screen bg-gray-50 overflow-hidden">
      <Header/>

      <MainSection/>

      <Footer/>
    </div>
  )
}
