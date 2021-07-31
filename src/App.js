import React from "react";
import "./App.css";
import HeaderContainer from "./components/header/headerContainer";
import Navbar from "./components/navbar/navbar";
import { Route } from "react-router-dom";
import Music from "./components/Music/Music";
import Newsfeed from "./components/Newsfeed/Newsfeed";
import Settings from "./components/Settings/Settings";
import UsersContainer from "./components/Users/UsersContainer";
import LoginPage from "./components/Login/Login";
import { connect } from "react-redux";
import { initializeApp } from "./redux/app-reducer";
import Preloader from "./components/common/Preloader/Preloader";
import { BrowserRouter } from "react-router-dom";
import { Provider } from "react-redux";
import store from "./redux/redux-store";

const ProfileContainer = React.lazy(() =>
  import("./components/profile/profileContainer")
);
const DialogsContainer = React.lazy(() =>
  import("./components/Dialogs/DialogsContainer")
);

class App extends React.Component {
  componentDidMount() {
    this.props.initializeApp();
  }

  render() {
    if (!this.props.initialized) {
      return <Preloader />;
    }
    return (
      <div className="app-wrapper">
        <HeaderContainer />
        <Navbar />
        <div className="app-wrapper-content">
          <Route
            path="/dialogs"
            render={() => {
              return (
                <React.Suspense fallback={<div>Loading...</div>}>
                  <DialogsContainer />
                </React.Suspense>
              );
            }}
          />

          <Route
            path="/profile/:userId?"
            render={() => {
              return (
                <React.Suspense fallback={<div>Loading...</div>}>
                  <ProfileContainer />
                </React.Suspense>
              );
            }}
          />
          <Route path="/users" render={() => <UsersContainer />} />
          <Route path="/login" render={() => <LoginPage />} />
          <Route path="/music" component={Music} />
          <Route path="/newsfeed" component={Newsfeed} />
          <Route path="/settings" component={Settings} />
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  initialized: state.app.initialized,
});

let ContainerApp = connect(mapStateToProps, { initializeApp })(App);

const HeyHoApp = (props) => {
  return (
    <BrowserRouter>
      <Provider store={store}>
        <ContainerApp />
      </Provider>
    </BrowserRouter>
  );
};

export default HeyHoApp;
