<template>
  <div>
    <h3 class="text-center">Atualizar cadastro de carro</h3>
    <div class="row">
      <div class="col-md-6">
        <form @submit.prevent="atualizar_car">
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
          <button type="submit" class="btn btn-primary">Atualizar Carro</button>
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
  created() {
    this.axios
      .get(
        `http://localhost/teste-dev-php/laravel/public/api/carros/${this.$route.params.id}`
      )
      .then((response) => {
        this.car = response.data;
        // console.log(response.data);
      });
  },
  methods: {
    atualizar_car() {
      this.axios
        .put(
          `http://localhost/teste-dev-php/laravel/public/api/carros/${this.$route.params.id}`,
          this.car
        )
        .then((response) => {
          this.$router.push({ name: "home" });
        });
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