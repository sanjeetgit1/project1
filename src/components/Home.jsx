import React from "react";
import vg from "../assets/two.webp";
import {AiFillGoogleCircle,AiFillAmazonCircle, AiFillYoutube,AiFillInstagram } from "react-icons/ai"

const Home = () => {
  return (
    <>
      <div className="home" id="home">
        <main>
          <h1>Techstar</h1>
          <p>solution to all your problem</p>
        </main>
      </div>
      <div className="home2">
        <img src={vg} alt="Graphics" />
        <div>
          <p>
            we are your one and only solution to the tech problems you face
            every day. we are leading tech company whose aim is to increase the
            problem solving ability in children.
          </p>
        </div>
      </div>
      <div className="home3" id="about">
        <div>
          <h1>who we are?</h1>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugiat, ea
            laborum! Nemo voluptates aspernatur doloremque laborum eaque maiores
            ipsum. Officiis id eos praesentium molestias deleniti cupiditate
            dignissimos, quod sed ad rem, consectetur provident nostrum
            temporibus delectus quam architecto animi ducimus?
          </p>
        </div>
      </div>

      <div className="home4" id="brands">
        <div>
          <h1>Brands</h1>

          <article>
            <div
              style={{
                animationDelay:"0.3s",
              }}
              >
              
              {/* */}
              <a href="https://www.google.com/"><AiFillGoogleCircle/> 
             <p>  Google</p>
              </a>

            </div>
            <div
              style={{
                animationDelay:"0.5s",
              }}
              >
                <a href="https://www.amazon.in/?&tag=googhydrabk1-21&ref=pd_sl_7hz2t19t5c_e&adgrpid=155259815513&hvpone=&hvptwo=&hvadid=674842289437&hvpos=&hvnetw=g&hvrand=636888361422669764&hvqmt=e&hvdev=c&hvdvcmdl=&hvlocint=&hvlocphy=9300266&hvtargid=kwd-10573980&hydadcr=14453_2316415&gad_source=1"> <AiFillAmazonCircle/>
              <p>Amazon</p></a>
             

            </div>
            <div
              style={{
                animationDelay:"0.7s",
              }}
              >
              <a href="https://www.youtube.com/"> <AiFillYoutube/>
              <p>Youtube</p></a>
             

            </div>
            <div
              style={{
                animationDelay:"0.9s",
              }}
              >
                <a href="https://www.instagram.com/"><AiFillInstagram/>
              <p>Instagram</p></a>
              

            </div>
          </article>
        </div>
      </div>
    </>
  );
};

export default Home;
