<template>
  <div
    v-if="station.docks.length"
    class="row"
    :class="{
      'metrics-padding': padding,
    }"
  >
    <div class="col-xs-12 col-md-3">
      <div class="metrics-title">
        {{ $t('labels.station.docks') }}
      </div>
    </div>
    <div class="col-xs-12 col-md-9 metrics-block">
      <div class="row">
        <template v-if="hasGroup">
          <div
            v-for="(groupDocks, group) in docksByGroup"
            :key="`docks-${group}`"
            class="col-xs-12"
          >
            <div class="metrics-group-label">
              <b>{{ group }}:</b>
            </div>
            <div class="row">
              <div
                v-for="(typedDocks, type) in groupBy(groupDocks, 'typeLabel')"
                :key="`docks-${group}-${type}`"
                class="col-xs-12"
              >
                <div class="metrics-label">
                  <b>{{ type }}:</b>
                </div>
                <div class="row">
                  <div
                    v-for="(docks, size) in groupBy(typedDocks, 'sizeLabel')"
                    :key="`dock-${size}`"
                    class="col-xs-6"
                  >
                    <DockItem :docks="docks" :size="size" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </template>
        <div
          v-for="(groupDocks, group) in docksByType"
          v-else
          :key="`docks-${group}`"
          class="col-xs-12"
        >
          <div class="metrics-label">
            <b>{{ group }}:</b>
          </div>
          <div class="row">
            <div
              v-for="(docks, size) in groupBy(groupDocks, 'sizeLabel')"
              :key="`dock-${size}`"
              class="col-xs-6"
            >
              <DockItem :docks="docks" :size="size" />
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import DockItem from './Item'

export default {
  components: {
    DockItem,
  },

  props: {
    station: {
      type: Object,
      required: true,
    },

    padding: {
      type: Boolean,
      default: false,
    },
  },

  computed: {
    hasGroup() {
      return this.station.docks.some(dock => !!dock.group)
    },

    docksBySize() {
      return this.groupBy(this.station.docks, 'sizeLabel')
    },

    docksByType() {
      return this.groupBy(this.station.docks, 'typeLabel')
    },

    docksByGroup() {
      return this.groupBy(this.sortBy(this.station.docks, 'name'), 'group')
    },
  },
}
</script>
