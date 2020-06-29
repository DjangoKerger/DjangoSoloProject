import React from "react";
import HomeIcon from '@material-ui/icons/Home';
import CurrentDay from "./CurrentDay";
import CurrentTime from "./CurrentTime";

function Header() {
  return (
    <header>
      <h1><HomeIcon />Desktop Keeper</h1>
      <CurrentDay /> 
      <CurrentTime />
    </header>
  );
}

export default Header;