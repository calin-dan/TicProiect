<template class="log">
  <div class="flex flex-center page">
    <div class="logDiv" style="max-width: 500px">
      <!-- <img src="../assets/logo.png" class="login-icon-container" /> -->
      <q-form
        @submit="onSubmit"
        @reset="onReset"
        class="login-page-input-container"
      >
        <q-input
          filled
          v-model="numeComplet"
          type="text"
          label="Complete Name"
          lazy-rules
          :rules="[(val) => (val && val.length > 0) || 'Cannot be empty']"
        >
          <template v-slot:prepend>
            <q-icon name="person"></q-icon>
          </template>
        </q-input>

        <q-input
          filled
          v-model="email"
          type="email"
          label="Email"
          lazy-rules
          :rules="[
            (val) => (val && val.length > 0) || 'Cannot be empty',
            (val) =>
              (val &&
                val.match(/^[a-z0-9](\.?[a-z0-9]){5,}@g(oogle)?mail\.com$/)) ||
              'Invalid email',
          ]"
        >
          <template v-slot:prepend>
            <q-icon name="email"></q-icon>
          </template>
        </q-input>

        <q-select filled v-model="doctor" :options="options" label="somedsads">
          <template>
            <q-icon name="person"></q-icon>
          </template>
        </q-select>

        <div class="q-pa-md" style="max-width: 500px">
          <q-input filled v-model="date" label="Date and hour of booking">
            <template v-slot:prepend>
              <q-icon name="event" class="cursor-pointer">
                <q-popup-proxy transition-show="scale" transition-hide="scale">
                  <q-date v-model="date" mask="YYYY-MM-DD HH:mm">
                    <div class="row items-center justify-end">
                      <q-btn v-close-popup label="Close" color="primary" flat />
                    </div>
                  </q-date>
                </q-popup-proxy>
              </q-icon>
              <q-icon name="access_time" class="cursor-pointer">
                <q-popup-proxy transition-show="scale" transition-hide="scale">
                  <q-time v-model="date" mask="YYYY-MM-DD HH:mm" format24h>
                    <div class="row items-center justify-end">
                      <q-btn v-close-popup label="Close" color="primary" flat />
                    </div>
                  </q-time>
                </q-popup-proxy>
              </q-icon>
            </template>
          </q-input>
          <div>
            <q-toggle
              v-model="ifSymptoms"
              checked-icon="check"
              color="red"
              label="Do you got any symptoms?"
              unchecked-icon="clear"
            />
          </div>
          <q-input
            v-if="ifSymptoms"
            filled
            v-model="symptoms"
            type="textarea"
            label="What are your symtoms"
            lazy-rules
            :rules="[(val) => (val && val.length > 0) || 'Cannot be empty']"
          >
            <template v-slot:prepend>
              <q-icon name="person"></q-icon>
            </template>
          </q-input>
        </div>

        <div class="btns">
          <q-btn label="Make Reservation" type="submit" color="primary" />
        </div>
      </q-form>
    </div>
  </div>
</template>

<script>
export default {
  name: "Login",
  data() {
    return {
      numeComplet: null,
      doctor: null,
      email: null,
      options: ["Ionescu", "Poescu", "MEre", "Apple", "Oracle"],
      symptoms: null,
      ifSymptoms: false,
      text: null,
      accept: false,
      date: "0000-00-00 00:00",
    };
  },

  methods: {
    onSubmit() {
      if (this.accept !== true) {
        this.$q.notify({
          color: "red-5",
          textColor: "white",
          icon: "warning",
          message: "You need to accept the license and terms first",
        });
      } else {
        this.$q.notify({
          color: "green-4",
          textColor: "white",
          icon: "cloud_done",
          message: "Submitted",
        });
        this.$router.push("/");
      }
    },

    onReset() {
      this.name = null;
      this.age = null;
      this.accept = false;
    },
    clicked() {
      alert("test");
    },
  },
  created() {
    this.$q.dark.set(false);
  },
};
</script>
<style scoped>
.logDiv {
  background-color: white;
  text-align: center;
  padding: 50px 70px;
  border-radius: 5px;
  box-shadow: 0 20px 40px rgba(0, 0, 0, 0.4);
  margin-top: 5%;
}

.btns {
  text-align: center;
}

.page {
  /* background-color: white; */
  background: white;
}

.q-input {
  width: 300px;
  height: 80px;
  margin: 10px;
}

.login-page-input-container {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}

@media only screen and (max-width: 600px) {
  .q-page {
    background-image: none;
    background-color: white;
  }
  .logDiv {
    background-color: transparent;
    padding: 0;
    border-radius: 0px;
    box-shadow: none;
  }
  .q-input {
    width: 260px;
    height: 80px;
    margin: 10px;
  }
  .login-icon-container {
    width: 200px;
  }
}
#register-link {
  margin-top: 15px;
}
</style>
