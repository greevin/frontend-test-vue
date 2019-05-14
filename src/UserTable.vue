<template>
  <div id="user-table">
    <div class="section-title">
      <h1>Users</h1>
      <div class="divider"></div>
      <div class="search">
        <i class="fas fa-search"></i>
        <input type="text" v-model="search" placeholder="Filter table content">
      </div>
    </div>
    <div class="user-info-table">
      <table>
        <tr>
          <th>Username</th>
          <th>Name</th>
          <th>E-mail</th>
          <th>City</th>
          <th>Ride in group</th>
          <th>Day of the week</th>
          <th>Posts</th>
          <th>Albums</th>
          <th>Photos</th>
          <th></th>
        </tr>
        <tr v-for="user in users" :key="user.id">
          <td>{{ user.username }}</td>
          <td>{{ user.name }}</td>
          <td class="green-td">{{ user.email }}</td>
          <td class="green-td">{{ user.address.city }}</td>
          <td>Always</td>
          <td>{{randomDay}}</td>
          <td class="green-td">0</td>
          <td class="green-td">{{ user.albums }}</td>
          <td>0</td>
          <td class="trash-hover">
            <i class="fas fa-trash"></i>
          </td>
        </tr>
      </table>
    </div>
  </div>
</template>

<script>
import axios from "axios";
import Vue from "vue";

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
            Vue.set(this.users[index], newUser);
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
    }
  },
  computed: {
    randomDay: () => {
      return "Hello";
    },
    randomRide: () => {
      return "Hi";
    }
  }
};
</script>

<style scoped>
#user-table {
  padding: 0 50px;
}

table {
  border-collapse: collapse;
  width: 100%;
}

tr:first-child {
  border-bottom: 1px solid;
  text-align: left;
}

tr:nth-child(even) {
  background-color: #f8f8f8;
}

tr:hover:not(:first-child) {
  background-color: #e3e3e3;
}

th,
td {
  padding: 15px;
  font-size: 13px;
}

.green-td {
  color: #66d4c3;
}

.section-title {
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.section-title h1 {
  font-weight: 100;
}

.divider {
  background: #f1f0f1;
  padding: 2px;
  width: 60%;
}

.search {
  border: 1px solid #dcdbdc;
  padding: 10px;
  border-radius: 5px;
  width: 20%;
}

.search input {
  width: 90%;
  border-width: 0;
  padding-top: 5px;
  padding-bottom: 5px;
  font-size: 12px;
}
</style>
