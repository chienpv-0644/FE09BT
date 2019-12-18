import React from 'react';
import MainHeader from './MainHeader';
import BlockCard from './BlockCard';
class MainContent extends React.Component {
    render() {
      return(
        <div>
          <MainHeader> <h3> Demon Slayer: Kimetsu No Yaiba Anime Official</h3> </MainHeader>
          <BlockCard></BlockCard>
          
        </div>
      ); 
    }
}

export default MainContent;
