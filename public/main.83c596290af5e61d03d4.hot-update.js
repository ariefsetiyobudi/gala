/*! For license information please see main.83c596290af5e61d03d4.hot-update.js.LICENSE.txt */
"use strict";self.webpackHotUpdategala_digdaya("main",{"./app/classes/Button.js":(e,t,s)=>{s.r(t),s.d(t,{default:()=>h});var n=s("./node_modules/gsap/index.js"),i=s("./app/classes/Component.js"),a=s("./app/utils/text.js");class h extends i.default{constructor({element:e}){super({element:e}),this.createText(),this.createPath()}createText(){const e=this.element.textContent;this.elements.wrapper=this.element.querySelector("span"),this.elements.text=document.createElement("div"),this.elements.text.innerHTML=e,this.elements.textSpans=(0,a.split)({append:!1,element:this.elements.text,expression:""}),this.elements.hover=document.createElement("div"),this.elements.hover.innerHTML=e,this.elements.hoverSpans=(0,a.split)({append:!1,element:this.elements.hover,expression:""}),this.elements.wrapper.innerHTML="",this.elements.wrapper.appendChild(this.elements.text),this.elements.wrapper.appendChild(this.elements.hover),n.default.set(this.elements.hover,{left:0,position:"absolute",top:0}),this.timeline=n.default.timeline({paused:!0}),this.timeline.to(this.elements.textSpans,{duration:.5,ease:"back.inOut",transform:"rotate3d(1, 0.1, 0, -90deg)",stagger:.01},0),this.timeline.fromTo(this.elements.hoverSpans,{transform:"rotate3d(1, 0.1, 0, 90deg)"},{duration:.5,ease:"back.inOut",transform:"rotate3d(0, 0, 0, 90deg)",stagger:.01},.05)}createPath(){this.path=this.element.querySelector("path:last-child"),this.pathLength=this.path.getTotalLength(),this.pathValue=this.pathLength,n.default.set(this.path,{strokeDashoffset:this.pathLength,strokeDasharray:`${this.pathLength} ${this.pathLength}`})}onMouseEnter(){this.pathValue-=this.pathLength,n.default.to(this.path,{duration:1,ease:"expo.out",strokeDashoffset:this.pathValue}),this.timeline.play()}onMouseLeave(){this.pathValue-=this.pathLength,n.default.to(this.path,{duration:1,ease:"expo.out",strokeDashoffset:this.pathValue}),this.timeline.reverse()}onClick(){const e=this.element.classList.contains("scrolldown__button"),t=this.element.classList.contains("scrolltop__button"),s=document.querySelector(".home__content--right"),i=document.querySelector(".home__wrapper");e&&(n.default.to(i,{y:-s.offsetTop,duration:1.5,ease:"none"}),this.timeline.play()),t&&(n.default.to(i,{y:0,duration:1.5,ease:"none"}),this.timeline.play())}addEventListeners(){this.onClickEvent=this.onClick.bind(this),this.onMouseEnterEvent=this.onMouseEnter.bind(this),this.onMouseLeaveEvent=this.onMouseLeave.bind(this),this.element.addEventListener("click",this.onClickEvent),this.element.addEventListener("mouseenter",this.onMouseEnterEvent),this.element.addEventListener("mouseleave",this.onMouseLeaveEvent)}removeEventListeners(){this.element.removeEventListener("click",this.onClickEvent),this.element.removeEventListener("mouseenter",this.onMouseEnterEvent),this.element.removeEventListener("mouseleave",this.onMouseLeaveEvent)}}}},(function(e){e.h=()=>"40ff2f38eac02f4d951a"}));
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QyxFQUFHLEVBQ0hyQixTQUFVLElBQ1ZDLEtBQU0sU0FFUjNCLEtBQUt1QixTQUFTZSxPQUVsQixDQUVBVyxvQkFDRWpELEtBQUtrRCxhQUFlbEQsS0FBS3lDLFFBQVFVLEtBQUtuRCxNQUN0Q0EsS0FBS29ELGtCQUFvQnBELEtBQUtxQyxhQUFhYyxLQUFLbkQsTUFDaERBLEtBQUtxRCxrQkFBb0JyRCxLQUFLdUMsYUFBYVksS0FBS25ELE1BRWhEQSxLQUFLRixRQUFRd0QsaUJBQWlCLFFBQVN0RCxLQUFLa0QsY0FDNUNsRCxLQUFLRixRQUFRd0QsaUJBQWlCLGFBQWN0RCxLQUFLb0QsbUJBQ2pEcEQsS0FBS0YsUUFBUXdELGlCQUFpQixhQUFjdEQsS0FBS3FELGtCQUNuRCxDQUVBRSx1QkFDRXZELEtBQUtGLFFBQVEwRCxvQkFBb0IsUUFBU3hELEtBQUtrRCxjQUMvQ2xELEtBQUtGLFFBQVEwRCxvQkFBb0IsYUFBY3hELEtBQUtvRCxtQkFDcERwRCxLQUFLRixRQUFRMEQsb0JBQW9CLGFBQWN4RCxLQUFLcUQsa0JBQ3RELGtCQzNIRkksRUFBb0JDLEVBQUksSUFBTSIsInNvdXJjZXMiOlsid2VicGFjazovL2dhbGFfZGlnZGF5YS8uL2FwcC9jbGFzc2VzL0J1dHRvbi5qcyIsIndlYnBhY2s6Ly9nYWxhX2RpZ2RheWEvd2VicGFjay9ydW50aW1lL2dldEZ1bGxIYXNoIl0sInNvdXJjZXNDb250ZW50IjpbIi8qIGVzbGludC1kaXNhYmxlIGNhbWVsY2FzZSAqL1xuaW1wb3J0IEdTQVAgZnJvbSAnZ3NhcCdcbmltcG9ydCBDb21wb25lbnQgZnJvbSAnY2xhc3Nlcy9Db21wb25lbnQnXG5pbXBvcnQgeyBzcGxpdCB9IGZyb20gJ3V0aWxzL3RleHQnXG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEJ1dHRvbiBleHRlbmRzIENvbXBvbmVudCB7XG4gIGNvbnN0cnVjdG9yICh7IGVsZW1lbnQgfSkge1xuICAgIHN1cGVyKHsgZWxlbWVudCB9KVxuICAgIHRoaXMuY3JlYXRlVGV4dCgpXG4gICAgdGhpcy5jcmVhdGVQYXRoKClcbiAgfVxuXG4gIGNyZWF0ZVRleHQgKCkge1xuICAgIGNvbnN0IHQgPSB0aGlzLmVsZW1lbnQudGV4dENvbnRlbnRcbiAgICB0aGlzLmVsZW1lbnRzLndyYXBwZXIgPSB0aGlzLmVsZW1lbnQucXVlcnlTZWxlY3Rvcignc3BhbicpXG4gICAgdGhpcy5lbGVtZW50cy50ZXh0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2JylcbiAgICB0aGlzLmVsZW1lbnRzLnRleHQuaW5uZXJIVE1MID0gdFxuICAgIHRoaXMuZWxlbWVudHMudGV4dFNwYW5zID0gc3BsaXQoe1xuICAgICAgYXBwZW5kOiBmYWxzZSxcbiAgICAgIGVsZW1lbnQ6IHRoaXMuZWxlbWVudHMudGV4dCxcbiAgICAgIGV4cHJlc3Npb246ICcnXG4gICAgfSlcbiAgICB0aGlzLmVsZW1lbnRzLmhvdmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2JylcbiAgICB0aGlzLmVsZW1lbnRzLmhvdmVyLmlubmVySFRNTCA9IHRcbiAgICB0aGlzLmVsZW1lbnRzLmhvdmVyU3BhbnMgPSBzcGxpdCh7XG4gICAgICBhcHBlbmQ6IGZhbHNlLFxuICAgICAgZWxlbWVudDogdGhpcy5lbGVtZW50cy5ob3ZlcixcbiAgICAgIGV4cHJlc3Npb246ICcnXG4gICAgfSlcbiAgICB0aGlzLmVsZW1lbnRzLndyYXBwZXIuaW5uZXJIVE1MID0gJydcbiAgICB0aGlzLmVsZW1lbnRzLndyYXBwZXIuYXBwZW5kQ2hpbGQodGhpcy5lbGVtZW50cy50ZXh0KVxuICAgIHRoaXMuZWxlbWVudHMud3JhcHBlci5hcHBlbmRDaGlsZCh0aGlzLmVsZW1lbnRzLmhvdmVyKVxuICAgIEdTQVAuc2V0KHRoaXMuZWxlbWVudHMuaG92ZXIsIHtcbiAgICAgIGxlZnQ6IDAsXG4gICAgICBwb3NpdGlvbjogJ2Fic29sdXRlJyxcbiAgICAgIHRvcDogMFxuICAgIH0pXG4gICAgdGhpcy50aW1lbGluZSA9IEdTQVAudGltZWxpbmUoe1xuICAgICAgcGF1c2VkOiB0cnVlXG4gICAgfSlcbiAgICB0aGlzLnRpbWVsaW5lLnRvKHRoaXMuZWxlbWVudHMudGV4dFNwYW5zLCB7XG4gICAgICBkdXJhdGlvbjogMC41LFxuICAgICAgZWFzZTogJ2JhY2suaW5PdXQnLFxuICAgICAgdHJhbnNmb3JtOiAncm90YXRlM2QoMSwgMC4xLCAwLCAtOTBkZWcpJyxcbiAgICAgIHN0YWdnZXI6IDAuMDFcbiAgICB9LCAwKVxuICAgIHRoaXMudGltZWxpbmUuZnJvbVRvKHRoaXMuZWxlbWVudHMuaG92ZXJTcGFucywge1xuICAgICAgdHJhbnNmb3JtOiAncm90YXRlM2QoMSwgMC4xLCAwLCA5MGRlZyknXG4gICAgfSwge1xuICAgICAgZHVyYXRpb246IDAuNSxcbiAgICAgIGVhc2U6ICdiYWNrLmluT3V0JyxcbiAgICAgIHRyYW5zZm9ybTogJ3JvdGF0ZTNkKDAsIDAsIDAsIDkwZGVnKScsXG4gICAgICBzdGFnZ2VyOiAwLjAxXG4gICAgfSwgMC4wNSlcbiAgfVxuXG4gIGNyZWF0ZVBhdGggKCkge1xuICAgIHRoaXMucGF0aCA9IHRoaXMuZWxlbWVudC5xdWVyeVNlbGVjdG9yKCdwYXRoOmxhc3QtY2hpbGQnKVxuICAgIHRoaXMucGF0aExlbmd0aCA9IHRoaXMucGF0aC5nZXRUb3RhbExlbmd0aCgpXG4gICAgdGhpcy5wYXRoVmFsdWUgPSB0aGlzLnBhdGhMZW5ndGhcbiAgICBHU0FQLnNldCh0aGlzLnBhdGgsIHtcbiAgICAgIHN0cm9rZURhc2hvZmZzZXQ6IHRoaXMucGF0aExlbmd0aCxcbiAgICAgIHN0cm9rZURhc2hhcnJheTogYCR7dGhpcy5wYXRoTGVuZ3RofSAke3RoaXMucGF0aExlbmd0aH1gXG4gICAgfSlcbiAgfVxuXG4gIG9uTW91c2VFbnRlciAoKSB7XG4gICAgdGhpcy5wYXRoVmFsdWUgLT0gdGhpcy5wYXRoTGVuZ3RoXG4gICAgR1NBUC50byh0aGlzLnBhdGgsIHtcbiAgICAgIGR1cmF0aW9uOiAxLFxuICAgICAgZWFzZTogJ2V4cG8ub3V0JyxcbiAgICAgIHN0cm9rZURhc2hvZmZzZXQ6IHRoaXMucGF0aFZhbHVlXG4gICAgfSlcbiAgICB0aGlzLnRpbWVsaW5lLnBsYXkoKVxuICB9XG5cbiAgb25Nb3VzZUxlYXZlICgpIHtcbiAgICB0aGlzLnBhdGhWYWx1ZSAtPSB0aGlzLnBhdGhMZW5ndGhcbiAgICBHU0FQLnRvKHRoaXMucGF0aCwge1xuICAgICAgZHVyYXRpb246IDEsXG4gICAgICBlYXNlOiAnZXhwby5vdXQnLFxuICAgICAgc3Ryb2tlRGFzaG9mZnNldDogdGhpcy5wYXRoVmFsdWVcbiAgICB9KVxuICAgIHRoaXMudGltZWxpbmUucmV2ZXJzZSgpXG4gIH1cblxuICBvbkNsaWNrICgpIHtcbiAgICBjb25zdCBzY3JvbGxkb3duID0gdGhpcy5lbGVtZW50LmNsYXNzTGlzdC5jb250YWlucygnc2Nyb2xsZG93bl9fYnV0dG9uJylcbiAgICBjb25zdCBzY3JvbGx0b3AgPSB0aGlzLmVsZW1lbnQuY2xhc3NMaXN0LmNvbnRhaW5zKCdzY3JvbGx0b3BfX2J1dHRvbicpXG4gICAgY29uc3Qgc2Nyb2xsZG93bl90YXJnZXQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuaG9tZV9fY29udGVudC0tcmlnaHQnKVxuICAgIGNvbnN0IHdyYXBwZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuaG9tZV9fd3JhcHBlcicpXG4gICAgaWYgKHNjcm9sbGRvd24pIHtcbiAgICAgIEdTQVAudG8od3JhcHBlciwge1xuICAgICAgICB5OiAtc2Nyb2xsZG93bl90YXJnZXQub2Zmc2V0VG9wLFxuICAgICAgICBkdXJhdGlvbjogMS41LFxuICAgICAgICBlYXNlOiAnbm9uZSdcbiAgICAgIH0pXG4gICAgICB0aGlzLnRpbWVsaW5lLnBsYXkoKVxuICAgIH1cbiAgICBpZiAoc2Nyb2xsdG9wKSB7XG4gICAgICBHU0FQLnRvKHdyYXBwZXIsIHtcbiAgICAgICAgeTogMCxcbiAgICAgICAgZHVyYXRpb246IDEuNSxcbiAgICAgICAgZWFzZTogJ25vbmUnXG4gICAgICB9KVxuICAgICAgdGhpcy50aW1lbGluZS5wbGF5KClcbiAgICB9XG4gIH1cblxuICBhZGRFdmVudExpc3RlbmVycyAoKSB7XG4gICAgdGhpcy5vbkNsaWNrRXZlbnQgPSB0aGlzLm9uQ2xpY2suYmluZCh0aGlzKVxuICAgIHRoaXMub25Nb3VzZUVudGVyRXZlbnQgPSB0aGlzLm9uTW91c2VFbnRlci5iaW5kKHRoaXMpXG4gICAgdGhpcy5vbk1vdXNlTGVhdmVFdmVudCA9IHRoaXMub25Nb3VzZUxlYXZlLmJpbmQodGhpcylcblxuICAgIHRoaXMuZWxlbWVudC5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIHRoaXMub25DbGlja0V2ZW50KVxuICAgIHRoaXMuZWxlbWVudC5hZGRFdmVudExpc3RlbmVyKCdtb3VzZWVudGVyJywgdGhpcy5vbk1vdXNlRW50ZXJFdmVudClcbiAgICB0aGlzLmVsZW1lbnQuYWRkRXZlbnRMaXN0ZW5lcignbW91c2VsZWF2ZScsIHRoaXMub25Nb3VzZUxlYXZlRXZlbnQpXG4gIH1cblxuICByZW1vdmVFdmVudExpc3RlbmVycyAoKSB7XG4gICAgdGhpcy5lbGVtZW50LnJlbW92ZUV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgdGhpcy5vbkNsaWNrRXZlbnQpXG4gICAgdGhpcy5lbGVtZW50LnJlbW92ZUV2ZW50TGlzdGVuZXIoJ21vdXNlZW50ZXInLCB0aGlzLm9uTW91c2VFbnRlckV2ZW50KVxuICAgIHRoaXMuZWxlbWVudC5yZW1vdmVFdmVudExpc3RlbmVyKCdtb3VzZWxlYXZlJywgdGhpcy5vbk1vdXNlTGVhdmVFdmVudClcbiAgfVxufVxuIiwiX193ZWJwYWNrX3JlcXVpcmVfXy5oID0gKCkgPT4gKFwiNDBmZjJmMzhlYWMwMmY0ZDk1MWFcIikiXSwibmFtZXMiOlsiQnV0dG9uIiwiQ29tcG9uZW50IiwiY29uc3RydWN0b3IiLCJlbGVtZW50Iiwic3VwZXIiLCJ0aGlzIiwiY3JlYXRlVGV4dCIsImNyZWF0ZVBhdGgiLCJ0IiwidGV4dENvbnRlbnQiLCJlbGVtZW50cyIsIndyYXBwZXIiLCJxdWVyeVNlbGVjdG9yIiwidGV4dCIsImRvY3VtZW50IiwiY3JlYXRlRWxlbWVudCIsImlubmVySFRNTCIsInRleHRTcGFucyIsInNwbGl0IiwiYXBwZW5kIiwiZXhwcmVzc2lvbiIsImhvdmVyIiwiaG92ZXJTcGFucyIsImFwcGVuZENoaWxkIiwiR1NBUCIsImxlZnQiLCJwb3NpdGlvbiIsInRvcCIsInRpbWVsaW5lIiwicGF1c2VkIiwidG8iLCJkdXJhdGlvbiIsImVhc2UiLCJ0cmFuc2Zvcm0iLCJzdGFnZ2VyIiwiZnJvbVRvIiwicGF0aCIsInBhdGhMZW5ndGgiLCJnZXRUb3RhbExlbmd0aCIsInBhdGhWYWx1ZSIsInN0cm9rZURhc2hvZmZzZXQiLCJzdHJva2VEYXNoYXJyYXkiLCJvbk1vdXNlRW50ZXIiLCJwbGF5Iiwib25Nb3VzZUxlYXZlIiwicmV2ZXJzZSIsIm9uQ2xpY2siLCJzY3JvbGxkb3duIiwiY2xhc3NMaXN0IiwiY29udGFpbnMiLCJzY3JvbGx0b3AiLCJzY3JvbGxkb3duX3RhcmdldCIsInkiLCJvZmZzZXRUb3AiLCJhZGRFdmVudExpc3RlbmVycyIsIm9uQ2xpY2tFdmVudCIsImJpbmQiLCJvbk1vdXNlRW50ZXJFdmVudCIsIm9uTW91c2VMZWF2ZUV2ZW50IiwiYWRkRXZlbnRMaXN0ZW5lciIsInJlbW92ZUV2ZW50TGlzdGVuZXJzIiwicmVtb3ZlRXZlbnRMaXN0ZW5lciIsIl9fd2VicGFja19yZXF1aXJlX18iLCJoIl0sInNvdXJjZVJvb3QiOiIifQ==