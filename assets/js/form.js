function escapeHtml(unsafe) {
    return unsafe
        .replace(/&/g, "&amp;")
        .replace(/</g, "&lt;")
        .replace(/>/g, "&gt;")
        .replace(/"/g, "&quot;")
        .replace(/'/g, "&#039;");
}

const button = document.getElementById('contact-form-submit');
const name = document.getElementById('contact-form-name');
const description = document.getElementById('contact-form-description');
button.addEventListener("click", (e) => {
  e.preventDefault();
  let email = 'thegardenlord';
  let domain = 'gmail.com'
  let subject = `Reachout from ${escapeHtml(name.value)}`;
  let mailtoLink = `mailto:${email}@${domain}?subject=${escapeHtml(name.value)}&body=${description.value}`;
  location.href = mailtoLink;
});



function makeLine(x, y, r) {
  let div = document.createElement("div");

  for (let i = 0; i < 50; i++) {
    let span = document.createElement("span");
    span.innerText = "POLICE LINE DO NOT CROSS";
    span.style['color'] = 'black';
    span.style['font-family'] = 'sans-serif';
    span.style['font-weight'] = '900';
    span.style['text-align'] = 'center';
    span.style['font-size'] = '22px';
    span.style['margin-right'] = '100px';



    div.appendChild(span);
  }

  div.style['position'] = 'fixed';
  div.style['top'] = '0';
  div.style['margin'] = '0';
  div.style['width'] = '200vw';
  div.style['height'] = '50px';
  div.style['overflow'] = 'hidden';
  div.style['background'] = '#e8e80d';
  div.style['border-top'] = '10px dashed black';
  div.style['border-bottom'] = '10px dashed black';
  div.style['z-index'] = '999999999';
  div.style['text-align'] = 'center';

  div.style['transform'] = `translate(${x}vw, ${y}vh) rotate(${r}deg)`;

  return div;
}


function getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

for (let i = 0; i < 10; i++) {
  document.body.appendChild(makeLine(
    getRandomInt(-20, 0),
    getRandomInt(0, 90),
    getRandomInt(-50, 50),
  ));
}
// document.body.appendChild(makeLine('translate(100vw, 50vh) rotate(240deg)'));
// document.body.appendChild(makeLine('translate(0vw, 1000vh) rotate(45deg)'));
// document.body.appendChild(makeLine('translate(0, 400vh) rotate(-45deg)'));
// document.body.appendChild(makeLine('translate(-100vw, 10vh) rotate(45deg)'));
// document.body.appendChild(makeLine('translate(10vw, 10vh) rotate(45deg)'));
// document.body.appendChild(makeLine('translate(10vw, 10vh) rotate(45deg)'));
