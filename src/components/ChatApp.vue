<template>
  <div class="main">
    <TopTray />
    <ChatMain :jsonData="jsonData" />
    <Footer />
  </div>
</template>

<script>
import axios from 'axios';

import TopTray from './TopTray'
import ChatMain from './ChatMain'
import Footer from './Footer'

export default {
  name: "ChatApp",
  components: {
    TopTray,
    ChatMain,
    Footer
  },
  data() {
    return {
      jsonData: null
    }
  },
  mounted() {
    let url = "http://localhost:8080/data/chat.json";
    axios.get(url)
    .then (res => {
      this.jsonData = res.data
    })
    .catch(err => {
      console.log(err);
    })
  }
};
</script>

<style lang="scss" scoped>
.main {
  display: flex;
  flex-direction: column;
  height: calc(100vh - 60px);

  @media only screen and (max-width: 768px) {
   height: 100%;
  }
}
</style>
