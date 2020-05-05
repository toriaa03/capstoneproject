import React from 'react';
import { withRouter } from 'react-router';
import { NavLink } from 'react-router-dom';


const NavigationComponent = props => {
    const dynamicLink = (route, linkText) => {
      return (
        <div className="nav-link-wrapper">
          <NavLink exact to={route} activeClassName="nav-link-active">
            {linkText}
          </NavLink>
        </div>
      );
    };

 return (
      <div className="nav-wrapper">
              <div className="nav-link-wrapper">
                  <NavLink exact to="/" activeClassName="nav-link-active">
                      Home
                  </NavLink>

                  <NavLink exact to="/message" activeClassName="nav-link-active">
                      Message
                  </NavLink>

                  <NavLink exact to="/explore" activeClassName="nav-link-active">
                      Explore
                  </NavLink>
              </div>
          
      </div>
  )
}
export default withRouter(NavigationComponent);