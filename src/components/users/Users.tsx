import React from 'react';

const Users: React.FC = () => {
  return (
    <>
      <h2 className="text-center my-5">All Users</h2>

      <table className="table table-stripped">
        <thead className="bg-primary table-dark">
          <tr>
            <th scope="col">User Name</th>
            <th scope="col">Actions</th>
          </tr>
        </thead>
        <tbody></tbody>
      </table>
    </>
  );
};

export default Users;
