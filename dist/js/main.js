$(document).ready(function(){$(".single-item").slick({dots:!0,adaptiveHeight:!0}),$(".btn-next").on("click",function(){$("#slick").slick("slickNext")}),$(".btn-prev").on("click",function(){$("#slick").slick("slickPrev")});for(var t=document.getElementsByClassName("accordion"),i=0;i<t.length;i++)t[i].onclick=function(){this.classList.toggle("active"),this.nextElementSibling.classList.toggle("show")};for(var s=document.getElementsByClassName("knife_image"),i=0;i<s.length;i++)s[i].addEventListener("click",function(){this.flag?(this.style.width="100%",this.style.cursor="zoom-in",this.style.zIndex=1,this.flag=!1):(this.style.width="250%",this.style.cursor="zoom-out",this.style.zIndex="100",this.flag=!0)},!1)});
//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm1haW4uanMiXSwibmFtZXMiOlsiJCIsImRvY3VtZW50IiwicmVhZHkiLCJzbGljayIsImRvdHMiLCJhZGFwdGl2ZUhlaWdodCIsIm9uIiwiYWNjIiwiZ2V0RWxlbWVudHNCeUNsYXNzTmFtZSIsImkiLCJsZW5ndGgiLCJvbmNsaWNrIiwidGhpcyIsImNsYXNzTGlzdCIsInRvZ2dsZSIsIm5leHRFbGVtZW50U2libGluZyIsImltYWdlIiwiYWRkRXZlbnRMaXN0ZW5lciIsImZsYWciLCJzdHlsZSIsIndpZHRoIiwiY3Vyc29yIiwiekluZGV4Il0sIm1hcHBpbmdzIjoiQUFBQUEsRUFBRUMsVUFBVUMsTUFBTSxXQUNqQkYsRUFBRSxnQkFBZ0JHLE9BRWxCQyxNQUFNLEVBQ05DLGdCQUFnQixJQUloQkwsRUFBRSxhQUFhTSxHQUFHLFFBQVMsV0FDMUJOLEVBQUUsVUFBVUcsTUFBTSxlQUVuQkgsRUFBRSxhQUFhTSxHQUFHLFFBQVMsV0FDMUJOLEVBQUUsVUFBVUcsTUFBTSxjQUtuQixLQUFLLEdBRkRJLEdBQU1OLFNBQVNPLHVCQUF1QixhQUVqQ0MsRUFBSSxFQUFHQSxFQUFJRixFQUFJRyxPQUFRRCxJQUMvQkYsRUFBSUUsR0FBR0UsUUFBVSxXQUNoQkMsS0FBS0MsVUFBVUMsT0FBTyxVQUN0QkYsS0FBS0csbUJBQW1CRixVQUFVQyxPQUFPLFFBTTNDLEtBQUssR0FGREUsR0FBUWYsU0FBU08sdUJBQXVCLGVBRW5DQyxFQUFJLEVBQUdBLEVBQUlPLEVBQU1OLE9BQVFELElBQ2pDTyxFQUFNUCxHQUFHUSxpQkFBaUIsUUFBUyxXQUM3QkwsS0FBS00sTUFNVE4sS0FBS08sTUFBTUMsTUFBUSxPQUNuQlIsS0FBS08sTUFBTUUsT0FBUyxVQUNwQlQsS0FBS08sTUFBTUcsT0FBUyxFQUNwQlYsS0FBS00sTUFBTyxJQVJaTixLQUFLTyxNQUFNQyxNQUFRLE9BQ25CUixLQUFLTyxNQUFNRSxPQUFTLFdBQ3BCVCxLQUFLTyxNQUFNRyxPQUFTLE1BQ3BCVixLQUFLTSxNQUFPLEtBT1giLCJmaWxlIjoibWFpbi5qcyIsInNvdXJjZXNDb250ZW50IjpbIiQoZG9jdW1lbnQpLnJlYWR5KGZ1bmN0aW9uKCkge1xuXHQkKCcuc2luZ2xlLWl0ZW0nKS5zbGljayh7XG5cdC8vXHRzZXR0aW5nLW1hbWU6IHNldHRpbmctdmFsdWVcblx0ZG90czogdHJ1ZSxcblx0YWRhcHRpdmVIZWlnaHQ6IHRydWVcblxuXHR9KTtcblxuXHQkKCcuYnRuLW5leHQnKS5vbignY2xpY2snLCBmdW5jdGlvbigpIHtcblx0XHQkKCcjc2xpY2snKS5zbGljaygnc2xpY2tOZXh0Jyk7XG5cdH0pO1xuXHQkKCcuYnRuLXByZXYnKS5vbignY2xpY2snLCBmdW5jdGlvbigpIHtcblx0XHQkKCcjc2xpY2snKS5zbGljaygnc2xpY2tQcmV2Jyk7XG5cdH0pO1xuXG5cdHZhciBhY2MgPSBkb2N1bWVudC5nZXRFbGVtZW50c0J5Q2xhc3NOYW1lKCdhY2NvcmRpb24nKTtcblxuXHRmb3IgKHZhciBpID0gMDsgaSA8IGFjYy5sZW5ndGg7IGkrKykge1xuXHRcdGFjY1tpXS5vbmNsaWNrID0gZnVuY3Rpb24oKSB7XG5cdFx0XHR0aGlzLmNsYXNzTGlzdC50b2dnbGUoXCJhY3RpdmVcIik7XG5cdFx0XHR0aGlzLm5leHRFbGVtZW50U2libGluZy5jbGFzc0xpc3QudG9nZ2xlKCdzaG93Jyk7XG5cdFx0fVxuXHR9XG5cblx0dmFyIGltYWdlID0gZG9jdW1lbnQuZ2V0RWxlbWVudHNCeUNsYXNzTmFtZShcImtuaWZlX2ltYWdlXCIpO1xuXG5cdGZvciAodmFyIGkgPSAwOyBpIDwgaW1hZ2UubGVuZ3RoOyBpKyspIHtcblx0XHRpbWFnZVtpXS5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgZnVuY3Rpb24oKSB7XG5cdFx0XHRpZiAoIXRoaXMuZmxhZykge1xuXHRcdFx0XHR0aGlzLnN0eWxlLndpZHRoID0gMjUwICsgXCIlXCI7XG5cdFx0XHRcdHRoaXMuc3R5bGUuY3Vyc29yID0gXCJ6b29tLW91dFwiO1xuXHRcdFx0XHR0aGlzLnN0eWxlLnpJbmRleCA9IFwiMTAwXCI7XG5cdFx0XHRcdHRoaXMuZmxhZyA9IHRydWU7XG5cdFx0XHR9IGVsc2Uge1xuXHRcdFx0XHR0aGlzLnN0eWxlLndpZHRoID0gMTAwICsgXCIlXCI7XG5cdFx0XHRcdHRoaXMuc3R5bGUuY3Vyc29yID0gXCJ6b29tLWluXCI7XG5cdFx0XHRcdHRoaXMuc3R5bGUuekluZGV4ID0gMTtcblx0XHRcdFx0dGhpcy5mbGFnID0gZmFsc2U7XG5cdFx0XHR9XG5cdFx0fSwgZmFsc2UpO1xuXHR9XG59KTsiXX0=
