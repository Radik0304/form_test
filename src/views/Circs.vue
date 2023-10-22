<template>
  <div class="circs__container">
    <div class="progress_bar">ШАГ 3</div>
    <h3>Условия</h3>
    <div>
    </div>
    <table>
        <thead>Подписание договора</thead>
        <tr>
            <p>Сумма займа:</p>
            <p>текст</p>
        </tr>
        <tr>
            <p>Дата возрата</p>
            <p>text</p>
        </tr>
        <tr>
            <p>Плата за заём</p>
            <p>text</p>
        </tr>
        <tr>
            <p>Ставка</p>
            <p>text</p>
        </tr>
        <tr>
            <p>ПСК</p>
            <p>text</p>
        </tr>
    </table>
    <div class="links">
        <a href="#">Проект сертификата дистанционный &#171;Помощник Ц&#187;</a>
        <a href="#">Памятка использования Помощника &#171;Ц&#187;</a>
        <a href="#">Согласие на подключение рекуррентного платежа</a>
    </div>

    <footer>
        <button class="sign" @click="sign">Подписать договор</button>
    </footer>
  </div>
</template>

<script>
export default({
    name: "CircsContract",
    methods: {
        sign(){
            this.$router.push('/check-dates')
        }
    }
});
</script>


<style scoped>
table tr {
    display: flex;
    justify-content: space-between;
    border-bottom: 1px solid grey;
}
table{ 
    width: 100%;
}
.links {
    display: flex;
    flex-direction: column;
    margin-top: 2rem;
    gap: 1rem;
}
a{
    display: inline-flex;
}
.circs__container {
    margin: 0 1rem
}
footer{
    margin-top: 2rem;
}
.sign {
    width: 100px;
    height: 40px
}
</style>