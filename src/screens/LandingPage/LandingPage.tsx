import React from "react";
import "./style.css";

export const LandingPage = (): JSX.Element => {
  return (
    <div className="landing-page">
      <div className="div">
        <p className="text-wrapper">Find the stuff you’ll love.</p>
        <p className="p">
          Aliquam rhoncus pretium dolor volutpat lectus odio non tellus neque. Aliquet et purus nibh bibendum integer
          etiam in enim nisi.
        </p>
        <div className="google-play-badge-US">
          <img className="google-play" alt="Google play" src="/img/google-play.svg" />
          <img className="GET-IT-ON" alt="Get IT ON" src="/img/get-it-on.svg" />
          <div className="icon">
            <div className="overlap-group">
              <img className="shape" alt="Shape" src="/img/shape.svg" />
              <img className="img" alt="Shape" src="/img/shape-1.svg" />
              <img className="shape-2" alt="Shape" src="/img/shape-2.svg" />
              <img className="shape-3" alt="Shape" src="/img/shape-3.svg" />
              <img className="shape-4" alt="Shape" src="/img/shape-4.svg" />
              <img className="shape-5" alt="Shape" src="/img/shape-5.svg" />
              <img className="shape-6" alt="Shape" src="/img/shape-6.svg" />
            </div>
          </div>
        </div>
        <div className="app-store-badge-US">
          <div className="overlap">
            <img className="app-store" alt="App store" src="/img/app-store.svg" />
            <img className="download-on-the" alt="Download on the" src="/img/download-on-the.svg" />
            <img className="icon-2" alt="Icon" src="/img/icon.svg" />
          </div>
        </div>
        <div className="home">
          <div className="overlap-2">
            <img className="frame" alt="Frame" src="/img/frame.svg" />
            <div className="device">
              <div className="cam">
                <div className="rectangle" />
                <div className="ellipse" />
              </div>
            </div>
            <img className="screen" alt="Screen" src="/img/screen-1.png" />
          </div>
        </div>
        <div className="cart">
          <div className="overlap-3">
            <img className="frame-2" alt="Frame" src="/img/frame-1.svg" />
            <div className="overlap-group-wrapper">
              <div className="cam-wrapper">
                <div className="cam">
                  <div className="rectangle" />
                  <div className="ellipse" />
                </div>
              </div>
            </div>
            <img className="screen-2" alt="Screen" src="/img/screen-2.png" />
          </div>
        </div>
        <div className="orders">
          <div className="overlap-2">
            <img className="frame" alt="Frame" src="/img/frame-2.svg" />
            <div className="div-wrapper">
              <div className="cam">
                <div className="rectangle" />
                <div className="ellipse" />
              </div>
            </div>
            <img className="screen" alt="Screen" src="/img/screen-4.png" />
          </div>
        </div>
        <div className="product">
          <div className="overlap-3">
            <img className="frame-2" alt="Frame" src="/img/frame-3.svg" />
            <div className="overlap-group-wrapper">
              <div className="overlap-group-2">
                <div className="cam">
                  <div className="rectangle" />
                  <div className="ellipse" />
                </div>
              </div>
            </div>
            <img className="screen-2" alt="Screen" src="/img/screen-3.png" />
          </div>
        </div>
        <div className="profile">
          <div className="overlap-2">
            <img className="frame" alt="Frame" src="/img/frame-4.svg" />
            <div className="device-2">
              <div className="cam">
                <div className="rectangle" />
                <div className="ellipse" />
              </div>
            </div>
            <img className="screen" alt="Screen" src="/img/screen-5.png" />
          </div>
        </div>
        <img className="habitual-branding" alt="Habitual branding" src="/img/habitual-branding.png" />
        <div className="main-image">
          <div className="iphone">
            <div className="overlap-group-3">
              <img className="frame-3" alt="Frame" src="/img/frame-5.svg" />
              <div className="device-3">
                <img className="inner" alt="Inner" src="/img/inner-5.svg" />
                <div className="cam-2">
                  <div className="rectangle-2" />
                  <div className="ellipse-2" />
                </div>
              </div>
              <img className="screen-3" alt="Screen" src="/img/screen.png" />
              <div className="swipe-indcator" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
