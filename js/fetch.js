import { get } from "https://bukulapak.github.io/api/process.js";
import { setInner } from "https://bukulapak.github.io/element/process.js";
let urlAPI = "https://ws-ats2024-d2eba2e3a16f.herokuapp.com/biodata";
get(urlAPI,isiTableBiodata);
function isiTableBiodata(results){
    console.log(results);
    results.forEach(isiRow);
}
function isiRow(value){
    console.log(value)
}


