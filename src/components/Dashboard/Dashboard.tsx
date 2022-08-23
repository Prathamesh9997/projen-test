import { Link } from 'react-router-dom';

const Dashboard = () => {
  return (
    <ul>
      <li>
        <Link to="/map-with-infobox">Map With InfoBox</Link>
      </li>
      <li>
        <Link to="/">Map With Directions</Link>
      </li>
    </ul>
  );
};

export default Dashboard;
