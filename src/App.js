import React from 'react';
import './App.css';
import {NavBar} from "./Components/Navbar/navbar";
import {Footer} from "./Components/Footer/footer";
import {HomeMain} from "./Components/Homepage/homepage";
import {FeaturedArts} from "./Components/FeaturedArts/fa";
import {Gallery} from "./Components/Gallery/gallery";
import {Route, Switch, withRouter} from 'react-router-dom';
import {TransitionGroup, CSSTransition} from 'react-transition-group';
import base from "./Scripts/base";


class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      images: [],
      mostLiked: []
    }
  } 

  componentWillMount() {
    const rootRef = base.ref()
    const imageRef = rootRef.child("images")
    imageRef.on("value", snap => {
      let images = snap.val()
      let arrayOfArts = []
      for(let i=1; i < 28; i++) {
        arrayOfArts.push(Object.entries(images)[i - 1][1])
      }
      let mostLikedArray =  arrayOfArts.sort((a, b) => b.likes - a.likes).slice(0, 9)
      this.setState({images: arrayOfArts, mostLiked: mostLikedArray})
    })
  }



  render() {
    return (
      <section className="App">
        <header>
          <NavBar />
        </header>
        <Route render={({location}) => (
          <TransitionGroup>
            <CSSTransition key={location.key} timeout={{ enter: 1000, exit: 1000 }} classNames="fade">
              <section className="router-section">
                <Switch location={location}>
                  <Route exact path="/" component={HomeMain} />
                  <Route path="/featured">
                    <FeaturedArts images={this.state.mostLiked} />
                  </Route>
                  <Route path="/gallery">
                    <Gallery images={this.state.images} />
                  </Route>
                </Switch>
              </section>
            </CSSTransition>
          </TransitionGroup>
        )} />
        <footer>
          <Footer />
        </footer>
      </section>
    )
  }

}

export default  withRouter(App);
