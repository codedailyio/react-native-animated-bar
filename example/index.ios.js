import React, { Component } from "react";
import { AppRegistry, StyleSheet, Text, View } from "react-native";

import AnimatedBar from "react-native-animated-bar";

export default class example extends Component {
  state = {
    progress: 0,
  };

  componentDidMount() {
    const interval = setInterval(() => {
      if (this.state.progress > 0.9) return clearInterval(interval);

      this.setState(state => {
        return {
          progress: state.progress + 0.1,
        };
      });
    }, 1000);
  }

  render() {
    return (
      <View style={styles.container}>
        <View>
          <Text>No configuration</Text>
          <AnimatedBar progress={this.state.progress} />
        </View>

        <View>
          <Text>Config Options</Text>
          <AnimatedBar
            progress={this.state.progress}
            height={50}
            borderColor="#DDD"
            fillColor="tomato"
            barColor="red"
            borderRadius={5}
          />
        </View>

        <View>
          <Text>No Animation. No Border</Text>
          <AnimatedBar
            progress={this.state.progress}
            height={20}
            borderColor="#DDD"
            barColor="tomato"
            borderRadius={5}
            borderWidth={0}
            animate={false}
          />
        </View>
        <View>
          <Text>Auto Sizing in a Column</Text>
          <AnimatedBar
            progress={this.state.progress}
            height={null}
            borderColor="#DDD"
            barColor="tomato"
            borderRadius={5}
            borderWidth={5}
            duration={500}
          >
            <View style={[styles.row, styles.center]}>
              <Text style={[styles.barText, { fontSize: 30 }]}>
                {Math.round(this.state.progress * 100)}%
              </Text>
            </View>
          </AnimatedBar>
        </View>

        <View>
          <Text>Longer duration on transition</Text>
          <AnimatedBar
            progress={this.state.progress}
            height={20}
            borderColor="#DDD"
            barColor="tomato"
            borderRadius={5}
            borderWidth={5}
            duration={500}
          />
        </View>
        <View style={styles.row}>
          <Text style={styles.rowText}>Progress with Children: </Text>
          <AnimatedBar
            progress={this.state.progress}
            height={40}
            borderColor="#DDD"
            barColor="tomato"
            borderRadius={5}
            borderWidth={5}
            duration={500}
            row
          >
            <View style={[styles.row, styles.center, { flex: 1 }]}>
              <Text style={styles.barText}>
                {Math.round(this.state.progress * 100)}%
              </Text>
            </View>
          </AnimatedBar>
        </View>

        <View style={styles.row}>
          <Text style={styles.rowText}>Auto Sizing to Children on Row: </Text>
          <AnimatedBar
            progress={this.state.progress}
            height={null}
            borderColor="#DDD"
            barColor="tomato"
            borderRadius={5}
            borderWidth={5}
            duration={500}
            row
          >
            <View style={[styles.row, styles.center]}>
              <Text style={[styles.barText, { fontSize: 30 }]}>
                {Math.round(this.state.progress * 100)}%
              </Text>
            </View>
          </AnimatedBar>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 30,
    paddingHorizontal: 30,
    justifyContent: "space-around",
  },
  rowText: {
    marginRight: 20,
  },
  row: {
    flexDirection: "row",
  },
  center: {
    justifyContent: "center",
    alignItems: "center",
  },
  barText: {
    backgroundColor: "transparent",
    color: "#FFF",
  },
});

AppRegistry.registerComponent("example", () => example);
