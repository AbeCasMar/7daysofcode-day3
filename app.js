var area = prompt("¿En que área quieres seguir forntend o backend?");
var lenguaje_framework = "";
var especializacion = "";
var respuesta = "ok"
var tecnologia = ""
var tecnologias = [];




area.toLocaleLowerCase();
if(area === "frontend"){

    lenguaje_framework = prompt("¿Que deseas aprender React o Vue?");
    lenguaje_framework.toLocaleLowerCase();

    if(lenguaje_framework === "react"){

        alert(`¡Muy buena elección!, ${lenguaje_framework} es un framework muy utilizado 
        en el desarrollo web`);

    }else{

        alert(`¡Muy buena elección!, ${lenguaje_framework} es un framework muy utilizado 
        en el desarrollo web`);

    }
}
else{

    lenguaje_framework = prompt("¿Que deseas aprender C# o Java?");
    lenguaje_framework.toLocaleLowerCase();

    if(lenguaje_framework === "c#"){

        alert(`¡Muy buena elección!, ${lenguaje_framework} es un lenguaje utilizado 
        en el desarrollo web`);

    }else{

        alert(`¡Muy buena elección!, ${lenguaje_framework} es un lenguaje utilizado 
        en el desarrollo web`);

    }

}

especializacion = prompt(`Si deseas especializarte en fullstack escribe si o escribe no si deseas segir especializandote en el area de ${area}?`);
especializacion.toLocaleLowerCase();

if(especializacion === "si"){

    alert("Muy bien especializarte en fullstack es una buena elección");
}
else{

    alert(`Muy bien especializarte en ${area} es una buena elección`);
}



while(respuesta == "ok"){

    tecnologia = prompt("¿En que tecnologia desearias especializarte?");
    alert(`${tecnologia} es importante en la formación como desarrollador`)
    tecnologias.push(tecnologia);

    respuesta = prompt("Escribe ok si hay alguna otra tecnología en la que te gustaría especializarte")


}




alert(`Excelente elegiste tu camino en el desarrollo web en ser desarrollador ${area} 
y aprender ${lenguaje_framework}, ademaás quires especializarte en las tecnologias: ${tecnologias}. ¡Mucho exito en tu formación!`);