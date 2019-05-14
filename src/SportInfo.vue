<template>
  <div id="sport-info">
    <div id="sport-type">
      <i class="fas fa-puzzle-piece fa-3x"></i>
      <div class="info">
        <small>Sport Type</small>
        <h2>Cycling</h2>
      </div>
    </div>
    <div id="mode">
      <i class="fas fa-trophy fa-3x"></i>
      <div class="info">
        <small>Mode</small>
        <h2>Advanced</h2>
      </div>
    </div>
    <div id="route">
      <i class="fas fa-map-signs fa-3x"></i>
      <div class="info">
        <small>Route</small>
        <h2>30 miles</h2>
      </div>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style>
#sport-info {
  background: #b2eae1;
  display: flex;
  padding: 30px;
}

#sport-info small {
  color: grey;
}

#sport-info h2 {
  margin: 0px;
}

#sport-type,
#mode,
#route {
  display: flex;
  margin: 0 75px 0 0;
}

#sport-type,
#mode,
#route div {
  padding-left: 20px;
}

svg {
  color: #24c6ac;
}

.info {
  padding-left: 20px;
}
</style>


