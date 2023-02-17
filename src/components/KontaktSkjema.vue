<template>
  <div id="overmessage">
    <div>
      <span>Name: </span>
      <input name="name" type="text" id="nameInput" :value="this.$store.state.name">
    </div>
    <div>
      <span>Email: </span>
      <input name="email" type="text" id="emailInput" :value="this.$store.state.email">
    </div>
  </div>

  <div>
    <textarea name="message" id="messageInput"/>
  </div>
  <div>
    <button type="submit" @click="submit()">Submit</button>
  </div>

  <div class="result">
    <div>{{result}}</div>
  </div>
</template>

<script>



export default {

  data() {
    return {
      result: ''
    }
  },

  methods :{
    submit(){
      const nameInput = document.getElementById("nameInput").value;
      const emailInput = document.getElementById("emailInput").value;
      const messageInput = document.getElementById("messageInput").value;

      if(nameInput === ''|| emailInput === '' || messageInput === ''){
        this.result = "Error: No input field can be empty";
      }else if(emailInput.includes('@')){
        this.registerReview(nameInput,emailInput,messageInput);
        document.getElementById("messageInput").innerHTML = '';
      }else{
        this.result = `Error: Email must contain @`
      }
    },

    registerReview(name,email,message){
      this.result = `Success; ${name} with email ${email} sent in the message: ${message}`;

      this.$store.dispatch('storeInfo',name,email);

    }
  }

}
</script>

<style scoped>

#overmessage{
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  margin: 20px;
}

textarea{
  width: 500px;
  height: 200px;
}
</style>