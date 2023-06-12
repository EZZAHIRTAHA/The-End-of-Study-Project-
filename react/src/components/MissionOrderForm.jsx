import React, { useState } from "react";
import { PDFDownloadLink, Page, Text, View, Document, StyleSheet, Image} from '@react-pdf/renderer';
import {BsDownload} from 'react-icons/bs'


const styles = StyleSheet.create({
  page: {
    backgroundColor: '#fff',
    padding: 50,
  },
  heading: {
    fontSize: 27,
    fontWeight: 'bold',
    marginBottom: 40,
    textAlign: 'center',
    textDecoration: 'underline'
  },
  label: {
    fontSize: 16,
    fontWeight: 'bold',
    marginBottom: 5,
  },
  value: {
    fontSize: 16,
    marginBottom: 20,
  },
  table: {
    border: 1
  }
});
const imageSrc ='./ofppt.jpg'

const MyDocument = ({ name, matricule, accompagnement, destination, mission, departureDate, departureTime, returnDate, returnTime, transportation, vehicleType, vehicleBrand, vehiclePower, vehiclePlateNumber,  }) => (
  <Document style={styles.table}>
    <Page size="A4" style={styles.page}>
      <Image src={imageSrc} alt="" style={{ marginBottom: "20px" }} cache={false} />
      <Text style={styles.heading}>ORDRE DE MISSION</Text>

      <View>
        <Text style={styles.label}>Monsieur:</Text>
        <Text style={styles.value}>{name}</Text>
      </View>

      <View>
        <Text style={styles.label}>Matricule:</Text>
        <Text style={styles.value}>{matricule}</Text>
      </View>

      <View>
        <Text style={styles.label}>Accompagné par:</Text>
        <Text style={styles.value}>{accompagnement}</Text>
      </View>

      <View>
        <Text style={styles.label}>De se rendre à:</Text>
        <Text style={styles.value}>{destination}</Text>
      </View>

      <View>
        <Text style={styles.label}>Pour accomplir la mission suivante:</Text>
        <Text style={styles.value}>{mission}</Text>
      </View>

      <View>
        <Text style={styles.label}>Date de départ:</Text>
        <Text style={styles.value}>{departureDate} Heure: {departureTime}</Text>
      </View>

      <View>
        <Text style={styles.label}>Date de retour:</Text>
        <Text style={styles.value}>{returnDate} Heure: {returnTime}</Text>
      </View>

      <View>
        <Text style={styles.label}>L’intéressé(e) utilisera:</Text>
        <Text style={styles.value}>{transportation}</Text>
      </View>

      <View>
        {/* <Text style={styles.label}>Vehicle Type:</Text> */}
        <Text style={styles.value}>{vehicleType}</Text>
      </View>

      <View>
        <Text style={styles.label}>Marque:</Text>
        <Text style={styles.value}>{vehicleBrand}</Text>
      </View>

      <View>
        {/* <Text style={styles.label}>Vehicle Power:</Text> */}
        <Text style={styles.value}>{vehiclePower}</Text>
      </View>

      <View>
        <Text style={styles.label}>N° de Plaque:</Text>
        <Text style={styles.value}>{vehiclePlateNumber}</Text>
      </View>
    </Page>
  </Document>
);


// const styles = StyleSheet.create({
//   body: {
//     paddingTop: 35,
//     paddingBottom: 65,
//     paddingHorizontal: 35,
//   },
//   heading: {
//     fontSize: 27,
//     fontWeight: 'bold',
//     marginBottom: 20,
//     textAlign: 'center',
//     textDecoration: 'underline'
//   },
//   label: {
//     fontSize: 16,
//     fontWeight: 'bold',
//     marginBottom: 5,
//   },
//   value: {
//     fontSize: 16,
//     marginBottom: 20,
//   },
//   table: {
//     display: "table",
//     width: "auto",
//     borderStyle: "solid",
//     borderWidth: 1,
//     borderRightWidth: 0,
//     borderBottomWidth: 0 
//   },
//   tableRow: {
//     margin: "auto",
//     flexDirection: "row"
//   },
//   tableCol: {
//     width: "25%",
//     borderStyle: "solid",
//     borderWidth: 1,
//     borderLeftWidth: 0,
//     borderTopWidth: 0
//   },
//   tableCell: {
//     margin: "auto",
//     marginTop: 5,
//     fontSize: 10
//   }
// });

// const imageSrc ='./ofppt.jpg'

// const MyDocument = ({ name, matricule, accompagnement, destination, mission, departureDate, departureTime, returnDate, returnTime, transportation, vehicleType, vehicleBrand, vehiclePower, vehiclePlateNumber,  }) => (
//   <Document>
//     <Page style={styles.body}>
//       <img src={imageSrc} alt="" style={{ marginBottom: "20px" }} />
//       <Text style={styles.heading}>ORDRE DE MISSION</Text>

//       <View style={styles.table}>
//         <View style={styles.tableRow}>
//           <View style={styles.tableCol}>
//             <Text style={styles.tableCell}>Monsieur:</Text>
//           </View>
//           <View style={styles.tableCol}>
//             <Text style={styles.tableCell}>{name}</Text>
//           </View>
//           <View style={styles.tableCol}>
//             <Text style={styles.tableCell}>Matricule:</Text>
//           </View>
//           <View style={styles.tableCol}>
//             <Text style={styles.tableCell}>{matricule}</Text>
//           </View>
//         </View>

//         <View style={styles.tableRow}>
//           <View style={styles.tableCol}>
//             <Text style={styles.tableCell}>Accompagné par:</Text>
//           </View>
//           <View style={styles.tableCol}>
//             <Text style={styles.tableCell}>{accompagnement}</Text>
//           </View>
//           <View style={styles.tableCol}>
//             <Text style={styles.tableCell}>De se rendre à:</Text>
//           </View>
//           <View style={styles.tableCol}>
//             <Text style={styles.tableCell}>{destination}</Text>
//           </View>
//         </View>

//         <View style={styles.tableRow}>
//           <View style={styles.tableCol}>
//             <Text style={styles.tableCell}>Pour accomplir la mission suivante:</Text>
//           </View>
//           <View style={styles.tableCol}>
//             <Text style={styles.tableCell}>{mission}</Text>
//           </View>
//           <View style={styles.tableCol}>
//             <Text style={styles.tableCell}>Date de départ:</Text>
//           </View>
//           <View style={styles.tableCol}>
//             <Text style={styles.tableCell}>{departureDate} Heure: {departureTime}</Text>
//           </View>
//         </View>
// </View>
// </Page>
// </Document>
// )

function MissionOrderForm() {
  const [name, setName] = useState("");
  const [matricule, setMatricule] = useState("");
  const [accompagnement, setAccompagnement] = useState("");
  const [destination, setDestination] = useState("");
  const [mission, setMission] = useState("");
  const [departureDate, setDepartureDate] = useState("");
  const [departureTime, setDepartureTime] = useState("");
  const [returnDate, setReturnDate] = useState("");
  const [returnTime, setReturnTime] = useState("");
  const [transportation, setTransportation] = useState("");
  const [vehicleType, setVehicleType] = useState("");
  const [vehicleBrand, setVehicleBrand] = useState("");
  const [vehiclePower, setVehiclePower] = useState("");
  const [vehiclePlateNumber, setVehiclePlateNumber] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();

    // Download the PDF when the link is clicked
    const downloadLink = document.createElement('a');
    downloadLink.setAttribute('download', 'mission-order.pdf');
    downloadLink.setAttribute('href', URL.createObjectURL(<MyDocument
      name={name}
      matricule={matricule}
      accompagnement={accompagnement}
      destination={destination}
      mission={mission}
      departureDate={departureDate}
      departureTime={departureTime}
      returnDate={returnDate}
      returnTime={returnTime}
      transportation={transportation}
      // vehicleType={vehicleType}
      vehicleBrand={vehicleBrand}
      vehiclePower={vehiclePower}
      vehiclePlateNumber={vehiclePlateNumber}
    />));
    downloadLink.click();
  };

  return (
    <>
    <form onSubmit={handleSubmit} className="scale-up-center
scale-up-center text-black w-full shadow-2xl bg-white p-8 rounded-lg">
      <div className="flex justify-center w-full items-center "><img src="https://monemploi.ma/wp-content/uploads/2020/01/logo-offpt.png" className="w-[100px] mb-5" alt="" /></div>
      <h1 className="text-center font-semibold text-4xl mb-10">ORDRE DE MISSION </h1>
      
      <div className="text-black">
        <label htmlFor="name">Monsieur/Madame:</label>
        <input className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-black dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" type="text" id="name" value={name} onChange={(e) => setName(e.target.value)} required />
      </div>
      <div>
        <label htmlFor="matricule">Matricule:</label>
        <input className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-black dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" type="text" id="matricule" value={matricule} onChange={(e) => setMatricule(e.target.value)} required />
      </div>
      <div>
        <label htmlFor="accompaniment">Accompagné par:</label>
        <input className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-black dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" type="text" id="accompaniment" value={accompagnement} onChange={(e) => setAccompagnement(e.target.value)} />
      </div>
      <div>
        <label htmlFor="destination">De se rendre à:</label>
        <input className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-black dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" type="text" id="destination" value={destination} onChange={(e) => setDestination(e.target.value)} required />
      </div>
      <div>
        <label htmlFor="mission">Pour accomplir la mission suivante:</label>
        <textarea id="mission" value={mission} onChange={(e) => setMission(e.target.value)} required />
      </div>
      <div>
        <label htmlFor="departureDate">Date de départ:</label>
        <input className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-black dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" type="date" id="departureDate" value={departureDate} onChange={(e) => setDepartureDate(e.target.value)} required />
        <label htmlFor="departureTime">Heure:</label>
        <input className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-black dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" type="time" id="departureTime" value={departureTime} onChange={(e) => setDepartureTime(e.target.value)} required />
</div>
<div>
<label htmlFor="returnDate">Date de retour:</label>
<input className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-black dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" type="date" id="returnDate" value={returnDate} onChange={(e) => setReturnDate(e.target.value)} required />
<label htmlFor="returnTime">Heure:</label>
<input className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-black dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" type="time" id="returnTime" value={returnTime} onChange={(e) => setReturnTime(e.target.value)} required />
</div>
<div>
<p>L’intéressé(e) utilisera:</p>
<div>
<input className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500  dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600 m-3" type="radio" id="transportationPublic" name="transportation" value="Transport public" checked={transportation === "Transport public"} onChange={(e) => setTransportation(e.target.value)} required />
<label htmlFor="transportationPublic">Transport public</label>
</div>
<div>
<input className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500  dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600 m-3" type="radio" id="vehicleMission" name="transportation" value="Voiture de mission" checked={transportation === "Voiture de mission"} onChange={(e) => setTransportation(e.target.value)} />
<label htmlFor="vehicleMission">Voiture de mission</label>
<div>
<label htmlFor="vehicleBrand">Marque:</label>
<input className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-black dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" type="text" id="vehicleBrand" value={vehicleBrand} onChange={(e) => setVehicleBrand(e.target.value)} required />
</div>
<div>
<label htmlFor="vehiclePlateNumber">N° de Plaque:</label>
<input className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-black dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" type="text" id="vehiclePlateNumber" value={vehiclePlateNumber} onChange={(e) => setVehiclePlateNumber(e.target.value)} required />
</div>
</div>
<div>
<input className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500  dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600 m-3" type="radio" id="vehiclePersonal" name="transportation" value="Voiture personnelle" checked={transportation === "Voiture personnelle"} onChange={(e) => setTransportation(e.target.value)} />
<label htmlFor="vehiclePersonal">Voiture personnelle</label>
<div>
<label htmlFor="vehicleBrand">Marque:</label>
<input className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-black dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" type="text" id="vehicleBrand" value={vehicleBrand} onChange={(e) => setVehicleBrand(e.target.value)} required />
</div>
<div>
<label htmlFor="vehiclePower">Puissance Fiscale:</label>
<input className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-black dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" type="text" id="vehiclePower" value={vehiclePower} onChange={(e) => setVehiclePower(e.target.value)} required />
</div>
<div>
<label htmlFor="vehiclePlateNumber">N° de Plaque:</label>
<input className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-black dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" type="text" id="vehiclePlateNumber" value={vehiclePlateNumber} onChange={(e) => setVehiclePlateNumber(e.target.value)} required />
</div>
</div>
</div>
{/* <button className="flex justify-center items-center px-3 py-3 rounded-md my-5 text-white bg-slate-800" type="submit">Submit</button> */}
    <PDFDownloadLink document={<MyDocument 
      name={name} 
      matricule={matricule}
      accompagnement={accompagnement}
      destination={destination}
      mission={mission}
      departureDate={departureDate}
      departureTime={departureTime}
      returnDate={returnDate}
      returnTime={returnTime}
      transportation={transportation}
      // vehicleType={vehicleType}
      vehicleBrand={vehicleBrand}
      vehiclePower={vehiclePower}
      vehiclePlateNumber={vehiclePlateNumber} />} fileName="mission-order.pdf">
        {({ blob, url, loading, error }) => (
          <div className="flex justify-center items-center px-3 py-3 rounded-md my-5 text-white bg-slate-800">
           <BsDownload className="mr-3 text-xl"/>{ loading ? 'Loading document...' :  'Télécharger'}
          </div>
            
        )
        }
      </PDFDownloadLink>
</form>
      </>
);
}

export default MissionOrderForm;




