import countrydata from "../api/countrydata.json"; // Make sure your environment supports this import.

const About = () => {
  return (
    <section className="about">
      <h2>Let's see some interesting facts</h2>
      <div className="gradient-card">
        {countrydata.countries.map((e, index) => {
          return (
            <div className="cards" key={index}>
              <div className="container1">
                <p className="card-title">{e.name}</p>
                <p>
                  <span className="card-description">{e.fact}</span>
                </p>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default About;
