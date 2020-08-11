<template>
  <div class="chat-list">
    <div v-for="(contactList, i) in contactLists" :key="contactList.name" class="contact-drawer w-100" @click="contact_clicked(i)">
      <img
        class="profile-image--contact rounded-circle"
        :src="contactList.profile_image"
        alt
      />
      <div class="contact-drawer--text">
        <p class="contact-name">{{ contactList.name }}</p>
        <p class="contact-last-message">{{ contactList.last_message }}</p>
      </div>
      <div class="contact-drawer--notification">
        <div class="rounded-circle" :class="{'unread-messages': contactList.unread_messages != ''}">{{ contactList.unread_messages }}</div>
        <p class="recv-time">{{ contactList.last_seen }}</p>
      </div>
    </div>
  </div>
</template>

<script>
import EventBus from '../eventBus'
export default {
  name: "ChatList",
  props: {
    contactLists: Array
  },
  methods: {
    contact_clicked(index) { 
      EventBus.$emit('UPDATED_HISTORY', index)
    }
  }
};
</script>

<style lang="scss" scoped>
.chat-list {
  height: 390px;
  overflow: scroll;

  .contact-drawer {
    display: flex;
    background: transparent;
    padding: 10px 0;
    border-bottom-width: 1px !important;
    border-bottom: 1px solid #2e3259;

    img {
      width: 40px;
      height: 40px;
    }

    p {
      margin: 0;
    }

    &--text {
      display: flex;
      flex-direction: column;
      justify-content: space-around;
      margin: 0 10px;

      .contact-name {
        font-size: 14px;
        font-weight: 600;
      }

      .contact-last-message {
        font-size: 12px;
        font-weight: 400;
      }
    }

    &--notification {
      display: flex;
      margin-left: auto;
      margin-right: 10px;
      font-size: 10px;
      flex-direction: column;
      justify-content: space-between;

      .unread-messages {
        margin-top: 5px;
        text-align: center;
        background: #4d7cff;
        width: 1.313rem;
        padding: 3px;
        font-weight: 900;
        color: #e0e1e6;
      }

      .recv-time {
        margin-top: 5px;
      }
    }
  }
}
</style>
