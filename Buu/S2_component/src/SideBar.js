import React from "react";
import FormRegister from "./FormRegister";
import NewNews from "./NewNews";

class SideBar extends React.Component {
  render() {
    return (
      <div>
        <FormRegister></FormRegister>
        <NewNews></NewNews>
      </div>
    );
  }
}

export default SideBar;
