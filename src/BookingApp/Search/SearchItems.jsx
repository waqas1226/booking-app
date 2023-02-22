import React from 'react';
import './SearchItems.css';
import pic from '../../../hotal1.JPG';
import htl from '../../../bg4.jpg';
import { useNavigate } from 'react-router-dom';

function SearchItems(props) {
const Navigate=useNavigate();
    const Check=()=>{
        Navigate('/B/Search/1');
    }
    return (
        <div className='SICont'>
            <div className="SIWrp br">
                <img src={pic} alt="pic" className="SIimg" />
                <div className="SIdetails">
                    <h2>Tower Street Apartments</h2>
                    <span className='db'>1k from center</span>
                    <span className='istaxi'>Free Airport taxi</span>
                    <h4>Stodio Apartments</h4>
                    <span>1 full bed</span>
                </div>
                <div className="SIstatus">
                    <div className="SItop">
                        <h4>Excelent</h4>
                        <span className='SIcount'>8.9</span>
                    </div>
                        <span className='SIprice'>$100</span>
<button className="isavailable cp" onClick={Check}>See Availability</button>
                    
                </div>
            </div>
            <div className="SIWrp br">
                <img src={htl} alt="pic" className="SIimg" />
                <div className="SIdetails">
                    <h2>Tower Street Apartments</h2>
                    <span className='db'>1k from center</span>
                    <span className='istaxi'>Free Airport taxi</span>
                    <h4>Stodio Apartments</h4>
                    <span>1 full bed</span>
                </div>
                <div className="SIstatus">
                    <div className="SItop">
                        <h4>Excelent</h4>
                        <span className='SIcount'>8.9</span>
                    </div>
                        <span className='SIprice'>$100</span>
<button className="isavailable cp" onClick={Check}>See Availability</button>
                    
                </div>
            </div>
            <div className="SIWrp br">
                <img src={pic} alt="pic" className="SIimg" />
                <div className="SIdetails">
                    <h2>Tower Street Apartments</h2>
                    <span className='db'>1k from center</span>
                    <span className='istaxi'>Free Airport taxi</span>
                    <h4>Stodio Apartments</h4>
                    <span>1 full bed</span>
                </div>
                <div className="SIstatus">
                    <div className="SItop">
                        <h4>Excelent</h4>
                        <span className='SIcount'>8.9</span>
                    </div>
                        <span className='SIprice'>$100</span>
<button className="isavailable cp" onClick={Check}>See Availability</button>
                    
                </div>
            </div>
            
        </div>
    );
}

export default SearchItems;