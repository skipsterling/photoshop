import './App.css';
import Slider from './components/Slider';
import SidebarItem from './components/SidebarItem';

function App() {
  return (
    <div className='container'>
      <div className='main-image' />
      <div className='sidebar'> 
      <SidebarItem />
      <SidebarItem />
      <SidebarItem />
      <SidebarItem />
      <SidebarItem />
      </div>
      <Slider /> 
    </div>
  )
}  

export default App;
