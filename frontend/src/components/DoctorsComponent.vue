<template>
  <q-card class="my-card" filled bordered>
    <q-item>
      <q-item-section avatar>
        <q-avatar>
          <img src="https://cdn.quasar.dev/img/boy-avatar.png" />
        </q-avatar>
      </q-item-section>

      <q-item-section>
        <q-item-label>{{ numeComplet }}</q-item-label>
        <q-item-label caption> {{ email }} </q-item-label>
      </q-item-section>
    </q-item>

    <q-separator />

    <q-card-section horizontal>
      <q-card-section>
        {{ descriere }}
      </q-card-section>

      <q-separator vertical />

      <q-card-section class="col-4">
        {{ specializare }}
      </q-card-section>
    </q-card-section>
  </q-card>
</template>
<script>
export default {
  props: ["numeComplet", "email", "descriere", "specializare"],
  data() {
    return {
      lorem: "dasdasdas",
    };
  },
};
</script>
<style scoped>
.my-card {
  width: 25%;
  margin: 1%;
  display: inline-block;
  height: 200px;
}

@media (max-width: 600px) {
  .my-card {
    width: 90%;
    display: block;
    margin-left: 0%;
  }
}
</style>