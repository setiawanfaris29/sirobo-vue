<template>
  <div container>
    <row gutter="12" columns="10">
      <column xs="12" lg="3">
        <div
          class="card"
          style="background-color:#68b0ab;"
          @click="$bvModal.show('modal-scoped')"
        >
          Pendafataran Anggota Baru
        </div>
      </column>
    </row>

    <row gutter="12" columns="10">
      <column xs="12" lg="4">
        <div class="card" style="background-color:#8fc0a9;">
          Coworking Space
        </div>
      </column>
    </row>

    <row gutter="12" columns="10">
      <column xs="12" lg="4">
        <div class="card" style="background-color:#c8d5b9;">
          Buku
        </div>
      </column>
    </row>

    <row gutter="12" columns="10">
      <column xs="12" lg="3">
        <div class="card" style="background-color:#faf3dd;">
          Anak-anak
        </div>
      </column>
    </row>

    <b-modal v-model="show" id="modal-scoped" centered>

      <template #modal-header>
        <h5 class="text-center">Perpustakaan Kota Semarang</h5>
      </template>

      <template #default>
        <h3 class="text-center">Sudah ditempat</h3>
        <h2 class="text-center">Pendafataran Anggota Baru ?</h2>
      </template>

      <template #modal-footer="ok">
        <b-button size="md" class="float-left" variant="success" @click="ok()">Ya</b-button>
        <b-button size="md"  variant="danger" @click="show=false">Tidak</b-button>
      </template>
    </b-modal>
  </div>
</template>

<script>
export default {
  name: "Test",
  data() {
      return{
          show: false,
      }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.card {
  display: grid;
  width: auto;
  height: 100%;
  margin: 30px;
  padding: 50px;
  justify-content: center;
  align-items: center;
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);
  transition: 0.3s;
  border-radius: 5px; /* 5px rounded corners */
}

.card:hover {
  box-shadow: 0 8px 16px 0 rgba(0, 0, 0, 0.2);
}
</style>
