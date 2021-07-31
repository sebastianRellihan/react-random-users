import React from 'react';

function Header(props) {
  
    if (props.filterShow === false) {
      return (
        <header>
          <div>
            <h1>Usuarios</h1>
            <div onClick={() => props.filterTrigger()}>
                  <i className="fas fa-bars" />
                  <i className="fas fa-times hide" />
            </div>
          </div>
        </header>
      );
    } else {
      return (
        <header>
          <div>
            <h1>Usuarios</h1>
            <div onClick={() => props.filterTrigger() }>
                  <i className="fas fa-bars hide" />
                  <i className="fas fa-times" />
            </div>
          </div>
        </header>
      );
    }
}

export default Header;
