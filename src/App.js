import React, { Component } from 'react';

const App = () => (<Counter></Counter>)

class Counter extends Component {
  // 初期化処理時に実行されるメソッド
  // ⇨Counterクラス呼び出し時に必ず最初に実行される
  constructor(props) {
    super(props)
    console.log(this.state)
    // 状態の初期定義はConstructor内で行う
    this.state = { count: 0 }
  }

  handlePlusButton = () => {
    // const count = this.state.count
    // メソッド内で一度しか使わない値は変数定義しない（リファクタリングの考え方）
    // stateの変更はsetState（Reactの標準関数）を使う
    this.setState({ count: this.state.count + 1 })
  }

  handleMinusButton = () => {
    this.setState({ count: this.state.count - 1})
  }

  // Component拡張クラスの時はrender関数を使う
  render() {
    console.log("render")
    return (
      <React.Fragment>
        <div>count: { this.state.count }</div>
        <button onClick={this.handlePlusButton}>+1</button>
        <button onClick={this.handleMinusButton}>-1</button>
      </React.Fragment>
    )
  }
}

export default App;
