<template>
  <div class="sidebar">
    <div class="side-group">
      <ul>
        <li class="active">
          <a href="#">
            <md-icon>forum</md-icon>
            <p>Chats</p>
          </a>
        </li>
        <li>
          <a href="#">
            <md-icon>phone</md-icon>
            <p>Calls</p>
          </a>
        </li>
        <li>
          <a href="#">
            <md-icon>schedule</md-icon>
            <p>Meetings</p>
          </a>
        </li>
        <li>
          <a href="#">
            <md-icon>contacts</md-icon>
            <p>Contacts</p>
          </a>
        </li>
        <li>
          <a href="#">
            <md-icon>settings</md-icon>
            <p>Settings</p>
          </a>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  name: "Sidebar",
};
</script>

<style lang="scss" scoped>
.sidebar {
  display: flex;
  width: 90%;
  height: 80%;
  background-color: #2e3259;

  margin: 0;
  position: relative;
  top: 45%;
  -ms-transform: translateY(-50%);
  transform: translateY(-50%);

  border-top-right-radius: 16px;
  border-bottom-right-radius: 16px;
  justify-content: center;
  align-items: center;

  z-index: 100;
}

.side-group {
  height: 50%;
  width: 100%;

  ul {
    display: flex;
    flex-direction: column;
    padding: 0;
    margin: 0;
    height: 100%;
    justify-content: space-around;

    li {
      list-style: none;
      height: 30%;

      a {
        display: block;
        color: #e0e1e6;
        text-align: center;
        padding: 15px 0;
        position: relative;
        text-decoration: none;

        i {
          margin-bottom: 10px;
          // font-size: 30px !important;
        }

        p {
          font-size: 14px;
          font-weight: 600;
        }
      }
    }

    li:hover, .active {
      a {
        i,
        p {
          color: #4d7cff;
          transition: none !important;
        }
      }
    }
  }
}
</style>
