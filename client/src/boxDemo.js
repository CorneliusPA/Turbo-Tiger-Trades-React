import React from 'react';
import { useState } from 'react';

function boxDemo() {
    
    var box = document.querySelector('.box');
    var radioGroup = document.querySelector('.radio-group');
    var currentClass = '';
    
    function changeSide() {
      var checkedRadio = radioGroup.querySelector(':checked');
      var showClass = 'show-' + checkedRadio.value;
      if ( currentClass ) {
        box.classList.remove( currentClass );
      }
      box.classList.add( showClass );
      currentClass = showClass;
    }
    // set initial side
    changeSide();
    
    radioGroup.addEventListener( 'change', changeSide );
    
    return (
        <div>
            <div class="scene">
  <div class="box">
    <div class="box__face box__face--front">front</div>
    <div class="box__face box__face--back">back</div>
    <div class="box__face box__face--right">right</div>
    <div class="box__face box__face--left">left</div>
    <div class="box__face box__face--top">top</div>
    <div class="box__face box__face--bottom">bottom</div>
  </div>
</div>
<p class="radio-group">
  <label>
    <input type="radio" name="rotate-cube-side" value="front" checked /> front
  </label>
  <label>
    <input type="radio" name="rotate-cube-side" value="right" /> right
  </label>
  <label>
    <input type="radio" name="rotate-cube-side" value="back" /> back
  </label>
  <label>
    <input type="radio" name="rotate-cube-side" value="left" /> left
  </label>
  <label>
    <input type="radio" name="rotate-cube-side" value="top" /> top
  </label>
  <label>
    <input type="radio" name="rotate-cube-side" value="bottom" /> bottom
  </label>
</p>

        </div>
    )
}

export default boxDemo
