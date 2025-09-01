import { use, useState } from "react"
// import {toastContainer,toast}
import { ToastContainer, toast } from 'react-toastify';

function App() {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    country: "",
    city: "",
    state: "",
    pincode: "",
    comments: false,
    candidates: false,
    offers: false,
    pushnotification:"",
    gender:""

  });


  const changeHandler = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData(vlaues => ({ ...vlaues, [name]: type === "checkbox" ? checked : value }));
  }
  //  this will deselect the radio button when it was clicked twice


  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("event prevented");

    // const val = Object.values(formData);
    // let flag = val.every(fun);
    // if (flag) {
    //   toast.warn("no inputs found !", {
    //     position: "top-right",
    //     autoClose: 2000
    //   });
    //   return;
    // }
    // function fun(val) {
    //   if(typeof (val) === "string")
    //     return val.trim() === "";
    // }

    console.log(formData);
    setFormData({
       firstName: "",
    lastName: "",
    email: "",
    country: "",
    city: "",
    state: "",
    pincode: "",
    comments: false,
    candidates: false,
    offers: false,
    pushnotification:"",
    gender:""
    });
    toast.success("Form submitted !", {
      position: "top-right",
      autoClose: 2000
    });

  }
  return (
    <div className="w-full min-h-screen ">
      <form action="" onSubmit={handleSubmit} className="w-11/12 mx-auto flex justify-center items-center flex-col">
        <div className="flex flex-col">
          <label htmlFor="firstName">Enter firstName: </label>
          <input className="outline" type="text" id="firstName" name="firstName" placeholder="john" value={formData.firstName} onChange={changeHandler} />
        </div>
        <div className="flex flex-col">
          <label htmlFor="lastName">Enter lastName: </label>
          <input type="text" id="lastName" name="lastName" placeholder="Doe" value={formData.lastName} onChange={changeHandler} />
        </div>
        <fieldset >
          <legend>Gender</legend>
          <label htmlFor="male">
            <input type="radio" id="male" name="gender" value="male" checked={formData.gender === "male"} onChange={changeHandler} />Male
          </label>
          <label htmlFor="female">
            <input type="radio" id="female" name="gender" value="female" checked={formData.gender === "female"} onChange={changeHandler} />
            Female
          </label>
          <label htmlFor="other">
            <input type="radio" id="other" name="gender" value="other" checked={formData.gender === "other"} onChange={changeHandler} />
            Other
          </label>
        </fieldset>
        <div className="flex flex-col">
          <label htmlFor="email">Enter email address </label>
          <input type="email" name="email" id="email" placeholder="john@abc.com" value={formData.email} onChange={changeHandler} />
        </div>

        <div  >
          <label htmlFor="country"> Select your country</label ><br />
          <select name="country" id="country" value={formData.country} onChange={changeHandler} >
            <option value="">--select-- </option>
            <option value="india">India</option>
            <option value="america">America</option>
            <option value="japan">Japan</option>
            <option value="australi">Australia</option>
            <option value="nepal">Nepal</option>
            <option value="canada">Canada</option>
          </select>
        </div>
        <div className="flex flex-col">
          <label htmlFor="city">Enter city</label>
          <input type="text" name="city" id="city" placeholder="Manali" value={formData.city} onChange={changeHandler} />
        </div>
        <div className="flex flex-col">
          <label htmlFor="state">Enter state</label>
          <input type="text" name="state" id="state" placeholder="Bihar" value={formData.state} onChange={changeHandler} />
        </div><div className="flex flex-col">
          <label htmlFor="pincode">Enter pincode</label>
          <input type="number" name="pincode" id="pincode" placeholder="144411" value={formData.pincode} onChange={changeHandler} />
        </div>

        <fieldset>
          <legend>By Email</legend>
          <div className="flex ">
            <input type="checkbox" name="comments" id="comments" onChange={changeHandler} checked={formData.comments} />
            <div>
              <label htmlFor="comments">Comments</label>
              <p>Get notify when someone posts a comment on a posting.</p>
            </div>
          </div><div className="flex ">
            <input type="checkbox" name="candidates" id="candidates" onChange={changeHandler} checked={formData.candidates} />
            <div>
              <label htmlFor="candidates">Candidates</label>
              <p>Get notify when a candidate apply for a job.</p>
            </div>
          </div><div className="flex ">
            <input type="checkbox" name="offers" id="offers" onChange={changeHandler} checked={formData.offers} />
            <div>
              <label htmlFor="offers">Offers</label>
              <p>Get notify when a candidate accept/reject a offer. </p>
            </div>
          </div>

        </fieldset>

        <fieldset>
          <div>
             <legend>Push a Notification</legend>
          <p>These are delivered via SMS to your mobile number</p>
          </div>
          <input type="radio" name="pushnotification" id="everything" value="everything" onChange={changeHandler} />
          <label htmlFor="everything">Everything</label> <br />
          <input type="radio" name="pushnotification" id="same as above" value="same as email" onChange={changeHandler} />
          <label htmlFor="same as above">Same as Email</label><br />
          <input type="radio" name="pushnotification" id="nopushnotifications" value="No Push Notifications" onChange={changeHandler} />
          <label htmlFor="nopushnotifications">No Push Notifications</label>
         

        </fieldset>



        <input type="submit" value="Save" />
      </form>
      <ToastContainer />
    </div>
  )
}


export default App;
