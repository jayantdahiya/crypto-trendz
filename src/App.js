import './App.scss';
import Chart from './Components/Chart';
import SwitchBar from './Components/Switch';

function App() {
  return (
    <div>
      <div className='chartDiv'>
        <Chart />
      </div>
      <div className="switchBar">
        <SwitchBar />
      </div>
    </div>
  );
}

export default App;