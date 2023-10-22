<template>
  <div class="identification">
    <div class="progress_bar">ШАГ 2</div>
    <header>
      <h3>Подтверждение удаленной идентификации</h3>
      <span>Мы отправили SMS с кодом на ваш номер телефона</span>
    </header>
    <div class="input">
      <label for="code">Код</label>
      <input type="number" v-model="inputCode" />
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
      codeOk: false, // ошибка ввода кода
      errorCodeText: "", // текст ошибки ввода кода
      inputCode: null, // введенный код,
    };
  },

  computed: mapGetters(["USERS"]),

  mounted() {
    this.GET_USERS();
    this.startTimer();
  },
  destroyed() {
    this.stopTimer();
  },
  methods: {
    // Достаем экшен
    ...mapActions(["GET_USERS"]),

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
    checkCode() {
      const isCodeFind = this.USERS.some(user => user.entered_code === Number(this.inputCode))
      // проверяем есть ли такой код в массиве
      if(isCodeFind){
        this.$router.push('/circs')
      }
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
