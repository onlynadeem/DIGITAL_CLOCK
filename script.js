function dig_clock(id) {
    const date = new Date;
    h = date.getHours();
    if (h < 10) {
      h = "0" + h;
    }
    m = date.getMinutes();
    if (m < 10) {
      m = "0" + m;
    }
    s = date.getSeconds();
    if (s < 10) {
      s = "0" + s;
    }
    document.getElementById("h").innerHTML = '' + h;
    document.getElementById("m").innerHTML = '' + m;
    document.getElementById("s").innerHTML = '' + s;
    setTimeout('dig_clock("' + "s" + '");', '1000');
    return true;
  }
  window.onload = dig_clock('s');