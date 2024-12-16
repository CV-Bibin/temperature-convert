
import '../App.css';

function Layouts() {
  
  let inputTemp = '';
  let outputTemp = '';
  let unit = '';
  let unitLabel = '';


  const handleInputChange = (event) => {
    inputTemp = event.target.value; 
    convertTemperature(); 
  };


  const handleRadioChange = (event) => {
    unit = event.target.value; 
    unitLabel = unit === 'Celsius' ? 'Celsius to Fahrenheit' : 'Fahrenheit to Celsius'; 
    convertTemperature(); 
  };
  


  const convertTemperature = () => {
    if (inputTemp === '') {
      outputTemp = ''; 
    } else if (unit === 'Celsius') {
      
      outputTemp = ((parseFloat(inputTemp) * 9) / 5 + 32).toFixed(2);
    } else if (unit === 'Fahrenheit') {
      
      outputTemp = (((parseFloat(inputTemp) - 32) * 5) / 9).toFixed(2);
    }

    
    document.getElementById('Temperature-Output').value = outputTemp;
    document.getElementById('In-Unit').innerText = unitLabel;
  };

  
  const handleReset = () => {
    
    inputTemp = '';
    outputTemp = '';
    unit = '';
    unitLabel = '';
    document.getElementById('Temperature-Input').value = ''; 
    document.getElementById('Temperature-Output').value = ''; 
    document.getElementById('In-Unit').innerText = ''; 
  };

  return (
    <div className="box">
      <h2>Temperature Converter</h2>
      <input
        id="Temperature-Input"
        type="text"
        placeholder="Enter value"
        onChange={handleInputChange} 
      />
      <div className="radio-container">
        <input
          type="radio"
          id="celsius"
          name="temperature"
          value="Celsius"
          onChange={handleRadioChange} 
        />
        <label htmlFor="celsius">Celsius</label>
        <input
          type="radio"
          id="fahrenheit"
          name="temperature"
          value="Fahrenheit"
          onChange={handleRadioChange}
        />
        <label htmlFor="fahrenheit">Fahrenheit</label>
      </div>
      <div className="Result-Name">
        <input id="Temperature-Output" type="text" readOnly /> 
        <p id="In-Unit"></p> 
      </div>
      <button onClick={handleReset}>Reset</button>
    </div>
  );
}

export default Layouts;
