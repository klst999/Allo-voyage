const agencies = [
    { name: "Galaxie Travel & Tours Services",  phone: "66 76 94 47 /28 29 40 97", district: "Hamdallaye", nature: "Tourisme, Hadj, Oumrah, Billetterie, Réservation, Manifestations culturelles, Fret, Location de voitures, Change, colonie de vacances …." },
    { name: "SEWA TRAVEL TOURS",phone: "66 94 52 00 / 79 02 25 74", district: "Faladié", nature: "Billetterie, Tourisme" },
    { name: "Arawan Tours (ex GRIOT TOUR)",phone: "66 72 66 94/76 41 88 12", district: "Kalaban coro cercle Kati", nature: "Billetterie, tourisme, location voitures" },
    { name: "Arafat Voyages", phone: "66 74 50 39", district: "Bagadadji", nature: "Hadj," },
    { name: "AOULADE SIDI NAJI VOYAGES",  phone: "76 48 29 34", district: "Bagadadji", nature: "Hadj,Oumrah" },
    { name: "AMSA", phone: "20 22 49 95/ 76 15 30 30", district: "Hamdallaye ACI 2000", nature: "Hadj" },
    { name: "AMINA VOYAGE", phone: "73 41 20 08", district: "Bamako", nature: "Tourisme, Hadj, Oumrah, Billetterie, Réservation, Manifestations culturelles, Fret, Location de voitures, Change." },
    { name: "Amaser Voyages",phone: "66 71 88 35/ 75 08 66 23", district: "Hamdallaye ACI 2000", nature: "Hadj,Oumrah,Tourisme" },
        { name: "AL MADINA ",phone: " 20 23 22 06/  76 30 85 64", district: "Centre Commercial", nature: "Billetterie,Hadj,Oumrah" },
              { name: "AL OMRA ",phone: " 20 22 34 78 /  20 22 24 87", district: "Centre Commercial", nature: "Hadj,Oumrah" },
{ name: "ALBARKA ",phone: "20 20 99 27", district: "Sogoniko", nature: "Hadj,Oumrah" },
{ name: "DANAYA VOYAGES ",phone: " 20 22 24 25 /  76 26 26 26", district: "Quartier du fleuve", nature: "Tourisme,Billetterie,Hadj,Oumrah" },
{ name: "DJOLIBA VOYAGE ",phone: "  20 23 75 48", district: "Quartier du fleuve", nature: "Hadj,Oumrah" },
{ name: "ESF TRAVEL ",phone: " 20 22 52 78 /20 22 98 81 ", district: "NIARELA", nature: "Billetterie" },
{ name: "Muzdalifa ",phone: "  20 23 84 70 / 20 23 94 73 ", district: "Centre Commercial", nature: "Hadj,Oumrah" },
{ name: "SATGURU TRAVEL ",phone: "   20 21 26 13", district: "Niarela", nature: "Hadj,Oumrah" },
{ name: " SAHEL TOURS TRAVEL ",phone: "20 22 84 67", district: "Badalabougou Sema 2", nature: "Hadj,Oumrah" },
 
 
];

const agenciesContainer = document.getElementById("agencies-container");
const searchInput = document.getElementById("searchInput");

// Fonction pour afficher les agences
function displayAgencies(filteredAgencies) {
    agenciesContainer.innerHTML = ''; // Réinitialise le contenu
    filteredAgencies.forEach(agency => {
        const agencyCard = document.createElement("div");
        agencyCard.classList.add("agency-card");

        agencyCard.innerHTML = `
            <i class="fas fa-briefcase fa-3x" style="color: #28a745;"></i>
            <h3>${agency.name}</h3>
            <div class="agency-info">
                <p><strong>Quartier:</strong> ${agency.district}</p>
                <p><strong>Téléphone:</strong> ${agency.phone}</p>
                <p><strong>Nature:</strong> ${agency.nature}</p>
            </div>
            <button class="call-button" onclick="window.location.href='tel:${agency.phone.split(' / ')[0]}'">
                <i class="fa fa-phone"></i> Appeler
            </button>
        `;

        agenciesContainer.appendChild(agencyCard);
    });
}

// Fonction pour filtrer les agences en fonction du texte de la barre de recherche
function filterAgencies() {
    const searchTerm = searchInput.value.toLowerCase();
    
    const filteredAgencies = agencies.filter(agency => {
        return (
            agency.name.toLowerCase().includes(searchTerm) ||
            agency.district.toLowerCase().includes(searchTerm) ||
            agency.nature.toLowerCase().includes(searchTerm)
        );
    });

    // Afficher les agences filtrées par ordre alphabétique
    const sortedAgencies = filteredAgencies.sort((a, b) => a.name.localeCompare(b.name));
    displayAgencies(sortedAgencies);
}

// Afficher les agences par défaut au chargement
displayAgencies(agencies.sort((a, b) => a.name.localeCompare(b.name)));
