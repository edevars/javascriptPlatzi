var sunsign = prompt('Cual es tu signo zodiacal?')
var request = new XMLHttpRequest();
switch (sunsign.replace(/\s/g, "").toLowerCase()) {
    case 'aries':
        request.open('GET', `http://horoscope-api.herokuapp.com/horoscope/today/aries`, true);
        break
    case 'leo':
        request.open('GET', `http://horoscope-api.herokuapp.com/horoscope/today/leo`, true);
        break
    case 'sagitario':
        request.open('GET', `http://horoscope-api.herokuapp.com/horoscope/today/sagittarius`, true);
        break
    case 'tauro':
        request.open('GET', `http://horoscope-api.herokuapp.com/horoscope/today/taurus`, true);
        break
    case 'virgo':
        request.open('GET', `http://horoscope-api.herokuapp.com/horoscope/today/virgo`, true);
        break
    case 'capricornio':
        request.open('GET', `http://horoscope-api.herokuapp.com/horoscope/today/capricorn`, true);
        break
    case 'geminis':
        request.open('GET', `http://horoscope-api.herokuapp.com/horoscope/today/gemini`, true);
        break
    case 'libra':
        request.open('GET', `http://horoscope-api.herokuapp.com/horoscope/today/libra`, true);
        break
    case 'acuario':
        request.open('GET', `http://horoscope-api.herokuapp.com/horoscope/today/aquarius`, true);
        break
    case 'cancer':
        request.open('GET', `http://horoscope-api.herokuapp.com/horoscope/today/cancer`, true);
        break
    case 'escorpio':
        request.open('GET', `http://horoscope-api.herokuapp.com/horoscope/today/scorpio`, true);
        break
    case 'piscis':
        request.open('GET', `http://horoscope-api.herokuapp.com/horoscope/today/pisces`, true);
        break
}

request.onload = function () {
    var data = JSON.parse(this.response);
    console.log(data.horoscope)
}
request.send();