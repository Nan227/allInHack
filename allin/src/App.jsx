import './App.css';
import Card from './components/Card.jsx';

const App = () => {

  return (
    <><div className = "header"> <h1>Top 10 Open Sources 2024 </h1>
    <h3> Let's check them out! </h3> </div><div className="App">
      
      <Card imgSrc = "src/assets/img/apis.png" imgAlt = "publicapi" title = "public-apis" description= "The current special exhibit, Komar and Melamid, highlights the work of these Russian artists who were anti-government and anti-establishment, something that was very dangerous in the Stalin eraPublic APIs A collective list of free APIs for use in software and web development " btnText = "Learn more" btnLink = "https://github.com/public-apis/public-apis" />

      <Card imgSrc="src/assets/img/docusaurus.png" imgAlt = "doccusaurus" title = "Doccusaurus" description= "Introduction Docusaurus is a project for building deploying and maintaining open source project websites easily Short on time? Check out our 5-minute tutorial ⏱️ Tip: use docusaurus.new to test Docusaurus immediately in a playground."btnText = "Learn more" btnLink = " https://github.com/facebook/docusaurus"/>

      
    </div>
    </>
  )
}

export default App