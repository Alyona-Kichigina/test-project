<template>
  <div class="promo">
    <FirstScreen ref="FirstScreen"/>
    <SecodScreen ref="SecodScreen"/>
    <ThirdScreen ref="ThirdScreen"/>
    <div class="buttons">
      <div
        v-for="(item, index) of scrollState"
        :class="index === navDotActiveIdes && 'active'"
        class="circle"
        @click="smoothScrolling(index)"
      ></div>
    </div>
  </div>
</template>

<script>
import FirstScreen from './FirstScreen';
import SecodScreen from './SecodScreen';
import ThirdScreen from './ThirdScreen';

const SPEED = 5;
const STEP_DURATION = 10;
const STEP = (SPEED * STEP_DURATION);
const DOWN = 'DOWN';
const UP = 'UP';

export default {
  beforeMount() {
    document.addEventListener('scroll', this.handleScroll);
  },
  mounted() {
    this.scrollState = Object.values(this.$refs).map(({ $el: { clientHeight } }) => clientHeight);
  },
  beforeDestroy() {
    document.removeEventListener('scroll', this.handleScroll);
  },
  data() {
    return {
      scrollState: [],
      navDotActiveIdes: 0,
    };
  },
  methods: {
    handleScroll({ pageY }) {
      try {
        this.scrollState.reduce((acc, itemHeight, index) => {
          if ((acc + itemHeight) >= pageY) throw Error(index);
          // eslint-disable-next-line no-param-reassign
          acc += itemHeight;
          return acc;
        }, 0);
      } catch (e) {
        const index = parseInt(e.message, 10);
        if (this.navDotActiveIdes !== index) this.navDotActiveIdes = index;
      }
    },
    smoothScrolling(index) {
      const targetYPosition = this.scrollState.reduce((acc, itemHeight, i) => {
        // eslint-disable-next-line no-param-reassign
        if (index - 1 >= i) acc += itemHeight;
        return acc;
      }, 0);
      const { pageYOffset } = window;
      const direction = targetYPosition > pageYOffset ? DOWN : UP;

      this.interval = setInterval(() => {
        const { pageXOffset, pageYOffset: yOffset, scrollTo } = window;
        if ((direction === DOWN && yOffset >= targetYPosition)
          || (direction === UP && yOffset <= targetYPosition)) {

          clearInterval(this.interval);
          this.interval = undefined;
        }
        scrollTo(pageXOffset, (direction === DOWN ? yOffset + STEP : yOffset - STEP))
      }, STEP_DURATION);
    },
  },
  components: {
    FirstScreen, SecodScreen, ThirdScreen,
  },
};
</script>

<style lang="scss" scoped>
  .buttons {
    position: fixed;
    top: 0;
    bottom: 0;
    right: 28px;
    margin: auto;
    display: flex;
    flex-direction: column;
    justify-content: center;
    .circle {
      border-radius: 50%;
      height: 13px;
      width: 13px;
      border: 2px solid $white;
      background: $white;
      margin-bottom: 16px;
      transition: all 0.3s ease-in-out;
      cursor: pointer;
      &:last-child {
        margin-bottom: 0;
      }
      &.active{
        background: $color-font;
      }
      &:hover {
        background: $color-font;
      }
    }
  }
</style>
