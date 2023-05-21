(()=>{"use strict";var e,t={674:()=>{const e=window.wp.element,t=window.wp.blocks,a=window.wp.blockEditor,c=window.wp.components,n=t=>{let{message:c,image:n,onMessageChange:l,onImageSelect:i}=t;return(0,e.createElement)("div",{className:"message-block-wrap"},(0,e.createElement)("div",{className:"column"},(0,e.createElement)(a.PlainText,{tagName:"div",multiline:"p",placeholder:"Enter text...",value:c,onChange:l})),(0,e.createElement)("div",{className:"column"},(0,e.createElement)(a.MediaUpload,{onSelect:i,type:"image",value:n?n.id:"",render:t=>{let{open:a}=t;return(0,e.createElement)("button",{onClick:a},n?(0,e.createElement)("img",{src:n.url,alt:n.alt,style:{maxWidth:"100%"}}):"Add image")}})))},l=t=>{const{attributes:a,setAttributes:l}=t,{isOpen:i,title:g,message:o,image:s}=a;return(0,e.createElement)("div",{className:"accordion "+(i?"open":"")},(0,e.createElement)("h3",{className:"accordion-title"},(0,e.createElement)(c.TextControl,{placeholder:"Title",value:g,onChange:e=>{const t={...a,title:e};l(t)}})),i&&(0,e.createElement)("div",{className:"accordion-content-edit"},(0,e.createElement)(n,{message:o,image:s,onMessageChange:e=>{const t={...a,message:e};l(t)},onImageSelect:e=>{const t={...a,image:e};l(t)}})),(0,e.createElement)("button",{className:"accordion-show-btn",onClick:()=>{const e={...a,isOpen:!i};l(e)}},i?"-":"+"))};window.React,(0,t.registerBlockType)("test/accordion",{title:"Accordion",icon:"editor-ul",category:"common",attributes:{accordions:{type:"array",default:[{isOpen:!1,title:"",message:""}]},block_title:{type:"string",default:""}},edit:t=>{const{attributes:n,setAttributes:i}=t,{accordions:g,block_title:o}=n;return(0,e.createElement)("div",{className:"accordion_editor"},(0,e.createElement)(a.InspectorControls,null,(0,e.createElement)(c.PanelBody,{title:"Settings"},(0,e.createElement)(c.Button,{onClick:()=>{i({accordions:[...g,{isOpen:!0,title:"",message:""}]})}},"Add accordion"))),(0,e.createElement)("h3",{className:"accordion-block-title"},(0,e.createElement)(c.TextControl,{placeholder:"Enter block title",value:o,onChange:e=>{const t={...n,block_title:e};i(t)}})),g.map(((t,a)=>(0,e.createElement)(l,{key:a,attributes:t,setAttributes:e=>((e,t)=>{const a=[...g];a[e]=t,i({accordions:a})})(a,e)}))))},save:t=>{let{attributes:a,setAttributes:c}=t;const{accordions:n,block_title:l}=a;return(0,e.createElement)("div",{className:"accordion-wrap"},l?(0,e.createElement)("h2",{className:"accordion-block-title"},l):null,n.map(((t,a)=>(0,e.createElement)("div",{className:"accordion",key:a},(0,e.createElement)("div",{className:"accordion-head"},(0,e.createElement)("h3",{className:"accordion-title"},t.title),(0,e.createElement)("div",{className:"accordion-toggle-btn accordion-toggler"},(0,e.createElement)("object",{data:"data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iVVRGLTgiPz4KPHN2ZyB3aWR0aD0iMTBweCIgaGVpZ2h0PSIxMHB4IiB2aWV3Qm94PSIwIDAgMTAgMTAiIHZlcnNpb249IjEuMSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayI+CiAgICA8dGl0bGU+aWNvbi1wbHVzPC90aXRsZT4KICAgIDxnIGlkPSJQYWdlLTEiIHN0cm9rZT0ibm9uZSIgc3Ryb2tlLXdpZHRoPSIxIiBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPgogICAgICAgIDxnIGlkPSJUZXN0LWFzc2lnbm1lbnQiIHRyYW5zZm9ybT0idHJhbnNsYXRlKC0xMDkxLjAwMDAwMCwgLTc3OS4wMDAwMDApIiBmaWxsPSIjNDU4RUY3Ij4KICAgICAgICAgICAgPGcgaWQ9ImFjY29yZGlvbiIgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoMjQ4LjAwMDAwMCwgMTMzLjAwMDAwMCkiPgogICAgICAgICAgICAgICAgPGcgaWQ9IjIiIHRyYW5zZm9ybT0idHJhbnNsYXRlKDY0LjAwMDAwMCwgNjE5LjAwMDAwMCkiPgogICAgICAgICAgICAgICAgICAgIDxnIGlkPSJpY29uIiB0cmFuc2Zvcm09InRyYW5zbGF0ZSg3NjguMDAwMDAwLCAxNi4wMDAwMDApIj4KICAgICAgICAgICAgICAgICAgICAgICAgPGcgaWQ9ImV4cGFuZCIgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoMTEuMDAwMDAwLCAxMS4wMDAwMDApIj4KICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxwYXRoIGQ9Ik05LDYgTDYsNiBMNiw2IEw2LDkgQzYsOS41NTIyODQ3NSA1LjU1MjI4NDc1LDEwIDUsMTAgQzQuNDQ3NzE1MjUsMTAgNCw5LjU1MjI4NDc1IDQsOSBMNCw2IEw0LDYgTDEsNiBDMC40NDc3MTUyNSw2IDYuNzYzNTM3NTFlLTE3LDUuNTUyMjg0NzUgMCw1IEMtNi43NjM1Mzc1MWUtMTcsNC40NDc3MTUyNSAwLjQ0NzcxNTI1LDQgMSw0IEw0LDQgTDQsNCBMNCwxIEM0LDAuNDQ3NzE1MjUgNC40NDc3MTUyNSwxLjAxNDUzMDYzZS0xNiA1LDAgQzUuNTUyMjg0NzUsLTEuMDE0NTMwNjNlLTE2IDYsMC40NDc3MTUyNSA2LDEgTDYsNCBMNiw0IEw5LDQgQzkuNTUyMjg0NzUsNCAxMCw0LjQ0NzcxNTI1IDEwLDUgQzEwLDUuNTUyMjg0NzUgOS41NTIyODQ3NSw2IDksNiBaIiBpZD0ic29saWQiPjwvcGF0aD4KICAgICAgICAgICAgICAgICAgICAgICAgPC9nPgogICAgICAgICAgICAgICAgICAgIDwvZz4KICAgICAgICAgICAgICAgIDwvZz4KICAgICAgICAgICAgPC9nPgogICAgICAgIDwvZz4KICAgIDwvZz4KPC9zdmc+",type:"image/svg+xml"}))),(0,e.createElement)("div",{className:"accordion-content"},(0,e.createElement)("div",{className:"accordion-message"},t.message),t.image?(0,e.createElement)("div",{className:"accordion-image"},(0,e.createElement)("img",{className:"lazy","data-src":t.image.url,alt:t.image.alt})):null)))))}})}},a={};function c(e){var n=a[e];if(void 0!==n)return n.exports;var l=a[e]={exports:{}};return t[e](l,l.exports,c),l.exports}c.m=t,e=[],c.O=(t,a,n,l)=>{if(!a){var i=1/0;for(r=0;r<e.length;r++){for(var[a,n,l]=e[r],g=!0,o=0;o<a.length;o++)(!1&l||i>=l)&&Object.keys(c.O).every((e=>c.O[e](a[o])))?a.splice(o--,1):(g=!1,l<i&&(i=l));if(g){e.splice(r--,1);var s=n();void 0!==s&&(t=s)}}return t}l=l||0;for(var r=e.length;r>0&&e[r-1][2]>l;r--)e[r]=e[r-1];e[r]=[a,n,l]},c.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),(()=>{var e={826:0,431:0};c.O.j=t=>0===e[t];var t=(t,a)=>{var n,l,[i,g,o]=a,s=0;if(i.some((t=>0!==e[t]))){for(n in g)c.o(g,n)&&(c.m[n]=g[n]);if(o)var r=o(c)}for(t&&t(a);s<i.length;s++)l=i[s],c.o(e,l)&&e[l]&&e[l][0](),e[l]=0;return c.O(r)},a=globalThis.webpackChunkguten_accordion=globalThis.webpackChunkguten_accordion||[];a.forEach(t.bind(null,0)),a.push=t.bind(null,a.push.bind(a))})();var n=c.O(void 0,[431],(()=>c(674)));n=c.O(n)})();