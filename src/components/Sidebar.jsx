import { 
  LuSlidersHorizontal, 
  BsFillBarChartFill,
  BiLineChart,
  BsMap,
  FaBars 
} from "react-icons"
import { useState } from "react"
import { NavLink } from "react-router-dom";

export default function Sidebar() {

  const [sidebarActive, setSidebarActive] = useState(false);
  const toggle = () => setSidebarActive(!sidebarActive);

  const sections = [
    { 
      name: "Slider",
      link: "/slider",
      icon: <LuSlidersHorizontal/>
    },
    { 
      name: "Bar chart",
      link: "/barChart",
      icon: <BsFillBarChartFill/>
    },
    { 
      name: "Line chart",
      link: "/lineChart",
      icon: <BiLineChart/>
    },
    { 
      name: "Map",
      link: "/map",
      icon: <BsMap/>
    }
  ];

  return (
    <div id="dashboard-sidebar">
      {sections.map((section, i) => {
        return (
          <div>
            <div className="section-toggle">
              <FaBars onClick={toggle} />
            </div>
            <NavLink to={section.link} key={i} className="section-link">
              <div className="section-icon">{section.icon}</div>
              <div style={{ display: sidebarActive ? "block" : "none"}} className="section-name">{section.name}</div>
            </NavLink>
          </div>
        )
      })}
    </div>
  )
};