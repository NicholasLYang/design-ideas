(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{20:function(e,a,t){e.exports=t(37)},36:function(e,a,t){},37:function(e,a,t){"use strict";t.r(a);var n=t(0),r=t.n(n),o=t(17),c=t.n(o),i=t(4),l=t(7),s=Object(i.a)({Circle:{position:"absolute",left:"50%",top:"50%",transition:"width 1s, height 1s, margin 1s",marginLeft:function(e){return"-".concat(e.radius,"vh")},marginTop:function(e){return"-".concat(e.radius,"vh")},width:function(e){return"".concat(2*e.radius,"vh")},height:function(e){return"".concat(2*e.radius,"vh")},borderRadius:"50%",backgroundColor:function(e){return e.color},display:"flex",alignItems:"center",justifyContent:"center"}})(function(e){var a=e.handleMouseEnter,t=e.handleMouseLeave,n=e.classes,o=e.children;return r.a.createElement("div",{onMouseEnter:a,onMouseLeave:t,className:n.Circle},o)}),u=Object(i.a)({RandomRadii:{width:"100vw",height:"100vh",position:"relative"}})(function(e){var a=e.classes,t=Object(n.useState)(0),o=Object(l.a)(t,2),c=o[0],i=o[1];return Object(n.useEffect)(function(){var e=setInterval(function(){i(Math.random())},750*Math.random());return function(){return clearInterval(e)}}),r.a.createElement("div",{className:a.RandomRadii},r.a.createElement(s,{radius:40+c*Math.random()*40,color:"#0e79b2"}),r.a.createElement(s,{radius:30+c*Math.random()*30,color:"#bf1363"}),r.a.createElement(s,{radius:15+c*Math.random()*15,color:"#f39237"}))}),d={0:{color:"#ccdbdc",radius:40},1:{key:2,color:"#80ced7",radius:32},2:{color:"#007ea7",radius:21},3:{color:"#003249",radius:13}},m=Object(i.a)({HoverFill:{width:"100vw",height:"100vh",position:"relative"}})(function(e){var a=e.classes,t=Object(n.useState)("0"),o=Object(l.a)(t,2),c=o[0],i=o[1],u=function(e){return function(a){i(e)}},m=function(e){i("-1")};return r.a.createElement("div",{className:a.HoverFill},Object.entries(d).map(function(e){var a=Object(l.a)(e,2),t=a[0],n=a[1],o=n.color,i=n.radius;return r.a.createElement("div",{key:t},r.a.createElement(s,{key:2,color:o,radius:c===t?d[0].radius:i}),r.a.createElement(s,{key:1,color:o,handleMouseEnter:u(t),handleMouseLeave:m,radius:i}))}))}),f=t(10),v=Object(i.a)({Focus:{width:"100vw",height:"100vh",position:"relative"},focusText:{transition:"font-size 1s"}})(function(e){var a=e.classes,t=Object(n.useState)(!1),o=Object(l.a)(t,2),c=o[0],i=o[1];return Object(n.useEffect)(function(){var e=setInterval(function(){i(!c)},2e3);return function(){return clearInterval(e)}}),c?r.a.createElement("div",{className:a.Focus},r.a.createElement(s,{color:"#f4faff",radius:50}),r.a.createElement(s,{color:"#86bbd8",radius:36}),r.a.createElement(s,{color:"#048ba8",radius:16}),r.a.createElement(s,{color:"#33658a",radius:4},r.a.createElement("div",{style:{fontSize:"0.75rem"},className:a.focusText},"Focus"))):r.a.createElement("div",{className:a.Focus},r.a.createElement(s,{color:"#f4faff",radius:50}),r.a.createElement(s,{color:"#86bbd8",radius:30}),r.a.createElement(s,{color:"#048ba8",radius:20}),r.a.createElement(s,{color:"#33658a",radius:10},r.a.createElement("div",{style:{fontSize:"2rem"},className:a.focusText},"Focus")))}),h=Object(i.a)({App:{width:"100vw",position:"relative"},links:{display:"flex"},link:{padding:"10px",fontSize:"1.1em",textDecoration:"none","&:hover":{textDecoration:"underline"}}})(function(e){var a=e.classes;return r.a.createElement("div",{className:a.App},r.a.createElement("div",{className:a.links},r.a.createElement(f.a,{to:"/random-radii"}," ",r.a.createElement("span",{className:a.link}," Random Radii ")),r.a.createElement(f.a,{to:"/hover-fill"}," ",r.a.createElement("span",{className:a.link}," Hover Fill ")," "),r.a.createElement(f.a,{to:"/focus"}," ",r.a.createElement("span",{className:a.link}," Focus ")," ")),r.a.createElement(f.b,null,r.a.createElement(u,{path:"/random-radii"}),r.a.createElement(m,{path:"/hover-fill"}),r.a.createElement(v,{path:"/focus"})))});t(36),Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));c.a.render(r.a.createElement(h,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}},[[20,1,2]]]);
//# sourceMappingURL=main.37dd88c5.chunk.js.map