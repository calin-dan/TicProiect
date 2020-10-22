<template>
  <q-page>
    <div id="button-reservation">
      <q-btn
        padding="xl"
        color="primary"
        round
        icon="add"
        clickable
        exact
        to="/booking"
      />
    </div>
    <div>
      <h4 id="avb-doctors">Our available doctors</h4>
    </div>

    <div class="roww">
      <doctorsComponent
        v-for="doctor in filteredDocs"
        :key="doctor.email"
        :descriere="doctor.descriere"
        :numeComplet="doctor.numeComplet"
        :email="doctor.email"
        :specializare="doctor.specializare"
      />
    </div>
  </q-page>
</template>

<script>
import doctorsComponent from "../components/DoctorsComponent";

export default {
  data() {
    return {
      doctori: [
        {
          numeComplet: "Dr. Bun",
          email: "dada@gmail.com",
          descriere: "e om bun da e varsa",
          specializare: "pediatru",
        },
        {
          numeComplet: "Dr. Rau",
          email: "nunu@gmail.com",
          descriere: "e om rau da e competent",
          specializare: "chirurg",
        },
        {
          numeComplet: "Dr. Mediocru",
          email: "ceva@gmail.com",
          descriere: "face de toate ca e generalist",
          specializare: "Medic primar generalist",
        },
        {
          numeComplet: "Dr. Mediocru",
          email: "ceva@gmail.com",
          descriere: "face de toate ca e generalist",
          specializare: "Medic primar generalist",
        },
        {
          numeComplet: "Dr. Mediocru",
          email: "ceva@gmail.com",
          descriere: "face de toate ca e generalist",
          specializare: "Medic primar generalist",
        },
        {
          numeComplet: "Dr. Mediocru",
          email: "ceva@gmail.com",
          descriere: "face de toate ca e generalist",
          specializare: "Medic primar generalist",
        },
      ],
      search: "",
    };
  },
  components: {
    doctorsComponent,
  },
  methods: {
    // buttonClick: function (event) {
    //   open("http://localhost:8080/#/booking");
    // },
  },
  computed: {
    filteredDocs() {
      return this.doctori.filter((doctor) => {
        return doctor.numeComplet.match(this.search);
      });
    },
  },
};
</script>
<style>
#button-reservation {
  z-index: 1000;
  display: flex;
  justify-content: center;
  text-align: center;
  bottom: 0px;
  position: fixed;
  right: 25%;
  left: 28%;
  margin-bottom: 2%;
}
.roww {
  display: inline-block;
  width: 100%;
  text-align: center;
}

@media (max-width: 550px) {
  .roww {
    width: 100%;
    flex-direction: column;
    margin-left: 18%;
    margin-bottom: 2%;
  }
}
@media (min-width: 551px) and (max-width: 1025px) {
  .roww {
    flex-direction: column;
    margin-left: 25%;
    margin-bottom: 2%;
  }
}
#avb-doctors {
  margin-top: 2%;

  text-align: center;
  font-style: italic;
  color: #897ab9;
}
</style>
