<template>
  <div class="registration-form">
    <form>
      <div>
        <div class="username">
          <small>
            <b>Username</b>
          </small>
          <br>
          <input type="text" name="username" class="form-input">
          <br>
          <small class="instruction">Please fill out this field</small>
        </div>
        <div class="name">
          <small>
            <b>Name</b>
          </small>
          <br>
          <input type="text" name="name" class="form-input">
          <br>
          <small class="instruction">Please fill out this field</small>
        </div>
        <div class="email">
          <small>
            <b>E-mail</b>
          </small>
          <br>
          <input type="email" name="email" class="form-input">
          <br>
          <small class="instruction">Please fill out this field</small>
        </div>
        <div class="city">
          <small>
            <b>City</b>
            <small class="instruction">optional</small>
          </small>
          <br>
          <input type="text" name="city" class="form-input">
          <br>
          <small class="instruction">Please fill out this field</small>
        </div>
        <div class="ride-group">
          <small>
            <b>Ride in group?</b>
          </small>
          <br>
          <small v-for="ride in ride_in_group" :key="ride.id">
            <input type="radio" name="ride" :value="ride.id">
            {{ride.title}}
          </small>
        </div>
        <div class="week-group">
          <small>
            <b>Days of the week</b>
          </small>
          <br>
          <small v-for="day in days_of_the_week" :key="day.id">
            <input type="checkbox" :value="day.id">
            {{day.title}}
          </small>
        </div>
      </div>
      <div class="group-buttons">
        <input type="submit" value="Save">
        <button type="reset" class="discard-button">Discard</button>
      </div>
    </form>
  </div>
</template>

<script>
export default {
  data() {
    return {
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
  }
};
</script>

<style scoped>
.form-input {
  border: 1px solid #dcdbdc;
  padding: 10px;
  border-radius: 5px;
  width: 30%;
}

.form-input input {
  width: 90%;
  border-width: 0;
  padding-top: 5px;
  padding-bottom: 5px;
  font-size: 12px;
}

input[type="text"],
input[type="email"],
input[type="radio"],
.discard-button {
  -webkit-transition: all 0.3s ease-in-out;
  -moz-transition: all 0.3s ease-in-out;
  -ms-transition: all 0.3s ease-in-out;
  -o-transition: all 0.3s ease-in-out;
  outline: none;
  border: 2px solid #dddddd;
}

input[type="text"]:focus,
input[type="email"]:focus,
input[type="radio"]:focus,
input[type="radio"]:active,
.discard-button:focus {
  border: 2px solid #b2eae1;
}

.registration-form div {
  margin: 20px 0;
}

.discard-button {
  padding: 0.375rem 0.75rem;
  font-size: 14px;
  border-radius: 5px;
  color: grey;
  background: lightgrey;
}

input[type="submit"] {
  background-color: #4caf50;
  color: white;
  padding: 0.375rem 0.75rem;
  font-size: 15px;
  border-radius: 5px;
}

.instruction {
  color: grey;
  font-size: 12px;
}
</style>
