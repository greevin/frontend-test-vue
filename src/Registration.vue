<template>
  <div id="registration">
    <div class="section-title">
      <h1>Registration</h1>
      <div class="divider"></div>
    </div>
    <div class="info">
      <div>
        <h3>Need help?</h3>
        <div class="more-info">
          <i class="far fa-life-ring fa-3x"></i>
          <p>{{lorem_ipsum}}</p>
        </div>
      </div>
      <div>
        <h3>Why register?</h3>
        <div class="more-info">
          <i class="fas fa-heartbeat fa-3x"></i>
          <p>{{lorem_ipsum}}</p>
        </div>
      </div>
      <div>
        <h3>What people are saying...</h3>
        <div class="more-info">
          <i class="far fa-smile fa-3x"></i>
          <p>{{lorem_ipsum}}</p>
        </div>
      </div>
    </div>
    <hr>
    <div class="registration-form">
      <app-registration-form></app-registration-form>
    </div>
  </div>
</template>

<script>
import RegistrationForm from "./RegistrationForm";

export default {
  components: {
    "app-registration-form": RegistrationForm
  },
  data() {
    return {
      lorem_ipsum:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque eu diam dolor. Donec in feugiat mauris. Aenean euismod dapibus nibh ullamcorper rhoncus."
    };
  }
};
</script>


<style scoped>
#registration {
  padding: 0 50px;
}

.registration-form {
  width: 80%;
  margin: 0 auto;
}

hr {
  width: 80%;
  margin-top: 40px;
  margin-bottom: 40px;
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
  width: 80%;
}

.info {
  display: flex;
}

.info p {
  font-size: 14px;
}

.info h3 {
  margin-bottom: 10px;
  font-weight: 100;
  color: #66d4c3;
}

.info svg {
  color: #66d4c3;
}

.more-info {
  display: flex;
  align-items: center;
}

.more-info p {
  margin: 10px;
  font-size: 12px;
}
</style>
