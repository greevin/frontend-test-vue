<template>
  <div id="app">
    <h1>Users</h1>
    <input type="text" v-model="search" placeholder="Filter table content">
    <hr>
    <table>
      <tr>
        <th>ID</th>
        <th>Username</th>
        <th>Name</th>
        <th>E-mail</th>
        <th>City</th>
        <th>Ride in group</th>
        <th>Day of the week</th>
        <th>Posts</th>
        <th>Albums</th>
        <th>Photos</th>
      </tr>
      <tr v-for="user in users" :key="user.id">
        <td>{{ user.id }}</td>
        <td>{{ user.username }}</td>
        <td>{{ user.name }}</td>
        <td>{{ user.email }}</td>
        <td>{{ user.address.city }}</td>
        <td>Always</td>
        <td>Sunday</td>
        <td>0</td>
        <td>0</td>
        <td>0</td>
      </tr>
      <tr v-for="photo in photos" :key="photo.id">
        <td>{{ photo.albumId }}</td>
        <td>{{ photo.id }}</td>
      </tr>
      <tr v-for="album in albums" :key="album.id">
        <td>{{ album.userId }}</td>
        <td>{{ album.id }}</td>
      </tr>
      <tr v-for="post in posts" :key="post.id">
        <td>{{ post.userId }}</td>
        <td>{{ post.id }}</td>
      </tr>
    </table>
  </div>
</template>

<script>
import axios from "axios";

export default {
  data() {
    return {
      users: null,
      photos: null,
      albums: null,
      posts: null,
      search: ''
    };
  },
  computed: {
    filteredUsers: function(){
      return this.users.filter((user) => {
        return user.name.match(this.search)
      });
    }
  },
  mounted() {
    // get users info
    axios
      .get("https://jsonplaceholder.typicode.com/users")
      .then(response => (this.users = response.data));

    // get photos info
    axios
      .get("https://jsonplaceholder.typicode.com/photos")
      .then(response => (this.photos = response.data));

    // get albums info
    axios
      .get("https://jsonplaceholder.typicode.com/albums")
      .then(response => (this.albums = response.data));

    // get posts info
    axios
      .get("https://jsonplaceholder.typicode.com/albums")
      .then(response => (this.posts = response.data));
  },
  computed: {
    totalPhotos: function() {
      console.log(this.photos);
    }
  }
};
</script>

<style>
table {
  border-collapse: collapse;
  width: 100%;
}
</style>
