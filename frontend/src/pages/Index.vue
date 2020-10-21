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

    <q-card class="my-card" filled bordered>
      <q-item>
        <q-item-section avatar>
          <q-avatar>
            <img src="https://cdn.quasar.dev/img/boy-avatar.png" />
          </q-avatar>
        </q-item-section>

        <q-item-section>
          <q-item-label>Title</q-item-label>
          <q-item-label caption> Subhead </q-item-label>
        </q-item-section>
      </q-item>

      <q-separator />

      <q-card-section horizontal>
        <q-card-section>
          {{ lorem }}
        </q-card-section>

        <q-separator vertical />

        <q-card-section class="col-4">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit.
        </q-card-section>
      </q-card-section>
    </q-card>
  </q-page>
</template>

<script>
export default {
  data() {
    return {
      message: "vue js",
      counter: 0,
      lorem: "ceva dada",
    };
  },
  methods: {
    // buttonClick: function (event) {
    //   open("http://localhost:8080/#/booking");
    // },
  },
};
</script>
<style>
#button-reservation {
  display: flex;
  justify-content: center;
  text-align: center;
  bottom: 0px;
  position: absolute;
  right: 25%;
  left: 28%;
  margin-bottom: 2%;
}
.my-card {
  margin-top: 5%;
  margin-left: 5%;
  width: 100%;
  max-width: 350px;
  border-color: purple;
  border-width: 3px;
}
</style>
