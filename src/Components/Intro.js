import React from "react";
import "../App.css";
import { LinearGradient } from "react-text-gradients";
import { RadialGradient } from "react-text-gradients";
import FancyText from '@carefully-coded/react-text-gradient';

function Intro() {
  return (
    <div id="intro" className="intro">
      <h1>
        <LinearGradient gradient={["to left", "#17acff ,#ff68f0"]}>
          WEBDEVCC
        </LinearGradient>
      </h1>
      <p data-aos="fade-up">
        
      <FancyText
      gradient={{ from: '#F858E0', to: '#77156C', type: 'linear' }}
      animateTo={{ from: '#6DEDD0', to: '#7AE23A' }}
      animateDuration={2000}
    >
      We create Websites for start ups and established businesses in North America.
    </FancyText>
      </p>
    </div>
  );
}

export default Intro;
