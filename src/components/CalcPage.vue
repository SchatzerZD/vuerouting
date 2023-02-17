<template>
  <div class="calc">
    <div class="display">{{ currentInput || 0}}</div>
    <button @click="clear" class="button" data-type="C">C</button>
    <button @click="sign" class="button">+/-</button>
    <button @click="percent" class="button">%</button>
    <button @click="divide" class="button op" data-type="÷">÷</button>

    <button @click="numberInput(7)" class="button" data-type="7">7</button>
    <button @click="numberInput(8)" class="button">8</button>
    <button @click="numberInput(9)" class="button" data-type="9">9</button>
    <button @click="multiply" class="button op" data-type="x">x</button>

    <button @click="numberInput(4)" class="button">4</button>
    <button @click="numberInput(5)" class="button">5</button>
    <button @click="numberInput(6)" class="button">6</button>
    <button @click="subtract" class="button op" data-type="-">-</button>

    <button @click="numberInput(1)" class="button">1</button>
    <button @click="numberInput(2)" class="button">2</button>
    <button @click="numberInput(3)" class="button">3</button>
    <button @click="add" class="button op" data-type="+">+</button>

    <button @click="numberInput(0)" class="button zero">0</button>
    <button @click="convertToFloat" class="button">.</button>
    <button @click="equals" class="button op" data-type="=">=</button>

    <div class="log">
      <div id="lol"></div>
    </div>

  </div>

</template>

<script>
export default {
  data() {
    return{
      currentInput: '',
      operator: null,
      previous: null,
      operatorClicked: false,
    }
  },

  methods: {
    clear() {
      this.currentInput = "";
      //document.getElementsByClassName("log").item(0).lastElementChild.innerHTML = '';
    },

    sign() {
      this.currentInput = this.currentInput.charAt(0) === '-' ? this.currentInput.slice(1) : `-${this.currentInput}`;
    },

    percent() {
      this.currentInput = `${parseFloat(this.currentInput) / 100}`;
    },

    numberInput(number) {
      if(this.operatorClicked) {
        this.currentInput = '';
        this.operatorClicked = false;
      }
      this.currentInput = `${this.currentInput}${number}`;
    },

    convertToFloat(){
      if(this.currentInput.indexOf('.') === -1) {
        this.currentInput = `${this.currentInput}.`;
      }
    },

    divide() {
      this.operator = (a, b) => a / b;
      this.operatorClicked = true;
      this.previous = this.currentInput;
      //document.getElementsByClassName("log").item(0).lastElementChild.innerHTML += `${this.currentInput} / `;
    },

    multiply() {
      this.operator = (a, b) => a * b;
      this.operatorClicked = true;
      this.previous = this.currentInput;
      //document.getElementsByClassName("log").item(0).lastElementChild.innerHTML += `${this.currentInput} x `;
    },

    subtract() {
      this.operator = (a, b) => a - b;
      this.operatorClicked = true;
      this.previous = this.currentInput;
      //document.getElementsByClassName("log").item(0).lastElementChild.innerHTML += `${this.currentInput} - `;
    },

    add() {
      this.operator = (a, b) => a + b;
      this.operatorClicked = true;
      this.previous = this.currentInput;
      //document.getElementsByClassName("log").item(0).lastElementChild.innerHTML += `${this.currentInput} + `;
    },

    equals() {
      //document.getElementsByClassName("log").item(0).lastElementChild.innerHTML += `${this.currentInput} = `;
      this.currentInput = `${this.operator(parseFloat(this.previous), parseFloat(this.currentInput))}`;
      this.previous = null;
      //document.getElementsByClassName("log").item(0).lastElementChild.innerHTML += `${this.currentInput}`;


      //var div = document.createElement("div");
      //document.getElementsByClassName("log").item(0).appendChild(div);
    }
  }

}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.display{
  grid-column: 1 / 5;
  background-color: #202020;
  color: white;
  height: 100px;
  text-align: right;
  font-size: 70px;
}

.calc{
  font-size: 35px;
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-auto-rows: minmax(50px, auto);
  border-style: solid;
  border-width: 5px;
  border-color: black;
  width: 20%;
  margin: 0 auto;
}

.zero{
  grid-column: 1/3;
}

.button{
  background-color: darkgrey;
  border-color: black;
  border-width: 2px;
  border-style: solid;
}

.button:hover{
  cursor: pointer;
  background-color: cornflowerblue;
  color: white;
}

.op{
  background-color: orangered;
}

.log{
  font-size: 50px;
  border-style: solid;
  border-width: 3px;
  border-color: black;
  margin: 0 auto;
  margin-top: 50px;
  width: 100%;
  height: 400px;
  overflow: scroll;
  grid-column: 1 / 5;
}


</style>
