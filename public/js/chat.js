const questionTree = {
    inicio: {
        question: "Hola, ¿en qué puedo ayudarte?",
        options: {
            documentos: "¿Que documentos nececito?",
            credito: "¿Cuales son los requisitos para un credito?",
            horario: "¿Cual es su horario de atención?",
        },
    },
    documentos: {
        question: "Los requisitos de ingreso son en original y copia: acta de nacimiento, comprobante de domicilio reciente (no mayor a 3 meses), RFC, CURP, Acta de matrimonio (si es casado), identificación oficial vigente, Cédula de identificación fiscal* (no necesaria al momento de ingresar, tiene un plazo de 6 meses para presentarla, o bien si en el lapso realiza un trámite de crédito debe presentarla para poder realizarlo) y su parte social de $1,360 que la puede completar en 3 meses iniciando con un mínimo de $200 (no se considera socio hasta no cubrir al 100% la parte social).",
        options: {
            auto: "¿Cuales son los requisitos para AutoHipódromo?",
            junior: "¿Que documentos se necesitan para una Cuenta Junior Hipódromo?",
            beneficios: "¿Cuales son los beneficios de Caja Hipódromo?",
            credito: "¿Cuales son los requisitos para un credito?",
            horario: "¿Cual es su horario de atención?",
        },
    },
    credito: {
        question: "Los requisitos para un crédito son: tener su parte social completa, mínimo $1,000 en el ahorro para el trámite y una vez que se autorice completar el 10% de la cantidad acreditada. Original y copia de comprobante de domicilio, comprobante de ingresos, cédula de identificación fiscal, identificación oficial vigente y un aval.",
        options: {
            auto: "¿Cuales son los requisitos para AutoHipódromo?",
            junior: "¿Que documentos se necesitan para una Cuenta Junior Hipódromo?",
            beneficios: "¿Cuales son los beneficios de Caja Hipódromo?",
            documentos: "¿Que documentos nececito?",
            horario: "¿Cual es su horario de atención?",
        },
    },
    horario: {
        question: "El horario de atención es de lunes a viernes de 9:00 a.m. a 4:30 p.m. y sábados de 9:00 a.m. a 2:00 p.m.",
        options: {
            auto: "¿Cuales son los requisitos para AutoHipódromo?",
            junior: "¿Que documentos se necesitan para una Cuenta Junior Hipódromo?",
            beneficios: "¿Cuales son los beneficios de Caja Hipódromo?",
            documentos: "¿Que documentos nececito?",
            credito: "¿Cuales son los requisitos para un credito?",
        },
    },
    auto: {
        question: "Los requisitos para AutoHipódromo son: Tener mínimo $1,000 en el ahorro para el trámite y una vez que se autorice completar el 10% de la cantidad acreditada. Debe de traer original y copia de comprobante de domicilio, comprobante de ingresos, identificación oficial vigente, un aval y la cotización del vehículo o la copia de la factura, el asesor le hace la cotización con el seguro. El vehículo debe ser mexicano, modelo 2015 en adelante. La tasa de interés es de 10.56% anual.",
        options: {
            junior: "¿Que documentos se necesitan para una Cuenta Junior Hipódromo?",
            beneficios: "¿Cuales son los beneficios de Caja Hipódromo?",
            documentos: "¿Que documentos nececito?",
            credito: "¿Cuales son los requisitos para un credito?",
            horario: "¿Cual es su horario de atención?",
        },
    },
    junior: {
        question: "Se necesita original y copia de acta de nacimiento, comprobante de domicilio, CURP, ser presentado por un padre o tutor con identificación oficial vigente e iniciar con un monto mínimo de $50.",
        options: {
            auto: "¿Cuales son los requisitos para AutoHipódromo?",
            beneficios: "¿Cuales son los beneficios de Caja Hipódromo?",
            documentos: "¿Que documentos nececito?",
            credito: "¿Cuales son los requisitos para un credito?",
            horario: "¿Cual es su horario de atención?",
        },
    },
    beneficios: {
        question: "El ahorro le da un rendimiento anual del 2.50%, tiene acceso a créditos de bajo interés, protecciones, apoyo funerario por $17,000, acceso gratuito al Centro Recreativo (La Luna), poder participar en nuestro plan de recompensas, cursos gratuitos y durante todo el año se hacen diferentes tipos de eventos, actividades y rifas",
        options: {
            auto: "¿Cuales son los requisitos para AutoHipódromo?",
            junior: "¿Que documentos se necesitan para una Cuenta Junior Hipódromo?",
            documentos: "¿Que documentos nececito?",
            credito: "¿Cuales son los requisitos para un credito?",
            horario: "¿Cual es su horario de atención?",
        },
    },
};

let currentQuestion = "inicio";
let selectedQuestion = "";

function showQuestionOptions(question) {
    const chatQuestions = document.getElementById("chat-questions");
    chatQuestions.innerHTML = "";

    const options = questionTree[question].options;

    const selectElement = document.createElement("select");
    selectElement.className = "bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5";

    const defaultOption = document.createElement("option");
    defaultOption.disabled = true;
    defaultOption.selected = true;
    defaultOption.text = "Selecciona una opción";
    selectElement.appendChild(defaultOption);


    for (const option in options) {
        const optionText = options[option];
        const newOption = document.createElement("option");
        newOption.value = option;
        newOption.text = optionText;
        selectElement.appendChild(newOption);
    }


    selectElement.addEventListener("change", (event) => {
        const selectedOption = event.target.value;

        selectedQuestion = options[selectedOption];

        askQuestion(selectedOption);

    });

    chatQuestions.appendChild(selectElement);
}


function askQuestion(question) {
    const chatOutput = document.getElementById("chat-output");
    const currentQuestionData = questionTree[question];
    if (currentQuestionData) {
        addBotMessage(currentQuestionData.question);
        showQuestionOptions(question);
        currentQuestion = question;
    } else {
        addBotMessage("Lo siento, no entiendo la pregunta.");
    }
}

function sendMessage() {
    const userInput = document.getElementById("user-input").value;
    if (userInput) {
        addUserMessage(userInput);
        document.getElementById("user-input").value = "";
    }
}

function addBotMessage(message) {

    const chatOutput = document.getElementById("chat-output");
    const usrMessage = document.createElement("div");
    const newMessage = document.createElement("div");

    usrMessage.className = "message bot-message flex flex-col w-full max-w-[320px] leading-1.5 p-4  bg-gray-100 rounded-xl dark:bg-gray-700 mb-[10px] ml-auto";
    usrMessage.innerHTML = `<div class="message-text text-sm font-normal py-2.5 text-gray-900 dark:text-white">${selectedQuestion}</div>`;

    newMessage.className = "message bot-message flex ";
    newMessage.innerHTML = `
    <div class="flex">
    <img src="/images/Chat/Operadora.jpg" alt="Icono" class="w-[80px] h-[70px] text-white mr-2 rounded-full" />
        <div class="flex flex-col w-full max-w-[320px] leading-1.5 p-4  bg-CH  rounded-xl  mb-[10px] ">
       <div class="flex items-center space-x-2 rtl:space-x-reverse">
           <span class="text-sm font-semibold text-white text-[11px]">Caja Hipodrómo</span>
       </div>
              <p class="text-sm font-normal py-2.5 text-white text-[11px]">${message}</p>
        </div>
    </div>

    
`;

    chatOutput.appendChild(usrMessage);
    chatOutput.appendChild(newMessage);

    scrollToBottom(); // Scroll to the bottom after adding a message
}

//
// function addUserMessage(message) {
//     const chatOutput = document.getElementById("chat-output");
//     const newMessage = document.createElement("div");
//     newMessage.className = "message user-message maroon-background";
//     newMessage.innerHTML = `<div class="message-text">${message}</div>`;
//     chatOutput.appendChild(newMessage);
//     scrollToBottom(); // Scroll to the bottom after adding a message
// }


function scrollToBottom() {
    const chatOutput = document.getElementById("chat-output");
    chatOutput.scrollTop = chatOutput.scrollHeight;
}

// Open and close the chat
const chatCircle = document.getElementById("chat-circle");
const chatContainer = document.getElementById("chat-container");
const closeButton = document.getElementById("close-button");

chatCircle.addEventListener("click", function () {
    chatCircle.style.display = "none";
    chatContainer.style.display = "flex";
    showQuestionOptions(currentQuestion);
});

closeButton.addEventListener("click", function () {
    chatCircle.style.display = "block";
    chatContainer.style.display = "none";
});