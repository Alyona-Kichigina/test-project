<template>
  <div class="profile">
    <div class="container">
      <div class="profile-block">
        <div class="title">
          Подтверждение аккаунта
        </div>
        <p>
          Для подтверждения вашего аккаунта вам нужно заполнить все поля, подтвердить почтовый ящик и телефон,
          а так же загрузить сканы ваших документов
        </p>
        <div
          v-if="fileState === 'wait'"
          class="file-upload-block"
        >
          <div class="wrapper">
            <div class="icon">
              <img
                src="../../../public/img/icon-profile/upload.svg"
                alt=""
              >
              <input
                id="file-input"
                class="file-input"
                type="file"
                @input="handleUpload"
              >
            </div>
            <div class="text">
              <label
                class="item-title underline"
                for="file-input"
              >
                Загрузить скан страницы с фотографией
              </label>
              <div class="grey-text">
                Размер файла не болле 5Мб
              </div>
            </div>
          </div>
          <div
            v-if="!fileComplited && fileComplited !== undefined"
            class="no-result"
          >
            Отклонено
          </div>
        </div>
        <div
          v-else
          class="file-upload-block"
        >
          <div class="wrapper">
            <div class="icon">
              <img
                :src="getIcon.icon"
                alt=""
              >
            </div>
            <div class="text">
              <div class="item-title">
                {{ getIcon.label }}
              </div>
              <div class="grey-text">
                {{ file.name }} ({{ file.size | normalizeFileSize }}Kb)
              </div>
            </div>
          </div>
          <div
            v-if="fileComplited"
            class="result"
          >
            Проверено
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import spinner from '../../../public/img/icon-profile/spinner.svg'
import upload from '../../../public/img/icon-profile/upload.svg'
import wait from '../../../public/img/icon-profile/wait.svg'
import ok from '../../../public/img/icon-profile/ok.svg'

const EFileState = {
  wait: 'wait',
  loading: 'loading',
  checking: 'checking',
  completed: 'completed'
}

export default {
  name: 'Profile',
  filters: {
    // переводим килобайты в байты
    normalizeFileSize: function (value) {
      return Math.ceil(value / 1024)
    }
  },
  data () {
    return {
      file: undefined,
      fileState: EFileState.wait,
      fileComplited: undefined,
      icons: {
        upload: upload,
        spinner: spinner,
        ok: ok,
        wait: wait,
      }
    }
  },
  computed: {
    getIcon () {
      switch (this.fileState) {
        case (EFileState.loading):
          return { icon: this.icons.spinner, label: 'Загрузка' }
        case (EFileState.checking):
          return { icon: this.icons.wait, label: 'Проверка' }
        case (EFileState.completed):
          return { icon: this.icons.ok, label: 'Страница с пропиской' }
        default:
          // значение по умолчанию
          return { icon: this.icons.upload, label: 'Загрузить скан страницы с фотографией' }
      }
    }
  },
  methods: {
    handleUpload ({ target: { files: [{ name, size }] } }) {
      // меняем иконку на спинер и текст на Загрузка
      this.fileState = EFileState.loading
      // присваиваем объект с именем и размером
      this.file = { name, size }
      // откладываем выполнение внутри
      setTimeout(() => {
        // меняем иконку и текст на Проверка
        this.fileState = EFileState.checking
        setTimeout(() => {
          // генерация случайной булевой вероятности
          const isFileCheck = Math.random() >= 0.5
          // если true то показываем текст Страница с пропиской, иначе инпут с загрузкой файла и текст Отклонено
          this.fileState = isFileCheck ? EFileState.completed : EFileState.wait
          // присваиваем статус файлу
          this.fileComplited = isFileCheck
        }, 1250)
      }, 1250)
    }
  }
}
</script>
<style scoped lang="scss" src="./style.scss"></style>
