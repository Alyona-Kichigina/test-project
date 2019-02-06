<template>
  <div class="promo">
    <FirstScreen/>
    <SecodScreen/>
    <ThirdScreen/>
  </div>
</template>

<script>
import FirstScreen from './FirstScreen/index'
import SecodScreen from './SecodScreen'
import ThirdScreen from './ThirdScreen'

export default {
  components: {
    FirstScreen, SecodScreen, ThirdScreen
  }
}
</script>
