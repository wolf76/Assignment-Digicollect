<template>
  <div class="container-fluid">
    <div class="row main-wrapper" v-if="jsonData">
      <div class="col-md-1 main-wrapper--side">
        <Sidebar />
      </div>
      <div class="col-md-3 main-wrapper--left">
        <Searchbar />
        <div class="pinned-chats">
          <p>Pinned Chats</p>
          <div class="contacts-thumb">
            <ul>
              <li v-for="pinnedContact in jsonData.pinned_contacts" :key="pinnedContact.name">
                <img
                  class="rounded-circle"
                  :src="pinnedContact.profile_image"
                  alt="Pin Img"
                />
                <p>{{ pinnedContact.name }}</p>
              </li>
            </ul>
          </div>
        </div>

        <!-- REPLACE THIS PART WITH A TOGGLER -->
        <Searchbar />

        <ChatList :contactLists="jsonData.contacts" />        
      </div>

      <div class="col-md-8 main-wrapper--right">
        <ChatBox :contactChatHistory="jsonData.contacts" />
      </div>
    </div>
  </div>
</template>

<script>
import Sidebar from "./Sidebar";
import Searchbar from "./Searchbar";
import ChatList from "./ChatList";
import ChatBox from "./ChatBox";

export default {
  name: "ChatMain",
  components: {
    Sidebar,
    Searchbar,
    ChatList,
    ChatBox
  },
  props: {
    jsonData: Object
  }
};
</script>

<style lang="scss" scoped>
.container-fluid {
  background-color: #212542;
  height: 100%;

  .main-wrapper {
    height: 100%;

    &--side {
      height: 100%;
      padding: 0;

      @media only screen and (max-width: 768px) {
        display: none;
      }
    }

    &--left {
      border-right: 1px solid #2e3259;
      padding: 0 10px;
      height: 100%;

      @media only screen and (max-width: 768px) {
        display: none;
      }
    }

    &--right {
      height: 100%;
      background-color: #222642;
    }
  }
}

.pinned-chats {
  margin-right: 10px;
  border-bottom: 1px solid #2e3259;

  p {
    font-size: 14px;
    font-weight: 400;
    margin-bottom: 10px;
  }
}

.contacts-thumb {
  ul {
    display: flex;
    justify-content: space-around;
    padding: 0;
    margin: 0;

    li {
      list-style: none;

      img {
        width: 50px;
        height: 50px;
      }

      p {
        margin-top: 5px;
        font-size: 14px;
        text-align: center;
      }
    }
  }
}
</style>
