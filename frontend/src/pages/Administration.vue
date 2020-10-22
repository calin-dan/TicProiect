<template>
  <div class="roww">
    <div class="avatar">
      <q-item clickable v-ripple>
        <q-item-section side>
          <q-avatar rounded size="48px">
            <img src="https://cdn.quasar.dev/img/avatar.png" />
          </q-avatar>
        </q-item-section>
        <q-item-section>
          <q-item-label>mary</q-item-label>
          <q-item-label caption>2 new messages</q-item-label>
        </q-item-section>
        <q-item-section side> 3 min ago </q-item-section>
      </q-item>
    </div>
    <div><h3 id="text">Your appointments</h3></div>
    <div class="v-component">
      <adminComponent
        v-for="rezervare in filteredRes"
        :key="rezervare.numeComplet"
        :numeComplet="rezervare.numeComplet"
        :email="rezervare.email"
        :date="rezervare.date"
        :symptoms="rezervare.symptoms"
      />
    </div>
  </div>
</template>

<script>
import adminComponent from "../components/AdminComponent";

export default {
  data() {
    return {
      rezervari: [
        {
          numeComplet: "Dr. Bun",
          email: "sadasda",
          symptoms: "suntsaddddddddddddas as dasd asda sdasdasd ",
          date: "12/21/123 19:00",
        },
        {
          numeComplet: "Dr. Bun",
          email: "sadasda",
          symptoms: "suntsaddddddddddddas as dasd asda sdasdasd ",
          date: "12/21/123 19:00",
        },
        {
          numeComplet: "Dr. Bun",
          email: "sadasda",
          symptoms: "suntsaddddddddddddas as dasd asda sdasdasd ",
          date: "12/21/123 19:00",
        },
        {
          numeComplet: "Dr. Bun",
          email: "sadasda",
          symptoms: "suntsaddddddddddddas as dasd asda sdasdasd ",
          date: "12/21/123 19:00",
        },
      ],
      search: "",
    };
  },
  components: {
    adminComponent,
  },
  methods: {
    // buttonClick: function (event) {
    //   open("http://localhost:8080/#/booking");
    // },
  },
  computed: {
    filteredRes() {
      return this.rezervari.filter((rezervare) => {
        return rezervare.numeComplet.match(this.search);
      });
    },
  },
};
</script>

<style>
#text {
  color: #897ab9;
  text-align: center;
  font-style: italic;
  margin-top: 2%;
}
#avatar {
  width: 350px;
}
.v-component {
  display: inline-block;
  width: 100%;
  text-align: center;
}
</style>