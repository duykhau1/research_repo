<template>
  <v-app>
    <!-- App Bar -->
    <dashboard-core-app-bar />
    <!-- App Navigation  -->
    <dashboard-core-app-navigation />
    <!-- App content -->
    <dashboard-core-app-content />
    <!-- App Setting -->
    <dashboard-core-app-setting />
  </v-app>
</template>

<script>
export default {
  name: "DashboardIndex",

  components: {
    DashboardCoreAppBar: () => import("../../components/core/AppBar"),
    DashboardCoreAppNavigation: () => import("../../components/core/AppNavigation"),
    DashboardCoreAppContent: () => import("../../components/core/AppContent"),
    DashboardCoreAppSetting: () => import("../../components/core/AppSetting"),
  }
};
</script>
