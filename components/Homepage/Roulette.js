import {useState, useEffect} from 'react'

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
  // const rotate = { true: `rotate(${deg}deg)`, false: "rotate(0deg)" };
  var style = {
    animationName: spin[on],
    transform: `rotate(${deg}deg)`,
  };
  useEffect(() => {
    if (deg < 0 || deg > 360) {
      setdeg(0);
    }
  }, [deg])
    return (
      <section>
        spin  
        <input
          className='mx-3'
          placeholder="Deg"
          type="text"
          value={deg}
          onChange={(e) => setdeg(e.target.value)}
        />
        degrees
        
        <div className="overflow-hidden text-white py-16 relative flex justify-center">
          <ul style={style} className="circle overflow-hidden">
            {data?.map((item) => {
              if (item.id > 19)
                return (
                  <li key={item.id} className="pie  overflow-hidden">
                    {/* <div className="text">{item.option}</div> */}
                    <div className="nft  overflow-hidden">
                      <img src={"/images/nft/" + item.id + ".png"} />
                    </div>
                  </li>
                );
              return (
                <li key={item.id} className="pie  overflow-hidden">
                  {/* <div className="text">{item.option}</div> */}
                  <div className="nft  overflow-hidden">
                    <img src={"/images/nft/" + item.id + ".jpeg"} />
                  </div>
                </li>
              );
            })}
            <div className="inner-circle">
              <div className="pointer custom-gradient"></div>
            </div>
          </ul>

          <div className="arrow custom-gradient"></div>
          {/* <div className="arrow-container"></div> */}
        </div>
        <div className="center">
          <button className="btn" onClick={() => seton(!on)}>
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
