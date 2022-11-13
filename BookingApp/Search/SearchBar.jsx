import React from 'react';
import './SearchBar.css';

function SearchBar(props) {
    return (
        <div className='SrContainer'>
            <div className="SrWrapper">
                <h3 className="Heading">Search</h3>

                <div className="SrInputs">

                <div className="dest df al fdc">Destination
                    <input type="text" className="destInput"/>
                    </div>
                <div className="dateRange df al fdc">Check in dates
                    <input type="date" className="destInput"/>
                    </div>
                </div>

                <div className="options">
                    <h4 className="searchOpHead">Options</h4>

                    <div className="OpItem">Min Price
                    <input type="text" className="OptInput"/>
                    </div>
                    <div className="OpItem">Max Price
                    <input type="text" className="OptInput"/>
                    </div>
                    <div className="OpItem">Adult
                    <input type="text" className="OptInput"/>
                    </div>
                    <div className="OpItem">Room
                    <input type="text" className="OptInput"/>
                    </div>

                </div>
                    <button className='SearchBt' >Search</button>
            </div>
            
        </div>
    );
}

export default SearchBar;