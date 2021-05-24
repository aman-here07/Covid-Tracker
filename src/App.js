import React from "react";
import Cards from "./components/Cards/Cards";
import Chart from "./components/Chart/Chart";
import CountryWise from "./components/CountryWise/CountryWise";

import { fetchData } from "./api/index";

import styles from "./App.module.css";
import coronaImg from "./images/Corona.jpg";

class App extends React.Component {
  state = {
    data: {},
    country: "",
  };
  //componentDidMount is executed after the first render only on the client side
  async componentDidMount() {
    const fetchedData = await fetchData();
    this.setState({ data: fetchedData });
  }
  handleCountryChange = async (country) => {
    const fetchedData = await fetchData(country);
    this.setState({ data: fetchedData, country: country });
  };
  render() {
    const { data, country } = this.state;
    return (
      <div className={styles.container}>
        <img className={styles.image} src={coronaImg} alt='corona image'/>
        <Cards data={data} />
        <CountryWise handleCountryChange={this.handleCountryChange} />
        <Chart data={data} country={country} />
        <div> <h1 style={{ color: "green", 
                   textAlign: "center", 
                   marginTop: "50px" }}>
        Practiced by Aman
      </h1></div>
      </div>
    );
  }
}
// const App = () => {
//   return (
//     <div>
//       <h1>APP</h1>
//     </div>
//   );
// };
export default App;
