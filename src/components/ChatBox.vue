<template>
  <div class="chatbox-wrapper">
    <div class="chatbox-panel">
      <div class="row no-gutters chat-row" v-for="chat in contactChatHistory[history_index].chat_history" :key="chat.serial">
        <div class="col-md-6 chat-individual" :class="{'offset-md-6': chat.id == 'first'}">
          <img class="rounded-circle" :class="{'order-div': chat.id == 'first'}" :src="chat.pro_pic" alt="">
          <div class="chat-bubble--wrap">
            <div class="chat-bubble" :class="{'bubble-radius--right': chat.id == 'first', 'bubble-radius--left': chat.id == 'second'}">{{ chat.message }}</div>
            <div class="timestamp d-flex" :class="{'order-timestamp': chat.id == 'first'}">
              <md-icon>done_all</md-icon>
              <p>{{ chat.sent_time }}</p>
            </div>
          </div>
        </div>
      </div>
    </div>

    <div class="chatbox-tray">
      <div class="chatbox-tray--left">
        <div class="icon-wrapper rounded-circle">
          <md-icon>title</md-icon>
        </div>
        <div class="icon-wrapper rounded-circle">
          <md-icon>attach_file</md-icon>
        </div>
        <div class="icon-wrapper rounded-circle">
          <md-icon>sentiment_satisfied</md-icon>
        </div>
      </div>

      <input type="text" placeholder="Type in your messages..." />

      <div class="chatbox-tray--right">
        <div class="icon-wrapper rounded-circle">
          <md-icon>mic</md-icon>
        </div>
        <div class="icon-wrapper rounded-circle">
          <md-icon>send</md-icon>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import EventBus from '../eventBus'
export default {
  name: "ChatBox",
  props: {
    contactChatHistory: Array,
  },
  data() {
    return {
      history_index: 0
    }
  },
  mounted() {
    EventBus.$on('UPDATED_HISTORY', (payload) => {
      this.history_index = payload;
    })
  }
};
</script>

<style lang="scss" scoped>
.chatbox-wrapper {
  margin: 10px 0;
  width: 100%;
  height: 95%;
}

.chatbox-panel {
  padding-top: 20px;
  width: 100%;
  min-height: 83%;
  max-height: 83%;
  overflow: scroll;

  .chat-row {
    margin-bottom: 0.5rem;

    &:last-of-type {
      padding-bottom: 2rem;
    }
  }

  .chat-individual {
    display: flex;
    align-items: center;

    img {
      width: 30px;
      height: 30px;
    }

    .order-div {
      order: 1;
    }
  }

  .chat-bubble--wrap {
    padding: 0 18px;
    width: 100%;

    .timestamp {
      font-size: 12px;
      align-items: center;

      i {
        margin: 0;
        color: #3a9b6a;
        font-size: 14px !important;
        font-weight: 600;
      }
       
      p {
       margin: 0;
       color: #a9a9a9;
      }
    }

    .order-timestamp {
      justify-content: flex-end;
    }
  }

  .chat-bubble {
    background: #2e3259;
    padding: 10px 18px;
    position: relative;
    font-size: 14px;
    width: 100%;
    margin: 0 10px;
  }

  .bubble-radius {

    &--left {
      border-bottom-right-radius: 25px;
      border-top-left-radius: 25px;
      border-top-right-radius: 25px;
    }

    &--right {
      border-bottom-left-radius: 25px;
      border-top-left-radius: 25px;
      border-top-right-radius: 25px;
    }
  }
}

.chatbox-tray {
  background: #282c51;
  display: flex;
  align-items: center;
  height: 50px;
  border-radius: 25px;
  width: 100%;
  margin: 10px 0;
  padding: 0 10px;

  @media only screen and (max-width: 768px) {
    position: fixed;
    bottom: 0;
    width: 93%;
  }

  &--left {
    display: flex;
    justify-content: space-around;
    align-items: center;
    color: #4d7cff;

    .icon-wrapper {
      background-color: #30386b;
      margin-right: 5px;
    }
  }

  input {
    padding: 2px 20px;
    height: 90%;
    width: 80%;
    border-radius: 25px;
    background: #333760;
    border: none;
    color: #e0e1e6;
    font-size: 14px;

    &:focus {
      outline: none;
    }
  }

  &--right {
    display: flex;
    justify-content: space-around;
    align-items: center;
    color: #4d7cff;
    margin-left: auto;

    .icon-wrapper {
      background-color: #30386b;
      margin-left: 5px;

      &:last-of-type {
        background-color: #2f5b6a;
        color: #4ffda5;
      }
    }
  }

  i {
    margin: 6px;
  }
}
</style>
