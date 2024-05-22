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
    isiTabel.replace("#NAMA#", value.nama)
            .replace("#NAMAA#", value.nama)
            .replace("#NPMM#", value.datadiri.npm)
            .replace("#JENIS KELAMIN#", value.jk)
            .replace("#AGAMA#", value.agama)
            .replace("#KELAS#", value.datadiri.kelas)
            .replace("#ANGKATAN#", value.datadiri.angkatan)
            .replace("#JALAN#", value.alamat.jalan)
            .replace("#KODE POS#", value.alamat.kodepos)
            .replace("#KOTA#", value.alamat.kota)
            .replace("#WARNA#", getRandomColor())
            .replace(/#WARNALOGO#/g, getRandomColorName());
        addInner("iniTabel", content);
}




