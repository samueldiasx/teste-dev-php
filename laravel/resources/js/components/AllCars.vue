<template>
  <div>
    <h3 class="text-center">Todos os carros</h3>
    <br />

    <table class="table table-bordered">
      <thead>
        <tr>
          <th>#</th>
          <th>Marca</th>
          <th>Modelo</th>
          <th>Ano</th>
          <th>Ações</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="car in cars" :key="car.id">
          <td>{{ car.id }}</td>
          <td>{{ car.marca }}</td>
          <td>{{ car.modelo }}</td>
          <td>{{ car.ano }}</td>
          <td>
            <div class="btn-group" role="group">
              <router-link
                :to="{ name: 'edit', params: { id: car.id } }"
                class="btn btn-primary"
                >Editar
              </router-link>
              <button class="btn btn-danger" @click="delete_car(car.id)">
                Excluir
              </button>
            </div>
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
export default {
  data() {
    return {
      cars: [],
    };
  },
  created() {
    this.axios
      .get(`http://localhost/teste-dev-php/laravel/public/api/carros/${id}`)
      .then((response) => {
        this.cars = response.data;
      });
  },
  methods: {
    delete_car(id) {
      this.axios
        .delete(
          `http://localhost/teste-dev-php/laravel/public/api/carros/${id}`
        )
        .then((response) => {
          let i = this.cars.map((item) => item.id).indexOf(id);
          this.cars.splice(i, 1);
        });
    },
  },
};
</script>