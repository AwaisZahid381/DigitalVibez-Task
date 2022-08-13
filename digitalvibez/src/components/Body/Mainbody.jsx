import React from "react";
import "./body.css";
import Sender from "./Sender";
import ReactStars from "react-stars";
import SenderBlWi from "./SenderBlWi";

const Mainbody = () => {
  let sending = [
    {
      off: "$ 15 OFF",
      head1: "RetailMeNotExclusive! $15% off $75+",
      verfiy: "Verfied 2days ago . 244 uses today",
      coup: "coupon",
      shcoup: "show Coupon",
    },
    {
      off: "$ 15 OFF",
      head1: "RetailMeNotExclusive! $15% off $75+",
      verfiy: "Verfied 2days ago . 244 uses today",
      coup: "coupon",
      shcoup: "show Coupon",
    },
    {
      off: "$ 15 OFF",
      head1: "RetailMeNotExclusive! $15% off $75+",
      verfiy: "Verfied 2days ago . 244 uses today",
      coup: "coupon",
      shcoup: "show Coupon",
    },
    {
      off: "$ 15 OFF",
      head1: "RetailMeNotExclusive! $15% off $75+",
      verfiy: "Verfied 2days ago . 244 uses today",
      coup: "coupon",
      shcoup: "show Coupon",
    },
    {
      off: "$ 15 OFF",
      head1: "RetailMeNotExclusive! $15% off $75+",
      verfiy: "Verfied 2days ago . 244 uses today",
      coup: "coupon",
      shcoup: "show Coupon",
    },
    {
      off: "$ 15 OFF",
      head1: "RetailMeNotExclusive! $15% off $75+",
      verfiy: "Verfied 2days ago . 244 uses today",
      coup: "coupon",
      shcoup: "show Coupon",
    },
    {
      off: "$ 15 OFF",
      head1: "RetailMeNotExclusive! $15% off $75+",
      verfiy: "Verfied 2days ago . 244 uses today",
      coup: "coupon",
      shcoup: "show Coupon",
    },
  ];
  let senderBlwi =[
    {
        off: "$ 15 OFF",
        head1: "RetailMeNotExclusive! $15% off $75+",
        verfiy: "Verfied 2days ago . 244 uses today",
        coup: "coupon",
        shcoup: "show Coupon",
      },
      {
        off: "$ 15 OFF",
        head1: "RetailMeNotExclusive! $15% off $75+",
        verfiy: "Verfied 2days ago . 244 uses today",
        coup: "coupon",
        shcoup: "show Coupon",
      },
      {
        off: "$ 15 OFF",
        head1: "RetailMeNotExclusive! $15% off $75+",
        verfiy: "Verfied 2days ago . 244 uses today",
        coup: "coupon",
        shcoup: "show Coupon",
      },
      {
        off: "$ 15 OFF",
        head1: "RetailMeNotExclusive! $15% off $75+",
        verfiy: "Verfied 2days ago . 244 uses today",
        coup: "coupon",
        shcoup: "show Coupon",
      },
      {
        off: "$ 15 OFF",
        head1: "RetailMeNotExclusive! $15% off $75+",
        verfiy: "Verfied 2days ago . 244 uses today",
        coup: "coupon",
        shcoup: "show Coupon",
      }
  ]
  return (
    <>
      <div className="mainbody">
        <div className="smallOne">
            <div className="smailBoxes smbx1">
                <h4>Rate Vistapirant</h4>
                <ReactStars
            count={5}
            // onChange={ratingChanged}
            size={40}
            value={5}
            color1={"rgba(128, 128, 128, 0.437)"}
            color2={"#ffd700"}
            className="stars"
            />
            <div className="reg">
                <h3>Adress</h3>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Beatae, officia.</p>
            </div>
            <div className="reg">
                <h3>Site</h3>
                <p className="blue">Lorem ipsum dolor.</p>
            </div>
            <div className="reg">
                <h3>Email</h3>
                <p>Lorem ipsum dolor@gmail.com</p>
            </div>
            <div className="reg">
                <h3>Phone</h3>
                <p className="blue">+ 12345678910</p>
            </div>
            </div>
            <div className="smailBoxes smbx2">Lorem ipsum dolor sit amet consectetur adipisicing elit. Corporis, provident magni? Tempore voluptatum eum harum expedita cupiditate error ipsam, aperiam voluptas, deserunt ea amet, libero enim repellendus asperiores mollitia dolore. Sed, dolore molestiae possimus saepe maxime hic autem explicabo fugiat officiis iure repellat, at tempora amet sint architecto eligendi id quas? Possimus nisi asperiores odit animi corrupti quidem et temporibus obcaecati voluptatem beatae pariatur illo aliquid reprehenderit maxime maiores totam enim ab, est excepturi quam! Eius qui neque illum vitae repellat assumenda, vel atque. Deserunt quae, hic est eveniet odit doloribus earum? Nam adipisci doloribus, consequuntur quam maxime doloremque. Eaque.</div>
            <div className="smailBoxes smbx3">
                <button className="smbuts">Menswear</button>
                <button className="smbuts">Fashion</button>
                <button className="smbuts">Menswear</button>
                <button className="smbuts">Fashion</button>
                <button className="smbuts">Children</button>
                <button className="smbuts">Food</button>
                <button className="smbuts">Children</button>
                <button className="smbuts">Food</button>
            </div>
            <div className="smailBoxes smbx4"></div>
        </div>
        <div className="bigOne">
          <div className="fourbts">
            <button>Sale</button>
            <button>Coupon</button>
            <button>Vouncher</button>
            <button>Free Shipping</button>
          </div>
          {sending.map((s) => (
            <Sender s={s} />
          ))}
          <h1>Recently Expire Coupons</h1>
          {
            senderBlwi.map((s)=>(
                <SenderBlWi s={s}/>
            ))
          }
        </div>
      </div>
    </>
  );
};

export default Mainbody;
