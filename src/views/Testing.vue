<template>
  
 
    <table>
      <thead>
        <tr>
          <th>Name</th>
          <th>Email</th>
          <th>Action</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="(row, index) in rows" :key="index">
          <td v-if="!row.editing">{{ row.name }}</td>
          <td v-if="!row.editing">{{ row.email }}</td>
          <td v-if="row.editing"><input type="text" v-model="row.name"></td>
          <td v-if="row.editing"><input type="email" v-model="row.email"></td>
          <td>
            <button v-if="!row.editing" class="edit-button" @click="editRow(row)">Edit</button>
            <button v-if="row.editing" class="save-button" @click="saveRow(row)">Save</button>
            <button class="delete-button" @click="deleteRow(index)">Delete</button>
  
          </td>
        </tr>
      </tbody>
    </table>
    <button @click="addRow" class="add-button">Add Row</button>
  
</template>



<script type="module">
  export default {
    data() {
      return {
        rows: [
          { name: 'John', email: 'john@example.com', editing: false },
          { name: 'Jane', email: 'jane@example.com', editing: false },
          { name: 'Bob', email: 'bob@example.com', editing: false }
        ]
      }
    },
    methods: {
      editRow(row) {
        row.editing = true;
      },
      saveRow(row) {
        row.editing = false;
      },
      deleteRow(index) {
        this.rows.splice(index, 1);
      },
      addRow() {
        this.rows.push({ name: '', email: '', editing: true });
      }
    }
  }
    // Define the data properties and methods for the app
   
 

  
</script>