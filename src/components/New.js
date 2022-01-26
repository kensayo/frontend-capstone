import '../App.css';

const New = () => (
  <div className="logIn d-flex flex-column justify-content-center align-items-center">
    <div className="header text-white p-5">
      <h1>Add new computer</h1>
      <p>Got something new? You can share it here!</p>
    </div>
    <div className="form">
      <form className="input-group">
        <div className="flex-column">
          <div className="flex-column p-2">
            <label htmlFor="computer" className="text-white">
              hdd capacity:
              <input className="row logName" type="text" name="hdd" />
              Processor :
              <input className="row logName" type="text" name="processor" />
              RAM capacity :
              <input className="row logName" type="text" name="ram" />
              Brand Name :
              <input className="row logName" type="text" name="brand" />
              Price (USD) :
              <input className="row logName" type="text" name="price" />
              Accessories :
              <input className="row logName" type="text" name="accessories" />
              Image URL :
              <input className="row logName" type="text" name="image" />
            </label>
          </div>
          <div className="flex-column p-2">
            <input className="row submitBtn" type="submit" value="Submit" />
          </div>
        </div>
      </form>
    </div>
  </div>
);

export default New;
