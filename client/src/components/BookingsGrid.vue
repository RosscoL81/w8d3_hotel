<template lang="html">
  <div id="bookingsGrid">
    <div class="booking" v-for="booking in bookings">
      <h2>{{booking.name}}</h2>
      <p>email: {{booking.email}}</p>
      <p v-if= "booking.check_in === true">Status: Checked in</p>
      <p v-else>Status: Not checked in</p>
      <button v-on:click="handleDelete(booking._id)">Delete Booking</button>
      <button v-if="booking.check_in !== true" v-on:click="handleUpdate(booking)">Check In</button>
    </div>
  </div>
</template>

<script>
import {eventBus} from '../main';
import BookingService from '../services/BookingService'

export default {
  name: "bookings-grid",
  props: ["bookings"],
  methods: {
    handleDelete(id){
      BookingService.deleteBooking(id)
      .then(response => eventBus.$emit('booking-deleted', id));
    },

    handleUpdate(booking){
      console.log(booking);
      BookingService.updateBooking(booking)
      .then(response => eventBus.$emit('check-in', booking._id))
    }
  }
}

</script>

<style lang="css" scoped>
</style>
