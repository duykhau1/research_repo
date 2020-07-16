<template>
  <v-app-bar id="app-bar" app color="white" height="75">
    <v-btn class="mr-3" elevation="1" fab small @click="setDrawer(!drawer)">
      <v-icon v-if="value">mdi-view-quilt</v-icon>
      <v-icon v-else>mdi-dots-vertical</v-icon>
    </v-btn>
    <v-toolbar-title class="hidden-sm-and-down font-weight-light" v-text="$route.name" />
  </v-app-bar>
</template>

<script>
export default {
  name: "DashboardCoreAppBar",

  components: {},
  props: {
    value: {
      type: Boolean,
      default: false,
      required: false
    }
  },
  data: () => ({}),
  computed: {},
  methods: {}
};
</script>