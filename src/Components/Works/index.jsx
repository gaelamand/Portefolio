import './styles.scss';
import { useState } from 'react';

const Works = () => {

  const [toggleState, setToggleState] = useState(1);

  const toggleTab = (index) => {
    setToggleState(index)
  }

  return (
    <section id='work' className="work">
      <h2 className="work-title"><span className='numbers-span'>02.</span> Experience</h2>
      <div className="inner">
        <div className="tablist">
        <button
            className={toggleState === 6 ? "tablist-item tablist-item--active" : "tablist-item"}
            onClick={() => toggleTab(6)}
          >SYD DIGITAL CARE
          </button>
          <button
            className={toggleState === 1 ? "tablist-item tablist-item--active" : "tablist-item"}
            onClick={() => toggleTab(1)}
          >O'playground
          </button>
          <button
            className={toggleState === 2 ? "tablist-item tablist-item--active" : "tablist-item"}
            onClick={() => toggleTab(2)}
          >NTT DATA
          </button>
          <button
            className={toggleState === 3 ? "tablist-item tablist-item--active" : "tablist-item"}
            onClick={() => toggleTab(3)}
          >Reckitt Benckiser
          </button>
          <button
            className={toggleState === 4 ? "tablist-item tablist-item--active" : "tablist-item"}
            onClick={() => toggleTab(4)}
          >Lactalis
          </button>
          <button
            className={toggleState === 5 ? "tablist-item tablist-item--active" : "tablist-item"}
            onClick={() => toggleTab(5)}
          >Road trip
          </button>
        </div>

        

        <div className="content-tabs">


        <div
            className={toggleState === 6 ? "content active-content" : "content"}
          >
            <h3 className="tab-title">ERP Consultant<span className='company-span'>@ SYD DIGITAL CARE</span></h3>
            <p className="tab-date">2023 to now</p>
            <div className="tab-description">
              <ul className="tab-description__list">
                <li className="tab-description__list__item">1 Project implementation of Business Central for three companies in the TP</li>
                <li className="tab-description__list__item">Management of master data, sales flow and interface with VP Planning</li>
                <li className="tab-description__list__item">Design workshops (collect customer needs)</li>
                <li className="tab-description__list__item">Solution configuration</li>
                <li className="tab-description__list__item">Writing specifications for developers</li>
                <li className="tab-description__list__item">Ongoing support</li>
              </ul>
            </div>
          </div>
          
          <div
            className={toggleState === 1 ? "content active-content" : "content"}
          >
            <h3 className="tab-title">Front-end web developer <span className='company-span'>@ O'playground</span></h3>
            <p className="tab-date">February to March 2023</p>
            <div className="tab-description">
              <ul className="tab-description__list">
                <li className="tab-description__list--item">Brief with customer, project specifications, planning</li>
                <li className="tab-description__list--item">Choice of programming language and librairies/frameworks</li>
                <li className="tab-description__list--item">Front-end development</li>
                <li className="tab-description__list--item">Understanding of back-end environment </li>
              </ul>
              <p>More details in Projects : check out the project link bellow !</p>
            </div>
          </div>

          <div
            className={toggleState === 2 ? "content active-content" : "content"}
          >
            <h3 className="tab-title">SAP Consultant<span className='company-span'>@ NTT DATA</span></h3>
            <p className="tab-date">2019 to 2022</p>
            <div className="tab-description">
              <ul className="tab-description__list">
                <li className="tab-description__list__item">2 Greenfield implementation projects SAP S/4 HANA - Fiori</li>
                <li className="tab-description__list__item">Design workshops (gathering client requirements)</li>
                <li className="tab-description__list__item">Solution configuration</li>
                <li className="tab-description__list__item">User training and post Go-Live error resolution</li>
                <li className="tab-description__list__item">Writing specifications for developers (Gap vs standard)</li>
                <li className="tab-description__list__item">AGILE methodology</li>
              </ul>
            </div>
          </div>

          <div
            className={toggleState === 3 ? "content active-content" : "content"}
          >
            <h3 className="tab-title">Stock coordinator and SAP Super User<span className='company-span'>@ Reckitt Benckiser</span></h3>
            <p className="tab-date">2017 to 2019</p>
            <div className="tab-description">
              <ul className="tab-description__list">
                <li className="tab-description__list__item">Daily stock management of the main warehouse and 4 external warehouses</li>
                <li className="tab-description__list__item">Management IN & OUT flows between overflow and main warehouses</li>
                <li className="tab-description__list__item">SAP Super User - supporting the Go-live changes</li>
              </ul>
            </div>
          </div>

          <div
            className={toggleState === 4 ? "content active-content" : "content"}
          >
            <h3 className="tab-title">Supply Planner<span className='company-span'>@ Lactalis</span></h3>
            <p className="tab-date">2016</p>
            <div className="tab-description">
              <ul className="tab-description__list">
                <p className="tab-description__list__item">Management of two factories (Scotland and Belgium) :</p>
                <li className="tab-description__list__item">Make a weekly production plan</li>
                <li className="tab-description__list__item">Optimizing the production of finished goods inventory</li>
              </ul>
            </div>
          </div>

          <div
            className={toggleState === 5 ? "content active-content" : "content"}
          >
            <h3 className="tab-title">Road trip<span className='company-span'>@ world</span></h3>
            <p className="tab-date">2017</p>
            <div className="tab-description">
              <ul className="tab-description__list">
                <li className="tab-description__list__item">8 months in South East Asia</li>
              </ul>
            <p className="tab-date">2019</p>
            <ul className="tab-description__list">
                <li className="tab-description__list__item">3 months in Alaska</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Works;
