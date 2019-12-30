import React from 'react';


class Main_header extends React.Component {
    render() {
        var styleMainHeader = {
            fontWeight: 700,
            textShadow: ".2px 2px 10px rgba(0,0,0, .3)"

        }
        return (
          <div>
            <h3 style={styleMainHeader}>
              SERIES: REACT JS: TỪ CƠ BẢN ĐẾN NÂNG CAO
            </h3>
          </div>
        );
    }
}

export default Main_header;