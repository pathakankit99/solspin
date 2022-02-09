import { useState, useEffect } from 'react'
import axios from 'axios'

const data = [
  { id: 1, option: 10 },
  { id: 2, option: -30 },
  { id: 3, option: 50 },
  { id: 4, option: 30 },
  { id: 5, option: 40 },
  { id: 6, option: 20 },
  { id: 7, option: 10 },
  { id: 8, option: -30 },
  { id: 9, option: 50 },
  { id: 10, option: 30 },
  { id: 11, option: 40 },
  { id: 12, option: 20 },
  { id: 13, option: 10 },
  { id: 14, option: -30 },
  { id: 15, option: 50 },
  { id: 16, option: 30 },
  { id: 17, option: 40 },
  { id: 18, option: 20 },
  { id: 19, option: 10 },
  { id: 20, option: -30 },
  { id: 21, option: 50 },
  { id: 22, option: 30 },
  { id: 23, option: 40 },
  { id: 24, option: 20 },
  { id: 25, option: 10 },
  { id: 26, option: -30 },
  { id: 27, option: 50 },
  { id: 28, option: 30 },
  { id: 29, option: 40 },
  { id: 30, option: 20 },
  { id: 31, option: 10 },
  { id: 32, option: -30 },
  { id: 33, option: 50 },
  { id: 34, option: 30 },
  { id: 35, option: 40 },
  { id: 36, option: 20 },
];


const Roulette = () => {
  const [on, seton] = useState(false);
  const [deg, setdeg] = useState(0);
  const spin = { true: "spin", false: "none" };
  const spin2 = { true: "spinRev", false: "none" };
  // const rotate = { true: `rotate(${deg}deg)`, false: "rotate(0deg)" };
  var style = {
    animationName: spin[on],
    transform: `rotate(${360-deg}deg)`,
  };

  var style2 = {
    animationName: spin2[on],
    transform: `rotate(-${360-deg}deg)`,
  };
  useEffect(() => {
    if (deg < 0 || deg > 360) {
      setdeg(0);
    }
  }, [deg])

  const handleSpin = (e) => {
    e.preventDefault();
    seton(true);
    setTimeout(() => {
      axios
        .post("/api/result")
        .then((res) => {
          seton(false);
          console.log(res.data, "res");
          setdeg(res.data);
        })
        .catch((err) => {
          seton(false);
          console.log(err, "err");
        });
    }, 2000);
  }
    return (
      <section>
        spin
        <input
          readOnly
          className="mx-3"
          placeholder="Deg"
          type="text"
          value={deg}
          onChange={(e) => setdeg(e.target.value)}
        />
        degrees
        <div className="overflow-hidden text-white py-16 relative flex justify-center">
          <ul style={style} className="circle overflow-hidden">
            {data?.map((item, index) => {
              const arcDeg = index * 10;
              const lastDigit = arcDeg%10;
              // console.log(deg/10)
              var min;
              if (lastDigit > 5) {
                min= Math.floor(arcDeg / 10) * 10;
              }
              else {
                min= Math.round(arcDeg / 10) * 10;
              }
              const max = min + 10;
              // console.log(index, 'nftIndex', deg, "Spin Result", min, "min", max, "max")

              console.log(min, 'min', deg, 'arcDeg', max, 'max')
              
              if (deg > min && deg < max) {
                console.log(item.id+"This nft has won")
              }
              return (
                <li
                  key={item.id}
                  className={
                    deg > min && deg < max
                      ? "pie  overflow-hidden bg-winner"
                      : "pie overflow-hidden "
                  }
                >
                  {/* <div className="text">{item.option}</div> */}
                  <div
                    className={
                      deg > min && deg < max
                        ? "nft  overflow-hidden bg-winner"
                        : "nft  overflow-hidden "
                    }
                  >
                    <img src={"/images/nft/" + item.id + ".jpeg"} />
                  </div>
                </li>
              );
            })}
            <div className="inner-circle">
              <div style={style2} className="pointer center">
                <img width="70%" style={{marginLeft:"20px"}} src="/images/logo.png" />
              </div>
            </div>
          </ul>

          <div className="arrow">
            <img src="/images/arrow.png" />
          </div>
          {/* <div className="arrow-container"></div> */}
        </div>
        <div className="center">
          <button className="btn" onClick={(e) => handleSpin(e)}>
            Spin
          </button>
        </div>
        <div className="center">
          <button className="btn">Connect wallet</button>
        </div>
      </section>
    );
};

export default Roulette;
