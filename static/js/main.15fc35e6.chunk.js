(this.webpackJsonppersonalpage=this.webpackJsonppersonalpage||[]).push([[0],{39:function(e,t,a){e.exports=a(57)},44:function(e,t,a){},52:function(e,t,a){},57:function(e,t,a){"use strict";a.r(t);var r=a(0),n=a.n(r),o=a(15),c=a.n(o),i=(a(44),a(4)),s=a(1),l=a(7),f=a.n(l),u=a(13),m=a(20),p=a.n(m),h={sections:8,pages:7,zoom:75,paragraphs:[{offset:1,factor:1.75,header:"Educaci\xf3n",image:"/unt.jpg",aspect:1.7,text:"5 a\xf1os de preparaci\xf3n academica en cursos de programaci\xf3n, gesti\xf3n de bases de datos, inteligencia artificial, sistemas inteligentes, visi\xf3n computacional, redes entre otros."},{offset:2,factor:2,header:"Certificaciones",image:"/certificaciones.jpg",aspect:1.5,text:"TECSUP, Google y NEXTECH"},{offset:3,factor:2.25,header:"Skills",image:"/skills.jpg",aspect:1.5,text:"Dominio de Python, Java, C++, React, React Native, PHP, Javascript, SQL entre otros"},{offset:4,factor:1.75,header:"Consultor\xeda",image:"/asesoria.jpg",aspect:1.5,text:"Consultor\xeda de sistemas ERP, empotrados e Internet de las cosas."},{offset:5,factor:2,header:"Proyectos",image:"/apps.jpg",aspect:.665,text:"Tienes la idea para una app, sistema, programa? Contactame para presupuestar."},{offset:7,factor:1,header:"Cont\xe1ctame",image:"/telefono.jpg",aspect:1.77,text:"Contacta conmigo para consultor\xedas o proyectos."}],stripes:[{offset:0,color:"#000",height:13},{offset:6.3,color:"#000",height:20}],diamonds:[{x:0,offset:.15,pos:new s.Vector3,scale:.6,factor:1.8},{x:2,offset:1.1,pos:new s.Vector3,scale:.8,factor:2.1},{x:-5,offset:2,pos:new s.Vector3,scale:.8,factor:2.5},{x:0,offset:3.2,pos:new s.Vector3,scale:.8,factor:1.75},{x:0,offset:4,pos:new s.Vector3,scale:.8,factor:2.5},{x:2,offset:5.5,pos:new s.Vector3,scale:1.25,factor:.85},{x:-5,offset:7,pos:new s.Vector3,scale:.8,factor:2},{x:0,offset:8,pos:new s.Vector3,scale:1.5,factor:6}],top:Object(r.createRef)()};function v(e){var t=e.children,a=e.size,o=void 0===a?1:a,c=e.left,l=e.right,m=e.top,v=e.bottom,g=e.color,d=void 0===g?"white":g,E=e.opacity,b=void 0===E?1:E,x=e.height,y=void 0===x?.01:x,j=(e.layers,e.font),O=void 0===j?"/MOONGET_Heavy.blob":j,w=Object(u.a)(e,["children","size","left","right","top","bottom","color","opacity","height","layers","font"]),k=Object(i.e)(s.FontLoader,O),_=p()((function(){return new Promise((function(e){return e(new s.TextBufferGeometry(t,{font:k,size:1,height:y,curveSegments:32}))}))}),[t]),z=Object(r.useCallback)((function(e){var t=new s.Vector3;e.geometry.computeBoundingBox(),e.geometry.boundingBox.getSize(t),e.position.x=c?0:l?-t.x:-t.x/2,e.position.y=m?0:v?-t.y:-t.y/2}),[c,l,m,v]),C=Object(r.useRef)(),N=h.top.current;return Object(i.d)((function(){C.current.shift=f()(C.current.shift,(h.top.current-N)/100,.1),N=h.top.current})),n.a.createElement("group",Object.assign({},w,{scale:[o,o,.1]}),n.a.createElement("mesh",{geometry:_,onUpdate:z,frustumCulled:!1},n.a.createElement("customMaterial",{ref:C,attach:"material",color:d,transparent:!0,opacity:b})))}var g=function(e){var t=e.text,a=e.size,r=void 0===a?1:a,o=e.lineHeight,c=void 0===o?1:o,i=e.position,s=void 0===i?[0,0,0]:i,l=Object(u.a)(e,["text","size","lineHeight","position"]);return t.split("\n").map((function(e,t){return n.a.createElement(v,Object.assign({key:t,size:r},l,{position:[s[0],s[1]-t*c,s[2]],children:e}))}))},d=(a(5),a(29),a(6)),E=a(11),b=a(9),x=a(10),y=(s.ShaderMaterial,s.ShaderMaterial,Object(r.createContext)(0));function j(e){var t=e.children,a=e.offset,o=e.factor,c=Object(u.a)(e,["children","offset","factor"]),s=O(),l=s.offset,m=s.sectionHeight,p=Object(r.useRef)();return a=void 0!==a?a:l,Object(i.d)((function(){var e=p.current.position.y,t=h.top.current;p.current.position.y=f()(e,t/h.zoom*o,.1)})),n.a.createElement(y.Provider,{value:a},n.a.createElement("group",Object.assign({},c,{position:[0,-m*a*o,0]}),n.a.createElement("group",{ref:p},t)))}function O(){var e=h.sections,t=h.pages,a=h.zoom,n=Object(i.f)(),o=n.size,c=n.viewport,s=Object(r.useContext)(y),l=c.width,f=c.height,u=l/a,m=f/a,p=o.width<700;return{viewport:c,offset:s,viewportWidth:l,viewportHeight:f,canvasWidth:u,canvasHeight:m,mobile:p,margin:u*(p?.2:.1),contentMaxWidth:u*(p?.8:.6),sectionHeight:m*((t-1)/(e-1)),offsetFactor:(s+1)/e}}new s.Object3D;var w=a(30),k=function(e){function t(){return Object(d.a)(this,t),Object(E.a)(this,Object(b.a)(t).call(this,{vertexShader:"uniform float scale;\n      uniform float shift;\n      varying vec2 vUv;\n      void main() {\n        vec3 pos = position;\n        pos.y = pos.y + ((sin(uv.x * 3.1415926535897932384626433832795) * shift * 1.5) * 0.125);\n        vUv = uv;\n        gl_Position = projectionMatrix * modelViewMatrix * vec4(pos,1.);\n      }",fragmentShader:"uniform sampler2D texture;\n      uniform float hasTexture;\n      uniform float shift;\n      uniform float scale;\n      uniform vec3 color;\n      uniform float opacity;\n      varying vec2 vUv;\n      void main() {\n        float angle = 1.55;\n        vec2 p = (vUv - vec2(0.5, 0.5)) * (1.0 - scale) + vec2(0.5, 0.5);\n        vec2 offset = shift / 4.0 * vec2(cos(angle), sin(angle));\n        vec4 cr = texture2D(texture, p + offset);\n        vec4 cga = texture2D(texture, p);\n        vec4 cb = texture2D(texture, p - offset);\n        if (hasTexture == 1.0) gl_FragColor = vec4(cr.r, cga.g, cb.b, cga.a);\n        else gl_FragColor = vec4(color, opacity);\n      }",uniforms:{texture:{value:null},hasTexture:{value:0},scale:{value:0},shift:{value:0},opacity:{value:1},color:{value:new s.Color("white")}}}))}return Object(x.a)(t,e),Object(w.a)(t,[{key:"scale",set:function(e){this.uniforms.scale.value=e},get:function(){return this.uniforms.scale.value}},{key:"shift",set:function(e){this.uniforms.shift.value=e},get:function(){return this.uniforms.shift.value}},{key:"map",set:function(e){this.uniforms.hasTexture.value=!!e,this.uniforms.texture.value=e},get:function(){return this.uniforms.texture.value}},{key:"color",get:function(){return this.uniforms.color.value}},{key:"opacity",get:function(){return this.uniforms.opacity.value},set:function(e){this.uniforms&&(this.uniforms.opacity.value=e)}}]),t}(s.ShaderMaterial);Object(i.c)({CustomMaterial:k});var _=Object(r.forwardRef)((function(e,t){var a=e.color,o=void 0===a?"white":a,c=e.shift,s=void 0===c?1:c,l=e.opacity,m=void 0===l?1:l,p=e.args,v=e.map,g=Object(u.a)(e,["color","shift","opacity","args","map"]),d=O(),E=d.viewportHeight,b=d.offsetFactor,x=Object(r.useRef)(),y=h.top.current;return Object(i.d)((function(){var e=h.pages,t=h.top;x.current.scale=f()(x.current.scale,b-t.current/((e-1)*E),.1),x.current.shift=f()(x.current.shift,(t.current-y)/s,.1),y=t.current})),n.a.createElement("mesh",Object.assign({ref:t},g),n.a.createElement("planeBufferGeometry",{attach:"geometry",args:p}),n.a.createElement("customMaterial",{ref:x,attach:"material",color:o,map:v,transparent:!0,opacity:m}))})),z=a(34),C=a.n(z),N=a(36),S=a.n(N),M=a(37),H=a.n(M),P=a(31),R=(a(52),"Pedro Alvarez");function T(){var e=Object(r.useRef)();return Object(i.d)((function(){return e.current.material.opacity=f()(e.current.material.opacity,0,.025)})),n.a.createElement(_,{ref:e,color:"#303030",position:[0,0,200],scale:[100,100,1]})}function F(e){var t=e.image,a=e.index,r=e.offset,o=e.factor,c=e.header,s=e.aspect,l=e.text,f=O(),u=f.contentMaxWidth,m=f.canvasWidth,p=f.margin,g=f.mobile,d=s<1&&!g?.65:1,E=(m-u*d-p)/2,b=u*h.zoom*d,x=!(a%2),y=a%2?"#e30000":"#19c6ff";return n.a.createElement(j,{factor:o,offset:r},n.a.createElement("group",{position:[x?-E:E,0,0]},n.a.createElement(_,{map:t,args:[1,1,25,25],shift:75,size:d,aspect:s,scale:[u*d,u*d/s,1],frustumCulled:!1}),n.a.createElement(i.b,{style:{width:b/(g?1:2),textAlign:x?"left":"right"},position:[x||g?-u*d/2:0,-u*d/2/s-.4,1]},n.a.createElement("div",{tabIndex:a},l)),n.a.createElement(v,{left:x,right:!x,size:.04*u,color:y,top:!0,position:[(x?-u:u)*d/2,u*d/s/2+.5,-1]},c),n.a.createElement(j,{factor:.2},n.a.createElement(v,{opacity:.5,size:.1*u,color:"#1A1E2A",position:[(x?u:-u)/2*d,u*d/s/1.5,-10]},""+(a+1)))))}function V(){var e=Object(i.e)(s.TextureLoader,h.paragraphs.map((function(e){return e.image})));Object(r.useMemo)((function(){return e.forEach((function(e){return e.minFilter=s.LinearFilter}))}),[e]);var t=O(),a=t.contentMaxWidth,o=t.canvasWidth,c=t.canvasHeight,l=t.mobile;return n.a.createElement(n.a.Fragment,null,n.a.createElement(j,{factor:1,offset:0},n.a.createElement(j,{factor:1.2},n.a.createElement(v,{center:!0,size:.08*a,position:[0,.15,-1],color:"#dddddd"},"Bienvenido"))),n.a.createElement(j,{factor:1.3,offset:.4},n.a.createElement(j,{factor:1.3},n.a.createElement(v,{center:!0,size:.08*a,position:[0,.5,-1],color:"#1dbc60"},"Pedro Alvarez")),n.a.createElement(j,{factor:1},n.a.createElement(i.b,{position:[-a/3.2,.08*-a+.25,-1]},"Full Stack Developer.",l?n.a.createElement("br",null):" ","Bachelor of Computer Science."))),n.a.createElement(j,{factor:1.2,offset:5.7},n.a.createElement(g,{top:!0,left:!0,size:.15*a,lineHeight:a/5,position:[-a/3.5,0,-1],color:"#2fe8c3",text:"tres\ndos\nuno"})),h.paragraphs.map((function(t,a){return n.a.createElement(F,Object.assign({key:a,index:a},t,{image:e[a]}))})),h.stripes.map((function(e,t){var a=e.offset,r=e.color,o=e.height;return n.a.createElement(j,{key:t,factor:-1.5,offset:a},n.a.createElement(_,{args:[50,o,32,32],shift:-4,color:r,rotation:[0,0,Math.PI/8],position:[0,0,-10]}))})),n.a.createElement(j,{factor:1.25,offset:.4},n.a.createElement(i.b,{className:"bottom-center",position:[-o/2,-c/2,100]},"Hope.")))}var B=function(){var e=Object(r.useRef)(),t=function(e){return h.top.current=e.target.scrollTop};return Object(r.useEffect)((function(){t({target:e.current})}),[]),n.a.createElement(n.a.Fragment,null,n.a.createElement(P.a,null,n.a.createElement("title",null,R)),n.a.createElement(i.a,{className:"canvas",concurrent:!0,pixelRatio:1,orthographic:!0,camera:{zoom:h.zoom,position:[0,0,500]}},n.a.createElement(r.Suspense,{fallback:n.a.createElement(i.b,{center:!0,className:"loading",children:"Loading..."})},n.a.createElement(V,null),n.a.createElement(T,null))),n.a.createElement("div",{className:"scrollArea",ref:e,onScroll:t},new Array(h.sections).fill().map((function(e,t){return n.a.createElement("div",{key:t,id:t,style:{height:"".concat(h.pages/h.sections*100,"vh")}})}))),n.a.createElement("div",{className:"frame"},n.a.createElement("div",{className:"frame__nav"},n.a.createElement("a",{className:"frame__link",href:"#0",children:"intro"}),n.a.createElement("a",{className:"frame__link",href:"#1",children:"Educaci\xf3n"}),n.a.createElement("a",{className:"frame__link",href:"#2",children:"Certificaciones"}),n.a.createElement("a",{className:"frame__link",href:"#3",children:"Skills"}),n.a.createElement("a",{className:"frame__link",href:"#4",children:"Consultor\xeda"}),n.a.createElement("a",{className:"frame__link",href:"#5",children:"Proyectos"}),n.a.createElement("a",{className:"frame__link",href:"#6",children:"Cont\xe1ctame"})),n.a.createElement("div",{className:"frame__links"},n.a.createElement("a",{className:"frame__link",href:"https://github.com/pedroangelalvarez"},n.a.createElement(C.a,null)),n.a.createElement("a",{className:"frame__link",href:"https://www.instagram.com/the.thinkerr/"},n.a.createElement(S.a,null)),n.a.createElement("a",{className:"frame__link",href:"https://wa.link/j8zb9a"},n.a.createElement(H.a,null)))))};c.a.render(n.a.createElement(B,null),document.getElementById("root"))}},[[39,1,2]]]);
//# sourceMappingURL=main.15fc35e6.chunk.js.map