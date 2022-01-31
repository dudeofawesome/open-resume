(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[888],{6363:function(e,t,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/_app",function(){return n(2957)}])},9212:function(e,t,n){"use strict";n.d(t,{a:function(){return R}});var r,o,a=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}(),i=(r=["",""],o=["",""],Object.freeze(Object.defineProperties(r,{raw:{value:Object.freeze(o)}})));function u(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}var s=function(){function e(){for(var t=this,n=arguments.length,r=Array(n),o=0;o<n;o++)r[o]=arguments[o];return u(this,e),this.tag=function(e){for(var n=arguments.length,r=Array(n>1?n-1:0),o=1;o<n;o++)r[o-1]=arguments[o];return"function"===typeof e?t.interimTag.bind(t,e):"string"===typeof e?t.transformEndResult(e):(e=e.map(t.transformString.bind(t)),t.transformEndResult(e.reduce(t.processSubstitutions.bind(t,r))))},r.length>0&&Array.isArray(r[0])&&(r=r[0]),this.transformers=r.map((function(e){return"function"===typeof e?e():e})),this.tag}return a(e,[{key:"interimTag",value:function(e,t){for(var n=arguments.length,r=Array(n>2?n-2:0),o=2;o<n;o++)r[o-2]=arguments[o];return this.tag(i,e.apply(void 0,[t].concat(r)))}},{key:"processSubstitutions",value:function(e,t,n){var r=this.transformSubstitution(e.shift(),t);return"".concat(t,r,n)}},{key:"transformString",value:function(e){return this.transformers.reduce((function(e,t){return t.onString?t.onString(e):e}),e)}},{key:"transformSubstitution",value:function(e,t){return this.transformers.reduce((function(e,n){return n.onSubstitution?n.onSubstitution(e,t):e}),e)}},{key:"transformEndResult",value:function(e){return this.transformers.reduce((function(e,t){return t.onEndResult?t.onEndResult(e):e}),e)}}]),e}(),l={separator:"",conjunction:"",serial:!1},c=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:l;return{onSubstitution:function(t,n){if(Array.isArray(t)){var r=t.length,o=e.separator,a=e.conjunction,i=e.serial,u=n.match(/(\n?[^\S\n]+)$/);if(t=u?t.join(o+u[1]):t.join(o+" "),a&&r>1){var s=t.lastIndexOf(o);t=t.slice(0,s)+(i?o:"")+" "+a+t.slice(s+1)}}return t}}};function d(e){if(Array.isArray(e)){for(var t=0,n=Array(e.length);t<e.length;t++)n[t]=e[t];return n}return Array.from(e)}var p=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"initial";return{onEndResult:function(t){if("initial"===e){var n=t.match(/^[^\S\n]*(?=\S)/gm),r=n&&Math.min.apply(Math,d(n.map((function(e){return e.length}))));if(r){var o=new RegExp("^.{"+r+"}","gm");return t.replace(o,"")}return t}if("all"===e)return t.replace(/^[^\S\n]+/gm,"");throw new Error("Unknown type: "+e)}}},f=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"";return{onEndResult:function(t){if(""===e)return t.trim();if("start"===(e=e.toLowerCase())||"left"===e)return t.replace(/^\s*/,"");if("end"===e||"right"===e)return t.replace(/\s*$/,"");throw new Error("Side not supported: "+e)}}},m=(new s(c({separator:","}),p,f),new s(c({separator:",",conjunction:"and"}),p,f),new s(c({separator:",",conjunction:"or"}),p,f),function(e){return{onSubstitution:function(t,n){if(null==e||"string"!==typeof e)throw new Error("You need to specify a string character to split by.");return"string"===typeof t&&t.includes(e)&&(t=t.split(e)),t}}}),g=function(e){return null!=e&&!Number.isNaN(e)&&"boolean"!==typeof e},h=function(){return{onSubstitution:function(e){return Array.isArray(e)?e.filter(g):g(e)?e:""}}},b=(new s(m("\n"),h,c,p,f),function(e,t){return{onSubstitution:function(n,r){if(null==e||null==t)throw new Error("replaceSubstitutionTransformer requires at least 2 arguments.");return null==n?n:n.toString().replace(e,t)}}}),y=(new s(m("\n"),c,p,f,b(/&/g,"&amp;"),b(/</g,"&lt;"),b(/>/g,"&gt;"),b(/"/g,"&quot;"),b(/'/g,"&#x27;"),b(/`/g,"&#x60;")),function(e,t){return{onEndResult:function(n){if(null==e||null==t)throw new Error("replaceResultTransformer requires at least 2 arguments.");return n.replace(e,t)}}}),v=new s(y(/(?:\n(?:\s*))+/g," "),f);new s(y(/(?:\n\s*)/g,""),f),new s(c({separator:","}),y(/(?:\s+)/g," "),f),new s(c({separator:",",conjunction:"or"}),y(/(?:\s+)/g," "),f),new s(c({separator:",",conjunction:"and"}),y(/(?:\s+)/g," "),f),new s(c,p,f),new s(c,y(/(?:\s+)/g," "),f),new s(p,f),new s(p("all"),f);function w(e,t){return t||(t=e.slice(0)),Object.freeze(Object.defineProperties(e,{raw:{value:Object.freeze(t)}}))}function k(){var e=w(["Throughout my career as a software developer I've focused\n      on developing scalable and well documented code. I enjoy working\n      collaboratively but can also run with projects on my own. Excited about\n      the prospect of joining a product-driven company like yours."]);return k=function(){return e},e}function A(){var e=w(["Design & develop ecommerce platform to purchase in-game\n              items for the Destiny 2 video game"]);return A=function(){return e},e}function S(){var e=w(["Interview and hire international partners to procure\n              in-game items to sell"]);return S=function(){return e},e}function C(){var e=w(["Actively build and maintain front end mobile and desktop\n              website using Angular"]);return C=function(){return e},e}function P(){var e=w(["Updated and modified existing internal tools for local\n              small businesses using Angular, Flutter, and NodeJS"]);return P=function(){return e},e}function E(){var e=w(["Built and maintained reliable and secure multi-tenant\n              servers using OpenSUSE, Docker, Ansible, ZFS, BTRFS"]);return E=function(){return e},e}function _(){var e=w(["Architected and implemented casting and on-set management\n              platform for film background actors"]);return _=function(){return e},e}function j(){var e=w(["Contributed to\n              [Ionic](https://github.com/pulls?q=is%3Apr+author%3Adudeofawesome+ionic),\n              [Cordova](https://github.com/pulls?q=is%3Apr+author%3Adudeofawesome+cordova),\n              [Ionic Native](https://github.com/pulls?q=is%3Apr+author%3Adudeofawesome+ionic+native),\n              [LoopBack plugins](https://github.com/castifi?q=loopback),\n              [DefinitelyTyped](https://github.com/DefinitelyTyped/DefinitelyTyped/pulls?q=is%3Apr+author%3Adudeofawesome),\n              and other open source projects."]);return j=function(){return e},e}function O(){var e=w(["Data visualization, analytics, and hardware actuation based\n              on sensor data."]);return O=function(){return e},e}function x(){var e=w(["Designed physical packaging for shipping sensor nodes with\n              AutoCAD."]);return x=function(){return e},e}function D(){var e=w(["Developed a wide array of projects, including Windows\n              desktop applications, Android apps, web apps, and command line\n              applications."]);return D=function(){return e},e}function F(){var e=w(["Fast, simple Hacker News client.\n            [Open source](https://github.com/dudeofawesome/hn_flutter), built\n            with Flutter.\n            [On Google Play Store](https://play.google.com/store/apps/details?id=io.orleans.hnflutter).\n            Contributed to\n            [Flutter library](https://github.com/flutter/flutter/pulls?q=is:pr+author:dudeofawesome)\n            & [plugins](https://github.com/pulls?q=is:pr+author:dudeofawesome+language:dart)."]);return F=function(){return e},e}function B(){var e=w(["An alternative home screen to be used with VR\n            headsets, such as Google Cardboard. Enables users to play games\n            without the need to constantly remove it from the headset. Over\n            35,000 users, with 100+ daily downloads.\n            [Open source](https://github.com/dudeofawesome/CardboardHome)."]);return B=function(){return e},e}function I(){var e=w(["Developed an augmented reality game. Player\n            places a card on table, which their phone recognizes, and renders\n            the game on top of their table. Players can then move their phone\n            for any other view of the game.\n            [Open source](https://github.com/dudeofawesome/Sole_Champion)."]);return I=function(){return e},e}var R={theme:{colors:{primary:"hsl(0, 100%, 41.2%)",primary_muted:"hsl(0, 100%, 28.6%)"}},about:{name:"Louis Orleans",label:"Full Stack Software Engineer",summary:v(k()),image_url:"/public/assets/icon.svg",email:"louis@orleans.io",phone:"714.386.9047",location:"Brea, California",profiles:[{network:"github",username:"dudeofawesome",url:"https://github.com/dudeofawesome"}]},sections:[{title:"Experience",items:[{title:"Co-Founder, Flawless Execution",location:"Brea, CA",duration:"2020 - Present",description:[v(A()),v(S()),v(C()),"Strive to reduce operating costs in our Firebase backend"]},{title:"Freelance Software Developer",location:"Brea, CA",duration:"2018 - 2020",description:[v(P()),v(E())]},{title:"Senior Software Engineer, Castifi",location:"Irvine, CA",duration:"2016 - 2017",description:[v(_()),"Built web app, Android app, iOS app with Ionic / Angular 4","Built backend with Express / LoopBack","Implemented unit testing and continuous integration via Travis CI","Deployed with AWS, Heroku",v(j())]},{title:"Head of Software Engineering, Edyza, Inc",location:"Irvine, CA",duration:"2016 - 2017",description:["Developed backend and frontend software for sensor platform",v(O()),v(x())]},{title:"Software Engineer, Productive Programming Inc.",location:"Placentia, CA",duration:"2015",description:[v(D()),"Provided system testing for other projects."]}]},{title:"Projects",items:[{title:"App, Butterfly Reader for Hacker News",location:"Brea, CA",duration:"2018 - present",description:v(F())},{title:"Android app, Home for Cardboard, for Google Cardboard",location:"Brea, CA",duration:"2014 - 2016",description:v(B())},{title:"Android app, Sole Champion Mobile Game",location:"Brea, CA",duration:"2014",description:v(I())}]},{title:"Awards",items:[{title:"1st place project at HackUCI",location:"UCI, CA",duration:"2015"},{title:"1st place overall at Citrus Hacks",location:"UCR, CA",duration:"2015"},{title:"1st place at LA Hacks 2015 Civic Hack Category",location:"UCLA, CA",duration:"2015"},{title:"1st place in Cal Poly Cyber Security Competition",location:"Cal Poly Pomona, CA",duration:"2013"},{title:"Fullerton College Honors Student",location:"Fullerton College, CA",duration:"2014 - 2015"}]}],education:[{name:"Fullerton College",location:"Fullerton, CA",duration:"2015",description:"Computer Science"}],skills:[{name:"Angular",featured:!0},{name:"Flutter",featured:!0},"React","HTML5 / CSS3",{name:"Node.JS",featured:!0},"Deno","Ionic",{name:"Docker",featured:!0},"Ansible",{name:"Firebase",featured:!0},"Flux / Redux","LoopBack","AWS","Embedded Systems","Braintree","CI","CD","Android","Unity3D","PostgreSQL","MongoDB","Git","Photoshop","AutoCAD","Fusion 360","Laser Cutting",{name:"3D Printing",featured:!0}],languages:[{name:"TypeScript",featured:!0},"JavaScript",{name:"Dart",featured:!0},"SASS",{name:"Ruby",featured:!0},"Go","Bash","Java","Python","Swift","C++","C#","SQL"]}},2957:function(e,t,n){"use strict";n.r(t);var r=n(5893),o=(n(1720),n(7294)),a=n(9212);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}t.default=function(e){var t=e.Component,n=e.pageProps;return(0,o.useEffect)((function(){var e=document.documentElement.style,t=a.a.theme.colors;null!=t.primary&&e.setProperty("--color-primary",t.primary),null!=t.primary_muted&&e.setProperty("--color-primary-muted",t.primary_muted),null!=t.text&&e.setProperty("--color-text",t.text),null!=t.text_dim&&e.setProperty("--color-text-dim",t.text_dim),null!=t.paper_background&&e.setProperty("--color-paper-background",t.paper_background),null!=t.background&&e.setProperty("--color-background",t.background),null!=t.dark_text&&e.setProperty("--color-dark-text",t.dark_text),null!=t.dark_text_dim&&e.setProperty("--color-dark-text-dim",t.dark_text_dim),null!=t.dark_paper_background&&e.setProperty("--color-dark-paper-background",t.dark_paper_background),null!=t.dark_background&&e.setProperty("--color-dark-background",t.dark_background)}),[]),(0,r.jsx)(t,function(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{},r=Object.keys(n);"function"===typeof Object.getOwnPropertySymbols&&(r=r.concat(Object.getOwnPropertySymbols(n).filter((function(e){return Object.getOwnPropertyDescriptor(n,e).enumerable})))),r.forEach((function(t){i(e,t,n[t])}))}return e}({},n))}},1720:function(){}},function(e){var t=function(t){return e(e.s=t)};e.O(0,[774,179],(function(){return t(6363),t(387)}));var n=e.O();_N_E=n}]);