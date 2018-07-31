<template>
  <div>
    <gcanvas v-if="isWeex" ref="canvas_holder" v-bind:style="{width:width,height:height,backgroundColor:'rgba(255,0,0,1)'}"></gcanvas>
    <canvas v-if="!isWeex" ref="canvas_holder" v-bind:style="{width:width+'px',height:height+'px',backgroundColor:'rgba(255,0,0,1)'}"></canvas>
  </div>
</template>

<script>
const isWeex = typeof callNative === "function";

const dom = weex.requireModule("dom");
import { enable, WeexBridge, Image as GImage } from "weex-gcanvas/gcanvas.js";
import { compile } from "shader-program-compiler";

function run(canvas, { requestAnimationFrame }) {
  const fShader = `
//Ether by nimitz (twitter: @stormoid)
#define t uTime

precision highp float;

uniform float uTime;
uniform vec2 uResolution;

mat2 m(float a){float c=cos(a), s=sin(a);return mat2(c,-s,s,c);}
float map(vec3 p){
    p.xz*= m(t*0.4);p.xy*= m(t*0.3);
    vec3 q = p*2.+t;
    return length(p+vec3(sin(t*0.7)))*log(length(p)+1.) + sin(q.x+sin(q.z+sin(q.y)))*0.5 - 1.;
}

void main(){
    vec2 p = gl_FragCoord.xy/uResolution.y - vec2(0.4,.5);
    vec3 cl = vec3(0.);
    float d = 2.5;
    for(int i=0; i<=5; i++) {
        vec3 p = vec3(0,0,5.) + normalize(vec3(p, -1.))*d;
        float rz = map(p);
        float f =  clamp((rz - map(p+.1))*0.5, -.1, 1. );
        vec3 l = vec3(0.1,0.3,.4) + vec3(5., 2.5, 3.)*f;
        cl = cl*l + (1.-smoothstep(0., 2.5, rz))*.7*l;
        d += min(rz, 1.);
    }
    gl_FragColor = vec4(cl, 1.);
}
`;

  runFragShader(canvas, fShader);

  function runFragShader(canvas, fShader) {
    const vShader = `
        attribute vec2 aPosition;
        void main() {
          gl_Position = vec4(aPosition, 0, 1);
        }`;

    const gl = canvas.getContext("webgl");
    gl.getExtension("OES_standard_derivatives");

    const {
      attributes,
      uniforms,
      fillElements,
      drawElements,
      createElementsBuffer
    } = compile({
      vShader,
      fShader,
      gl
    });

    fillElements(createElementsBuffer([0, 1, 2]));
    attributes.aPosition.fill(
      attributes.aPosition.createBuffer([0, 3, 3, -3, -3, -3])
    );

    let offsetX = 0;
    let offsetY = 0;

    uniforms.uResolution &&
      uniforms.uResolution.fill([canvas.width, canvas.height]);

    let startTime;
    function render() {
      gl.clearColor(0.0, 0.0, 0.0, 1.0);
      gl.clear(gl.COLOR_BUFFER_BIT);

      if (uniforms.uTime) {
        if (!startTime) {
          startTime = Date.now();
        }
        const uTime = ((Date.now() - startTime) / 1000) % 65532;
        uniforms.uTime.fill([uTime]);
      }
      if (uniforms.uMouse) {
        uniforms.uMouse.fill([offsetX, offsetY]);
      }

      drawElements(3);

      requestAnimationFrame(render);
    }
    render();
  }
}

export default {
  data() {
    return {
      isWeex,
      width: 750,
      height: 3000
    };
  },

  mounted: function() {

    const start = () => {

      var ref = this.$refs.canvas_holder;

      var size = isWeex
        ? {
            width: parseInt(this.width),
            height: parseInt(this.height)
          }
        : {
            width: parseInt(ref.clientWidth),
            height: parseInt(ref.clientHeight)
          };

      if (isWeex) {
        ref = enable(ref, { bridge: WeexBridge });
      }

      ref.width = size.width;
      ref.height = size.height;

      run(ref, {
        requestAnimationFrame: isWeex ? setTimeout : requestAnimationFrame
      });
    };

    dom.getComponentRect("viewport", e => {
      this.height = e.size.height;
      this.isReady = true;
      setTimeout(start, 1000);
    });
  }
};
</script>