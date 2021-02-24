import React, {useState} from 'react';
import Search from './components/search'
import DataTable from './components/datatable'
import './App.css';

function App() {
    const [origin,setOrigin] = useState();
    const [destination,setDestination] = useState();
    const [freightMode,setFreightMode] = useState();
    const [pickupDate,setPickupDate] = useState();

    const handleChange = (e) => {
        const appNode = e.currentTarget.parentNode;
        setOrigin(appNode.querySelector("#origin").value)
        setDestination(appNode.querySelector("#destination").value)
        setFreightMode(appNode.querySelector("#freightMode").innerText)
        setPickupDate(appNode.querySelector("#pickupDate").value)
    };

    return (
        <div className="App">
            <Search
                handleChange={handleChange}
            />
            { (origin || destination || freightMode || pickupDate ) &&
                <DataTable
                    origin={origin}
                    destination={destination}
                    freightMode={freightMode}
                    pickupDate={pickupDate}
                />
            }
        </div>
    );
}

export default App;
