<template>
  <div class="search-box">
    <div class="input-wrapper">
      <md-icon>search</md-icon>
      <input type="text" placeholder="Search" />
    </div>
  </div>
</template>

<script>
export default {
  name: "Searchbar",
};
</script>

<style lang="scss" scoped>
.search-box {
  padding: 10px 10px 10px 0px;
  height: 52px;
  width: 100%;

  .input-wrapper {
    background: #2e3259;
    border-radius: 40px;
    height: 100%;

    i {
      color: #b8b8b8;
      vertical-align: middle;
      margin-left: 7px;
      font-size: 20px !important;
    }
  }
}

input {
  border: none;
  border-radius: 40px;
  width: 80%;
  background-color: #2e3259;
  color: #b8b8b8;
  height: 100%;
  font-size: 14px;

  &::placeholder {
    color: grey;
    font-weight: 400;
  }

  &:focus {
    outline: none;
  }
}
</style>
