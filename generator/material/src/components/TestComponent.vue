<template>
  <div class="wrapper">
    <div class="container">
      <div class="header">
        <h2>Resize your window to see changes</h2>
        <h3>Vuetify breakpoints</h3>
      </div>
      <div class="content">
        <div class="item">
          <div>Height:</div>
          <div class="value">{{windowHeight}}</div>
        </div>
        <div class="item">
          <div>Width:</div>
          <div class="value">{{windowWidth}}</div>
        </div>
        <div class="item">
          <div>Smartphones:</div>
          <div
            class="value"
            :class="{'active': xs, 'disable': !xs}"
          >{{createPromptDescription(breakpoints, 'xs')}}</div>
        </div>
        <div class="item">
          <div>Tablets:</div>
          <div
            class="value"
            :class="{'active': sm, 'disable': !sm}"
          >{{createPromptDescription(breakpoints, 'sm')}}</div>
        </div>
        <div class="item">
          <div>Small laptops:</div>
          <div
            class="value"
            :class="{'active': md, 'disable': !md}"
          >{{createPromptDescription(breakpoints, 'md')}}</div>
        </div>
        <div class="item">
          <div>Desktops:</div>
          <div
            class="value"
            :class="{'active': lg, 'disable': !lg}"
          >{{createPromptDescription(breakpoints, 'lg')}}</div>
        </div>
        <div class="item">
          <div>Large Desktops</div>
          <div
            class="value"
            :class="{'active': xl, 'disable': !xl}"
          >{{createPromptDescription(breakpoints, 'xl')}}</div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import WindowResizeMixin from "@/mixins/windowResize/WindowResize";

export default {
  name: "TestComponent",
  mixins: [WindowResizeMixin],
  methods: {
    createPromptDescription(data, key) {
      switch (key) {
        case "xs":
          return `< ${data[key]}px`;
        case "sm":
          return `${data.xs}px >< ${data[key]}px`;
        case "md":
          return `${data.sm}px >< ${data[key]}px`;
        case "lg":
          return `${data.md}px >< ${data[key]}px`;
        case "xl":
          return `> ${data.lg}px`;
        default:
          return `${key} is not handled`;
      }
    }
  }
};
</script>
<style  scoped>
.wrapper {
  display: flex;
  justify-content: center;
  width: 100%;
  height: 600px;
  background-color: #a7ffeb;
}

.container {
  padding: 10px;
}

.header {
  margin: 30px 0;
}

.content {
  font-size: 20px;
  font-weight: 600;
  text-align: center;
}

.content div {
  margin: 10px 0;
}

.value {
  color: white;
  background-color: #40c4ff;
  border-radius: 4px;
  padding: 1px 10px;
  width: auto;
  min-height: 24px;
}

.item {
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
}

.active {
  background-color: #8bc34a;
}

.disable {
  opacity: 0.5;
}
</style>
