<template>
  <div class="third-screen-block background-image color-white">
    <div class="container">
      <div class="header d-flex">
        <Logo />
      </div>
      <div class="content">
        <div class="about">
          <div class="title">
            Почему стоит выбрать&nbsp;«Джино»?
          </div>
          <p>
            «Джино» более 18&nbsp;лет на рынке,
            имеет 270&nbsp;000&nbsp;довольных клиентов,
            собственную панель управления
            и многое другое.
          </p>
        </div>
        <PrimaryButton>Создать аккаунт</PrimaryButton>
        <div class="action">
          <div class="action-text">
            Вы получите <span>1000&nbsp;баллов</span> в системе лояльности <a href="">
              Джино.Плюсы
            </a>,
            зарегистрировавшись в течении <span>24&nbsp;часов</span> после посещения данной страницы
          </div>
          <div class="number-block">
            <div class="number">
              1000
            </div>&nbsp;
            <img src="../../../../public/img/icon-promo/plus-bold.svg" alt="">
          </div>
        </div>
      </div>
      <div class="copyright">
        © <a href="">
          «Джино»
        </a>, 2003–2017. «Джино» является зарегистрированным товарным знаком.
        Лицензия на телематические услуги связи № 97495 от 09.03.2012. <a href="">
          Правовая информация.
        </a>
      </div>
    </div>
  </div>
</template>

<script>
import PrimaryButton from '@/components/Buttons/PrimaryButton'
import Logo from '@/components/Logo/index'

export default {
  name: 'Index',
  components: {
    PrimaryButton, Logo
  }
}
</script>

<style scoped lang="scss" src="./style.scss">
  @import '../../../scss/styleIE.scss';
</style>
