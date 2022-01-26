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
            <input className="row logName" type="text" name="username" />
          </div>
          <div className="flex-column p-2">
            <input className="row submitBtn" type="submit" value="Submit" />
          </div>
        </div>
      </form>
    </div>
    <div className="forgot text-white p-5">
      <p>Forgot Password?</p>
    </div>
  </div>
);

export default New;
