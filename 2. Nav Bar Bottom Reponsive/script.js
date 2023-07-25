var content_home = document.getElementById("content-home");
var content_device = document.getElementById("content-device");
var content_setting = document.getElementById("content-setting");
var content_profile = document.getElementById("content-profile");
var nav_home = document.getElementById("nav-home");
var nav_device = document.getElementById("nav-device");
var nav_setting = document.getElementById("nav-setting");
var nav_profile = document.getElementById("nav-profile");

function start() {
  content_home.style.display = "block";
  content_device.style.display = "none";
  content_setting.style.display = "none";
  content_profile.style.display = "none";
}
start();

function contentHome() {
  content_home.style.display = "block";
  content_device.style.display = "none";
  content_setting.style.display = "none";
  content_profile.style.display = "none";
  nav_home.className = "active";
  nav_device.className = "none";
  nav_setting.className = "none";
  nav_profile.className = "none";
}

function contentDevice() {
  content_home.style.display = "none";
  content_device.style.display = "block";
  content_setting.style.display = "none";
  content_profile.style.display = "none";
  nav_home.className = "none";
  nav_device.className = "active";
  nav_setting.className = "none";
  nav_profile.className = "none";
}

function contentSetting() {
  content_home.style.display = "none";
  content_device.style.display = "none";
  content_setting.style.display = "block";
  content_profile.style.display = "none";
  nav_home.className = "none";
  nav_device.className = "none";
  nav_setting.className = "active";
  nav_profile.className = "none";
}

function contentProfile() {
  content_home.style.display = "none";
  content_device.style.display = "none";
  content_setting.style.display = "none";
  content_profile.style.display = "block";
  nav_home.className = "none";
  nav_device.className = "none";
  nav_setting.className = "none";
  nav_profile.className = "active";
}
