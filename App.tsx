import React, {Component} from 'react';
import {SafeAreaView, StyleSheet, Text, View} from 'react-native';
import params from './src/params';
import {createMinedBoard} from './src/game-logics';
import MineField from './src/components/MineField';

export default class App extends Component {
  constructor(props: any) {
    super(props);
    this.state = this.createState();
  }

  minesAmount = () => {
    const cols = params.getColumnsAmount();
    const rows = params.getRowsAmount();
    return Math.ceil(cols * rows * params.difficultLevel);
  };

  createState = () => {
    const cols = params.getColumnsAmount();
    const rows = params.getRowsAmount();
    return {
      board: createMinedBoard(rows, cols, this.minesAmount),
    };
  };

  render() {
    return (
      <SafeAreaView style={styles.container}>
        <Text style={styles.sectionTitle}>Iniciando o Mines!</Text>
        <Text style={styles.sectionDescription}>
          Tamanho da grade: {params.getRowsAmount()}x{params.getColumnsAmount()}
        </Text>
        <View style={styles.board}>
          <MineField board={this.state.board} />
        </View>
      </SafeAreaView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'flex-end',
  },
  board: {
    alignItems: 'center',
    backgroundColor: '#AAA',
  },
});
