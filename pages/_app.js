import React from "react";
import App from "next/app";

import stylesheet from 'antd/dist/antd.min.css'
import '../style/main.css';
import 'react-html5-camera-photo/build/css/index.css';

class MyApp extends App {
  render() {
    const { Component, pageProps } = this.props;

    return <Component {...pageProps} />;
  }
}

export default MyApp;
