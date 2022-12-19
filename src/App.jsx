import './App.css';
import { useState } from 'react';
import { DropDownTest } from './components/DropDownTest';
import { Button } from './components/Button';
import { Header } from './components/Header';
import { Sidebar } from './components/Sidebar';

function App() {
  const [open, setOpen] = useState(false);
  const [openSecon, setOpenSecon] = useState(false);
  const handleOpen = () => {
    setOpen(!open);
  };

  /**
   *  https://blog.logrocket.com/react-onclick-event-handlers-guide/
   *  https://stackoverflow.com/questions/56224731/react-passing-onclick-as-props-to-sub-components-required
   *  https://www.google.com/search?q=props.onclick&oq=props.onclick&aqs=chrome..69i57.3057j0j1&sourceid=chrome&ie=UTF-8
   */

  //? Must be a better way to improve all the handle functions
  //* I found using React cloneElement API, but they encourage to not use it.
  const handleMouseOne = () => {
    setOpen(false);
    console.log('Sylveon');
  };

  const handleMouseTwo = () => {
    setOpen(false);
    console.log('Tinkaton');
  };

  const handleMouseThird = () => {
    setOpen(false);
    console.log('Flabebe');
  };
  const handleMouseFour = () => {
    setOpen(false);
    console.log('Fidough');
  };

  const handleMouseFifth = () => {
    setOpen(false);
    console.log('Azumarril');
  };

  const handleMouseSixth = () => {
    setOpen(false);
    console.log('Gardevoir');
  };

  const handleOpenSecon = () => {
    setOpenSecon(!openSecon);
  };

  const handleMouseOneSecon = () => {
    setOpen(false);
  };

  const handleMouseTwoSecon = () => {
    setOpen(false);
  };

  const [selected, setSelected] = useState('');
  return (
    <div className="App">
      <Header />
      <Button selected={selected} setSelected={setSelected} />
      <Sidebar />
      <div>
        <button className="dropdown-btn" onClick={handleOpenSecon}>
          Dropdown
        </button>
        {openSecon ? (
          <ul className="menu">
            <li className="menu-item">
              <button onClick={handleMouseOneSecon}>Menu 1</button>
            </li>
            <li className="menu-item">
              <button onClick={handleMouseTwoSecon}>Menu 2</button>
            </li>
          </ul>
        ) : null}
      </div>

      <br />
      <br />
      <br />

      <DropDownTest
        open={open}
        trigger={<button onClick={handleOpen}>Fairy Pokemon</button>}
        menu={[
          <button onClick={handleMouseOne}>Sylveon</button>,
          <button onClick={handleMouseTwo}>Tinkaton</button>,
          <button onClick={handleMouseThird}>Flabebe</button>,
          <button onClick={handleMouseFour}>Fidough</button>,
          <button onClick={handleMouseFifth}>Azumarril</button>,
          <button onClick={handleMouseSixth}>Gardevoir</button>,
        ]}
      />
    </div>
  );
}

export default App;
