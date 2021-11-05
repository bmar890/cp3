<template>
<div>
  <h1>And we're out!!</h1>
  <br/>
  <p>Ah, what a relief...</p>
  <p>I was certain that we were going to end up stuck in there forever. And frankly, I have better things to do with my {{today}}.</p>
  <p>But that's just me, of course. Maybe you enjoyed that little journey of ours.</p>
  <p>So it's up to you! Either we can keep on going about our merry days...</p>
  <p><router-link :to="'/area/0'" >...or we can dive back in!</router-link></p>

</div>
</template>

<script>
export default {
  name: 'Exit',
  data() {
    return {
      today: "time",
    }
  },
  methods: {
    getDay() {
      var d = new Date();
      var weekday=new Array(7);
      weekday[0]="Monday";
      weekday[1]="Tuesday";
      weekday[2]="Wednesday";
      weekday[3]="Thursday";
      weekday[4]="Friday";
      weekday[5]="Saturday";
      weekday[6]="Sunday";
      return weekday[d.getDay() - 1] + 's';
    }
  },
  created() {
    this.today = this.getDay();
  },

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
