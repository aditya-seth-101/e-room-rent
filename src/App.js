
import './App.css';
import Header from './Header';
import Search from './Search';
import BodySection1 from './BodySection1'
import Coupon from './Coupon';
import BodySection2 from './BodySection2';
import BodySection3 from './BodySection3';
function App() {
  return (
    <div className="">
      <Header />
      <Search /> <br />
      <BodySection1 /><br />
      <Coupon />
      <BodySection2 />
      <BodySection3 />
    </div>
  );
}

export default App;
