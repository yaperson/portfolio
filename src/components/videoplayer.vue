<template>
  <div id="set-height"></div>
  <video
    id="v0"
    tabindex="0"
    autobuffer="autobuffer"
    preload="preload"
    src="../assets/videos/IMG_4494.mov"
  ></video>
</template>
<script>
export default {
  data() {
    return {
      title: "title",
    };
  },
  mounted() {
    let frameNumber = 0, // start video at frame 0
      // lower numbers = faster playback
      playbackConst = 500,
      setHeight = document.getElementById("set-height"),
      vid = document.getElementById("v0");

    vid.addEventListener("loadedmetadata", function () {
      setHeight.style.height = Math.floor(vid.duration) * playbackConst + "px";
    });

    function scrollPlay() {
      let frameNumber = window.pageYOffset / playbackConst;
      vid.currentTime = frameNumber;
      window.requestAnimationFrame(scrollPlay);
    }

    window.requestAnimationFrame(scrollPlay);
  },
};
</script>
  
  <style>
#set-height {
  display: block;
}
#v0 {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
}
</style>