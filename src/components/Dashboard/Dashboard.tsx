import { Link } from 'react-router-dom';

const Dashboard = () => {
  return (
    <ul>
      <li>
        <Link to="/map-with-infobox">Map With InfoBox</Link>
      </li>
      <li>
        <Link to="/map-with-polygon">Map With Directions</Link>
      </li>
      <li>
        <Link to="/map-with-location">Map With Live Location Update</Link>
      </li>
      <li>
        <Link to="/bus-tracking-map-live-location">Bus Tracking Live Location Update</Link>
      </li>
    </ul>
  );
};

export default Dashboard;
