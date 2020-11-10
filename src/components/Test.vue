<template>
<div container>


<row gutter="50">

    <column xs="12" md="4" lg="3">
      <div class="card" style="background-color:#68b0ab;" @click="showModal">
        Pendafataran Anggota Baru
      </div>
    </column>

    <column xs="12" md="4" lg="3">
      <div class="card" style="background-color:#8fc0a9;">
        Coworking Space
      </div>
    </column>

    <column xs="12" md="4" lg="3">
      <div class="card" style="background-color:#c8d5b9;">
        Buku
      </div>
    </column>

    <column xs="12" md="4" lg="3">
      <div class="card" style="background-color:#faf3dd;">
        Anak-anak
      </div>
    </column>

  </row>
  
</div>
  
</template>

<script>
export default {
  name: "Test",
  props: {},
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.card {
  display: grid;
  width: auto;
  height: 100%;
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
