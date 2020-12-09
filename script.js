/* Add any JavaScript you need to this file. */
document.on('click', '.first-btn,.second-btn', function() {
  this.addClass('active-btn')
    .siblings()
    .removeClass('active-btn');
});
document.on('click', '.second-btn,.third-btn', function() {
  this.addClass('active-btn')
    .siblings()
    .removeClass('active-btn');
});
document.on('click', '.third-btn,.fourth-btn', function() {
  this.addClass('active-btn')
    .siblings()
    .removeClass('active-btn');
});
document.on('click', '.fourth-btn,.fifth-btn', function() {
  this.addClass('active-btn')
    .siblings()
    .removeClass('active-btn');
});
document.on('click', '.fifth-btn,.sixth-btn', function() {
  this.addClass('active-btn')
    .siblings()
    .removeClass('active-btn');
});
document.on('click', '.sixth-btn,.seventh-btn', function() {
  this.addClass('active-btn')
    .siblings()
    .removeClass('active-btn');
});
document.on('click', '.eighth-btn,.nineth-btn', function() {
  this.addClass('active-btn')
    .siblings()
    .removeClass('active-btn');
});
document.on('click', '.tenth-btn', function() {
  this.addClass('active-btn')
    .siblings()
    .removeClass('active-btn');
});

//functios for text slides.
document.on('click', '.first-btn', function() {
  '.text-container1'
    .addClass('active-text-slide')
    .siblings('.text-container2')
    .removeClass('active-text-slide');
});
document.on('click', '.second-btn', function() {
  '.text-container2'
    .addClass('active-text-slide')
    .siblings('.text-container1')
    .removeClass('active-text-slide');
});
document.on('click', '.third-btn', function() {
  '.text-container3'
    .addClass('active-text-slide')
    .siblings('.text-container2')
    .removeClass('active-text-slide');
});
document.on('click', '.fourth-btn', function() {
  '.text-container4'
    .addClass('active-text-slide')
    .siblings('.text-container3')
    .removeClass('active-text-slide');
});
document.on('click', '.fifth-btn', function() {
  '.text-container5'
    .addClass('active-text-slide')
    .siblings('.text-container4')
    .removeClass('active-text-slide');
});
document.on('click', '.sixth-btn', function() {
  '.text-container6'
    .addClass('active-text-slide')
    .siblings('.text-container5')
    .removeClass('active-text-slide');
});
document.on('click', '.seventh-btn', function() {
  '.text-container7'
    .addClass('active-text-slide')
    .siblings('.text-container6')
    .removeClass('active-text-slide');
});
document.on('click', '.eighth-btn', function() {
  '.text-container8'
    .addClass('active-text-slide')
    .siblings('.text-container7')
    .removeClass('active-text-slide');
});
document.on('click', '.nineth-btn', function() {
  '.text-container9'
    .addClass('active-text-slide')
    .siblings('.text-container8')
    .removeClass('active-text-slide');
});
document.on('click', '.tenth-btn', function() {
  '.text-container10'
    .addClass('active-text-slide')
    .siblings('.text-container10')
    .removeClass('active-text-slide');
});
//for img slide
document.on('click', '.first-btn', function() {
  '.img-container1'
    .addClass('active-img-slide')
    .siblings('.img-container2')
    .removeClass('active-img-slide');
});
document.on('click', '.second-btn', function() {
  '.img-container2'
    .addClass('active-img-slide')
    .siblings('.img-container1')
    .removeClass('active-img-slide');
});
document.on('click', '.third-btn', function() {
  '.img-container3'
    .addClass('active-img-slide')
    .siblings('.img-container2')
    .removeClass('active-img-slide');
});
document.on('click', '.fourth-btn', function() {
  '.img-container4'
    .addClass('active-img-slide')
    .siblings('.img-container3')
    .removeClass('active-img-slide');
});
document.on('click', '.fifth-btn', function() {
  '.img-container5'
    .addClass('active-img-slide')
    .siblings('.img-container4')
    .removeClass('active-img-slide');
});
document.on('click', '.sixth-btn', function() {
  '.img-container6'
    .addClass('active-img-slide')
    .siblings('.img-container5')
    .removeClass('active-img-slide');
});
document.on('click', '.seventh-btn', function() {
  '.img-container7'
    .addClass('active-img-slide')
    .siblings('.img-container6')
    .removeClass('active-img-slide');
});
document.on('click', '.eighth-btn', function() {
  '.img-container8'
    .addClass('active-img-slide')
    .siblings('.img-container7')
    .removeClass('active-img-slide');
});
document.on('click', '.nineth-btn', function() {
  '.img-container9'
    .addClass('active-img-slide')
    .siblings('.img-container8')
    .removeClass('active-img-slide');
});
document.on('click', '.tenth-btn', function() {
  '.img-container10'
    .addClass('active-img-slide')
    .siblings('.img-container9')
    .removeClass('active-img-slide');
});

var modal = document.getElementById('id01');

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
  if (event.target === modal) {
    modal.style.display = 'none';
  }
};
