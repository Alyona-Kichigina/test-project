<template>
  <div class="wrapper">
    <form action="" class="form-container">
      <div style="color: red">
        {{ authErrors }}
      </div>
      <div class="form-control">
        <Input
          id="login"
          :class="$style.asd"
          v-model="formPayload.login"
          :validationErrors="validationErrors.login"
          :submitFailed="submitFailed"
          placeholder="Домен для проверки"
        />
        <button
          class="submit-button"
          type="button"
          @click="handleSubmit"
        >Проверить</button>
      </div>
    </form>
  </div>
</template>

<script>
import { getValidation } from '@/utils/valiadtor';
import Input from '@/components/Fields/InputComponent';
import { LOGIN } from '@/store/modules/auth';

export default {
  name: 'index',
  data() {
    return {
      formPayload: {
        login: undefined,
        password: undefined,
      },
      // объект ошибки валлидации
      validationErrors: {},
      // не выводим ошибку
      submitFailed: false,
    };
  },
  components: {
    Input,
  },
  methods: {
    // при нажатии на кнопку
    handleSubmit() {
      // обязательные поля для заполнения
      const rules = {
        login: 'required',
        password: 'required',
      };
      // вызываем проверку валидации
      getValidation(this.formPayload, rules, { onFail: this.handleSubmitFail, onSuccess: this.submitForm });
    },
    // функция при ошибке валидации
    handleSubmitFail(e) {
      // выводим ошибку
      this.submitFailed = true;
      // выводим текст ошибки
      this.validationErrors = e;
    },
    // функция если валидация прошла успешно
    submitForm() {
      // не выводим ошибку
      this.submitFailed = false;
      // очищаем объект ошибки
      this.validationErrors = {};
      // вызываем функцию в vuex делая запрос на бд
      this.$store.dispatch(LOGIN, this.formPayload);
    },
  },
  // срабатывает при изменениях
  computed: {
    authErrors() {
      // выводим ощибку что неправильно заполнены поля ввода, вызвав объект authState.error
      return this.$store.getters.authState.error;
    },
  },
};
</script>
<style lang="scss" module>
  .asd {
    width: 100%;
    padding-left: 38px!important;
    background: $white;
    border: transparent;
  }
</style>
<style scoped lang="scss" src="./style.scss"></style>
