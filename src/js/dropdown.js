"use strict";

var model = {
  init: function(){
    this.cacheDom();
    this.events();
  },
  cacheDom: function(){
    this.links = document.getElementsByClassName('nav-link');
    this.dropDowns = document.getElementsByClassName('nav-item-dropdown');
  },
  events: function(){
    for (let i = 0; i < this.links.length; i++){
      this.links[i].addEventListener('click', model.toggleDropDown) // don't bind this to model. want to link 'this' to links[i]
    }
    window.addEventListener('click', this.clickOutNav.bind(this));
  },
  toggleDropDown: function(e){
    let dropDown = this.parentNode.getElementsByClassName('nav-item-dropdown')[0];
    model.shutDown(dropDown);
    dropDown.classList.toggle('show-dropdown');
  },
  clickOutNav: function(e){
    let dropDowns = document.getElementsByClassName('nav-item-dropdown');
    if(!e.target.matches('.nav-link')) {
      // this function is called by an event handler so cannot use 'this'
      model.shutDown();
    }
  },
  shutDown: function(element){
    // Get the index of the element in the list
    let indexNumber = Array.prototype.indexOf.call(model.dropDowns, element);
    // let index = Number(element.dataset.index);
    
    // Filter the clicked element
    let array = Array.prototype.filter.call(model.dropDowns, function(el, index){
      return index !== indexNumber;
    });

    array.forEach(function(el){
      el.classList.remove('show-dropdown');
    })
  }
}
model.init();