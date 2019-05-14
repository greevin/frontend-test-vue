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
        <td>{{randomDay}}</td>
        <td>0</td>
        <td>{{ user.albums }}</td>
        <td>0</td>
      </tr>
    </table>

    <!-- <table>
      <tr>
        <th>ID</th>
        <th>Username</th>
      </tr>
      <tr v-for="post in posts" :key="post.id">
        <td>{{ post.userId }}</td>
        <td>{{ post.id }}</td>
      </tr>
    </table> -->
  </div>
</template>

<script>
import axios from "axios";
import Vue from 'vue';

export default {
  data() {
    return {
      users: null,
      photos: null,
      albums: null,
      posts: null,
      search: "",
      days_of_the_week: [
        { id: 1, title: "Sun" },
        { id: 2, title: "Mon" },
        { id: 3, title: "Tue" },
        { id: 4, title: "Wed" },
        { id: 5, title: "Thu" },
        { id: 6, title: "Fri" },
        { id: 7, title: "Sat" }
      ],
      ride_in_group: [
        { id: 1, title: "Always" },
        { id: 2, title: "Sometimes" },
        { id: 3, title: "Never" }
      ]
    };
  },
  mounted() {
    // get users info
    axios.get("https://jsonplaceholder.typicode.com/users").then(response => {
      this.users = response.data;

      // get albums info
      axios
        .get("https://jsonplaceholder.typicode.com/albums")
        .then(response => {
          this.albums = response.data;
          this.users.forEach((user, index) => {
            let newUser = user;
            newUser.albums = this.countAlbumsByUser(user.id);
            Vue.set(this.users[index], newUser)
          });
        });

      // get photos info
      axios
        .get("https://jsonplaceholder.typicode.com/photos")
        .then(response => (this.photos = response.data));

      // get posts info
      axios
        .get("https://jsonplaceholder.typicode.com/posts")
        .then(response => (this.posts = response.data));
    });
  },
  methods: {
    countAlbumsByUser: function(userId) {
      return this.albums.reduce((acc, album) => {
        if (userId == album.userId) {
          return (acc += 1);
        } else {
          return acc;
        }
      }, 0);
    },
  },
  computed: {
    randomDay: function() {
      return 'Hello';
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
