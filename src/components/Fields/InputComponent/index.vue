<template>
  <!--компонент который показывает ошибку-->
  <InputWrapper
    :id="id"
    :label="label"
    :validation-errors="validationErrors"
    :submit-failed="submitFailed"
    :changed="changed"
    :touched="touched"
  >
    <input
      :id="id"
      :class="submitFailed && 'has-error'"
      :placeholder="placeholder"
      :value="value"
      v-on="_events"
      @blur="handleBlur"
    >
  </InputWrapper>
</template>
<script>
import InputWrapper from '../InputWrapper.vue'
import InputMixin from '../../../mixins/InputMixin.js'
export default {
  name: 'InputDoc',
  components: {
    InputWrapper
  },
  mixins: [InputMixin],
  props: {
    value: {
      type: [Number, String],
      default: ''
    }
  }
}
</script>
<style lang="scss">
  input {

  }
  .has-error {
    .el-input__inner{
      border-color: #fc4b6c;
    }
  }
</style>
