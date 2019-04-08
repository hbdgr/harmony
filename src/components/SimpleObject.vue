<template>
  <div id="boxed">
    <div id="boxedIdx">
      {{ object.id }}
    </div>
    {{ object.content }}
  </div>
</template>

<script>

export default {
  name: 'SimpleObject',
  props: {
    object: Object,
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
div {
  padding: 10px 5px 10px 5px;
}

#boxed {
  position: relative;
  align: center;
  width: 20%;
  padding: 5px;
  margin: 0px auto 0px auto;

  border: 2px solid Black;
  background-color: hsl(0, 0%, 10%);

  color: white;
  font-family: verdana;
  font-size: 16px;
}

#boxedIdx {
  padding: 3px;

  position: absolute;
  top: 0;
  left: 0;
  width: 10px;
  height: 10px;

  background-color: hsl(0, 0%, 15%);
  font-size: 11px;
}
</style>
