import Homepage from "../src/Page/HomePage";
import {SnackbarProvider} from 'notistack';


function App() {
  return (
    <SnackbarProvider >
      <div>
        <Homepage />
      </div>
    </SnackbarProvider>
  );
}

export default App;
