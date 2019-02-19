<template>
  <div class="promo">
    <FirstScreen ref="FirstScreen" >
      <div
      class="button-down"
      @click="smoothScrolling(1)"
    >
      <img
        src="../../../public/img/down.png"
        alt=""
      >
    </div>
    </FirstScreen>
    <SecondScreen ref="SecondScreen" />
    <ThirdScreen ref="ThirdScreen" />
    
    <div class="buttons">
      <!--выводим количество кнопок столько сколько блоков-->
      <div
        v-for="(item, index) of scrollState"
        :key="index"
        :class="index === navDotActiveIdes && 'active'"
        class="circle"
        @click="smoothScrolling(index)"
      />
    </div>
  </div>
</template>

<script>
import FirstScreen from './FirstScreen'
import SecondScreen from './SecondScreen'
import ThirdScreen from './ThirdScreen'

const SPEED = 5
const STEP_DURATION = 10
const STEP = (SPEED * STEP_DURATION)
const DOWN = 'DOWN'
const UP = 'UP'

export default {
  components: {
    FirstScreen, SecondScreen, ThirdScreen,
  },
  data () {
    return {
      scrollState: [],
      navDotActiveIdes: 0
    }
  },
  // при первичной отрисовке
  beforeMount () {
    // создает обработчик события scroll и вызываем функцию
    document.addEventListener('scroll', this.handleScroll)
  },
  mounted () {
    // объект делаем массивом и создем новый массив с высотой каждого элемента
    this.scrollState = Object.values(this.$refs).map(({ $el: { clientHeight } }) => clientHeight)
  },
  // перед тем как компонент исчезнет
  // чтобы не было ошибки при вызове события если нет компонента
  beforeDestroy () {
    // удаляем обработчик и вызываем функцию
    document.removeEventListener('scroll', this.handleScroll)
  },
  methods: {
    handleScroll ({ pageY }) {
      try {
        this.scrollState.reduce((acc, itemHeight, index) => {
          if ((acc + itemHeight) >= pageY) throw Error(index)
          // eslint-disable-next-line no-param-reassign
          acc += itemHeight
          return acc
        }, 0)
      } catch (e) {
        const index = parseInt(e.message, 10)
        if (this.navDotActiveIdes !== index) this.navDotActiveIdes = index
      }
    },
    // при нажати получаем индекс кнопки
    smoothScrolling (index) {
      const targetYPosition = this.scrollState.reduce((acc, itemHeight, i) => {
        // eslint-disable-next-line no-param-reassign
        // если полученный индекс -1 больше либо равен индексу,
        // то аккумулятору прибавляем высоту полученного блока
        if (index - 1 >= i) acc += itemHeight
        return acc
      }, 0)
      const { pageYOffset } = window
      // если targetYPosition больше pageYOffset, то опускаем вниз, иначе вверх
      const direction = targetYPosition > pageYOffset ? DOWN : UP

      this.interval = setInterval(() => {
        const { pageXOffset, pageYOffset: yOffset, scrollTo } = window
        if ((direction === DOWN && yOffset >= targetYPosition) ||
          (direction === UP && yOffset <= targetYPosition)) {
          clearInterval(this.interval)
          this.interval = undefined
        }
        scrollTo(pageXOffset, (direction === DOWN ? yOffset + STEP : yOffset - STEP))
      }, STEP_DURATION)
    },
  },
}
</script>

<style lang="scss" scoped></style>
