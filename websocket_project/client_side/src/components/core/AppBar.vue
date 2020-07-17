<template>
  <v-app-bar id="app-bar" app color="white" height="75">
    <v-btn class="mr-3" elevation="1" fab small @click="setDrawer(!drawer)">
      <v-icon v-if="value">mdi-view-quilt</v-icon>
      <v-icon v-else>mdi-dots-vertical</v-icon>
    </v-btn>

    <v-toolbar-title class="hidden-sm-and-down font-weight-light" v-text="$route.name" />

    <v-spacer />

    <v-text-field :label="$t('search')" color="secondary" hide-details style="max-width: 165px;">
      <template v-if="$vuetify.breakpoint.mdAndUp" v-slot:append-outer>
        <v-btn class="mt-n2" elevation="1" fab small>
          <v-icon>mdi-magnify</v-icon>
        </v-btn>
      </template>
    </v-text-field>

    <div class="mx-3" />

    <v-menu bottom left offset-y original="top right" translate="scale-transition">
      <template v-slot:activator="{attrs, on}">
        <v-btn class="ml-2" min-width="0" text v-bind="attrs" v-on="on">
          <v-badge color="red" overlap bordered>
            <template v-slot:badge>
              <span>1</span>
            </template>
            <v-icon >mdi-bell</v-icon>
          </v-badge>
        </v-btn>
      </template>

      <v-list>
        <div>
          <app-bar-item v-for="(item,index) in notifications" :key="`item-${index}`">
            <v-list-item-title v-text="item"></v-list-item-title>
          </app-bar-item>
        </div>
      </v-list>
    </v-menu>

    <v-menu bottom left offset-y original="top right" translate="scale-transition">
      <template v-slot:activator="{attrs, on}">
        <v-btn class="ml-2" min-width="0" text v-bind="attrs" v-on="on">
          <country-flag country="us" v-if="true" />
          <country-flag country="vn" v-else />
        </v-btn>
      </template>

      <v-list>
        <country-flag country="us" />
        <country-flag country="vn" />
      </v-list>
    </v-menu>

    <v-btn class="ml-2" min-width="0" text>
      <v-icon>mdi-account</v-icon>
    </v-btn>
  </v-app-bar>
</template>

<script>
// Vuetify Utilities
import { VHover, VListItem } from "vuetify/lib";
// Vuex Utilities
import { mapState, mapMutations } from "vuex";

export default {
  name: "DashboardCoreAppBar",

  components: {
    AppBarItem: {
      render(h) {
        return h(VHover, {
          scopedSlots: {
            default: ({ hover }) => {
              return h(
                VListItem,
                {
                  attrs: this.$attrs,
                  class: {
                    "black--text": !hover,
                    "white--text secondary elevation-12": hover
                  },
                  props: {
                    activeClass: "",
                    dark: hover,
                    link: true,
                    ...this.$attrs
                  }
                },
                this.$slots.default
              );
            }
          }
        });
      }
    }
  },

  props: {
    value: {
      type: Boolean,
      default: false,
      required: false
    }
  },
  data: () => ({ notifications: ["Message 1", "Message 2", "Message 3"] }),
  computed: {
    ...mapState(["drawer"])
  },
  methods: {
    ...mapMutations({
      setDrawer: "SET_DRAWER"
    })
  }
};
</script>