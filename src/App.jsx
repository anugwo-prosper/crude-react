import logo from './logo.svg';
import './App.css';
import CrudeApi from './Crude';
import Form from '../src/components/Form'
import ApiList from '../src/components/ApiList'

function App() {
  return (
    <div className="App">
      <>
      <CrudeApi>
        <Form/>
        <ApiList/>


      </CrudeApi>
      
      </>
      
    </div>
  );
}

export default App;
