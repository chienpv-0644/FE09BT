import React from "react";
import MainHeader from "./MainHeader";
import BlockCard from "./BlockCard";
class MainContent extends React.Component {
  render() {
    let borderBlock = {
      borderTop: "8px solid #73D4FF"
    };

    let arrBlockCard = [
      {
        images: "https://images6.alphacoders.com/104/1042575.png",
        titleName: "Kamado Tanjirou「Kamado Tanjirō 竈門 炭治郎」",
        contentBlock:
          "Last updated 3 mins ago | Reactjs , Jquery , Bootstrap | Rate view",
        textBlock:
          "Nhất định anh sẽ đưa em trở về làm người. Những việc mà anh không thể làm cho gia đình mình... Anh sẽ làm tất cả vì em !!!..."
      },
      {
        images: "https://images2.alphacoders.com/100/1007550.jpg",
        titleName: "Kamado Nezuko 「Kamado Nezuko 竈門 禰豆子 」",
        contentBlock:
          "Last updated 3 mins ago |  Homstay, House, HomeWay , BlaBla | Rate view",
        textBlock:
          "This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer..."
      },
      {
        images: "https://images.alphacoders.com/104/1049984.jpg",
        titleName: "Agatsuma Zenitsu",
        contentBlock:
          "Last updated 3 mins ago | Reactjs , Jquery , Bootstrap | Rate view",
        textBlock:
          "This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer..."
      },
      {
        images: "https://images.alphacoders.com/103/1032109.png",
        titleName: "Hashibira Inosuke「 Inosuke 嘴平 伊之助 」",
        contentBlock:
          "Last updated 3 mins ago | Reactjs , Jquery , Bootstrap | Rate view",
        textBlock:
          "This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer..."
      },
      {
        images: "https://images6.alphacoders.com/103/1037400.png",
        titleName: "Shinazugawa Genya",
        contentBlock:
          "Last updated 3 mins ago | Reactjs , Jquery , Bootstrap | Rate view",
        textBlock:
          "Nhất định anh sẽ đưa em trở về làm người. Những việc mà anh không thể làm cho gia đình mình... Anh sẽ làm tất cả vì em !!!..."
      }
    ];
    let dataBlockCard = arrBlockCard.map((item, index) => {
      return (
        <BlockCard
          key={`Card_${index}`}
          images={item.images}
          titleName={item.titleName}
          contentBlock={item.contentBlock}
          textBlock={item.textBlock}
        ></BlockCard>
      );
    });
    return (
      <div>
        <MainHeader header="Demon Slayer: Kimetsu No Yaiba Anime Official"></MainHeader>
        <div style={borderBlock}> {dataBlockCard}</div>
      </div>
    );
  }
}

export default MainContent;
