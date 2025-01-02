// **************************************************
// Modul med funktionerna som presenterar informationen i modal-popup
// Har lagt alla presentationsfunktioner i denna modul för att få enkel överblick
// **************************************************

//Importerar variabler/pekare som behövs
import { modalElements, domLibrary } from './domElements'; 

// Öppnar modalen för att visa information om klickad himlakropp med korrekt färg till vänster
const showModal = (color) => {

    // Visar modalen med de extra färgringarna och döljer bakomliggande element
    modalElements.booksPopup.style.display = 'block';
    domObjects.header.style.visibility = 'hidden';
    domObjects.planets.style.visibility = 'hidden';
    domObjects.starPlanet.style.backgroundColor = color;
    modalElements.atmosphere.style.display = 'block';
    modalElements.atmosphere.style.backgroundColor = color;
    modalElements.atmosphere.style.opacity ='0.35';
    modalElements.corona.style.display = 'block';
    modalElements.corona.style.backgroundColor = color;
    modalElements.corona.style.opacity ='0.25';

    // Lägger lyssnare på stängningsknappen och säger vad som ska hända
    modalElements.closeBtn.addEventListener('click', () => {
            domObjects.popup.style.display = 'none';
            domObjects.header.style.visibility = 'visible';
            domObjects.planets.style.visibility = 'visible';
            domObjects.starPlanet.style.backgroundColor = '' + planetColors.starPlanet;
            modalElements.atmosphere.style.display = 'none';
            modalElements.corona.style.display = 'none';
        }
    );
}