<template>
  <div class="main" :class="{'showContact': displayContact}">
    <TopTray @click="displayContact = true"/>
    <ChatMain :jsonData="jsonData" @click="displayContact = false" />
    <Footer />
  </div>
</template>

<script>
import TopTray from './TopTray'
import ChatMain from './ChatMain'
import Footer from './Footer'

import chatData from '../assets/chat.json';
import EventBus from '../eventBus'

export default {
  name: "ChatApp",
  components: {
    TopTray,
    ChatMain,
    Footer
  },
  data() {
    return {
      jsonData: null,
      displayContact: false
    }
  },
  mounted() {
    this.jsonData = chatData;
    EventBus.$on('SHOW_CONTACT', (payload) => {
      this.displayContact = payload;
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
