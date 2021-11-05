<template>
<div>
  <h1>Good morning!</h1>
  <br/>
  <p>You seem to have taken quite the spill there, friend. Now you're stuck down here, and it's not terribly clear which way leads out.</p>
  <p>Just your luck, right?</p>
  <p>The good news is, the way forward is just a single step away.</p>
  <p>The bad news is, the way <i>out</i> is a bit further away.</p>
  <p>Still, no sense waiting here on the start menu, so to speak.</p>
  <p><router-link :to="'/area/0'" >Best to get moving</router-link></p>

</div>
</template>

<script>
export default {
  name: 'Home',
}
</script>

<style scoped>
.intro {
  font-style: italic;
}


h1 {
  font-family: fantasy;
}

</style>
