var nome = ["1PSIDTS","ENID","APISID","HSID","SSID","SID","1PSID","3PSID","1PSIDCC","3PSIDCC"];
var valore = ["JLcTBzzCSkloZ_uN","/AFhG07flCf18aBY17","APISID_value","HSID_value","SSID_value","SID_value","__Secure-1PSID_value","__Secure-3PSID_value","__Secure-1PSIDCC_value","__Secure-3PSIDCC_value"];
var scadenza = [2,4,6,8,5,3,4,7,9,10];

function setCookie(cname, cvalue, exdays) {
  const d = new Date();
  d.setTime(d.getTime() + (exdays * 24 * 60 * 60 * 1000));
  let expires = "expires="+d.toUTCString();
  document.cookie = cname + "=" + cvalue + ";" + expires + ";path=/";
}

function getCookie(cname) {
  let name = cname + "=";
  let ca = document.cookie.split(';');
  for(let i = 0; i < ca.length; i++) {
    let c = ca[i];
    while (c.charAt(0) == ' ') {
      c = c.substring(1);
    }
    if (c.indexOf(name) == 0) {
      return c.substring(name.length, c.length);
    }
  }
  return "";
}

function checkCookie() {
  let user = getCookie("username");
  if (user != "") {
    alert("Welcome again " + user);
  } else {
    user = prompt("Please enter your name:", "");
    if (user != "" && user != null) {
      setCookie("username", user, 365);
    }
  }
}

function createcookie() {
    for (let i = 0; i < scadenza.length; i++) {
        setCookie(nome[i], valore[i], scadenza[i]);
        console.log(`Cookie created: ${nome[i]}=${valore[i]}`);
    }
    const nome1 = "M4_UD01_P01";
    const valor1 = Date.now(); // milissegundos
    setCookie(nome1, valor1, 206); // expira em 206 dias (ou o número que preferir)
    nome.push(nome1);
    valore.push(valor1);
    scadenza.push(206);
}

function imprimircookie() {
    for (let i = 0; i < nome.length; i++) {
        const cookieValue = getCookie(nome[i]);
        if (cookieValue) {
            document.getElementById('output').innerHTML += `Cookie: ${nome[i]}=${cookieValue}<br>`;
        } else {
            document.getElementById('output').innerHTML += `Cookie ${nome[i]} not found.<br>`;
        }
    }
    document.getElementById('output').innerHTML += ` <br>`;
}
  

function eliminarcookie() {
  document.cookie = `M4_UD01_P01=; expires=${new Date(0).toUTCString()}; path=/`;
}


function objectcookie() {
    document.cookie.split('; ').forEach(cookie => {
        const [name, value] = cookie.split('=');
        document.getElementById('output').innerHTML += `Object Cookie: ${name}=${value}<br>`;
    });
     document.getElementById('output').innerHTML += ` <br>`;
}