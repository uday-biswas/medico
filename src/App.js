import './App.css';
import {useState} from 'react';
import Greet from './components/Greet';
import doctors from './json_data/doctors.json';
import DoctorCards from './components/DoctorCards';
import ProductForm from './components/ProductForm';
import Footer from './components/Footer';

const App = () => {
  const response = doctors;

  const [responseUpdated, setResponse] = useState(response);
  const [form, setForm] = useState(false);
  const [zero, setZero] = useState(false);

  const newPsycho = (product) => {
    const newPsychoList = [...responseUpdated, product];
    setResponse(newPsychoList);
    setZero(false);
  }

  const removePsycho = (id) => {
    const newPsychoList = responseUpdated.filter((doctor_data) => {
      return doctor_data.id !== id;
    });
    setResponse(newPsychoList);
    if (newPsychoList.length === 0) {
      setZero(true);
    }
  }

  const removeForm = () => {
    setForm(false);
  }

  return(
  <div className="back"> 
    <h1 className='head'>Mental Health Care</h1>
    <Greet name='Rajesh' className="greet"></Greet>
    <div className='psychos'>
    {zero ? <h2>No Psychiatrists Available</h2> : null}
    {responseUpdated.map ( (doctor_data) => {
      return <DoctorCards key={doctor_data.id} {...doctor_data} remove={removePsycho}></DoctorCards>
    })}
    </div>
    <div className='add'>
    <h2 className='addPsycho' onClick={() => {setForm(true)}}>Add a new Psychiatrist</h2>
    <div className='middle'>{form ? <ProductForm addPsycho={newPsycho} cancelPsycho={removeForm}></ProductForm> : null}</div>
    </div>
    <Footer className='foot'>Made with ❤️ by Taarzan</Footer>
  </div>
  )
}

export default App;