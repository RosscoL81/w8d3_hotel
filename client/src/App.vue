<template lang="html">
  <div id="app">
    <bookings-form />
    <bookings-grid :bookings="bookings"/>
  </div>
</template>

<script>
import BookingsForm from "./components/BookingsForm.vue";
import BookingsGrid from "./components/BookingsGrid.vue";
import { eventBus } from "./main";
import BookingService from "./services/BookingService";

export default {
  name: "app",
  data () {
    return {
      bookings: []
    }
  },
  components: {
    'bookings-form': BookingsForm,
    'bookings-grid': BookingsGrid
  },
  mounted(){
    this.fetchData();

    eventBus.$on('booking-added', booking => this.bookings.push(booking));

    eventBus.$on('check-in', id => {
      const index = this.bookings.findIndex(booking => booking._id === id);
      this.bookings[index].check_in = true;
      console.log("INDEX", index);
      // console.log("BOOKINGS", this.bookings);
    })

    eventBus.$on('booking-deleted', id => {
      const index = this.bookings.findIndex(booking => booking._id === id);
      this.bookings.splice(index, 1);
    })
},
  methods: {
    fetchData(){
      BookingService.getBookings()
      .then(bookings => this.bookings = bookings)
    }
  }
}
</script>

<style lang="css" scoped>
</style>
