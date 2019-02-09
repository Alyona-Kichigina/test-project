<template>
  <div class="first-screen-block background-image color-white">
    <div class="container">
      <div class="header d-flex">
        <Logo class="white" />
        <div class="text">
          Только до 31 января
        </div>
      </div>
      <div class="content">
        <h1>
          Честная цена <br>
          за домен&nbsp;.RU&nbsp;—&nbsp;39₽
        </h1>
        <div class="form-block">
          <Login />
        </div>
        <PrimaryButton>Создать аккаунт</PrimaryButton>
      </div>
    </div>
  </div>
</template>

<script>
import Login from '@/Layout/DomainCheck/index'
import PrimaryButton from '@/components/Buttons/PrimaryButton'
import Logo from '@/components/Logo/index'

export default {
  name: 'Index',
  components: {
    Login, PrimaryButton, Logo
  }
}
</script>

<style scoped lang="scss" src="./style.scss">

</style>
