import { get } from "https://bukulapak.github.io/api/process.js";
import { addInner } from "https://bukulapak.github.io/element/process.js";
import { getRandomColor, getRandomColorName } from "https://bukulapak.github.io/image/process.js";
import { isiTabel } from "./table.js";
let urlAPI = "https://ws-ats2024-d2eba2e3a16f.herokuapp.com/biodata";
get(urlAPI, isiTableBiodata);
function isiTableBiodata(results) {
    results.forEach(isiRow);
}
function isiRow(value) {
    let content = 
    isiTabel.replace("#NAMA#", value.biodata.nama)
            .replace("#PRODI#", value.biodata.prodi)
            .replace("#NPM#", value.biodata.npm)
            .replace("#KELAS#", value.biodata.kelas)
            .replace("#ANGKATAN#", value.angkatan)
            .replace("#JALAN#", value.jalan)
            .replace("#KOTA#", value.biodata.kota)
            .replace("#KODE POS#", value.biodata.kodepos)
            .replace("#WARNA#", getRandomColor())
            .replace(/#WARNALOGO#/g, getRandomColorName());
        addInner("iniTabel", content);
}


