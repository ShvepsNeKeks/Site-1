document.addEventListener('DOMContentLoaded', function () {
  var sidenav = document.querySelectorAll('.sidenav');
  var inst_sidenav = M.Sidenav.init(sidenav);

  var modal = document.querySelectorAll('.modal');
  var inst_modal = M.Modal.init(modal);

  var gallery = document.querySelectorAll('.materialboxed');
  var inst_gallery = M.Materialbox.init(gallery);
});
