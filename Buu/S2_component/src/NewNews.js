import React from "react";
import CardNews from "./CardNews";
import NewsTitle from "./NewsTitle";

class NewNews extends React.Component {
  render() {
    let arrNewNews = [
      {
        imageNews: "https://images6.alphacoders.com/104/1042575.png",
        titleNews: "Kamado Tanjirou",
        textNews: "This is a wider card with supporting text below."
      },
      {
        imageNews: "https://images6.alphacoders.com/104/1042575.png",
        titleNews: "Kamado Nezuko",
        textNews: "This is a wider card with supporting text below."
      },
      {
        imageNews: "https://images6.alphacoders.com/104/1042575.png",
        titleNews: "Agatsuma Zenitsu",
        textNews: "This is a wider card with supporting text below."
      },
      {
        imageNews: "https://images6.alphacoders.com/104/1042575.png",
        titleNews: "Tsuyuri Kanao",
        textNews: "This is a wider card with supporting text below."
      },
      {
        imageNews: "https://images6.alphacoders.com/104/1042575.png",
        titleNews: "Tomioka Giyuu",
        textNews: "This is a wider card with supporting text below."
      }
    ];
    let dataNewNews = arrNewNews.map((item, index) => {
      return (
        <CardNews
          key={`New_${index}`}
          imageNews={item.imageNews}
          titleNews={item.titleNews}
          textNews={item.textNews}
        ></CardNews>
      );
    });
    return (
      <div>
        <NewsTitle title="BÀI VIẾT MỚI"></NewsTitle>
        {dataNewNews}
      </div>
    );
  }
}

export default NewNews;
