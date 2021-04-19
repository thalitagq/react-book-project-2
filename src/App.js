import { StylesProvider } from '@material-ui/styles';
import { TimersDashboard } from './components/TimersDashboard';

function App() {
  return (
    < StylesProvider injectFirst >
      <TimersDashboard/>
    </StylesProvider>
  );
}

export default App;
