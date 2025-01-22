import '../styles/App.scss' 

function App() { 
  const handleInput = (ev) => {
    ev.preventDefault();
    console.log("La tecla pulsada es: ", ev.key);
  }

  return (
      <div>
        <form>
          <label>Escribe algo </label>
          <input type="text" onKeyUp={handleInput}/>
        </form>
      </div>
  );
}

export default App;
