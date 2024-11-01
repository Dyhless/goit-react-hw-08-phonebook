"use strict";(self.webpackChunkphonebook=self.webpackChunkphonebook||[]).push([[577],{8577:function(n,e,o){o.r(e),o.d(e,{default:function(){return mn}});var r,t,i,c,a,s,l,d,u,p,x,m,b,f,h,g,Z,w,j=o(1413),v=o(9439),z=o(2791),k=o(9434),y=o(5705),C=o(6727),P=o(8174),S=(o(5462),o(6916)),L=function(n){return n.filter},I=function(n){return n.contacts.tempItems},q=function(n){return n.contacts.isLoading},B=function(n){return n.contacts.error},D=(0,S.P1)([function(n){return n.contacts.items},L],(function(n,e){return n.filter((function(n){return n.name.toLowerCase().includes(e.toLowerCase())}))})),F=o(4903),K=o(1538),N=o(2234),Q=o(168),T=o(9942),_=(0,T.Z)(y.l0)(r||(r=(0,Q.Z)(["\n  margin-bottom: 30px;\n  display: flex;\n  flex-direction: column;\n  row-gap: 10px;\n  align-items: center;\n  padding: 20px;\n  border: 1px orange solid;\n  border-radius: 6px;\n  min-width: 350px;\n"]))),A=T.Z.label(t||(t=(0,Q.Z)(["\n  display: flex;\n  flex-direction: column;\n  row-gap: 2px;\n  color: white;\n  max-width: 300px;\n"]))),E=(0,T.Z)(y.gN)(i||(i=(0,Q.Z)(["\n  min-width: 280px;\n  min-height: 22px;\n  padding: 5px;\n  margin-bottom: 5px;\n  margin-top: 5px;\n  border-radius: 6px;\n  font-size: 18px;\n\n  &:hover {\n    border-color: #dcc8f7;\n    \n    transition: color 250ms cubic-bezier(0.65, 0.05, 0.36, 1),\n    background-color 250ms cubic-bezier(0.65, 0.05, 0.36, 1),\n    border-color 250ms cubic-bezier(0.65, 0.05, 0.36, 1);\n"]))),G=T.Z.button(c||(c=(0,Q.Z)(["\n  padding: 10px 10px;\n  margin-top: 10px;\n  background-color: #007aff;\n  color: white;\n  font-size: 16px;\n  border: none;\n  cursor: pointer;\n  width: 50%;\n  border-radius: 6px;\n\n  transition: color 250ms cubic-bezier(0.65, 0.05, 0.36, 1),\n    background-color 250ms cubic-bezier(0.65, 0.05, 0.36, 1),\n    border-color 250ms cubic-bezier(0.65, 0.05, 0.36, 1);\n\n  &:hover {\n    color: white;\n    background-color: #ff9f09;\n    border-color: white;\n    font-weight: bold;\n"]))),J=(0,T.Z)(y.Bc)(a||(a=(0,Q.Z)(["\n  font-size: 14px;\n  color: red;\n  max-width: 300px;\n"]))),M=o(3018),R=o(184),V={name:"",number:""},$=C.Ry().shape({name:C.Z_().required("* \u0418\u043c\u044f \u043e\u0431\u044f\u0437\u0430\u0442\u0435\u043b\u044c\u043d\u043e \u0434\u043b\u044f \u0437\u0430\u043f\u043e\u043b\u043d\u0435\u043d\u0438\u044f"),number:C.Z_().required("* \u041d\u043e\u043c\u0435\u0440 \u0442\u0435\u043b\u0435\u0444\u043e\u043d\u0430 \u043e\u0431\u044f\u0437\u0430\u0442\u0435\u043b\u0435\u043d \u0434\u043b\u044f \u0437\u0430\u043f\u043e\u043b\u043d\u0435\u043d\u0438\u044f").matches(/^[\d()+-]+$/,"\u041d\u043e\u043c\u0435\u0440 \u0442\u0435\u043b\u0435\u0444\u043e\u043d\u0430 \u0434\u043e\u043b\u0436\u0435\u043d \u0441\u043e\u0434\u0435\u0440\u0436\u0430\u0442\u044c \u0442\u043e\u043b\u044c\u043a\u043e \u0446\u0438\u0444\u0440\u044b \u0438 \u0441\u043b\u0435\u0434\u0443\u044e\u0449\u0438\u0435 \u0441\u0438\u043c\u0432\u043e\u043b\u044b: ( ) - +").min(8,"\u041d\u043e\u043c\u0435\u0440 \u0442\u0435\u043b\u0435\u0444\u043e\u043d\u0430 \u0434\u043e\u043b\u0436\u0435\u043d \u0441\u043e\u0434\u0435\u0440\u0436\u0430\u0442\u044c \u043c\u0438\u043d\u0438\u043c\u0443\u043c 8 \u0441\u0438\u043c\u0432\u043e\u043b\u043e\u0432")}),H=function(){var n=(0,k.I0)(),e=(0,k.v9)(D),o=(0,k.v9)(q),r=(0,k.v9)(N.Qb),t=(0,z.useState)(!1),i=(0,v.Z)(t,2),c=i[0],a=i[1];return(0,R.jsx)(y.J9,{initialValues:V,onSubmit:function(o,t){if(a(!0),e.some((function(n){return n.name.toLowerCase()===o.name.toLowerCase()})))return a(!1),P.Am.warn("".concat(o.name," \u0443\u0436\u0435 \u043f\u0440\u0438\u0441\u0443\u0442\u0441\u0442\u0432\u0443\u0435\u0442 \u0432 \u043a\u043e\u043d\u0442\u0430\u043a\u0442\u0430\u0445."));r?n((0,F.uK)(o)).then((function(){a(!1)})):(n((0,K.Ms)((0,j.Z)((0,j.Z)({},o),{},{id:Date.now().toString()}))),a(!1)),t.resetForm()},validationSchema:$,children:(0,R.jsxs)(_,{children:[(0,R.jsxs)(A,{children:["\u0418\u043c\u044f",(0,R.jsx)(E,{type:"text",name:"name"}),(0,R.jsx)(J,{name:"name",component:"div"})]}),(0,R.jsxs)(A,{children:["\u041d\u043e\u043c\u0435\u0440 \u0442\u0435\u043b\u0435\u0444\u043e\u043d\u0430",(0,R.jsx)(E,{type:"tel",name:"number"}),(0,R.jsx)(J,{name:"number",component:"div"})]}),(0,R.jsxs)(G,{type:"submit",disabled:o&&c,children:[o&&c&&(0,R.jsx)(M.a,{}),"\u0414\u043e\u0431\u0430\u0432\u0438\u0442\u044c \u043a\u043e\u043d\u0442\u0430\u043a\u0442"]})]})})},O=o(6487),U=O.ZP.ul(s||(s=(0,Q.Z)(["\n  list-style: none;\n  padding: 0;\n"]))),W=O.ZP.li(l||(l=(0,Q.Z)(["\n  margin-bottom: 5px;\n"]))),X=O.ZP.div(d||(d=(0,Q.Z)(["\n  display: flex;\n  align-items: center;\n"]))),Y=O.ZP.p(u||(u=(0,Q.Z)(["\n  font-size: 18px;\n  font-weight: bold;\n  margin-right: 10px;\n  margin-bottom: 0px;\n"]))),nn=O.ZP.p(p||(p=(0,Q.Z)(["\n  color: #007afe;\n  font-weight: bold;\n  font-size: 18px;\n"]))),en=O.ZP.button(x||(x=(0,Q.Z)(["\n  padding: 5px 15px;\n  margin-top: 5px;\n  margin-bottom: 10px;\n  background-color: #4f4f50;\n  color: #fff;\n  border: none;\n  border-radius: 5px;\n  cursor: pointer;\n  font-size: 16px;\n\n  transition: color 250ms cubic-bezier(0.65, 0.05, 0.36, 1),\n    background-color 250ms cubic-bezier(0.65, 0.05, 0.36, 1),\n    border-color 250ms cubic-bezier(0.65, 0.05, 0.36, 1);\n\n  &:hover {\n    color: white;\n    background-color: #ff4539;\n    border-color: white;\n    font-weight: bold;\n"]))),on=O.ZP.p(m||(m=(0,Q.Z)(["\n  color: #383838;\n"]))),rn=function(){var n=(0,k.I0)(),e=(0,k.v9)(N.Qb),o=(0,k.v9)(D),r=(0,k.v9)(I),t=(0,k.v9)(q),i=(0,k.v9)(B),c=(0,z.useState)(null),a=(0,v.Z)(c,2),s=a[0],l=a[1];(0,z.useEffect)((function(){e&&n((0,F.yF)())}),[n,e]);var d=e?o:r;return d.length||i||t?i?(0,R.jsx)("p",{children:i}):(0,R.jsx)(U,{children:d.map((function(o){var r=o.id,i=o.name,c=o.number;return(0,R.jsxs)(W,{children:[(0,R.jsxs)(X,{children:[(0,R.jsx)(Y,{children:i}),(0,R.jsx)(nn,{children:c})]}),(0,R.jsx)(en,{type:"button",onClick:function(){l(r),e?n((0,F.GK)(r)).then((function(){return l(null)})):(n({type:"contacts/deleteTempContact",payload:r}),l(null))},disabled:t&&s===r,children:s===r?(0,R.jsx)(M.a,{}):"Delete"})]},r)}))}):(0,R.jsx)(on,{children:"No contacts"})},tn=O.ZP.input(b||(b=(0,Q.Z)(["\n  min-width: 280px;\n  min-height: 22px;\n  padding: 5px;\n  margin-bottom: 15px;\n  margin-top: 5px;\n  border-radius: 6px;\n  font-size: 18px;\n\n  &:hover {\n    border-color: #dcc8f7;\n    \n    transition: color 250ms cubic-bezier(0.65, 0.05, 0.36, 1),\n    background-color 250ms cubic-bezier(0.65, 0.05, 0.36, 1),\n    border-color 250ms cubic-bezier(0.65, 0.05, 0.36, 1);\n"]))),cn=o(1634),an=function(){var n=(0,k.I0)(),e=(0,k.v9)(L);return(0,R.jsx)(tn,{type:"text",value:e,onChange:function(e){return n((0,cn.T)(e.target.value.trim()))}})},sn=o(6907),ln=T.Z.div(f||(f=(0,Q.Z)(["\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  width: 600px;\n  margin: 0 auto;\n"]))),dn=T.Z.div(h||(h=(0,Q.Z)(["\n  display: flex;\n  flex-direction: column;\n  row-gap: 10px;\n  align-items: center;\n  padding: 20px;\n  border: 1px orange solid;\n  border-radius: 6px;\n  min-width: 350px;\n"]))),un=T.Z.h1(g||(g=(0,Q.Z)(["\n  margin-bottom: 20px;\n  font-size: 32px;\n  text-align: center;\n  color: white;\n"]))),pn=T.Z.p(Z||(Z=(0,Q.Z)(["\n  margin-bottom: 10px;\n  font-size: 24px;\n  font-weight: 700;\n  text-align: center;\n  color: white;\n"]))),xn=T.Z.p(w||(w=(0,Q.Z)(["\n  margin-bottom: 3px;\n  font-size: 18px;\n  text-align: center;\n  color: white;\n"])));function mn(){return(0,R.jsx)(sn.B6,{children:(0,R.jsxs)(ln,{children:[(0,R.jsx)(un,{children:"Phonebook"}),(0,R.jsx)(H,{}),(0,R.jsx)(pn,{children:"Contacts"}),(0,R.jsxs)(dn,{children:[(0,R.jsx)(xn,{children:"Search your contact name"}),(0,R.jsx)(an,{}),(0,R.jsx)(rn,{})]})]})})}}}]);
//# sourceMappingURL=577.45825efc.chunk.js.map