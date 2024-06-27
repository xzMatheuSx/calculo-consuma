function calcular(){
    const distancia = Number(document.getElementById('distancia').value)
    const litrosGastos = Number(document.getElementById('litrosGastos').value)

    const media = distancia / litrosGastos
   
    const media_arrendondada = media.toFixed(2)
    
    console.log(media_arrendondada)
 
}