<template>
  <div class="component-div">
    <q-card class="my-card" flat bordered>
      <q-card-section horizontal>
        <q-card-section class="q-pt-xs">
          <div class="text-overline">{{ email }}</div>
          <div class="text-h5 q-mt-sm q-mb-xs">{{ numeComplet }}</div>
          <div class="text-caption text-grey">
            {{ symptoms }}
          </div>
        </q-card-section>

        <q-card-section class="col-5 flex flex-center">
          <q-img
            class="rounded-borders"
            src="https://cdn.quasar.dev/img/parallax2.jpg"
          />
        </q-card-section>
      </q-card-section>

      <q-separator />

      <q-card-actions>
        <q-btn flat round icon="event" />
        <q-btn flat>
          {{ date }}
        </q-btn>
        <q-btn id="delete-btn" flat color="primary"> DELETE </q-btn>
      </q-card-actions>
    </q-card>
  </div>
</template>

<script>
export default {
  props: ["numeComplet", "email", "symptoms", "date"],
};
</script>

<style scoped>
.my-card {
  width: 100%;

  max-width: 350px;
}

@media (max-width: 600px) {
  .my-card {
    width: 90%;
    display: block;
    margin-left: 0%;
  }
}
#delete-btn {
  margin-left: 20%;
}
</style>