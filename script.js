// Fonction de filtrage des compagnies en fonction du type (car, avion, ou tout)
function filterCompanies(type) {
    const allCompanies = document.querySelectorAll('.company-card');

    allCompanies.forEach(company => {
        if (type === 'all') {
            company.style.display = 'block'; // Affiche toutes les compagnies
        } else if (company.classList.contains(type)) {
            company.style.display = 'block'; // Affiche les compagnies du type sélectionné
        } else {
            company.style.display = 'none'; // Cache les autres
        }
    });
}

// Fonction pour effectuer un appel ou un message WhatsApp
function makeChoice(companyId, choice) {
    const phoneNumbers = {
        1: "+22377848436",  // Diarra Transport
        2: "+22378101010",  // Sonef Transport
        3: "+22375828202",  // Tilemsi Transport 
        4: "+22374004747",  // Nour Transport
        5: "+22375716116",  // Africa Tour
        6: "+22376493840",  // Folona Transport
        7: "+22390901390",  // Mande Transport
        8: "+22378111744",  // Somatra Transport
        9: "+22377068506",  // Rimbo Transport
        10: "+22376794343", // Bani Transport
        11: "+22376599058", // CTAC Transport
        12: "+22389012345", // Africa Star Transport
        13: "+22374535383", // Benso Transport
        14: "+223 20 21 99 30", // Gana Transport
        15: "+22370771033", // Sky Mali
        16: "+22320700355", // Air France
        17: "+22301234567", // Ethiopian Airlines
        18: "+22320221727", // Air Côte d'Ivoire 
        19: "+22320222100", // Air Sénégal 
        20: "+22366911405", // Air Mauritanie
        21: "+22320210774", // Air Burkina 
        22: "+22320223159", // Air Algérie 
        23: "+22361109191"  // Royal Air Maroc
    };

    const phoneNumber = phoneNumbers[companyId];

    if (phoneNumber) {
        if (choice === 'call') {
            // Redirige l'utilisateur pour passer un appel
            window.location.href = `tel:${phoneNumber}`;
        } else if (choice === 'whatsapp') {
            // Crée un message pré-rempli pour WhatsApp
            const message = "Bonjour, je souhaite réserver un voyage avec votre compagnie.";
            const encodedMessage = encodeURIComponent(message);  // Encodage du message pour l'URL

            // Redirige vers WhatsApp avec le numéro et le message pré-rempli
            window.location.href = `https://wa.me/${phoneNumber}?text=${encodedMessage}`;
        }
    } else {
        alert('Numéro de téléphone non disponible pour cette compagnie.');
    }
}

// Initialiser l'affichage de toutes les compagnies au chargement de la page
filterCompanies('all');
