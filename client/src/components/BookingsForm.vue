<template lang="html">
  <form id="bookings-form" v-on:submit="handleSubmit">
    <h2>Add a Booking: </h2>
    <div class="formWrap">
      <label for="name">Name:</label>
      <input type="text" id="name" v-model="name" required/>
    </div>
    <div class="formWrap">
      <label for="email">Email:</label>
      <input type="text" id="email" v-model="email" required/>
    </div>
    <div class="formWrap">
      <input type="hidden" value=false v-model="check_in">
    </div>

    <input type="submit" value ="Save" id="save"/>

  </form>
</template>

<script>
import {eventBus} from '../main';
import BookingService from '../services/BookingService';
export default {
  name: "bookings-form",
  data(){
    return {
      name: "",
      email: "",
      check_in: false
    }
  },
  methods: {
    handleSubmit(event){
      event.preventDefault();

      const payload = {
        name: this.name,
        email: this.email,
        check_in: this.check_in
      };

      BookingService.postBooking(payload)
      .then(booking => {
        eventBus.$emit('booking-added', booking);
      });

      this.name = ""
      this.email = ""
    }
  }
}
</script>

<style lang="css" scoped>
</style>
