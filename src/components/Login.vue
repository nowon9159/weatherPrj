<template>
  <div>
    <h1>로그인 페이지입니다.</h1>
  </div>
  <div>
    <v-text-field
      label="ID"
      align-content="center"
      class="mx-auto"
      v-model="id"
    ></v-text-field>
    <v-text-field
      label="PW"
      align-content="center"
      class="mx-auto"
      v-model="pw"
    ></v-text-field>
  </div>
  <div>
    <v-btn @click="passIdPw"> 로그인 </v-btn>
  </div>
</template>

<script>
import { mapActions } from "pinia";
import { useUserStore } from "@/stores/User";

export default {
  components: {},
  data() {
    return {
      id: null,
      pw: null,
    };
  },
  methods: {
    ...mapActions(useUserStore, ["setIdPw"]),
    passIdPw() {
      this.setIdPw(this.id, this.pw);
      console.log(this.id, this.pw);
    },
  },
};
</script>

<style lang="scss" scoped></style>
