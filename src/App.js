import "./App.scss";

function App() {
  return (
    <div className="container">
      <h1>IP Address Tracker</h1>

      <input type="text" placeholder="Search for any IP address or domain" />
      <button>></button>
      <div>
        <h6>IP Address</h6>
        <h6> Location</h6>
        <h6> Timezone</h6>
        <h6>ISP</h6>
      </div>
    </div>
  );
}

export default App;
