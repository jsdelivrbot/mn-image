"use strict";function mnImage(){function setRotation3d(event){var bounds=this.getBoundingClientRect(),percentX=(event.clientX-bounds.left)/bounds.width,percentY=(event.clientY-bounds.top)/bounds.height,angles=20,rotateY=angles*(2*-percentX)+angles,rotateX=angles*(2*percentY)-angles;this.style.transform="\n      scale(1.07)\n      perspective(1000px)\n      rotateY("+rotateY+"deg)\n      rotateX("+rotateX+"deg)\n    "}function unsetRotate3d(){this.style.transform=""}function setImageAttribute(attribute){var isDefaultAttribute=attribute.hasOwnProperty("default"),attributeValue=element.getAttribute(attribute.name);if(isDefaultAttribute){var isValidValue=attribute.hasOwnProperty("values")&&attribute.values.indexOf(attributeValue)>=0,value=isValidValue?attributeValue:attribute.default;image.setAttribute(attribute.name,value)}else attributeValue&&image.setAttribute(attribute.name,attributeValue)}var element=this,imageAttributes=[{name:"src"}],image=document.createElement("img");imageAttributes.map(setImageAttribute),element.appendChild(image);var shine=document.createElement("div");shine.classList.add("shine"),element.appendChild(shine),element.addEventListener("mouseenter",setRotation3d),element.addEventListener("mousemove",setRotation3d),element.addEventListener("touchstart",setRotation3d),element.addEventListener("touchmove",setRotation3d),element.addEventListener("mouseout",unsetRotate3d)}var prototype=Object.create(HTMLElement.prototype);prototype.createdCallback=mnImage,document.registerElement("mn-image",{prototype:prototype});
//# sourceMappingURL=mn-image.js.map