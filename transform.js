const fs = require('fs');

const jenis_faskes = [
  {'code': 'R', 'jenis': 'Rumah sakit'},
  {'code': 'P', 'jenis' : 'Puskesmas'},
  {'code': 'U', 'jenis' : 'Dokter Praktik Perorangan'},
  {'code': 'G', 'jenis' : 'Dokter Gigi'},
  {'code': 'S', 'jenis' : 'Klink Utama'},
  {'code': 'B', 'jenis' : 'Klink Pratama'},
  {'code': 'A',  'jenis' : 'Apotek'}
];


const folderPath = './Responses/';
const provinsiPath = folderPath + 'provinsi.json'
let provinsiData = JSON.parse(fs.readFileSync(provinsiPath, 'utf8'));


let firstData='Provinsi,Jenis Faskes,Nama Faskes,Alamat Faskes\n';
let secondData= jenis_faskes.reduce((prev, curr) => prev + ',' + curr.jenis, '') + '\n';


let n = jenis_faskes.length;
let m = provinsiData.length;
//console.log(m, n, m * n);
for (let i = 0; i < n; i++) {
  const jenisFaskesId = jenis_faskes[i].code;
  const jenissFaskesName = jenis_faskes[i].jenis;
  let jumlahData = 0;
  for (let j = 0; j < m; j++) {
    const provinsiId = provinsiData[j].id;
    const provinsiName = provinsiData[j].name;

    const fileName = folderPath + provinsiId + '-' + jenisFaskesId + '.txt';
    const jsonData = JSON.parse(fs.readFileSync(fileName, 'utf8'));
    const dataString = jsonData.reduce((prev, curr) => {
      return prev + provinsiName + ',' + `"${curr.nmjnsppk}"` + ',' + `"${curr.nmppk}"` + ',' + `"${curr.nmjlnppk}"` + '\n';
    }, '');
    firstData += dataString;
    //console.log(jsonData);
  }
}


for (let i = 0; i < m; i++) {
  const provinsiId = provinsiData[i].id;
  const provinsiName = provinsiData[i].name;
  let dataRow = '';
  for (let j = 0; j < n; j++) {
    const jenisFaskesId = jenis_faskes[j].code;
    const jenissFaskesName = jenis_faskes[j].jenis;

    const fileName = folderPath + provinsiId + '-' + jenisFaskesId + '.txt';
    const jsonData = JSON.parse(fs.readFileSync(fileName, 'utf8'));
    if (jsonData.length == 0) {
      console.log(provinsiName + ' ', jenissFaskesName, fileName);
    }
    dataRow += ',' + jsonData.length;
    //console.log(jsonData);
  }
  secondData += provinsiName + dataRow + '\n';
}


fs['writeFile']('jumlah-faskes-per-provinsi.csv', secondData, undefined, (err) => {});
fs['writeFile']('data-faskes-indonesia.csv', firstData, undefined, (err) => {});


//fs.writevSync('jumlah-faskes-per-provinsi.csv', secondData);
//fs.writevSync('data-faskes-indonesia.csv', firstData);

//console.log(secondData);
//console.log(secondDataHead);
//console.log(provinsiData.length);
