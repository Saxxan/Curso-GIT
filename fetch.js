export default function solicitarNombres() {

    return fetch("http://www.dominio.es/api/all")

        .then(respuesta => {
            return respuesta.json();
        });
    
}