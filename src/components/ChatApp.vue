<template>
  <div class="main">
    <TopTray />
    <ChatMain :jsonData="jsonData" />
    <Footer />
  </div>
</template>

<script>
import TopTray from './TopTray'
import ChatMain from './ChatMain'
import Footer from './Footer'

import chatData from '../assets/chat.json';

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
    this.jsonData = chatData;
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
