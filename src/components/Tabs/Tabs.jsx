import React, { useState } from 'react';
import "./Tabs.scss"

function Tabs() {
    const tabs = [
        "Internet Fibra", "Internet Fibra + TV", "Internet Fibra + Fijo", "Planes trío"
    ]
    const [activeTab, setActiveTab] = useState(tabs[0]);

    const handleTabClick = (tab) => {
      setActiveTab(tab);
    };

    

  return (
    <div className='content-tabs'>
        <div className="tabs">
            {tabs.map((tab, index) => (
                <div
                    key={index}
                    className={`tab ${activeTab === tab ? 'active' : ''}`}
                    onClick={() => handleTabClick(tab)}
                >
                    {tab}
              </div>
            ))}
        </div>
        {/* <div className="tab-content">
            {tabs.map((tab, index) => (
                <div
                    key={index}
                    className={`tab-pane ${activeTab === tab ? 'active' : 'hidden'}`}
                >
                    Contenido de la pestaña {tab}
                </div>
            ))}
        </div> */}
    </div>
  );
}

export default Tabs;