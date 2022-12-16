import React from 'react';

const Edit: React.FC = () => {
  return (
    <div className="row justify-content-center">
      <div className="col-md-8">
        <div className="card">
          <div className="card-body">
            <h2 className="text-center mb-4 font-weight-bold">Edit User</h2>
            <form>
              <div className="form-group">
                <label htmlFor="">First Name</label>
                <input
                  type="text"
                  className="form-control"
                  placeholder="First Name"
                />
              </div>
              <div className="form-group">
                <label htmlFor="">Last Name</label>
                <input
                  type="text"
                  className="form-control"
                  placeholder="Last Name"
                />
              </div>
              <div className="form-group">
                <label htmlFor="">Organization</label>
                <input
                  type="text"
                  className="form-control"
                  placeholder="Organization"
                />
              </div>
              <div className="form-group">
                <label htmlFor="">Aditional Organization</label>
                <input
                  type="text"
                  className="form-control"
                  placeholder="Aditional Organization"
                />
              </div>
              <div className="form-group">
                <select name="" className="form-control">
                  <option value="Select Country">Select Country</option>
                  <option value="USA">USA</option>
                  <option value="Canada">Canada</option>
                  <option value="India">India</option>
                </select>
              </div>
              <button
                type="submit"
                className="btn btn-secondary font-weight-bold text-uppercase d-block w-100"
              >
                Save
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Edit;
