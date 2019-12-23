import React from 'react';
import CardImages from './CardImages';
import CardContent from './CardContent';

 class BlockCard extends React.Component {
    render() {
      let styleTitle = {
        color: "#279a96",
        textTransform: "uppercase"
      }
      let borderBlock = {
          borderTop: "8px solid #73D4FF"
      }
      return(
        <div>
          <div className="card" style={borderBlock}>
            <div className="row no-gutters">
              <div className="col-md-6">
                <CardImages><img src="https://images6.alphacoders.com/104/1042575.png" className="card-img" alt="..."></img></CardImages>
              </div>
              <div className="col-md-6">
                <CardContent>
                  <div className="card-body p-3">
                    <h5 className="card-title font-weight-bold" style={styleTitle}>Kamado Tanjirou「Kamado Tanjirō 竈門 炭治郎」</h5>
                    <p className="card-text"><small className="text-muted">Last updated 3 mins ago | Reactjs , Jquery , Bootstrap | Rate view
                      <span class="fa fa-star checked ml-2"></span>
                      <span class="fa fa-star checked"></span>
                      <span class="fa fa-star checked"></span>
                      <span class="fa fa-star"></span>
                      <span class="fa fa-star"></span>
                    </small></p>
                    <p className="card-text">Nhất định anh sẽ đưa em trở về làm người. Những việc mà anh không thể làm cho gia đình mình... Anh sẽ làm tất cả vì em !!!...</p>
                    <button type="button" className="card-text btn btn-info">READ MORE</button>
                  </div>
                </CardContent>
              </div>
              </div>
            </div>
            <div className="card ">
            <div className="row no-gutters">
              <div className="col-md-6">
                <CardImages><img src="https://images.alphacoders.com/104/1049984.jpg" className="card-img" alt="..."></img></CardImages>
              </div>
              <div className="col-md-6">
                <CardContent>
                  <div className="card-body p-3">
                    <h5 className="card-title font-weight-bold" style={styleTitle}>Kamado Nezuko 「Kamado Nezuko 竈門 禰豆子 」</h5>
                    <p className="card-text">
                      <small className="text-muted">Last updated 3 mins ago |  Homstay, House, HomeWay , BlaBla | Rate view
                      <span class="fa fa-star checked ml-2"></span>
                      <span class="fa fa-star checked"></span>
                      <span class="fa fa-star checked"></span>
                      <span class="fa fa-star"></span>
                      <span class="fa fa-star"></span>
                      </small>
                    </p>
                    <p className="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer...</p>
                    <button type="button" className="card-text btn btn-info">READ MORE</button>
                  </div>
                </CardContent>
              </div>
              </div>
            </div>
            <div className="card ">
            <div className="row no-gutters">
              <div className="col-md-6">
                <CardImages><img src="https://images6.alphacoders.com/103/1037400.png" className="card-img" alt="..."></img></CardImages>
              </div>
              <div className="col-md-6">
                <CardContent>
                  <div className="card-body p-3">
                    <h5 className="card-title font-weight-bold" style={styleTitle}>Agatsuma Zenitsu</h5>
                    <p className="card-text"><small className="text-muted">Last updated 3 mins ago | MonDay , TuesDay , ThursDay , FriDay | Rate view
                    <span class="fa fa-star checked ml-2"></span>
                      <span class="fa fa-star checked"></span>
                      <span class="fa fa-star checked"></span>
                      <span class="fa fa-star"></span>
                      <span class="fa fa-star"></span>
                    </small></p>
                    <p className="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer...</p>
                    <button type="button" className="card-text btn btn-info">READ MORE</button>
                  </div>
                </CardContent>
              </div>
              </div>
            </div>
            <div className="card ">
            <div className="row no-gutters">
              <div className="col-md-6">
                <CardImages><img src="https://images2.alphacoders.com/100/1007550.jpg" className="card-img" alt="..."></img></CardImages>
              </div>
              <div className="col-md-6">
                <CardContent>
                  <div className="card-body p-3">
                    <h5 className="card-title font-weight-bold" style={styleTitle}>Hashibira Inosuke「 Inosuke 嘴平 伊之助 」</h5>
                    <p className="card-text"><small className="text-muted">Last updated 3 mins ago | Sasuke, Hinata, Naruto, Sakura | Rate view
                    <span class="fa fa-star checked ml-2"></span>
                      <span class="fa fa-star checked"></span>
                      <span class="fa fa-star checked"></span>
                      <span class="fa fa-star"></span>
                      <span class="fa fa-star"></span>
                    </small></p>
                    <p className="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer...</p>
                    <button type="button" className="card-text btn btn-info">READ MORE</button>
                  </div>
                </CardContent>
              </div>
              </div>
            </div>
            <div className="card ">
            <div className="row no-gutters">
              <div className="col-md-6">
                <CardImages><img src="https://images.alphacoders.com/103/1032109.png" className="card-img" alt="..."></img></CardImages>
              </div>
              <div className="col-md-6">
                <CardContent>
                  <div className="card-body p-3">
                    <h5 className="card-title font-weight-bold" style={styleTitle}>Shinazugawa Genya</h5>
                    <p className="card-text"><small className="text-muted">Last updated 3 mins ago | Luffy , Zoro , sanji , Nami , Chopper | Rate view
                    <span class="fa fa-star checked ml-2"></span>
                      <span class="fa fa-star checked"></span>
                      <span class="fa fa-star checked"></span>
                      <span class="fa fa-star"></span>
                      <span class="fa fa-star"></span>
                    </small></p>
                    <p className="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. 
                    This content is a little bit longer... </p>
                    <button type="button" className="card-text btn btn-info">READ MORE</button>
                  </div>
                </CardContent>
              </div>
              </div>
            </div>
          </div>
      ); 
    }
}

export default BlockCard;