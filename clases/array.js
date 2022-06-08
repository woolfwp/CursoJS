const marcaAutos = ['BMW','Mercedes','Audi'];
console.log(marcaAutos);
console.log(marcaAutos[0]);

for (let i = 0; i < marcaAutos.length; i++) {
    const element = marcaAutos[i];
    console.log(i + ' ' + element);
}

marcaAutos.push('redbol');

console.log(marcaAutos);

marcaAutos[marcaAutos.length] = 'chebrolett';

console.log(marcaAutos);