import React from 'react';

// import Cards from './component/Cards/Cards';
// import Chart from './component/Chart/Chart';
// import CountryPicker from './component/CountryPicker/CountryPicker';

import {Cards, Chart, CountryPicker} from './component';
import {fetchData} from './api/';
import styles from './App.module.css';

import image from './images/image.png';


class App extends React.Component {

    state = {
        data: {},

    }

    async componentDidMount() {
        const fetchedData = await fetchData();
        this.setState({ data: fetchedData });
    } 

  
 

    render() {

        const { data } = this.state;

        return (
            <div className={styles.container}>
                <img className={styles.image} src={image} alt="COVID-19" />
                <Cards data={ data }></Cards>
                {/* <CountryPicker></CountryPicker>
                <Chart></Chart> */}
            </div>
        );

    }

}

export default App;

