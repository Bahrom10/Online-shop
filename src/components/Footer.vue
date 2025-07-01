<template>
    <footer class="footer">
      <div class="footer__socials">
        <a href="#" class="footer__socials-link">
          <img src="@/assets/images/footer-1.svg" alt="" />
        </a>
        <a href="#" class="footer__socials-link">
          <img src="@/assets/images/footer-2.svg" alt="" />
        </a>
        <a href="#" class="footer__socials-link">
          <img src="@/assets/images/footer-3.svg" alt="" />
        </a>
        <a href="#" class="footer__socials-link">
          <img src="@/assets/images/footer-4.svg" alt="" />
        </a>
        <a href="#" class="footer__socials-link">
          <img src="@/assets/images/footer-5.svg" alt="" />
        </a>
        <a href="#" class="footer__socials-link">
          <img src="@/assets/images/footer-6.svg" alt="" />
        </a>
        <a href="#" class="footer__socials-link">
          <img src="@/assets/images/footer-7.svg" alt="" />
        </a>
        <a href="#" class="footer__socials-link">
          <img src="@/assets/images/footer-8.svg" alt="" />
        </a>
      </div>
      <div class="footer__descr">
        <p>
          Phone: +998 94 397 45
        </p>
        <p>E-mail: bahodirovbahrom2010@gmail.com</p>
      </div>
    </footer>
  </template>
  
  <script setup></script>
  
  <style lang="scss" scoped>
  .footer {
    padding: 30px 50px 80px;
    display: flex;
    flex-direction: column;
    align-items: center;
    background: #1F1F1F;
  }
  .footer__socials {
    display: flex;
    align-items: center;
    gap: 17px;
    margin-bottom: 54px;
  }
  .footer__descr{
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    width: 100%;
    gap: 20px;
  }
  .footer__descr p {
    color: #a5a5a5;
    font-size: 20px;
    font-weight: 300;
  }
  .footer__descr p:last-child{
    margin-bottom: 80px;
  }
  </style>
  