import { use, useState } from "react"
// import {toastContainer,toast}
import {ToastContainer,toast} from 'react-toastify';

function App() {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    age:"",
    location:""
  });


  const changeHandler = (e) => {
    const { name, value, type } = e.target;
    setFormData(vlaues => ({ ...vlaues, [name]: value }));
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("event prevented");
    console.log(formData);

    const val = Object.values(formData);
    let flag = val.every(fun);
    if(flag){
      toast.warn("no inputs found !",{
        position:"top-right",
        autoClose:2000
      });
      return;
    }
    function fun(val){
      return val.trim()==="";
    }


    setFormData({
      firstName: "",
      lastName: "",
      age:"",
      location:""
    });
    toast.success("Form submitted !",{
      position:"top-right",
      autoClose:2000
    });

  }
  return (
    <div>
      <form action="" onSubmit={handleSubmit}>
        <div>
          <label htmlFor="firstName">Enter firstName: </label>
          <input type="text" id="firstName" name="firstName" placeholder="enter firstname " value={formData.firstName} onChange={changeHandler} />
        </div>
        <div>
          <label htmlFor="lastName">Enter lastName: </label>
          <input type="text" id="lastName" name="lastName" placeholder="enter lastname" value={formData.lastName} onChange={changeHandler} />
        </div>
        <div>
          <label htmlFor="age">Enter your age: </label>
          <input type="number" name="age" placeholder="enter age" value={formData.age} onChange={changeHandler} />
        </div>

        <div>
          <label htmlFor="location"> Select your locality</label>
          <select name="location" id="location" value={formData.location} onChange={changeHandler} >
            <option value="">--select-- </option>
            <option value="rural">Rural</option>
            <option value="urban">Urban</option>
          </select>
        </div>


        <input type="submit" vlaues="submit" />
      </form>
      <ToastContainer/>
    </div>
  )
}

export default App;
