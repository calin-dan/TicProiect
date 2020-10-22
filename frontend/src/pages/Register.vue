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
          label="Nume&Prenume"
          lazy-rules
          :rules="[(val) => (val && val.length > 0) || 'Cannot be empty']"
        >
          <template v-slot:prepend>
            <q-icon name="person"></q-icon>
          </template>
        </q-input>
        <q-input
          filled
          v-model="spital"
          type="spital"
          label="Spital"
          lazy-rules
          :rules="[(val) => (val && val.length > 0) || 'Cannot be empty']"
        >
          <template v-slot:prepend>
            <q-icon name="local_hospital"></q-icon>
          </template>
        </q-input>
        <q-input
          filled
          v-model="specializare"
          type="text"
          label="Specialization"
          lazy-rules
          :rules="[(val) => (val && val.length > 0) || 'Cannot be empty']"
        >
          <template v-slot:prepend>
            <img src="../../public/icons/spec.png" id="spec-logo" />
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

        <q-input
          style="width: 94%"
          filled
          v-model="descriere"
          type="textarea"
          label="Description"
          lazy-rules
          :rules="[(val) => (val && val.length > 0) || 'Cannot be empty']"
        >
          <template v-slot:prepend>
            <q-icon name="description"></q-icon>
          </template>
        </q-input>

        <q-input
          filled
          type="password"
          v-model="password"
          label="Password"
          lazy-rules
          :rules="[(val) => (val && val.length > 0) || 'Cannot be empty']"
        >
          <template v-slot:prepend>
            <q-icon name="lock"></q-icon>
          </template>
        </q-input>

        <q-input
          filled
          v-model="password2"
          type="password"
          label="Verify password"
          lazy-rules
          :rules="[(val) => (val && val.length > 0) || 'Cannot be empty']"
        >
          <template v-slot:prepend>
            <q-icon name="lock"></q-icon>
          </template>
        </q-input>
        <q-input
          filled
          v-model="codVerificare"
          type="text"
          label="Validation code"
          lazy-rules
          :rules="[(val) => (val && val.length > 0) || 'Cannot be empty']"
        >
          <template v-slot:prepend>
            <q-icon name="vpn_key"></q-icon>
          </template>
        </q-input>

        <div class="btns">
          <q-btn label="Register" type="submit" color="primary" />
        </div>
      </q-form>
    </div>
  </div>
</template>

<script>
export default {
  name: "Register",
  data() {
    return {
      numeComplet: null,
      spital: null,
      specializare: null,
      email: null,
      descriere: null,
      codVerificare: null,
      password: null,
      password2: null,
      accept: false,
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
  margin: 5% 0 5% 0;
}

.btns {
  text-align: center;
}

.page {
  background-image: linear-gradient(to right bottom, #897ab9, #473d69);
  height: 100%;
  width: 100%;
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
#spec-logo {
  width: 22px;
  height: 22px;
}
</style>
