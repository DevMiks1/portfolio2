import {Header, Footer} from "./components/HeaderFooter"
import { AllRoutes } from "./routes/AllRoutes";
import Scrollbar from "./components/state/Scrollbar"
import Progressbar from './components/state/Progressbar';

function App() {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <AllRoutes />
      <Scrollbar />
      <Progressbar />
      <div className="mt-auto">
        <Footer />
      </div>
    </div>
  );
}

export default App;
