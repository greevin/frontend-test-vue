<template>
  <div id="user-table">
    <div class="section-title">
      <h1>Users</h1>
      <div class="divider"></div>
      <div class="search">
        <i class="fas fa-search"></i>
        <input type="text" placeholder="Filter table content">
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
          <td>{{ user.ride_in_group }}</td>
          <td>{{ user.days_of_the_week }}</td>
          <td class="green-td">{{ user.posts }}</td>
          <td class="green-td">{{ user.albums }}</td>
          <td>{{ user.photos }}</td>
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
      albumPhotoMap: null,
      posts: null,
      ride_in_group: [
        { id: "always", title: "Always" },
        { id: "sometimes", title: "Sometimes" },
        { id: "never", title: "Never" }
      ],
      days_of_the_week: [
        { id: "sun", title: "Sun" },
        { id: "mon", title: "Mon" },
        { id: "tue", title: "Tue" },
        { id: "wed", title: "Wed" },
        { id: "thu", title: "Thu" },
        { id: "fri", title: "Fri" },
        { id: "sat", title: "Sat" }
      ]
    };
  },
  mounted() {
    // get users info
    axios.get("https://jsonplaceholder.typicode.com/users").then(response => {
      this.users = response.data.map(user => {
        user.albums = 0;
        user.posts = 0;
        user.photos = 0;

        return user;
      });

      // get albums info
      axios
        .get("https://jsonplaceholder.typicode.com/photos")
        .then(response => {
          this.photos = response.data;
          axios
            .get("https://jsonplaceholder.typicode.com/albums")
            .then(response => {
              this.albums = response.data;
              this.albumPhotoMap = this.albums.map(album => {
                return {
                  id: album.id,
                  value: this.countPhotosByAlbumId(album.id)
                };
              });
              this.users.forEach((user, index) => {
                let newUser = user;
                let accumulated = this.countAlbumsAndPhotosByUserId(user.id);
                newUser.albums = accumulated.albums;
                newUser.photos = accumulated.photos;

                Vue.set(this.users[index], newUser);
              });
            });
        });

      // get posts info
      axios.get("https://jsonplaceholder.typicode.com/posts").then(response => {
        this.posts = response.data;
        this.users.forEach((user, index) => {
          let newUser = user;
          newUser.posts = this.countPostsByUser(user.id);
          Vue.set(this.users[index], newUser);
        });
      });

      // // random days_of_the_week
      this.users.forEach((user, index) => {
        let newUser = user;
        newUser.days_of_the_week = this.randomData(this.days_of_the_week).title;
        Vue.set(this.users[index], newUser);
      });

      // // random ride_in_group
      this.users.forEach((user, index) => {
        let newUser = user;
        newUser.ride_in_group = this.randomData(this.ride_in_group).title;
        Vue.set(this.users[index], newUser);
      });
    });
  },
  methods: {
    countAlbumsAndPhotosByUserId: function(userId) {
      return this.albums.reduce(
        (acc, album) => {
          if (userId == album.userId) {
            acc.albums += 1;
            acc.photos += this.getPhotosByAlbumId(album.id);
          }
          return acc;
        },
        { albums: 0, photos: 0 }
      );
    },
    getPhotosByAlbumId: function(albumId) {
      let teste = this.albumPhotoMap.filter(item => {
        return item.id == albumId;
      });
      return teste[0].value;
    },
    countPostsByUser: function(userId) {
      return this.posts.reduce((acc, post) => {
        if (userId == post.userId) {
          return (acc += 1);
        } else {
          return acc;
        }
      }, 0);
    },
    countPhotosByAlbumId: function(albumId) {
      return this.photos.reduce((acc, photo) => {
        if (albumId == photo.albumId) {
          return (acc += 1);
        } else {
          return acc;
        }
      }, 0);
    },
    randomData: function(data) {
      return data[Math.floor(Math.random() * data.length)];
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
