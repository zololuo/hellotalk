<template>
<div class="container">
  <div class="border">
    <div ref="my" class="box" @touchstart="touchStart">
      <div class="head">
        <div class="avatar" />
        <text class="username">HACKER</text>
      </div>

      <div class="content">
        <text class="desc">Google announced a new version of Nearby Connections for fully offline.high
                bandwidth peer to peer device communications.</text>
      </div>

      <div class="footer">
        <text class="action">SHARE</text>
        <text class="action" style="color:#7C4DFF">EXPLORE</text>
      </div>
    </div>
  </div>

  
</div>
</template>

<style scoped>
.container {
  flex: 1;
  background-color: #eeeeee;
}

.border {
  height: 500;
  padding-left: 17.5;
  padding-right: 17.5;
  padding-top: 50;
}

.box {
  width: 340;
  height: 225;
  background-color: #651FFF;
}

.head {
  background-color: #651FFF;
  width: 340;
  height: 60;
  flex-direction: row;
  align-items: center;
}

.content {
  width: 340;
  height: 120;
  background-color: #651FFF;
  padding-left: 12;
  padding-top: 12;
  padding-right: 12;
  box-sizing: border-box;
}

.footer {
  width: 340;
  height: 45;
  background-color: #fff;
  align-items: center;
  justify-content: flex-end;
  padding-right: 12.5;
  flex-direction: row;
  box-sizing: border-box;
}

.action {
  font-size: 17;
  padding-right: 10;
}

.desc {
  font-size: 16;
  color: #fff;
  padding-left: 12;
}


.avatar {
  width: 48;
  height: 48;
  border-radius: 24;
  background-color: #CDDC39;
  margin-left: 18;
  margin-right: 24;
}

.username {
  color: #fff;
  font-size: 16;
}
</style>

<script>
import Binding from 'weex-bindingx';
import {isWeex} from 'universal-env';
export default {
  data(){
    return {
      x: 0,
      y: 0,
      isInAnimation: false,
      gesToken: 0,
      opacity: 1
    }
  },
  methods: {

    getEl: function(el) {
      if (typeof el === 'string' || typeof el === 'number') return el;
      return isWeex ? el.ref : el instanceof HTMLElement ? el : el.$el;
    },
    touchStart: function(e) {
      var self = this;
      if (this.isInAnimation === true) {
        console.log('we are in animation, drop pan gesture...');
        if (this.gesToken) {
          Binding.unbind({
            eventType: 'pan',
            token: self.gesToken
          });
          this.gesToken = undefined;
        }
        return;
      }

      var my = this.getEl(this.$refs.my);
      var translate_x_origin = 'x+0';

      var opacity_x_origin = '1-abs(x)/300';

      var gesTokenObj = Binding.bind({
        anchor: my,
        eventType: 'pan',
        props: [{
            element: my,
            property: 'transform.translateX',
            expression: translate_x_origin
          },
          {
            element: my,
            property: 'opacity',
            expression: opacity_x_origin
          }
        ]
      }, function(e) {
        if (e.state === 'end') {
          self.x += e.deltaX;
          self.y += e.deltaY;
          self.opacity = 1 - Math.abs(e.deltaX) / 300;

          // anim
          self.bindTiming();
        }
      });


      self.gesToken = gesTokenObj.token;
    },
    bindTiming: function() {
      this.isInAnimation = true;

      var my = this.getEl(this.$refs.my);
      var self = this;

      // should equal with timing duration
      var exit_origin = 't>1000';

      var changed_x;
      var final_x;

      var final_opacity;

      var translate_x_origin;

      var shouldDismiss = false;

      if (self.x >= -375 / 2 && self.x <= 375 / 2) {

        shouldDismiss = false;
        final_x = 0;
        changed_x = 0 - self.x;
        final_opacity = 1;
        translate_x_origin = `easeOutElastic(t,${self.x},${changed_x},1000)`
      } else if (self.x < -375 / 2) {
        shouldDismiss = true;
        final_x = -375;
        changed_x = -375 - self.x;
        final_opacity = 0;
        translate_x_origin = `easeOutExpo(t,${self.x},${changed_x},1000)`
      } else { // x > 750/2
        final_x = 375;
        shouldDismiss = true;
        changed_x = 375 - self.x;
        final_opacity = 0;
        translate_x_origin = `easeOutExpo(t,${self.x},${changed_x},1000)`
      }

      var changed_opacity = final_opacity - self.opacity;
      var opacity_origin = `linear(t,${self.opacity},${changed_opacity},1000)`;

      var result = Binding.bind({
        eventType: 'timing',
        exitExpression: exit_origin,
        props: [{
            element: my,
            property: 'transform.translateX',
            expression: translate_x_origin
          },
          {
            element: my,
            property: 'opacity',
            expression: opacity_origin
          }
        ]

      }, function(e) {
        if (e.state === 'end' ||
          e.state === 'exit') {
          // reset x
          self.x = final_x;
          self.isInAnimation = false;

          if (shouldDismiss) {
            // remove card from hierarchy
          }
        }
      });
    }
  }
}
</script>
