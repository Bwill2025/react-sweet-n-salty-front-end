// src/components/Dashboard/Dashboard.jsx
import { useContext,  } from 'react';

import { UserContext } from '../../contexts/UserContext';


const Dashboard = () => {
  const { user } = useContext(UserContext);


  return ( <main className="dashboard">
    
    </main>
  );
  };

export default Dashboard;