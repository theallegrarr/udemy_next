import App from "next/app"
import { Provider } from "react-redux"
import withRedux from "next-redux-wrapper"
import React from "react"
import store from "../redux/store"

class MyApp extends App {
  static async getInitialProps({Component, ctx}) {
    const appProps = Component.getInitialProps ? await Component.getInitialProps(ctx) : {};

    console.log(appProps)
    return { appProps: appProps };
  }

  render(){
    const { Component, appProps } = this.props;
    // const Component = this.props.Component;
    // const appProps = this.props.appProps

    return(
      <Provider store={store}>
        <Component {...appProps} />
      </Provider>
    );
  }
}

const makeStore = () => store;

export default withRedux(makeStore)(MyApp);