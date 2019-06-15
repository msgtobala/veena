import React, { Component } from "react";

import {
  NotificationContainer,
  NotificationManager
} from "react-notifications";
import {
  BackgroundSection,
  ImageHolder,
  SubscriptionContent,
  MusicIntro,
  SubscriptionPlans,
  MusicDesc,
  MusicOptions,
  Music,
  NormalPlans,
  FreePlan,
  SilverPlan,
  ProPlans,
  Circle,
  PlanHead,
  PlanPrice
} from "./style";
import VeenaImage from "../../assets/img/white-logo.png";
import MusicImage1 from "../../assets/img/add-free-icon.png";
import MusicImage2 from "../../assets/img/audio-icon.png";
import MusicImage3 from "../../assets/img/video-icon.png";

class Subscription extends Component {
  render() {
    return (
      <BackgroundSection>
        <ImageHolder>
          <img src={VeenaImage} alt="veena_images" />
        </ImageHolder>
        <SubscriptionContent>
          <MusicIntro>
            <div>
              <h3>
                Live the music with Veena<sup>+</sup>
              </h3>
              <MusicDesc>
                Enjoy the unlimited audio &amp; video songs with no break. And
                you can also purchase our awesome collection of Rajasthani music
              </MusicDesc>
            </div>
            <MusicOptions>
              <Music>
                <div>
                  <img src={MusicImage1} alt="music_image" />
                </div>
                {/* <h5>Ad Free</h5>
                <p>Enjoy the Unlimited add free Content</p> */}
              </Music>
              <Music>
                <div>
                  <img src={MusicImage2} alt="music_image" />
                </div>
                {/* <h5>45+ Million Songs</h5>
                <p>From new release to rare classics, in 15 Languages</p> */}
              </Music>
              <Music primary>
                <div>
                  <img src={MusicImage3} alt="music_image" />
                </div>
                {/* <h5>Full HD Content</h5>
                <p>Stream in High Defenitions</p> */}
              </Music>
            </MusicOptions>
          </MusicIntro>
          <SubscriptionPlans>
            <NormalPlans>
              <FreePlan>
                <Circle>
                  <p>07</p>
                  <span>DAY</span>
                </Circle>
                <PlanHead>
                  Free Plan
                  <PlanPrice>
                    0<span> RS/-</span>
                  </PlanPrice>
                  <p>AFTER TRIAL, PAY 20RS/- PER WEEK</p>
                </PlanHead>
              </FreePlan>
              <SilverPlan>
                <Circle>
                  <p>90</p>
                  <span>DAY</span>
                </Circle>
                <PlanHead>
                  Silver Plan
                  <PlanPrice>
                    199<span> RS/-</span>
                  </PlanPrice>
                  <p>AFTER TRIAL, PAY 20RS/- PER WEEK</p>
                </PlanHead>
              </SilverPlan>
            </NormalPlans>
            <ProPlans>
              <Circle primary>
                <p>1</p>
                <span>Year</span>
              </Circle>
              <PlanHead primary>
                Pro Plan
                <PlanPrice>
                  599<span> RS/-</span>
                </PlanPrice>
                <p>AFTER TRIAL, PAY 20RS/- PER WEEK</p>
              </PlanHead>
            </ProPlans>
          </SubscriptionPlans>
        </SubscriptionContent>
      </BackgroundSection>
    );
  }
}

export default Subscription;
