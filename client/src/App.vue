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
