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
            </div>&nbsp;<svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 512 512"
              width="512"
              height="512"
            >
              <path d="M511.874 201.258l-2.316 82.488c0 7.91-8.107 16.95-16.213 16.95l-186.452 9.04-22.004 180.795c-1.158 9.04-9.265 16.95-19.687 16.95L185.294 512c-9.265 0-16.213-6.78-15.055-15.82l22.004-179.665-176.029 9.04c-9.265 0-16.213-6.78-16.213-15.82l3.474-81.358c1.158-9.04 8.107-18.08 17.371-18.08l185.294-9.04 22.004-180.795c1.158-9.04 9.265-15.82 19.687-16.95l79.908-3.39c9.265-1.13 16.213 5.65 15.055 14.69l-23.162 179.665 177.187-9.04c9.264.001 16.213 6.781 15.055 15.821z" />
            </svg>
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

<style scoped lang="scss" src="./style.scss"></style>
