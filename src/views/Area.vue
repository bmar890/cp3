<template>
<div>
  <div class="info">
    <p>{{area.intro}}</p>

    <p>As you look around, you can see {{area.canSee}}. From here, you can hear {{area.canHear}}. The whole area smells like {{area.smellsLike}}.</p>
  </div>



  <div v-if="area.id != 15" class="doors">
    <div class="image" v-on:click="forceRerender()">
      <router-link :to="'/area/' + doors[0]">
      <img :src="'/images/door.jpg'">
      </router-link>
    </div>
    <div class="image" v-on:click="forceRerender()">
      <router-link :to="'/area/' + doors[1]">
      <img :src="'/images/door.jpg'">
      </router-link>
    </div>
    <div class="image" v-on:click="forceRerender()">
      <router-link :to="'/area/' + doors[2]">
      <img :src="'/images/door.jpg'">
      </router-link>
    </div>
  </div>
  <div v-else class="doors">
    <div class="image">
      <router-link :to="'/exit'">
      <img :src="'/images/door.jpg'">
      </router-link>
    </div>
  </div>
</div>
</template>

<script>
export default {
  name: 'Home',
  data() {
    return {
      area: {},
      doors: [1, 1, 1],
    }
  },
  methods: {
    forceRerender() {
      this.area = this.$root.$data.areas.find(area => area.id === parseInt(this.$route.params.id));
      this.doors[0] = Math.floor(Math.random() * 15)+1;
      this.doors[1] = Math.floor(Math.random() * 15)+1;
      this.doors[2] = Math.floor(Math.random() * 15)+1;
    }
  },
  created() {
    this.forceRerender();
  },
}
</script>

<style scoped>
.intro {
  font-style: italic;
}

.doors {
  display: flex;
  flex-wrap: wrap;
}

.doors img {
  height: 100px;
  width: 50px;
  margin-left: 10px;
  object-fit: cover;
}
</style>
