function cambiarImagen(img, newimg) {
    img.src = ("img/" + newimg);
}


function cambiarLogo(textoInicial, textoFinal, color1, color2){
    var logo = document.querySelector('.logo');
    var logoStart = logo.querySelector('.logo_start');
    var logoFinal = logo.querySelector('.logo_final');

    logoStart.textContent = textoInicial;
    logoFinal.textContent = textoFinal;

    var logoAcent = logo.querySelector('.logo_acent');
    logoAcent.style.color = color2;
    logoStart.style.color = color1;
    logoFinal.style.color = color1;
}

document.getElementById("jsCard").addEventListener('mouseover', function() {cambiarLogo('<', '.js>', "yellow", "ghostwhite")});
document.getElementById("jsCard").addEventListener('mouseout', function() {cambiarLogo('/', '.py', "darkslateblue", "ghostwhite")});

document.getElementById("bashCard").addEventListener('mouseover', function() {cambiarLogo('/', '.sh', "darkgreen", "ghostwhite")});
document.getElementById("bashCard").addEventListener('mouseout', function() {cambiarLogo('/', '.py', "darkslateblue", "ghostwhite")});

document.getElementById("cCard").addEventListener('mouseover', function() {cambiarLogo('', '.c', "gray", "ghostwhite")});
document.getElementById("cCard").addEventListener('mouseout', function() {cambiarLogo('/', '.py', "darkslateblue", "ghostwhite")});

document.getElementById("electronicsCard").addEventListener('mouseover', function() {cambiarLogo('', '.ino', "darkcyan", "gray")});
document.getElementById("electronicsCard").addEventListener('mouseout', function() {cambiarLogo('/', '.py', "darkslateblue", "ghostwhite")});

document.getElementById('downloadButton').addEventListener('click', function() {
    var pdfURL = 'documents/cv.pdf';
    var link = document.createElement('a');
    link.href = document.createElement('a');
    link.href = pdfURL;
    link.download = 'cv.pdf';
    link.target = '_blank';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
});

//document.getElementById("pyimg").addEventListener('mouseover', cambiarLogo("/", "FM", ".py", "darkslateblue", "ghostwhite"));

const lightButton = document.getElementById('lightButton');
lightButton.addEventListener('click', () => {
    const current = getComputedStyle(document.documentElement).getPropertyValue('--back-color').trim()

    if (current == 'ghostwhite'){
        document.documentElement.style.setProperty('--back-color', 'rgb(42, 42, 42)')
        var mode = "-dark";
    }
    else {
        document.documentElement.style.setProperty('--back-color', 'ghostwhite')
        var mode = "";
    }

    const img1 = document.getElementById("pyimg");
        cambiarImagen(img1, "python-icon" + mode + ".jpg");
    
        const img2 = document.getElementById("cimg");
        cambiarImagen(img2, "c-icon" + mode + ".jpg");

        const img3 = document.getElementById("bashimg");
        cambiarImagen(img3, "bash-icon" + mode + ".jpg");
        
        const img4 = document.getElementById("jsimg");
        cambiarImagen(img4, "js-icon" + mode + ".jpg");

        const img5 = document.getElementById("elecimg");
        cambiarImagen(img5, "electronics-icon" + mode + ".jpg");

});



