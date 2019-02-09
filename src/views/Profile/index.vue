<template>
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
            class="item-title"
            for="file-input"
          >
            Загрузить скан страницы с фотографией
          </label>
          <div
            v-if="!fileIsChecked && fileIsChecked !== undefined"
            class="no-result"
          >
            Отклонено
          </div>
          <div class="note">
            Размер файла не болле 5Мб
          </div>
        </div>
      </div>
      <div
        v-else
        class="file-upload-block"
      >
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
          <div class="note">
            {{ file.name }} ({{ file.size }}Kb)
          </div>
        </div>
        <div
          v-if="this.fileIsChecked"
          class="result"
        >
          Проверено
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
  data () {
    return {
      file: undefined,
      fileState: EFileState.wait,
      loading: false,
      wait: false,
      fileIsChecked: undefined,
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
          return { icon: this.icons.upload, label: 'Страница с пропиской' }
      }
    }
  },
  methods: {
    handleUpload ({ target: { files: [{ name, size }] } }) {
      this.fileState = EFileState.loading
      this.file = { name, size }
      setTimeout(() => {
        this.fileState = EFileState.checking
        setTimeout(() => {
          const isFileCheck = Math.random() >= 0.5
          this.fileState = isFileCheck ? EFileState.completed : EFileState.wait
          this.fileIsChecked = isFileCheck
        }, 1250)
      }, 1250)
    }
  }
}
</script>
<style scoped lang="scss" src="./style.scss"></style>
