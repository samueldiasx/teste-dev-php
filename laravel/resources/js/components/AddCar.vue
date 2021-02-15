<template>
  <div>
    <h3 class="text-center">Adicionar Carro</h3>
    <div class="row">
      <div class="col-md-6">
        <form @submit.prevent="add_car">
          <div class="form-group">
            <label>Marca</label>
            <select class="form-select">
              <option selected>Selecione uma das opções:</option>
              <option value="Chevrolet">Chevrolet</option>
              <option value="Hyundai">Hyundai</option>
              <option value="Ford">Ford</option>
              <option value="Volkswagen">Volkswagen</option>
              <option value="Renault">Renault</option>
              <option value="Toyota">Toyota</option>
              <option value="BMW">BMW</option>
            </select>
          </div>

          <div class="form-group">
            <label>Modelo</label>
            <input type="text" class="form-control" v-model="car.modelo" />
          </div>

          <div class="form-group">
            <label>Ano</label>
            <input type="text" class="form-control" v-model="car.ano" />
          </div>
          <button type="submit" class="btn btn-primary">Adiiconar Carro</button>
        </form>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      car: {},
    };
  },
  methods: {
    add_car() {
      this.axios
        .post(
          "http://localhost/teste-dev-php/laravel/public/api/carros",
          this.car
        )
        .then(
          (response) => this.$router.push({ name: "home" })
          // console.log(response.data)
        )
        .catch((error) => console.log(error))
        .finally(() => (this.loading = false));
    },
  },
};
</script>

<style scoped>
.form-select{
  display: block;
  width: 100%;
  padding: 8px;
  border: 1px solid #ccc;
  border-radius: 4px;
  outline: 0;
}
</style>