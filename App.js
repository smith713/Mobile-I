import React from 'react';
import { 
  StyleSheet, 
  Text, 
  View, 
  Image, 
  TouchableHighlight, 
} from 'react-native';

export default class App extends React.Component {

  onButtonPress() {
    return () => { return null };
  }
  render() {
    return (
      <View style={styles.container}>
        <View style={styles.container}>
          <Text style={{marginTop: 30, fontSize: 30}}>Jordan V: Cement</Text>
            <Image style={styles.topImage}
              source={{url: 'https://cdn5.kicksonfire.com/wp-content/uploads/2017/06/Air-Jordan-5-White-Cement-1-2-681x474.jpg?x77385'}}
            />
            <View style={{flex: 1, flexDirection: 'row'}}>
              <TouchableHighlight onPress={this.onButtonPress} style={[styles.like, styles.btn]}>
                <Text style={styles.btnText}>Like</Text>
              </TouchableHighlight>

              <TouchableHighlight onPress={this.onButtonPress} style={[styles.share, styles.btn]}>
                <Text style={styles.btnText}>Share</Text>
              </TouchableHighlight>
              <TouchableHighlight onPress={this.onButtonPress} style={[styles.comment, styles.btn]}>
                <Text style={styles.btnText}>Comment</Text>
              </TouchableHighlight>
            </View>
            <View style={styles.colContainer}>
              <View style={styles.comments}>
                <Text>mad_swagg: These Cement V's are bad ass!</Text>
              </View>
              <View style={styles.comments}>
                <Text>soleKeeper: What's the drop date on these #Fresh</Text>
              </View>
              <View style={styles.comments}>
                <Text>kickzzz: J-walking for sure with these </Text>
              </View>
            </View>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFF',
    alignItems: 'center',
    justifyContent: 'center',
  },
  btn: {
    marginTop: 20,
    width: 75,
    height: 25,
    alignItems: 'center',
    justifyContent: 'center',
    borderWidth: 1,
    borderColor: '#000',
  },
  like: {
    backgroundColor: '#D2E7FA',
  },
  btnText: {
    color: '#000',
  },
  colContainer: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: -270,
  },
  comments: {
    width: 330,
    height: 35,
    borderRadius: 1,
    borderWidth: 1,
    borderColor: '#000',
    padding: 1,
    alignItems: 'baseline',
    justifyContent: 'center',
  },
  topImage: {
    height: 400,
    alignSelf: 'stretch'
  }
});
