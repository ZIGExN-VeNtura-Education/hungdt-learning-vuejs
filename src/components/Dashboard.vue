<script>
import {useSession} from '@/stores/session';
import {mapState} from "pinia";

export default {
  computed: {
    ...mapState(useSession, ["user"])
  }
};
</script>
<template>
  <div id="index-page">
    Hello {{ this.user }}
  </div>
</template>
