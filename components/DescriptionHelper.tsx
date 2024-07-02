import { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
    faBuilding,
    faMapMarkerAlt,
    faCloudSun,
    faThLarge,
    faRulerCombined,
    faCompass,
    faLayerGroup,
    faStream,
    faWindowMaximize,
    faDoorOpen,
    faLightbulb,
    faDesktop,
    faUser,
    faRadiationAlt,
    faWind,
    faSnowflake,
    faSlidersH,
    faSun,
    faCogs,
    faCalendarAlt,
    faPlay,
    faBars,
    faFileAlt,
    faChartLine,
    faMoneyBillWave,
    faCaretDown,
    faEnvelope,
    faBox,
    faUsers,
    faTint,
    faFire,
    faWindowRestore,
    faCubes,
    faSolarPanel,
    faLeaf,
  } from '@fortawesome/free-solid-svg-icons';

const DescriptionHelper = ({ onSelect }: { onSelect: (text: string) => void }) => {
  const [openSection, setOpenSection] = useState<string | null>(null);

  const toggleSection = (section: string) => {
    setOpenSection(openSection === section ? null : section);
  };

  const handleSelect = (text: string) => {
    onSelect(text);
  };

  const ArrowIcon = ({ isOpen }: { isOpen: boolean }) => (
    <FontAwesomeIcon
      icon={faCaretDown}
      className={`ml-2 transition-transform duration-200 ${isOpen ? 'transform rotate-180' : ''}`}
    />
  );

  return (
    <div className="text-white">
      <h2 className="text-xl font-bold mb-4">Description Helper</h2>
      <div>
        <button
          onClick={() => toggleSection('general')}
          className="w-full text-left font-semibold mb-2 border-b pb-2 flex items-center justify-between"
        >
          <span><FontAwesomeIcon icon={faBuilding} className="mr-2" /> General Description</span>
          <ArrowIcon isOpen={openSection === 'general'} />
        </button>
        {openSection === 'general' && (
          <div className="pl-4 mt-2 space-y-2">
            <button onClick={() => handleSelect('Building Name:')} className="block w-full text-left"><FontAwesomeIcon icon={faBuilding} className="mr-2" />Building Name</button>
            <button onClick={() => handleSelect('Location:')} className="block w-full text-left"><FontAwesomeIcon icon={faMapMarkerAlt} className="mr-2" />Location</button>
            <button onClick={() => handleSelect('Climate File:')} className="block w-full text-left"><FontAwesomeIcon icon={faCloudSun} className="mr-2" />Climate File</button>
            <button onClick={() => handleSelect('Building Layout:')} className="block w-full text-left"><FontAwesomeIcon icon={faThLarge} className="mr-2" />Building Layout</button>
            <button onClick={() => handleSelect('Dimensions:')} className="block w-full text-left"><FontAwesomeIcon icon={faRulerCombined} className="mr-2" />Dimensions</button>
            <button onClick={() => handleSelect('Orientation:')} className="block w-full text-left"><FontAwesomeIcon icon={faCompass} className="mr-2" />Orientation</button>
          </div>
        )}

        <button
          onClick={() => toggleSection('envelope')}
          className="w-full text-left font-semibold mb-2 border-b pb-2 flex items-center justify-between"
        >
          <span><FontAwesomeIcon icon={faEnvelope} className="mr-2" /> Building Envelope</span>
          <ArrowIcon isOpen={openSection === 'envelope'} />
        </button>
        {openSection === 'envelope' && (
          <div className="pl-4 mt-2 space-y-2">
            <button onClick={() => handleSelect('Walls:')} className="block w-full text-left"><FontAwesomeIcon icon={faBox} className="mr-2" />Walls</button>
            <button onClick={() => handleSelect('Roof:')} className="block w-full text-left"><FontAwesomeIcon icon={faStream} className="mr-2" />Roof</button>
            <button onClick={() => handleSelect('Windows:')} className="block w-full text-left"><FontAwesomeIcon icon={faWindowMaximize} className="mr-2" />Windows</button>
            <button onClick={() => handleSelect('Doors:')} className="block w-full text-left"><FontAwesomeIcon icon={faDoorOpen} className="mr-2" />Doors</button>
          </div>
        )}

        <button
          onClick={() => toggleSection('gains')}
          className="w-full text-left font-semibold mb-2 border-b pb-2 flex items-center justify-between"
        >
          <span><FontAwesomeIcon icon={faLightbulb} className="mr-2" /> Internal Gains</span>
          <ArrowIcon isOpen={openSection === 'gains'} />
        </button>
        {openSection === 'gains' && (
          <div className="pl-4 mt-2 space-y-2">
            <button onClick={() => handleSelect('Lighting:')} className="block w-full text-left"><FontAwesomeIcon icon={faLightbulb} className="mr-2" />Lighting</button>
            <button onClick={() => handleSelect('Office Equipment:')} className="block w-full text-left"><FontAwesomeIcon icon={faDesktop} className="mr-2" />Office Equipment</button>
            <button onClick={() => handleSelect('Occupancy:')} className="block w-full text-left"><FontAwesomeIcon icon={faUsers} className="mr-2" />Occupancy</button>
            <button onClick={() => handleSelect('Infiltration:')} className="block w-full text-left"><FontAwesomeIcon icon={faTint} className="mr-2" />Infiltration</button>
          </div>
        )}

        <button
          onClick={() => toggleSection('hvac')}
          className="w-full text-left font-semibold mb-2 border-b pb-2 flex items-center justify-between"
        >
          <span><FontAwesomeIcon icon={faWind} className="mr-2" /> HVAC System</span>
          <ArrowIcon isOpen={openSection === 'hvac'} />
        </button>
        {openSection === 'hvac' && (
          <div className="pl-4 mt-2 space-y-2">
            <button onClick={() => handleSelect('Type:')} className="block w-full text-left"><FontAwesomeIcon icon={faFire} className="mr-2" />Type</button>
            <button onClick={() => handleSelect('Central Plant:')} className="block w-full text-left"><FontAwesomeIcon icon={faSnowflake} className="mr-2" />Central Plant</button>
            <button onClick={() => handleSelect('Autosizing:')} className="block w-full text-left"><FontAwesomeIcon icon={faSlidersH} className="mr-2" />Autosizing</button>
            <button onClick={() => handleSelect('Preconditioning:')} className="block w-full text-left"><FontAwesomeIcon icon={faSun} className="mr-2" />Preconditioning</button>
          </div>
        )}

        <button
          onClick={() => toggleSection('simulation')}
          className="w-full text-left font-semibold mb-2 border-b pb-2 flex items-center justify-between"
        >
          <span><FontAwesomeIcon icon={faCogs} className="mr-2" /> Simulation Details</span>
          <ArrowIcon isOpen={openSection === 'simulation'} />
        </button>
        {openSection === 'simulation' && (
          <div className="pl-4 mt-2 space-y-2">
            <button onClick={() => handleSelect('Design Days:')} className="block w-full text-left"><FontAwesomeIcon icon={faCalendarAlt} className="mr-2" />Design Days</button>
            <button onClick={() => handleSelect('Run Periods:')} className="block w-full text-left"><FontAwesomeIcon icon={faPlay} className="mr-2" />Run Periods</button>
            <button onClick={() => handleSelect('Run Control:')} className="block w-full text-left"><FontAwesomeIcon icon={faSlidersH} className="mr-2" />Run Control</button>
          </div>
        )}

        <button
          onClick={() => toggleSection('additional')}
          className="w-full text-left font-semibold mb-2 border-b pb-2 flex items-center justify-between"
        >
          <span><FontAwesomeIcon icon={faLayerGroup} className="mr-2" /> Additional Features</span>
          <ArrowIcon isOpen={openSection === 'additional'} />
        </button>
        {openSection === 'additional' && (
          <div className="pl-4 mt-2 space-y-2">
            <button onClick={() => handleSelect('Interzone Surfaces:')} className="block w-full text-left"><FontAwesomeIcon icon={faWindowRestore} className="mr-2" />Interzone Surfaces</button>
            <button onClick={() => handleSelect('Internal Mass:')} className="block w-full text-left"><FontAwesomeIcon icon={faCubes} className="mr-2"/>Internal Mass</button>
            <button onClick={() => handleSelect('Detached Shading:')} className="block w-full text-left"><FontAwesomeIcon icon={faSun} className="mr-2" />Detached Shading</button>
            <button onClick={() => handleSelect('Daylighting and Natural Ventilation:')} className="block w-full text-left"><FontAwesomeIcon icon={faSolarPanel} className="mr-2" />Daylighting and Natural Ventilation</button>
            <button onClick={() => handleSelect('Compact Schedules:')} className="block w-full text-left"><FontAwesomeIcon icon={faCalendarAlt} className="mr-2" />Compact Schedules</button>
          </div>
        )}
        <button
        onClick={() => toggleSection('reporting')}
        className="w-full text-left font-semibold mb-2 border-b pb-2 flex items-center justify-between"
        >
        <span><FontAwesomeIcon icon={faChartLine} className="mr-2" /> Results and Reporting</span>
        <ArrowIcon isOpen={openSection === 'reporting'} />
        </button>
        {openSection === 'reporting' && (
          <div className="pl-4 mt-2 space-y-2">
            <button onClick={() => handleSelect('Standard Reports:')} className="block w-full text-left"><FontAwesomeIcon icon={faFileAlt} className="mr-2" />Standard Reports</button>
            <button onClick={() => handleSelect('Timestep or Hourly Variables:')} className="block w-full text-left"><FontAwesomeIcon icon={faFileAlt} className="mr-2" />Timestep or Hourly Variables</button>
            <button onClick={() => handleSelect('Time Bins Report:')} className="block w-full text-left"><FontAwesomeIcon icon={faFileAlt} className="mr-2" />Time Bins Report</button>
            <button onClick={() => handleSelect('HTML Report:')} className="block w-full text-left"><FontAwesomeIcon icon={faFileAlt} className="mr-2" />HTML Report</button>
            <button onClick={() => handleSelect('Environmental Emissions:')} className="block w-full text-left"><FontAwesomeIcon icon={faLeaf} className="mr-2" />Environmental Emissions</button>
            <button onClick={() => handleSelect('Utility Tariffs:')} className="block w-full text-left"><FontAwesomeIcon icon={faMoneyBillWave} className="mr-2" />Utility Tariffs</button>
          </div>
        )}
    </div>
</div>);
}

export default DescriptionHelper;