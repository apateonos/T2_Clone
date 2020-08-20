import React         from "react";
import { Component } from "react";
import MainBanner    from "./Components/MainBanner";
import Module        from "./Components/Module";
import "./Main.scss"

class Main extends Component {
  constructor(){
    super();
    this.state={
      /* moduleList 이 데이터는 추후 fetch를 통해서 백엔드에서 받을 데이터입니다. */
      moduleList : [
        {
          moduleStyle : "styleA",
          moduleName  : "Feature",
          moduleAside : "",
          moduleItemList  : [
            {
              itemBoxStyle : "itemBox1",
              itemName   : "Matcha",
              itemImage  : "Images/Main/item_1.jpg",
              itemDESC   : "Curl up on the couch with a creamy, frothy and deliciously indulgent Matcha latte. Get the energy hit without the caffeine jitters – Matcha delivers a slower release of energy thanks to caffeine and L-theanine",
              buttonList : ["Shop now"],
            },{
              itemBoxStyle : "itemBox2",
              itemName   : "Matcha Flask",
              itemImage  : "Images/Main/item_3.webp",
              itemDESC   : "Green goodness on the go with our Matcha Flask Featuring a hidden stainless-steel whisk to help make your Matcha quick smart. Just add T2 Matcha, water, milk and shake.",
              buttonList : ["Shop now"],
            },{
              itemBoxStyle : "itemBox3",
              itemName   : "Moroccan Tealeidscope",
              itemImage  : "Images/Main/item_4.webp",
              itemDESC   : "What happens when two icons collide? Teatime goes up a notch. Our famous Stainless Steel flask unites with quintessentially T2 Moroccan Tealeidoscope print.",
              buttonList : ["Shop now"]
            },{
              itemBoxStyle : "itemBox4",
              itemName   : "Moroccan Tealeidscope",
              itemImage  : "Images/Main/item_3.webp",
              itemDESC   : "What happens when two icons collide? Teatime goes up a notch. Our famous Stainless Steel flask unites with quintessentially T2 Moroccan Tealeidoscope print.",
              buttonList : ["Shop now"]
            },{
              itemBoxStyle : "itemBox5",
              itemName   : "Moroccan Tealeidscope",
              itemImage  : "Images/Main/item_3.webp",
              itemDESC   : "What happens when two icons collide? Teatime goes up a notch. Our famous Stainless Steel flask unites with quintessentially T2 Moroccan Tealeidoscope print.",
              buttonList : ["Shop now"]
            }
          ]
        },{
          moduleStyle : "styleB",
          moduleName  : "Shop the look",
          moduleAside : "",
          moduleItemList  : [
            {
              itemBoxStyle : "",
              itemName   : "Bonnie and Neil Tea For One Pink Orchid",
              itemImage  : "Images/Main/item_1.jpg",
              itemDESC   : "A$70.00",
              buttonList : ["Add to bag"],
            },{
              itemBoxStyle : "",
              itemName   : "Bonnie and Neil Tea For One Pink Orchid",
              itemImage  : "Images/Main/item_1.jpg",
              itemDESC   : "A$70.00",
              buttonList : ["Add to bag"],
            },{
              itemBoxStyle : "",
              itemName   : "Bonnie and Neil Tea For One Pink Orchid",
              itemImage  : "Images/Main/item_1.jpg",
              itemDESC   : "A$70.00",
              buttonList : ["Add to bag"],
            },{
              itemBoxStyle : "",
              itemName   : "Bonnie and Neil Tea For One Pink Orchid",
              itemImage  : "Images/Main/item_1.jpg",
              itemDESC   : "A$70.00",
              buttonList : ["Add to bag"],
            }
          ]
        }
      ]
    }
  }
  render() {
    const { moduleList }=this.state;
    return (
      <main>
        <MainBanner />
        <video src="Images/Main/mainbanner.mp4" autoPlay muted loop />
         <div className="moduleList">
          {moduleList.map(el => <Module
            moduleStyle    ={ el.moduleStyle     }
            moduleName     ={ el.moduleName      }
            moduleAside    ={ el.moduleAsideText }
            moduleItemList ={ el.moduleItemList  }
          />)}
        </div>
      </main>
    );
  }
}

export default Main;