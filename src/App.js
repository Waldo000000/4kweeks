import GridOfDots from './GridOfDots';
import './App.css';
// import { SketchPicker } from 'react-color';

function App() {

  return (
    <div className="App">
        {/* <SketchPicker /> */}
        <GridOfDots 
        palette={
          ['#f00', '#0f0', '#00f']
        }
        nRows={100}
        nCols={52}/>
    </div>
  );
}

export default App;
