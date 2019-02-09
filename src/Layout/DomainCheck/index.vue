<template>
  <div class="wrapper">
    <form
      action=""
      class="form-container"
      @submit.prevent="handleSubmit"
    >
      <div style="color: red">
        {{ authErrors }}
      </div>
      <div class="form-control">
        <Input
          id="url"
          :value="formPayload.url"
          :class="$style.inp"
          :validation-errors="validationErrors.url"
          :submit-failed="submitFailed"
          placeholder="Домен для проверки"
          @input="handleInput"
          @focus="handleFocus"
          @blur="handleBlur"
        />
        <button
          class="submit-button"
          type="button"
          @click="handleSubmit"
        >
          Проверить
        </button>
      </div>
      <transition
        name="fade"
        mode="out-in"
      >
        <div
          v-if="isDomenValid"
          class="domain-status"
        >
          Домен {{ formPayload.url }} — свободен.
          <a href="">
            Зарегистрировать за 39₽
          </a>
        </div>
      </transition>
    </form>
  </div>
</template>

<script>
import { getValidation } from '@/utils/valiadtor'
import Input from '@/components/Fields/InputComponent'

export default {
  name: 'Index',
  components: {
    Input,
  },
  data () {
    return {
      formPayload: {
        url: undefined,
      },
      // объект ошибки валлидации
      validationErrors: {},
      // не выводим ошибку
      submitFailed: false,
      isDomenValid: false,
    }
  },
  // срабатывает при изменениях
  computed: {
    authErrors () {
      // выводим ощибку что неправильно заполнены поля ввода, вызвав объект authState.error
      return this.$store.getters.authState.error
    },
  },
  methods: {
    handleInput ({ target: { value } }) {
      this.formPayload.url = value
    },
    handleFocus () {
      if (!this.formPayload.url) { this.formPayload.url = 'http://' }
    },
    handleBlur () {
      this.formPayload.url = this.formPayload.url === 'http://' ? '' : this.formPayload.url
    },

    // при нажатии на кнопку
    handleSubmit () {
      // обязательные поля для заполнения
      const rules = {
        url: 'required|url',
      }
      // вызываем проверку валидации
      getValidation(this.formPayload, rules, { onFail: this.handleSubmitFail, onSuccess: this.submitForm })
    },
    // функция при ошибке валидации
    handleSubmitFail (e) {
      // выводим ошибку
      this.submitFailed = true
      // выводим текст ошибки
      this.validationErrors = e
    },
    // функция если валидация прошла успешно
    submitForm () {
      // не выводим ошибку
      this.submitFailed = false
      // очищаем объект ошибки
      this.validationErrors = {}
      setTimeout(() => { this.isDomenValid = true }, 250)
    },
  },
}
</script>
<style lang="scss" module>
  .inp {
    margin-bottom: 0 !important;
    width: 70%;
    @media (max-width: 599px) {
      width: 90%;
    }
    input {
      width: 100%;
      padding-left: 38px;
      background: $white;
      border: transparent;
      @media (max-width: 650px) {
        padding: 10px;
        padding-left: 5px;
        border-radius: 5px;
      }
    }
  }
</style>
<style scoped lang="scss" src="./style.scss"></style>
