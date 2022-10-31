# indonesia-medical-facility-scrapper
collecting Indonesia medical facility data from https://faskes.bpjs-kesehatan.go.id/

# This script will genereate two kind of data:
1. Data Faskes Indonesia

| Provinsi                 | Jenis Faskes | Nama Faskes           | Alamat Faskes                |
|--------------------------|--------------|-----------------------|------------------------------|
| NANGGROE ACEH DARUSSALAM | Rumah sakit  | RSU CUT NYAK DHIEN    | JL. TM BAHRUM NO. 1 LANGSA   |
| NANGGROE ACEH DARUSSALAM | Rumah sakit  | RSIA NURUL QALBI      | JL. SUDIRMAN NO. 12 LANGSA   |
| NANGGROE ACEH DARUSSALAM | Rumah sakit  | UMMI                  | Jln. Prof. A. Madjid Ibrahim |
| NANGGROE ACEH DARUSSALAM | Rumah sakit  | RSU CUT MEUTIA LANGSA | JL.GARUDA KEBUN BARU LANGSA  |

2. Data "Jumlah Faskes Per Provinsi"

| Provinsi                 | Rumah sakit | Puskesmas | Dokter Praktik Perorangan | Dokter Gigi | Klink Utama | Klink Pratama | Apotek |
|--------------------------|-------------|-----------|---------------------------|-------------|-------------|---------------|--------|
| NANGGROE ACEH DARUSSALAM | 119         | 554       | 214                       | 13          | 48          | 277           | 206    |
| SUMATERA UTARA           | 350         | 763       | 460                       | 39          | 99          | 802           | 363    |
| SUMATERA BARAT           | 147         | 363       | 424                       | 74          | 89          | 208           | 228    |
| RIAU                     | 123         | 326       | 250                       | 46          | 19          | 416           | 173    |
| JAMBI                    | 83          | 287       | 262                       | 32          | 41          | 122           | 116    |
| SUMATERA SELATAN         | 142         | 380       | 490                       | 60          | 58          | 313           | 191    |
| BENGKULU                 | 39          | 203       | 193                       | 23          | 7           | 64            | 59     |
| LAMPUNG                  | 129         | 370       | 318                       | 26          | 41          | 284           | 153    |
| KEP. BANGKA BELITUNG     | 34          | 70        | 90                        | 14          | 11          | 59            | 71     |
| DKI JAKARTA              | 505         | 616       | 153                       | 8           | 131         | 705           | 318    |
| JAWA BARAT               | 748         | 1317      | 1164                      | 132         | 117         | 2091          | 852    |
| JAWA TENGAH              | 541         | 1159      | 2053                      | 464         | 101         | 1145          | 834    |

You can see result on `jumlah-faskes-per-provinsi.csv` and `data-faskes-indonesia.csv`file.


## Requirement to run this script:
- Node js
- postman v2.1
    
## Follow this step to generate your own data
- run `npm install`
- run `node script.js`
- upload `Scrapping data Faskes.postman_collection.json` into postman and `run collection`
- lastly, run `node transform.js` to generate data into csv

Result Data will be save on root folder with name `jumlah-faskes-per-provinsi.csv` and `data-faskes-indonesia.csv`
