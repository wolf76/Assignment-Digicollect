<template>
  <div class="container-fluid">
    <div class="row main-row">
      <div class="col-md-4">
        <div class="row panel-tray .align-middle">
          <div class="col-md-4 panel-tray--left">
            <div class="app-name" @click="toggleMobContact()">
              <h5>DigiCollect</h5>
            </div>
          </div>

          <div class="col-md-5 panel-tray--mid">
            <div class="app-logo">
              <img
                class="company-logo"
                src="../assets/Logo.svg"
                alt
              />
            </div>
          </div>

          <div class="col-md-3 panel-tray--right">
            <div class="profile-image float-right">
              <img
                class="profile-image--img rounded-circle"
                src="https://www.clarity-enhanced.net/wp-content/uploads/2020/06/filip.jpg"
                alt="Profile Img"
              />
            </div>
          </div>
        </div>
      </div>

      <div class="col-md-8">
        <div class="panel-tray">
          <div class="friend-drawer no-gutters">
            <img class="profile-image--friend rounded-circle" src="https://www.clarity-enhanced.net/wp-content/uploads/2020/06/robocop.jpg" alt="">
            <div class="friend-drawer--text">
              <h6>Robo Cop</h6>
              <p><span class="active-status small">Active Now</span></p>
            </div>
            <span class="friend-drawer--right desktop-set">
              <div class="icon-wrapper rounded-circle">
                <md-icon>search</md-icon>
              </div>
              <div class="icon-wrapper rounded-circle">
                <md-icon>star</md-icon>
              </div>
              <div class="icon-wrapper rounded-circle">
                <md-icon>videocam</md-icon>
              </div>
              <div class="icon-wrapper rounded-circle">
                <md-icon>phone</md-icon>
              </div>
              <div class="icon-wrapper rounded-circle">
                <md-icon>content_copy</md-icon>
              </div>
              <div class="icon-wrapper rounded-circle">
                <md-icon>person_add_alt_1</md-icon>
              </div>
              <div class="icon-wrapper rounded-circle">
                <md-icon>more_horiz</md-icon>
              </div>
            </span>

            <span class="friend-drawer--right mobile-set">
              <div class="icon-wrapper rounded-circle">
                <md-icon>videocam</md-icon>
              </div>
              <div class="icon-wrapper rounded-circle">
                <md-icon>phone</md-icon>
              </div>
              <div class="icon-wrapper rounded-circle">
                <md-icon>more_horiz</md-icon>
              </div>
            </span>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>

export default {
  name: "TopTray",
  methods: {
    toggleMobContact() {
      this.$emit('click')
    }
  }
};
</script>

<style lang="scss" scoped>
.container-fluid {
  background-color: #2e3259;
  padding: 10px;
  margin: 0;
  border-bottom-left-radius: 16px;
  border-bottom-right-radius: 16px;

  .main-row {
    width: 100%;
    margin: 0;
  }
}

.panel-tray {
  .no-gutters {
    padding: 0;
  }

  @media only screen and (max-width: 768px) {
    flex-direction: row;
    flex-wrap: nowrap;
    justify-content: space-between;
  }

  &--mid {
    height: 50px;
    padding: 5px 25px;

    @media only screen and (max-width: 768px) {
      width: 50%;
    }    
  }

  &--right {
    @media only screen and (max-width: 768px) {
      display: none;
    }
  }
}

.app {
  &-name {
    height: 100%;
    color: #e0e1e6;
    display: flex;
    align-items: center;

    h5 {
      margin: 0;
    }
  }

  &-logo {
    height: 100%;
    width: 100%;
    display: flex;
    align-items: center;

    .company-logo {
      width: inherit;
      height: inherit;
      margin: 10px auto;
    }
  }
}

.profile-image {
  display: flex;
  align-items: center;
  height: 100%;

  &--img {
    width: 35px;
    height: 35px;
  }

  &--friend {
    width: 50px;
    height: 50px;

    @media only screen and (max-width: 768px) {
      width: 40px;
      height: 40px;
    }
  }
}

.friend-drawer {
  padding: 10px 15px;
  display: flex;
  vertical-align: baseline;
  transition: .3s ease;
  
  &--text {
    margin-left: 12px;
    width: 50%;

    h6 {
      font-weight: 600;
      margin-top: 0px;
      margin-bottom: 6px;
    }
    
    p {
      margin: 0;

      .active-status {
        border: 1px solid #42cd7c;
        border-radius: 15px;
        background-color: #42cd7c;
        color: #333;
        font-weight: 600;
        padding: 0 10px;
      }
    }
  }

  &--right {
    display: flex;
    justify-content: space-around;
    align-items: center;
    float: right;
    color: #4d7cff;
    margin-left: auto;
    width: 40%;
  }

  .icon-wrapper {
    background-color: #30386b;
  }

  i {
    margin: 6px;
  }

  .desktop-set {

    @media only screen and (max-width: 768px) {
      display: none;
    }
  }

  .mobile-set {
    width: 30%;
    justify-content: space-evenly;

    @media only screen and (min-width: 768px) {
      display: none;
    }
  }
}
</style>
