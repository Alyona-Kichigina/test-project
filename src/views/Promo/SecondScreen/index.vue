<script>
import PrimaryButton from '@/components/Buttons/PrimaryButton'
import Logo from '@/components/Logo'

export default {
  name: 'Index',
  components: {
    PrimaryButton, Logo,
  },
  data () {
    return {
      servicesArray: [
        {
          id: 1,
          icon: '/features/businesscard.svg',
          name: 'Сайт визитка',
          text: 'Для любого вашего домена, зарегистрированного на «Джино», вы можете в несколько кликов создать' +
            ' простую страницу-визитку. Это удобно, если ваш основной сайт еще не готов, ' +
            'или если домен вам нужен только для почты.\n' +
            '\n' + 'Вы можете разместить здесь краткую информацию о себе или вашем бизнесе, ' +
            'ссылки на аккаунты в соцсетях и любые другие сайты. ' +
            'Создание и поддержка базового варианта сайта-визитки абсолютно бесплатны.',
        },
        {
          id: 2,
          icon: '/features/dns.svg',
          name: 'Поддержка DNS',
          text: 'Зарегистрировав домен через «Джино», ' +
            'вы бесплатно получаете постоянную возможность изменения NS-записей и направления домена туда, ' +
            'куда вам хочется.\n' +
            'У вас несколько доменов? Мы предоставляем бесплатную поддержку DNS для всех доменов, ' +
            'зарегистрированных и поддерживаемых «Джино».\n',
        },
        {
          id: 3,
          icon: '/features/certificate.svg',
          name: 'Сертификат о владении доменом',
          text: 'Подтвердите владение доменным именем с помощью официального сертификата «Джино». ' +
            'Вам достаточно распечатать документ в формате PDF, который будет доступен в панели управления ' +
            'сразу же после делегирования домена.\n',
        },
        {
          id: 4,
          icon: '/features/autorenewal.svg',
          name: 'Автопродление',
          text: 'С помощью функции «Автопродление» больше не нужно беспокоиться о том, ' +
            'что ваш домен внезапно перестанет работать. ' +
            '«Джино» заблаговременно продлит регистрацию на следующий период и вышлет вам уведомление об этом.\n',
        },
        {
          id: 5,
          icon: '/features/cloud.svg',
          name: 'Облачное хранилище на 20 Гб',
          text: 'Специально для своих клиентов «Джино» предлагает абсолютно бесплатный сервис — «Джино.Облако». ' +
            'Это надежное место для хранения файлов — здесь точно поместится всё. ' +
            'Вы получите постоянный доступ к своей музыке, фотографиям и документам и ' +
            'сможете без труда делиться данными с кем угодно.',
        },
        {
          id: 6,
          icon: '/features/freessl.svg',
          name: 'Бесплатный SSL-сертификат',
          text: 'Будучи клиентом «Джино», вы можете бесплатно получить SSL-сертификат от удостоверяющего центра Let’s Encrypt.' +
            ' Данный сертификат позволит вашим сайтам работать по безопасному протоколу HTTPS' +
            ' и избежать предупреждений браузера о том, что на сайте используется незашифрованное соединение.\n' +
            'Вы можете легко обзавестись сертификатом: в разделе «Домены» вашего аккаунта выберите нужный домен' +
            ' и на странице его настроек перейдите во вкладку «SSL». Сертификат выдаётся по нажатию одной кнопки и ' +
            'продлевается автоматически.\n',
        },
        {
          id: 7,
          icon: '/features/dnssec.svg',
          name: 'DNSSEC в один клик',
          text: 'С помощью технологии цифрового подписывания ответа DNS-сервера вы можете застраховаться от ' +
            'возможной его подмены и быть уверенными в том, что посетители вашего сайта не попали на ' +
            'замаскированный сайт злоумышленников.\n' +
            'Для подключения DNSSEC необходимо перейти в соответствующую вкладку в настройках вашего ' +
            'домена и нажать кнопку «Включить».\n',
        },
        {
          id: 8,
          icon: '/features/redirect.svg',
          name: 'Перенаправление',
          text: 'Зарегистрировав домен на «Джино», вы сможете в любой момент просто и бесплатно перенаправить' +
            ' его на любую страницу любого сайта.\n' +
            'У вас есть своя группа в социальной сети? Дайте ей персональный домен и она сможет стать полноценным сайтом,' +
            ' а не только страницей соцсети! Персонифицирование при помощи перенаправления доменного имени от ' +
            '«Джино» — это дополнительный инструмент в продвижении и идентификации вашей деятельности.',
        },
      ],
      selectedAdvantageIndex: 2,
      quantityColumn: 1,
      indexOfLastRowElement: 4,
      childrenWidth: 0,
      selectedColumnNumber: 1,
    }
  },
  computed: {
    getPromoText () {
      // выводим текст выбраного блока
      return this.servicesArray[this.selectedAdvantageIndex].text
    },
    getArrowPosition () {
      // помещаем стрелку текста по середине под выбраным блоком
      return `${(this.childrenWidth * this.selectedColumnNumber) - (this.childrenWidth / 2)}px`
    },
  },
  watch: {
    getArrowPosition (newValue) {
      // передаем стиль для стрелки текста
      this.$refs.servicesList.style.setProperty('--selected-item-arrow-left', newValue)
    },
  },
  beforeMount () {
    window.addEventListener('resize', this.getWigthChildren)
  },
  beforeDestroy () {
    window.removeEventListener('resize', this.getWigthChildren)
  },
  mounted () {
    this.getWigthChildren()
  },
  methods: {
    changePromoText (index) {
      return () => {
        // получаем номер ряда в котором находится блок
        const row = Math.ceil((index + 1) / this.quantityColumn)
        // получаем индекс блока после которого выводим текст
        this.indexOfLastRowElement = row * this.quantityColumn
        const b = (index + 1) % this.quantityColumn
        // получаем номер блока в ряду (например: 1, 2, 3, 4; 1, 2, 3, 4)
        this.selectedColumnNumber = b === 0 ? this.quantityColumn : b
        this.selectedAdvantageIndex = index
      }
    },
    getWigthChildren () {
      // делим ширину блока списка на ширину первого ребенка чтобы получить количество блоков в ряду
      this.quantityColumn = Math.round(this.$refs.servicesList.clientWidth / this.$refs.servicesList.children[0].clientWidth)
      // ширина блока в ряду
      this.childrenWidth = this.$refs.servicesList.children[0].clientWidth
    },
  },
  render (h) {
    const renderAdvanatages = this.servicesArray.reduce((acc, { name, icon }, index) => {
      acc.push(
        <div class="item" onClick={this.changePromoText(index)}>
          <img src={icon} />
          <div class="name">
            {name}
          </div>
        </div>,
      )
      if ((index + 1) === this.indexOfLastRowElement) acc.push(<div class="text">{this.getPromoText}</div>)
      return acc
    }, [])
    return (
      <div class="second-screen-block">
        <div class="container">
          <div class="header d-flex">
            <Logo/>
          </div>
          <div class="content">
            <div class="title">
              Зарегистрировав у нас домен, вы получите
            </div>
            <div class="services-list" ref="servicesList">
              {renderAdvanatages}
            </div>
            <PrimaryButton>Создать аккаунт</PrimaryButton>
          </div>
        </div>
      </div>
    )
  },
}
</script>

<style scoped lang="scss" src="./style.scss"></style>
