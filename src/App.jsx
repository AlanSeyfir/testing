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

  //Icon Image: https://www.google.com/search?q=plus+sign&sxsrf=ALiCzsbAnaLXpD3m5UVp09hoW1S_bO8Fcg:1670436091489&source=lnms&tbm=isch&sa=X&ved=2ahUKEwiOqOmui-j7AhXnIUQIHUvkDJUQ_AUoAXoECAEQAw&biw=1920&bih=941&dpr=1#imgrc=d4TzD_RlqTTY2M

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

  const [selected, setSelected] = useState('Choose one');
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
      {/* <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header> */}
    </div>
  );
}

export default App;
