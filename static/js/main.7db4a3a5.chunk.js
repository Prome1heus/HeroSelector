(this["webpackJsonphero-selector"]=this["webpackJsonphero-selector"]||[]).push([[0],{13:function(e,t,a){},14:function(e,t,a){},15:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),o=a(7),c=a.n(o),s=(a(13),a(1)),l=a(2),i=a(4),u=a(3),h=function(e){Object(i.a)(a,e);var t=Object(u.a)(a);function a(e){var n;return Object(s.a)(this,a),(n=t.call(this)).canvas=r.a.createRef(),n}return Object(l.a)(a,[{key:"fillRect",value:function(e){var t=this.canvas.current.getContext("2d");t.clearRect(0,0,100,5),t.fillStyle="#e69900",t.fillRect(0,0,this.props.value,5)}},{key:"componentDidUpdate",value:function(e){this.fillRect(this.props.value)}},{key:"componentDidMount",value:function(e){this.fillRect(this.props.value)}},{key:"render",value:function(e){return r.a.createElement("div",{style:{display:"flex",justifyContent:"space-between",alignContent:"center",margin:"1px"}},r.a.createElement("p",{style:{fontSize:12}}," ",this.props.name.toUpperCase()," "),r.a.createElement("canvas",{ref:this.canvas,width:100,height:5,style:{border:"1px solid black",height:"5px",alignSelf:"center"}}))}}]),a}(r.a.Component),p=(a(6),function(e){var t=e.name,a=e.powerstats,n=(e.id,e.slug);return r.a.createElement("div",{className:"tc grow bg-lightest-blue br3 pa3 ma2 dib bw2 shadow-5",style:{width:"300px",height:"435px",alignSelf:"center"}},r.a.createElement("img",{alt:t,src:"https://cdn.rawgit.com/akabab/superhero-api/0.2.0/api/images/sm/"+n+".jpg",style:{width:"80px",height:"120px"}}),r.a.createElement("div",{style:{display:"flex",flexDirection:"column"}},r.a.createElement("h3",null," ",t," "),Object.keys(a).map((function(e,t){return r.a.createElement(h,{value:a[e],name:e})}))))}),m=function(e){Object(i.a)(a,e);var t=Object(u.a)(a);function a(){return Object(s.a)(this,a),t.apply(this,arguments)}return Object(l.a)(a,[{key:"render",value:function(e){var t=this;return r.a.createElement("div",{style:{display:"flex",flexWrap:"wrap",alignItems:"center",justifyContent:"space-around"}},this.props.robots.map((function(e,a){return r.a.createElement(p,{key:a,id:t.props.robots[a].id,powerstats:t.props.robots[a].powerstats,name:t.props.robots[a].name,slug:t.props.robots[a].slug})})))}}]),a}(n.Component),f=function(e){e.searchfield;var t=e.searchChange;return r.a.createElement("div",{className:"pa2"},r.a.createElement("input",{className:"pa3 ba b--green bg-lightest-blue",type:"search",placeholder:"search for your hero",onChange:t}))},d=function(e){return r.a.createElement("div",{style:{overflow:"scroll",border:"5px solid black",height:"800px"}},e.children)},v=(a(14),function(e){Object(i.a)(a,e);var t=Object(u.a)(a);function a(){var e;return Object(s.a)(this,a),(e=t.call(this)).onSearchChange=function(t){e.setState({searchfield:t.target.value})},e.state={heros:[],searchfield:""},e}return Object(l.a)(a,[{key:"componentDidMount",value:function(){var e=this;fetch("https://cdn.rawgit.com/akabab/superhero-api/0.2.0/api/all.json").then((function(e){return e.json()})).then((function(t){e.setState({heros:t})}))}},{key:"render",value:function(){var e=this.state,t=e.heros,a=e.searchfield,n=t.filter((function(e){return e.name.toLowerCase().includes(a.toLowerCase())}));return t.length?r.a.createElement("div",{className:"tc"},r.a.createElement("h1",{className:"f2"},"HEROSELECTOR"),r.a.createElement(f,{searchChange:this.onSearchChange}),r.a.createElement(d,null,r.a.createElement(m,{robots:n}))):r.a.createElement("h1",null,"Loading")}}]),a}(n.Component));Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));c.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(v,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))},8:function(e,t,a){e.exports=a(15)}},[[8,1,2]]]);
//# sourceMappingURL=main.7db4a3a5.chunk.js.map