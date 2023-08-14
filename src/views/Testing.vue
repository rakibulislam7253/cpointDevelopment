<template>
  <div>
    <input v-model="searchTerm" @input="search" placeholder="Search...">
    <ul>
      <li v-for="item in filteredItems" :key="item.id">{{ item.name }} =  {{ item.email }}</li>
    </ul>
  </div>
</template>

<script>
import axios from 'axios';

export default {
  data() {
    return {
      items: [],
      searchTerm: "",
    };
  },
  created() {
    this.fetchData();
  },
  methods: {
    fetchData() {
      axios.get('https://jsonplaceholder.typicode.com/users')
        .then(response => {
          this.items = response.data;
        })
        .catch(error => {
          console.error('Error fetching data:', error);
        });
    },
    search() {
      const normalizedSearch = this.searchTerm.toLowerCase();
      if (!normalizedSearch) {
        return this.items;
      }

      this.filteredItems = this.items.filter((item) => {
        for (const key in item) {
          if (item[key].toString().toLowerCase().includes(normalizedSearch)) {
            return true;
          }
        }
        return false;
      });
    },
  },
  computed: {
    filteredItems() {
      return this.items;
    },
  },
};
</script>