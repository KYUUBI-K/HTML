<template>
<div>
  <student-labs
  v-for="stud in studentList" :key="stud.id"
  :Photo=stud.Photo
  :FullName=stud.FullName
  :WhichLab=stud.WhichLab
  :DateOfDelivery=stud.DateOfDelivery
  />
</div>
  

</template>

<script>
import StudetLabs from "./components/StudentLabs";

export default {
  name: "App",
  components: {
    StudetLabs,
  },
  data() {
    return {
      studentList: [
        {
          id: 1,
          Photo: "https://www.google.com/imgres?imgurl=https%3A%2F%2Fums.ks.ua%2Fwp-content%2Fuploads%2F2018%2F12%2F26.jpg&imgrefurl=https%3A%2F%2Fums.ks.ua%2F2018%2F12%2F11%2Fu-hersoni-vidbudetsya-final-vseukrayinskoyi-konkursnoyi-programy-krashhyj-student-ukrayiny%2F&tbnid=I-825cUTuOFp-M&vet=12ahUKEwjyxIfL-qPzAhWogv0HHZ0TAVQQMygGegUIARDYAQ..i&docid=xPoBZCJhWTS_yM&w=600&h=389&q=%D1%81%D1%82%D1%83%D0%B4%D0%B5%D0%BD%D1%82&ved=2ahUKEwjyxIfL-qPzAhWogv0HHZ0TAVQQMygGegUIARDYAQ",
          FullName: "Муравець Ігор Вітальович",
          WhichLab: 1,
          DateOfDelivery: 2014,
        },
        {
          id: 2,
          Photo: "https://www.google.com/imgres?imgurl=https%3A%2F%2Fwww.newsler.ru%2Fdata%2Fcontent%2F2019%2F76310%2Fe22c225deab94c257f29e174fd6033f7.jpg&imgrefurl=https%3A%2F%2Fwww.newsler.ru%2Fsociety%2F2019%2F02%2F12%2Fkazhdyj-tretij-student-v-kirove-izuchaet-obshhestvo&tbnid=VOwpN9fQ51xMVM&vet=12ahUKEwjyxIfL-qPzAhWogv0HHZ0TAVQQMygOegUIARDoAQ..i&docid=xETMvsyKfyq6WM&w=960&h=639&q=%D1%81%D1%82%D1%83%D0%B4%D0%B5%D0%BD%D1%82&ved=2ahUKEwjyxIfL-qPzAhWogv0HHZ0TAVQQMygOegUIARDoAQ",
          FullName: "Карась Василь Вітальович",
          WhichLab: 3,
          DateOfDelivery: 2010,
        },
        {
          id: 3,
          Photo: "https://www.google.com/imgres?imgurl=https%3A%2F%2Fums.ks.ua%2Fwp-content%2Fuploads%2F2018%2F12%2F26.jpg&imgrefurl=https%3A%2F%2Fums.ks.ua%2F2018%2F12%2F11%2Fu-hersoni-vidbudetsya-final-vseukrayinskoyi-konkursnoyi-programy-krashhyj-student-ukrayiny%2F&tbnid=I-825cUTuOFp-M&vet=12ahUKEwjyxIfL-qPzAhWogv0HHZ0TAVQQMygGegUIARDYAQ..i&docid=xPoBZCJhWTS_yM&w=600&h=389&q=%D1%81%D1%82%D1%83%D0%B4%D0%B5%D0%BD%D1%82&ved=2ahUKEwjyxIfL-qPzAhWogv0HHZ0TAVQQMygGegUIARDYAQ",
          FullName: "Дред Олександр Вітальович",
          WhichLab: 2,
          DateOfDelivery: 2015,
        },
      ],
    };
  },
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
