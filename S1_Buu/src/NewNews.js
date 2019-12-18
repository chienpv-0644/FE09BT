
import React from 'react';
import CardNews from './CardNews';
import NewsTitle from './NewsTitle';

class NewNews extends React.Component {
    render() {
      let spaceImages ={
        padding: "15px 0px 0px 20px"
      }
      return(
        <div>
          <NewsTitle> <h4> BÀI VIẾT MỚI</h4> </NewsTitle>
          <CardNews>
          <div className="card">
            <div className="row no-gutters">
              <div className="col-md-4">
                <img style={spaceImages} src="https://images6.alphacoders.com/104/1042575.png" className="card-img" alt="..."></img>
              </div>
              <div className="col-md-8">
                
                  <div className="card-body px-2 py-3">
                    <h5 className="card-title">Kamado Tanjirou</h5>
                    <p className="card-text">This is a wider card with supporting text below.</p>
                    <p className="card-text"><small className="text-muted">Last updated 3 mins ago</small></p>
                  </div>
              </div>
              </div>
            </div>
            <div className="card ">
            <div className="row no-gutters">
              <div className="col-md-4">
                <img style={spaceImages} src="https://images.alphacoders.com/104/1049984.jpg" className="card-img" alt="..."></img>
              </div>
              <div className="col-md-8">
                
                  <div className="card-body px-2 py-3">
                    <h5 className="card-title">Kamado Nezuko</h5>
                    <p className="card-text">This is a wider card with supporting text below.</p>
                    <p className="card-text"><small className="text-muted">Last updated 3 mins ago</small></p>
                  </div>
              </div>
              </div>
            </div>
            <div className="card ">
            <div className="row no-gutters">
              <div className="col-md-4">
                <img style={spaceImages} src="https://images6.alphacoders.com/103/1037400.png" className="card-img" alt="..."></img>
              </div>
              <div className="col-md-8">
                
                  <div className="card-body px-2 py-3">
                    <h5 className="card-title">Agatsuma Zenitsu</h5>
                    <p className="card-text">This is a wider card with supporting text below.</p>
                    <p className="card-text"><small className="text-muted">Last updated 3 mins ago</small></p>
                  </div>
              </div>
              </div>
            </div>
            <div className="card ">
            <div className="row no-gutters">
              <div className="col-md-4">
                <img style={spaceImages} src="https://images2.alphacoders.com/100/1007550.jpg" className="card-img" alt="..."></img>
              </div>
              <div className="col-md-8">
                
                  <div className="card-body px-2 py-3">
                    <h5 className="card-title">Tomioka Giyuu</h5>
                    <p className="card-text">This is a wider card with supporting text below.</p>
                    <p className="card-text"><small className="text-muted">Last updated 3 mins ago</small></p>
                  </div>
              </div>
              </div>
            </div>
            <div className="card ">
            <div className="row no-gutters">
              <div className="col-md-4">
                <img style={spaceImages} src="https://images.alphacoders.com/103/1032109.png" className="card-img" alt="..."></img>
              </div>
              <div className="col-md-8">
                
                  <div className="card-body px-2 py-3">
                    <h5 className="card-title">Tsuyuri Kanao</h5>
                    <p className="card-text">This is a wider card with supporting text below.</p>
                    <p className="card-text"><small className="text-muted">Last updated 3 mins ago</small></p>
                  </div>
              </div>
              </div>
            </div>
          </CardNews>
        </div>
      ); 
    }
}

export default NewNews;