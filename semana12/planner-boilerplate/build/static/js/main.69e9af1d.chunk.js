(this["webpackJsonpplanner-boilerplate"]=this["webpackJsonpplanner-boilerplate"]||[]).push([[0],{187:function(e,t,n){e.exports=n(275)},275:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),l=n(32),o=n.n(l),u=n(17),c=n(76),i=n(6),s=n(46),p=n(77),m=n.n(p),d=Object(i.createMuiTheme)({palette:{primary:m.a}}),f=n(8),b=n(34),h={allTasks:[]},v=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:h,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"SET_ALL_TASKS":var n=t.payload.allTasks;return Object(b.a)({},e,{allTasks:n});default:return e}},E=Object(f.c)({planner:v}),x=n(35),O=n(36),g=n(37),y=n(39),j=n(38),k=n(40),S=n(20),T=n.n(S),w=n(47),_=n.n(w),D="https://us-central1-missao-newton.cloudfunctions.net/generic/planner-bouman-rafaela",C=function(){return function(e){var t;return T.a.async((function(n){for(;;)switch(n.prev=n.next){case 0:return n.prev=0,n.next=3,T.a.awrap(_.a.get("".concat(D)));case 3:t=n.sent,e({type:"SET_ALL_TASKS",payload:{allTasks:t.data}}),n.next=10;break;case 7:n.prev=7,n.t0=n.catch(0),window.alert("Ocorreu um erro ao tentar acessar as suas tarefas.");case 10:case"end":return n.stop()}}),null,null,[[0,7]])}},I=n(11),L=n(12);function A(){var e=Object(I.a)(["\nbackground: black;\ncolor: white;\nwidth: 100px;\nborder: none;\nfont-size: 12px;\nborder-radius: 4px;\n"]);return A=function(){return e},e}function Q(){var e=Object(I.a)(["\nborder: none;\nbackground: none;\nborder-bottom: 1px black solid;\nwidth: 200px;\n"]);return Q=function(){return e},e}function F(){var e=Object(I.a)(["\ndisplay: flex-box;\npadding: 10px;\nbox-shadow: 0px 0px 13px 0px rgba(0,0,0,0.15);\nwidth: 50vw;\nheight: 20vh;\nmargin: 0 auto;\n"]);return F=function(){return e},e}var N=L.a.div(F()),X=L.a.input(Q()),M=L.a.button(A());function J(){var e=Object(I.a)(["\n    margin-top: 100px;\n    text-align: center\n"]);return J=function(){return e},e}function K(){var e=Object(I.a)(["\n    display: flex:\n    align-items: center;\n    width: 50vw;\n    heigth: 40vh;\n    border: 1px solid black;\n    padding: 10px;\n    margin: 0 auto;\n    text-align: justify;\n    "]);return K=function(){return e},e}var R=L.a.div(K()),U=L.a.h2(J()),V=function(e){function t(){return Object(O.a)(this,t),Object(y.a)(this,Object(j.a)(t).apply(this,arguments))}return Object(k.a)(t,e),Object(g.a)(t,[{key:"componentDidMount",value:function(){this.props.getAllTasks()}},{key:"render",value:function(){var e=this;return r.a.createElement("div",null,r.a.createElement(U,null,"Lista de Tarefas"),["Segunda","Ter\xe7a","Quarta","Quinta","Sexta","S\xe1bado","Domingo"].map((function(t){return r.a.createElement(R,null,r.a.createElement("h2",null,t),r.a.createElement("ul",null,e.props.allTasks.filter((function(e){return e.day===t})).map((function(e){return r.a.createElement("li",null,e.text)}))))})))}}]),t}(r.a.Component),z=Object(u.b)((function(e){return{allTasks:e.planner.allTasks}}),(function(e){return{getAllTasks:function(){return e(C())}}}))(V),B=[{name:"text",type:"text",label:"Inserir texto da tarefa:"}],P=function(e){function t(e){var n;return Object(O.a)(this,t),(n=Object(y.a)(this,Object(j.a)(t).call(this,e))).handleInputChange=function(e){var t=e.target,a=t.name,r=t.value;n.setState({form:Object(b.a)({},n.state.form,Object(x.a)({},a,r))})},n.handleOnSubmmit=function(e){e.preventDefault(),console.log(n.state.form);var t=n.state.form,a=t.text,r=t.day;n.props.createTask(a,r),n.setState({form:{}})},n.state={form:{}},n}return Object(k.a)(t,e),Object(g.a)(t,[{key:"render",value:function(){var e=this;return r.a.createElement("div",null,r.a.createElement(N,null,r.a.createElement("h3",null,"Insira o texto da tarefa"),r.a.createElement("form",{onSubmit:this.handleOnSubmmit},B.map((function(t){return r.a.createElement("div",{key:t.name},r.a.createElement(X,{onChange:e.handleInputChange,name:t.name,type:t.type,value:e.state.form[t.name]||"",label:t.label}))})),r.a.createElement("select",{onChange:this.handleInputChange,label:"Dia da semana",name:"day",value:this.state.form.day},r.a.createElement("option",{value:"Segunda"}," Segunda-Feira"),r.a.createElement("option",{value:"Ter\xe7a"}," Ter\xe7a-Feira"),r.a.createElement("option",{value:"Quarta"}," Quarta-Feira"),r.a.createElement("option",{value:"Quinta"}," Quinta-Feira"),r.a.createElement("option",{value:"Sexta"}," Sexta-Feira"),r.a.createElement("option",{value:"S\xe1bado"}," S\xe1bado"),r.a.createElement("option",{value:"Domingo"}," Domingo")),r.a.createElement(M,{onClick:this.handleOnSubmmit,type:"submit"},"Enviar"))),r.a.createElement(z,null))}}]),t}(r.a.Component),q=Object(u.b)(null,(function(e){return{createTask:function(t,n){return e(function(e,t){return function(n){var a;return T.a.async((function(r){for(;;)switch(r.prev=r.next){case 0:return a={text:e,day:t},r.prev=1,r.next=4,T.a.awrap(_.a.post("".concat(D),a));case 4:n(C()),r.next=10;break;case 7:r.prev=7,r.t0=r.catch(1),window.alert("Ocorreu um erro ao tentar criar uma nova tarefa.");case 10:case"end":return r.stop()}}),null,null,[[1,7]])}}(t,n))}}}))(P),G=[Object(f.a)(c.a),window.__REDUX_DEVTOOLS_EXTENSION__?window.__REDUX_DEVTOOLS_EXTENSION__():function(e){return e}],H=Object(f.e)(E,f.d.apply(void 0,G)),W=function(){return r.a.createElement(u.a,{store:H},r.a.createElement(i.MuiThemeProvider,{theme:d},r.a.createElement(s.a,null),r.a.createElement(q,null)))},Y=document.getElementById("root");o.a.render(r.a.createElement(W,null),Y)}},[[187,1,2]]]);
//# sourceMappingURL=main.69e9af1d.chunk.js.map