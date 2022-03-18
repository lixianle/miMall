<template>
  <div class="footer">
    <div class="footer-logo">
      <img src="/imgs/logo-footer.png" alt="" />
      <p>小米商城</p>
    </div>
    <div class="footer-link">
      <a href="">小米商城主页</a>
      <span>|</span>
      <a href="">小米官网</a>
      <span>|</span>
      <a href="">小米线下体验店</a>
      <span>|</span>
      <a href="">联系我们</a>
    </div>
    <div class="copyright">
      Copyright &copy;2022 <span class="domain">popomall.com</span> All Rights
      Resered
    </div>
  </div>
</template>

<script>
export default {
  name: "NavFooter",
};
</script>

<style lang="scss" scoped>
@import "../assets/scss/config.scss";
.footer {
  height: 234px;
  border-top: 4px solid $colorA;
  background-color: $colorB;
  color: $colorD;
  font-size: $fontI;
  text-align: center;
  .footer-logo {
    margin-top: 46px;
    margin-bottom: 13px;
    img {
      width: 53px;
      height: 36px;
      margin-bottom: 13px;
    }
  }
  .footer-link {
    margin-bottom: 13px;
    a {
      display: inline-block;
      color: $colorD;
    }
    span {
      margin: 0 10px;
    }
  }
  .copyright {
    .domain {
      color: $colorA;
    }
  }
}
</style>
