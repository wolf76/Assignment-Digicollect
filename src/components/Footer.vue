<template>
  <footer class="footer">
    <div class="row no-gullters">
      <p>Copyright 2020 DigiCollect - All Rights Reserved</p>
    </div>
  </footer>
</template>

<script>
export default {
  name: 'Footer'
}
</script>

<style lang="scss" scoped>
.footer {
  position: absolute; //or fixed (check)
  bottom: 0;
  width: 100%;
  height: 60px;
  line-height: 60px;
  background-color: #2e3259;
  border-top-left-radius: 16px;
  border-top-right-radius: 16px;

  @media only screen and (max-width: 768px) {
    display: none;
  }

  p {
    font-size: 10px;
    margin: 0.5rem auto;
  }
}
</style>
