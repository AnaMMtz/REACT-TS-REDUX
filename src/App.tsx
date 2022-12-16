import React from 'react';
// import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
// import Edit from 'components/edit';
// import Header from 'components/header';
import User from 'components/user';
// import Users from 'components/users';
import { Provider } from 'react-redux';
import store, { persistor } from 'redux/store';
import { PersistGate } from 'redux-persist/integration/react';

const App: React.FC = () => {
  return (
    <Provider store={store}>
      <PersistGate persistor={persistor}>
        <User />
      </PersistGate>
      {/* <Header /> */}
    </Provider>
    // <Router>
    //   <Header />
    //   <div className="container mt-5">
    //     <Routes>
    //       <Route path="/" element={<Users />} />
    //       <Route path="/user" element={<User />} />
    //       {/* <Route path="/user/edit/:id" element={<Edit />} /> */}
    //     </Routes>
    //   </div>
    // </Router>
  );
};

export default App;
