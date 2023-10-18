<template>
  <div class="identification">
    <header>
      <h3>Подтверждение удаленной идентификации</h3>
      <span>Мы отправили SMS с кодом на ваш номер телефона</span>
    </header>
    <div class="input">
      <label for="code">Код</label>
      <input type="number" v-model="enteredCode" />
    </div>

    <div class="check-code-container">
      <button :disabled="currentTime !== 0" @click="checkCode">
        Проверить код
      </button>
      <div v-if="currentTime">
        <span>Отправить код повторно через</span>
        <div>{{ currentTime }}</div>
      </div>
      <!-- <p v-if="enteredCode && !codeOk">Неверный код</p> -->
    </div>
  </div>
</template>

<script>
import { mapActions, mapGetters } from "vuex";
export default {
  name: "IdentificationConfirmation",
  data() {
    return {
      currentTime: 1, //время начала отсчета
      timer: null, // таймер
      enteredCode: null, // введенный код
      codeOk: false, // ошибка ввода кода
      errorCodeText: "", // текст ошибки ввода кода
      codes: []
    };
  },
  computed: mapGetters(["CODES"]),

  mounted() {
    this.startTimer();
  },
  destroyed() {
    this.stopTimer();
  },
  methods: {
    // Достаем экшен
    ...mapActions(["GET_CODE", "GET_USERS"]),

    /** Запускаем таймер */
    startTimer() {
      this.timer = setInterval(() => {
        this.currentTime--;
      }, 1000);
    },
    /** Останавливаем таймер */
    stopTimer() {
      clearTimeout(this.timer);
    },
    /** Проверить код */
    async checkCode() {
      await this.GET_CODE();

      console.log('this.CODES', this.CODES)
      // console.log('this.enteredCode', this.enteredCode)
      // console.log('this.codeOk', this.codeOk)
      // console.log(this.CODES.find(code => code.enteredCode === this.enteredCode))
      // if (!this.errorCode) {
      //   this.$router.push("/circs");
      // }
    },
  },
  watch: {
    currentTime(time) {
      if (time === 0) {
        this.stopTimer();
      }
    },
  },
};
</script>

<style scoped>
input {
  margin-top: 3rem;
  margin-left: 1rem;
}
.check-code-container {
  margin-top: 3rem;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
}

.check-code-container button {
  width: 30%;
}
.check-code-container div {
  margin-top: 1rem;
  color: grey;
}
p {
  color: red;
}
</style>
