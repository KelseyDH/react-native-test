/**
 * This is the entry point for your experience that you will run on Exponent.
 *
 * Start by looking at the render() method of the component called
 * FirstExperience. This is where the text and example components are.
 */
'use strict';

let React = require('react-native');

var { ActivityIndicatorIOS, Animated, AppRegistry, ScrollView, View, StyleSheet, Text } = React;
var _ = require('underscore')

// var MyApp = React.createClass({




//   render() {
//     return (
//       <View style={styles.base}>
//         <View style={[styles.child, {flex:1}, styles.green]} />
//           <View style={[styles.child, {height: 100, flexDirection: 'row'}]}>
//           <View style={[styles.child, {flex: 1} ]} />
//         </View>
//         <View style={styles.child} />
//       </View>
//     );
//   }
// });


// var MyApp = React.createClass({
//   getInitialState(){
//     return {count: 0};
//   },

//   incrementCount(){
//     this.setState({count: this.state.count + 1});
//   },

//   render(){
//     return (
//       <View style={styles.container}>
//         <Text style={styles.welcome}>
//           My first react Native app!
//         </Text>
//         <Text onPress={this.incrementCount} style={styles.counter}>
//           {this.state.count} clicks
//         </Text>


//         // <Image source={{uri: "http://pathwaysbc.ca/img/compass.png"}} styles={width: 300, height: 300} />

//       </View>
//     );
//   }
// });


// var MyApp = React.createClass({
//   getInitialState(){
//     return { person: null};
//   },

//   componentDidMount(){
//     fetch('https://swapi.co/api/people/1').
//     then((result) => result.json()).
//     then((person) => this.setState({person}));
//   },

//   render() {
//     let { person } = this.state;
//     return (
//       <ScrollView
//       style={styles.container}
//       contentContainerStyler={styles.scrollContainer}>
//       { person ? <Text>{person.name}

//       Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec a diam lectus. Sed sit amet ipsum mauris. Maecenas congue ligula ac quam viverra nec consectetur ante hendrerit. Donec et mollis dolor. Praesent et diam eget libero egestas mattis sit amet vitae augue. Nam tincidunt congue enim, ut porta lorem lacinia consectetur. Donec ut libero sed arcu vehicula ultricies a non tortor. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean ut gravida lorem. Ut turpis felis, pulvinar a semper sed, adipiscing id dolor. Pellentesque auctor nisi id magna consequat sagittis. Curabitur dapibus enim sit amet elit pharetra tincidunt feugiat nisl imperdiet. Ut convallis libero in urna ultrices accumsan. Donec sed odio eros. Donec viverra mi quis quam pulvinar at malesuada arcu rhoncus. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. In rutrum accumsan ultricies. Mauris vitae nisi at sem facilisis semper ac in est.

//       Vivamus fermentum semper porta. Nunc diam velit, adipiscing ut tristique vitae, sagittis vel odio. Maecenas convallis ullamcorper ultricies. Curabitur ornare, ligula semper consectetur sagittis, nisi diam iaculis velit, id fringilla sem nunc vel mi. Nam dictum, odio nec pretium volutpat, arcu ante placerat erat, non tristique elit urna et turpis. Quisque mi metus, ornare sit amet fermentum et, tincidunt et orci. Fusce eget orci a orci congue vestibulum. Ut dolor diam, elementum et vestibulum eu, porttitor vel elit. Curabitur venenatis pulvinar tellus gravida ornare. Sed et erat faucibus nunc euismod ultricies ut id justo. Nullam cursus suscipit nisi, et ultrices justo sodales nec. Fusce venenatis facilisis lectus ac semper. Aliquam at massa ipsum. Quisque bibendum purus convallis nulla ultrices ultricies. Nullam aliquam, mi eu aliquam tincidunt, purus velit laoreet tortor, viverra pretium nisi quam vitae mi. Fusce vel volutpat elit. Nam sagittis nisi dui.


//       </Text> :
//                  <ActivityIndicatorIOS size="large" color="red" /> }
//       </ScrollView>
//     );
//   }

// });


var MyApp = React.createClass({

  getInitialState(){
    return { entrance: new Animated.Value(0)};
  },

  componentDidMount(){
    Animated.spring(this.state.entrance, {toValue: 1}).start();
  },

  render(){
    let opacity = this.state.entrance;
    let rotate = this.state.entrance.interpolate({
      inputRange: [0,1],
      outputRange: ['-180deg', '0deg']
    });
    return (
      <Animated.View style={{opacity, transform: [{rotate}]}} />
    );
  }

});


var styles = StyleSheet.create({
  // base: {
  //   flex: 30,
  //   alignItems: 'flex-start',
  //   justifyContent: 'center',
  // },
  // child: {
  //   alignSelf: 'center',
  //   backgroundColor: 'blue',
  //   width: 100,
  //   height: 100,

  // },
  container: {
    alignItems: 'flex-start',
    backgroundColor: '#FF7E7E',
    flex: 100,
  },
  // scrollContainer: {
  //   flexDirection: 'column',
  //   justifyContent: 'center',
  //   alignItems: 'center',
  //   justifyContent: 'center',

  // },
  // welcome: {
  //   color: '#666',
  //   fontSize: 20,
  //   fontWeight: '300',
  //   marginTop: 16,

  // },
  // counter: {
  //   color: '#777',
  //   fontSize: 20,
  //   fontWeight: '300',
  //   marginTop: 16,
  // },
});









AppRegistry.registerComponent('main', () => MyApp);





// let {
//   Animated,
//   AppRegistry,
//   Easing,
//   Image,
//   ScrollView,
//   StatusBarIOS,
//   StyleSheet,
//   Text,
//   View,
// } = React;

// let ExBoxes = require('./ExBoxes');
// let ExPhotoGallery = require('./ExPhotoGallery');
// let ExScreen = require('./ExScreen');

// let HORIZ_SPACE = 12;

// class FirstExperience extends React.Component {
//   constructor(props, context) {
//     super(props, context);
//     this.state = {
//       headerColor: '#007aff',
//       isBoxPressed: false,
//     };
//   }

//   render() {
//     let boxColors = [
//       '#5ac8fa', '#ffcc00', '#ff9500', '#ff2d55', '#563b7e', '#007aff',
//       '#4cd964', '#ff3b30', '#8e8e93',
//     ];

//     return (
//       <ExScreen
//         title="react-native-test"
//         headerColor={this.state.headerColor}
//         scrollEnabled={!this.state.isBoxPressed}
//         style={styles.container}>

//         {/* Try editing this text and reloading your project in Exponent */}
//         <Text style={styles.paragraph}>
//           This is a simple example of what you can make with Exponent. Feel
//           free to try modifying it and seeing what happens!
//         </Text>

//         {/* Photo gallery demo */}
//         <Text style={styles.sectionTitle}>Photo Gallery</Text>
//         <ExPhotoGallery style={styles.gallery} />

//         {/* Bouncy boxes demo */}
//         <Text style={styles.sectionTitle}>Interactive Components</Text>
//         <ExBoxes
//           colors={boxColors}
//           onPressBoxBegin={() => this.setState({ isBoxPressed: true })}
//           onPressBoxEnd={() => this.setState({ isBoxPressed: false })}
//           onSelectColor={this._handleColorSelected.bind(this)}
//           style={styles.boxes}
//         />
//         <Text style={styles.note}>
//           Tap the boxes to change the color of the status bar. Press down
//           and drag them to see them bounce back with spring physics.
//         </Text>

//         {/* Publishing instructions */}
//         <Text style={styles.sectionTitle}>Publishing</Text>
//         <Text style={styles.paragraph}>
//           When you are ready to share what your work, run <Text style={styles.code}>exp publish</Text>.
//           Give the link to someone who has the Exponent app and they'll be
//           able to see what you've built.
//         </Text>

//         <Text style={styles.attribution}>
//           Made for <Text style={styles.exponent}>EXPONENT</Text>
//         </Text>
//       </ExScreen>
//     );
//   }

//   componentDidMount() {
//     if (StatusBarIOS) {
//       StatusBarIOS.setStyle('light-content', true);
//       StatusBarIOS.setHidden(false, 'fade');
//     }
//   }

//   _handleColorSelected(color) {
//     this.setState({ headerColor: color });
//   }
// }

// let styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: '#fff',
//   },
//   sectionTitle: {
//     color: '#777',
//     fontSize: 22,
//     fontWeight: '300',
//     marginTop: 16,
//     marginHorizontal: HORIZ_SPACE,
//   },
//   paragraph: {
//     color: '#000',
//     fontSize: 16,
//     marginTop: 8,
//     marginHorizontal: HORIZ_SPACE,
//   },
//   note: {
//     color: '#333',
//     fontSize: 14,
//     textAlign: 'center',
//     marginHorizontal: HORIZ_SPACE,
//   },
//   code: {
//     fontFamily: 'Menlo',
//     fontSize: 15,
//   },
//   gallery: {
//     flex: 0,
//     alignSelf: 'center',
//     marginTop: 16,
//     marginBottom: 12,
//   },
//   boxes: {
//     alignSelf: 'center',
//     marginTop: 16,
//     marginBottom: 12,
//   },
//   attribution: {
//     color: '#999',
//     fontWeight: '300',
//     textAlign: 'center',
//     marginTop: 24,
//     marginBottom: 18,
//     marginHorizontal: HORIZ_SPACE,
//   },
//   exponent: {
//     color: '#777',
//     fontWeight: '200',
//     letterSpacing: 3,
//   },
// });

// AppRegistry.registerComponent('main', () => FirstExperience);
