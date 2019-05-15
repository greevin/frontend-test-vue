<template>
  <div id="header">
    <div class="logo">
      <i class="fas fa-bicycle fa-2x"></i>
      <h3>Venturus Sports</h3>
    </div>
    <div class="menu">
      <span>JB</span>
      <span>Jason Bourne</span>
    </div>
  </div>
</template>

<style scoped>
#header {
  display: flex;
  align-items: center;
  padding-left: 50px;
  justify-content: space-between;
}

#header h3 {
  padding-left: 15px;
}

#header svg {
  background: #00bc9e;
  border-radius: 5px;
  padding: 5px;
  color: white;
}

.logo {
  display: flex;
  align-items: center;
}

.menu {
  padding-right: 50px;
}

.menu span:first-child {
  border: 1px solid;
  padding: 5px;
  margin-right: 5px;
  border-radius: 20px;
}
</style>
