import React from 'react';
import { useCustomSelector, useCustomDispatch } from 'hooks/redux';

const User: React.FC = () => {
  const { users } = useCustomSelector((state) => state);
  const dispatch = useCustomDispatch();

  return (
    <div className="row justify-content-center">
      <div className="col-md-8">
        <div className="card">
          <div className="card-body">
            <h2 className="text-center mb-4 font-weight-bold">Add New User</h2>
            <form>
              <div className="form-group">
                <label htmlFor="fistname">First Name</label>
                <input
                  type="text"
                  id="firstname"
                  className="form-control"
                  placeholder="First Name"
                />
              </div>
              <div className="form-group">
                <label htmlFor="lastname">Last Name</label>
                <input
                  type="text"
                  id="lastname"
                  className="form-control"
                  placeholder="Last Name"
                />
              </div>
              <div className="form-group">
                <label htmlFor="organization">Organization</label>
                <input
                  type="text"
                  id="organization"
                  className="form-control"
                  placeholder="Organization"
                />
              </div>
              <div className="form-group">
                <label htmlFor="aditional">Aditional Organization</label>
                <input
                  type="text"
                  id="aditional"
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
                Add User
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default User;
