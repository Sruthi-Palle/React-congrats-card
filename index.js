const element = (
  <div>
    <div className="bg_container">
      <h1>congratulations</h1>
      <div className="card">
        <div>
          <img src="https://assets.ccbp.in/frontend/react-js/congrats-card-profile-img.png" />
          <h1>Kiran V</h1>
        </div>
        <p>institute of computer education and technology</p>
        <div>
          <img src="https://assets.ccbp.in/frontend/react-js/congrats-card-watch-img.png" />
        </div>
      </div>
    </div>
  </div>
);
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(element);
