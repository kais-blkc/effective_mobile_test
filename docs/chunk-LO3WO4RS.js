import{d as c,f as g}from"./chunk-OUWKM4SL.js";import{Z as r,ca as a,k as o}from"./chunk-DBJTVQQE.js";var f=(()=>{let i=class i{constructor(e){this.tasksService=e,this._categoriesId=0,this._categories=c,this.categories$=new o([]),this.getCategories(),this.categories$.subscribe(t=>{this._categoriesId=t.length,this.saveCategoriesIdInLocalStorage(t.length),this.saveCategoriesInLocalStorage(t)})}getCategories(){let e=localStorage.getItem("categories");if(e){let t=JSON.parse(e);this._categories=[...t]}this.categories$.next(this._categories),this.setCategoriesIdFromLocalStorage()}getCategoryById(e){return this._categories.find(t=>t.id===e)}addCategory(e){e.id=++this._categoriesId,this._categories=[...this._categories,e],this.categories$.next(this._categories),this.saveCategoriesIdInLocalStorage(e.id)}removeCategory(e){this._categories=this._categories.filter(t=>t.id!==e),this.categories$.next(this._categories)}updateCategory(e){this._categories.forEach((t,h)=>{t.title===e.title&&(this._categories[h]=e)}),this.categories$.next(this._categories)}saveCategoriesInLocalStorage(e){localStorage.setItem("categories",JSON.stringify(e))}saveCategoriesIdInLocalStorage(e){localStorage.setItem("categoriesId",JSON.stringify(e))}setCategoriesIdFromLocalStorage(){let e=localStorage.getItem("categoriesId");e&&(this._categoriesId=JSON.parse(e))}};i.\u0275fac=function(t){return new(t||i)(a(g))},i.\u0275prov=r({token:i,factory:i.\u0275fac,providedIn:"root"});let s=i;return s})();export{f as a};