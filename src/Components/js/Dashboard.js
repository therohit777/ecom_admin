import React, { useState } from 'react';
import"../Css/dashboard.css";
import { BsFillPeopleFill } from "react-icons/bs";
import { TiGroup,TiStar } from "react-icons/ti";
import { BsCart4,BsCalculator,BsCurrencyDollar,BsFillGrid3X3GapFill} from "react-icons/bs";
import DashChart1 from './DashChart1';
import DashChart2 from './DashChart2';
import Dashchart3 from './Dashchart3';

const Dashboard = () => {

  const [first, setfirst] = useState(96);
  const [second, setsecond] = useState(49);
  const [third, setthird] = useState(12);
  const [four, setfour] = useState(2);
  const [five, setfive] = useState("$1,614.17");
  const [six, setsix] = useState("$0.00");
  return (
    <div className='dashboard'>
        <div className="division1">
          <div className="displayers">
            <div className="dashcontrate">
              <div className="headcont">
                <div className="dashcontainer1">
                  <BsFillGrid3X3GapFill className='dashicons'/>
                  <div className="dashcont1">
                    <p>{first}</p>
                    <div className="dashcont2">Items</div>
                  </div>
                </div>
                <div className="dashcontainer1 dash2">
                  <TiGroup className='dashicons'/>
                  <div className="dashcont1">
                    <p>{second}</p>
                    <div className="dashcont2">Users</div>
                  </div>
                </div>
              </div>
              <div className="headcont">
                <div className="dashcontainer1 dash3">
                <BsCart4 className='dashicons'/>
                  <div className="dashcont1">
                    <p>{third}</p>
                    <div className="dashcont2">Orders</div>
                  </div>
                </div>
                <div className="dashcontainer1 dash4">
                <TiStar className='dashicons'/>
                  <div className="dashcont1">
                    <p>{four}</p>
                    <div className="dashcont2">Reviews</div>
                  </div>
                </div>
              </div>
              <div className="headcont">
                <div className="dashcontainer1 dash5">
                <BsCurrencyDollar className='dashicons'/>
                  <div className="dashcont1">
                    <p>{five}</p>
                    <div className="dashcont2">Earnings</div>
                  </div>
                </div>
                <div className="dashcontainer1 dash6">
                <BsCalculator className='dashicons'/>
                  <div className="dashcont1">
                    <p>{six}</p>
                    <div className="dashcont2">Tax</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="div1_chart">
            <DashChart1/>
          </div>
        </div>
        
        <div className="division3 divi2">
            <div className="mainchart"><Dashchart3/></div>
            <div className="useritems"></div>
        </div>

        <div className="division3">
            <DashChart2/>
        </div>
        
    </div>
  )
}

export default Dashboard