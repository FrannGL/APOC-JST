import { Form, FormControl, Table } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import "./styles.css";
import { useState } from "react";

const data = [
  {
    id: 1,
    first_name: "Margaretta",
    last_name: "Gillmor",
    email: "mgillmor0@java.com",
    gender: "Female",
    ip_address: "173.142.163.106",
  },
  {
    id: 2,
    first_name: "Annmarie",
    last_name: "Mougin",
    email: "amougin1@gov.uk",
    gender: "Female",
    ip_address: "95.163.143.216",
  },
  {
    id: 3,
    first_name: "Burgess",
    last_name: "Hildred",
    email: "bhildred2@hibu.com",
    gender: "Male",
    ip_address: "54.119.17.99",
  },
  {
    id: 4,
    first_name: "Amber",
    last_name: "Josovitz",
    email: "ajosovitz3@booking.com",
    gender: "Female",
    ip_address: "11.73.246.30",
  },
  {
    id: 5,
    first_name: "Elisabet",
    last_name: "Aleevy",
    email: "ealeevy4@wsj.com",
    gender: "Female",
    ip_address: "222.171.142.224",
  },
  {
    id: 6,
    first_name: "Shoshanna",
    last_name: "Guitton",
    email: "sguitton5@php.net",
    gender: "Polygender",
    ip_address: "234.165.15.113",
  },
  {
    id: 7,
    first_name: "Belicia",
    last_name: "Chart",
    email: "bchart6@unc.edu",
    gender: "Female",
    ip_address: "62.62.242.213",
  },
  {
    id: 8,
    first_name: "Ester",
    last_name: "Willshee",
    email: "ewillshee7@oakley.com",
    gender: "Female",
    ip_address: "164.175.38.6",
  },
  {
    id: 9,
    first_name: "Ronnica",
    last_name: "Jindrich",
    email: "rjindrich8@oracle.com",
    gender: "Female",
    ip_address: "238.236.5.105",
  },
  {
    id: 10,
    first_name: "Cirstoforo",
    last_name: "Allsepp",
    email: "callsepp9@mail.ru",
    gender: "Male",
    ip_address: "197.42.164.172",
  },
  {
    id: 11,
    first_name: "Rogerio",
    last_name: "Dwane",
    email: "rdwanea@e-recht24.de",
    gender: "Male",
    ip_address: "201.149.239.100",
  },
  {
    id: 12,
    first_name: "Alejandro",
    last_name: "Drinnan",
    email: "adrinnanb@macromedia.com",
    gender: "Male",
    ip_address: "153.172.18.242",
  },
  {
    id: 13,
    first_name: "Allister",
    last_name: "Stapleford",
    email: "astaplefordc@nasa.gov",
    gender: "Male",
    ip_address: "152.249.56.97",
  },
  {
    id: 14,
    first_name: "Vivien",
    last_name: "Ankers",
    email: "vankersd@yolasite.com",
    gender: "Female",
    ip_address: "68.56.235.166",
  },
  {
    id: 15,
    first_name: "Celestina",
    last_name: "Broddle",
    email: "cbroddlee@techcrunch.com",
    gender: "Female",
    ip_address: "131.192.115.252",
  },
  {
    id: 16,
    first_name: "Nissa",
    last_name: "Phlippsen",
    email: "nphlippsenf@arizona.edu",
    gender: "Female",
    ip_address: "26.193.110.60",
  },
  {
    id: 17,
    first_name: "Pieter",
    last_name: "Gives",
    email: "pgivesg@wikispaces.com",
    gender: "Male",
    ip_address: "246.87.210.9",
  },
  {
    id: 18,
    first_name: "Britteny",
    last_name: "Rollingson",
    email: "brollingsonh@gizmodo.com",
    gender: "Female",
    ip_address: "90.133.155.75",
  },
  {
    id: 19,
    first_name: "Currie",
    last_name: "Trappe",
    email: "ctrappei@disqus.com",
    gender: "Male",
    ip_address: "125.135.221.19",
  },
  {
    id: 20,
    first_name: "Doretta",
    last_name: "Kennermann",
    email: "dkennermannj@google.com.au",
    gender: "Female",
    ip_address: "145.109.129.8",
  },
  {
    id: 21,
    first_name: "Reggis",
    last_name: "Worsell",
    email: "rworsellk@tripod.com",
    gender: "Male",
    ip_address: "159.14.121.186",
  },
  {
    id: 22,
    first_name: "Garland",
    last_name: "Jennens",
    email: "gjennensl@vk.com",
    gender: "Female",
    ip_address: "82.216.34.51",
  },
  {
    id: 23,
    first_name: "Francesca",
    last_name: "Forsythe",
    email: "fforsythem@smh.com.au",
    gender: "Genderfluid",
    ip_address: "109.171.234.230",
  },
  {
    id: 24,
    first_name: "Maurise",
    last_name: "Millhill",
    email: "mmillhilln@edublogs.org",
    gender: "Male",
    ip_address: "62.154.4.4",
  },
  {
    id: 25,
    first_name: "Hali",
    last_name: "Grzelak",
    email: "hgrzelako@hibu.com",
    gender: "Female",
    ip_address: "240.159.246.28",
  },
  {
    id: 26,
    first_name: "Fabien",
    last_name: "Renehan",
    email: "frenehanp@cpanel.net",
    gender: "Male",
    ip_address: "142.118.33.78",
  },
  {
    id: 27,
    first_name: "Darnall",
    last_name: "Fibbens",
    email: "dfibbensq@blogs.com",
    gender: "Male",
    ip_address: "18.209.66.76",
  },
  {
    id: 28,
    first_name: "Slade",
    last_name: "Bernhart",
    email: "sbernhartr@instagram.com",
    gender: "Male",
    ip_address: "118.109.127.183",
  },
  {
    id: 29,
    first_name: "Thatcher",
    last_name: "Ellacott",
    email: "tellacotts@com.com",
    gender: "Male",
    ip_address: "84.195.138.242",
  },
  {
    id: 30,
    first_name: "Lanni",
    last_name: "Bomb",
    email: "lbombt@angelfire.com",
    gender: "Polygender",
    ip_address: "0.44.101.71",
  },
  {
    id: 31,
    first_name: "Margaretta",
    last_name: "Gillmor",
    email: "mgillmor0@java.com",
    gender: "Female",
    ip_address: "173.142.163.106",
  },
  {
    id: 32,
    first_name: "Annmarie",
    last_name: "Mougin",
    email: "amougin1@gov.uk",
    gender: "Female",
    ip_address: "95.163.143.216",
  },
  {
    id: 33,
    first_name: "Burgess",
    last_name: "Hildred",
    email: "bhildred2@hibu.com",
    gender: "Male",
    ip_address: "54.119.17.99",
  },
  {
    id: 34,
    first_name: "Amber",
    last_name: "Josovitz",
    email: "ajosovitz3@booking.com",
    gender: "Female",
    ip_address: "11.73.246.30",
  },
  {
    id: 35,
    first_name: "Elisabet",
    last_name: "Aleevy",
    email: "ealeevy4@wsj.com",
    gender: "Female",
    ip_address: "222.171.142.224",
  },
  {
    id: 36,
    first_name: "Shoshanna",
    last_name: "Guitton",
    email: "sguitton5@php.net",
    gender: "Polygender",
    ip_address: "234.165.15.113",
  },
  {
    id: 37,
    first_name: "Belicia",
    last_name: "Chart",
    email: "bchart6@unc.edu",
    gender: "Female",
    ip_address: "62.62.242.213",
  },
  {
    id: 38,
    first_name: "Ester",
    last_name: "Willshee",
    email: "ewillshee7@oakley.com",
    gender: "Female",
    ip_address: "164.175.38.6",
  },
  {
    id: 39,
    first_name: "Ronnica",
    last_name: "Jindrich",
    email: "rjindrich8@oracle.com",
    gender: "Female",
    ip_address: "238.236.5.105",
  },
  {
    id: 40,
    first_name: "Cirstoforo",
    last_name: "Allsepp",
    email: "callsepp9@mail.ru",
    gender: "Male",
    ip_address: "197.42.164.172",
  },
  {
    id: 41,
    first_name: "Rogerio",
    last_name: "Dwane",
    email: "rdwanea@e-recht24.de",
    gender: "Male",
    ip_address: "201.149.239.100",
  },
  {
    id: 42,
    first_name: "Alejandro",
    last_name: "Drinnan",
    email: "adrinnanb@macromedia.com",
    gender: "Male",
    ip_address: "153.172.18.242",
  },
  {
    id: 43,
    first_name: "Allister",
    last_name: "Stapleford",
    email: "astaplefordc@nasa.gov",
    gender: "Male",
    ip_address: "152.249.56.97",
  },
  {
    id: 44,
    first_name: "Vivien",
    last_name: "Ankers",
    email: "vankersd@yolasite.com",
    gender: "Female",
    ip_address: "68.56.235.166",
  },
  {
    id: 45,
    first_name: "Celestina",
    last_name: "Broddle",
    email: "cbroddlee@techcrunch.com",
    gender: "Female",
    ip_address: "131.192.115.252",
  },
  {
    id: 46,
    first_name: "Nissa",
    last_name: "Phlippsen",
    email: "nphlippsenf@arizona.edu",
    gender: "Female",
    ip_address: "26.193.110.60",
  },
  {
    id: 47,
    first_name: "Pieter",
    last_name: "Gives",
    email: "pgivesg@wikispaces.com",
    gender: "Male",
    ip_address: "246.87.210.9",
  },
  {
    id: 48,
    first_name: "Britteny",
    last_name: "Rollingson",
    email: "brollingsonh@gizmodo.com",
    gender: "Female",
    ip_address: "90.133.155.75",
  },
  {
    id: 49,
    first_name: "Currie",
    last_name: "Trappe",
    email: "ctrappei@disqus.com",
    gender: "Male",
    ip_address: "125.135.221.19",
  },
  {
    id: 50,
    first_name: "Doretta",
    last_name: "Kennermann",
    email: "dkennermannj@google.com.au",
    gender: "Female",
    ip_address: "145.109.129.8",
  },
  {
    id: 51,
    first_name: "Reggis",
    last_name: "Worsell",
    email: "rworsellk@tripod.com",
    gender: "Male",
    ip_address: "159.14.121.186",
  },
  {
    id: 52,
    first_name: "Garland",
    last_name: "Jennens",
    email: "gjennensl@vk.com",
    gender: "Female",
    ip_address: "82.216.34.51",
  },
  {
    id: 53,
    first_name: "Francesca",
    last_name: "Forsythe",
    email: "fforsythem@smh.com.au",
    gender: "Genderfluid",
    ip_address: "109.171.234.230",
  },
  {
    id: 54,
    first_name: "Maurise",
    last_name: "Millhill",
    email: "mmillhilln@edublogs.org",
    gender: "Male",
    ip_address: "62.154.4.4",
  },
  {
    id: 55,
    first_name: "Hali",
    last_name: "Grzelak",
    email: "hgrzelako@hibu.com",
    gender: "Female",
    ip_address: "240.159.246.28",
  },
  {
    id: 56,
    first_name: "Fabien",
    last_name: "Renehan",
    email: "frenehanp@cpanel.net",
    gender: "Male",
    ip_address: "142.118.33.78",
  },
  {
    id: 57,
    first_name: "Darnall",
    last_name: "Fibbens",
    email: "dfibbensq@blogs.com",
    gender: "Male",
    ip_address: "18.209.66.76",
  },
  {
    id: 58,
    first_name: "Slade",
    last_name: "Bernhart",
    email: "sbernhartr@instagram.com",
    gender: "Male",
    ip_address: "118.109.127.183",
  },
  {
    id: 59,
    first_name: "Thatcher",
    last_name: "Ellacott",
    email: "tellacotts@com.com",
    gender: "Male",
    ip_address: "84.195.138.242",
  },
  {
    id: 60,
    first_name: "Lanni",
    last_name: "Bomb",
    email: "lbombt@angelfire.com",
    gender: "Polygender",
    ip_address: "0.44.101.71",
  },
];

export default function TableList() {
  const [search, setSearch] = useState("");
  const [mode, setMode] = useState(false);

  const toogleMode = () => {
    setMode(!mode);
  };

  return (
    <div className="wrapper">
      <Form>
        <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
          <Form.Label>Filtrar</Form.Label>
          <Form.Control
            type="email"
            placeholder="Buscar..."
            onChange={(event) => setSearch(event.target.value)}
            value={search}
          />
        </Form.Group>
      </Form>
      <Form>
        <Form.Check
          type="switch"
          id="custom-switch"
          label={mode ? "Dark Mode" : "Light Mode"}
          onClick={toogleMode}
        />
      </Form>
      <Table striped bordered hover size="sm" variant={mode ? "dark" : "light"}>
        <thead>
          <tr>
            <th>#</th>
            <th>Apellido</th>
            <th>Nombre</th>
            <th>Nro de Afiliado</th>
            <th>DNI</th>
            <th>Fecha de Nacimiento</th>
            <th>Baja</th>
            <th>Estado Civil</th>
            <th>Sector</th>
            <th>CUIT</th>
            <th>Hijos</th>
            <th>Categoria</th>
            <th>Mail</th>
            <th>Celular</th>
          </tr>
        </thead>
        <tbody>
          {data
            .filter((row) =>
              search === ""
                ? true
                : row.first_name.includes(search) ||
                  row.last_name.includes(search) ||
                  row.email.includes(search)
            )
            .map((info) => {
              return (
                <tr key={info.id}>
                  <td>{info.id}</td>
                  <td>{info.first_name}</td>
                  <td>{info.last_name}</td>
                  <td>{info.email}</td>
                  <td>{info.gender}</td>
                  <td>{info.ip_address}</td>
                  <td>{info.last_name}</td>
                  <td>{info.gender}</td>
                  <td>{info.last_name}</td>
                  <td>{info.email}</td>
                  <td>{info.last_name}</td>
                  <td>{info.email}</td>
                  <td>{info.ip_address}</td>
                  <td>{info.gender}</td>
                </tr>
              );
            })}
          {/* {data.map((info) => {
            return (
              <tr key={info.id}>
                <td>{info.id}</td>
                <td>{info.first_name}</td>
                <td>{info.last_name}</td>
                <td>{info.email}</td>
                <td>{info.gender}</td>
                <td>{info.ip_address}</td>
                <td>{info.last_name}</td>
                <td>{info.gender}</td>
                <td>{info.last_name}</td>
                <td>{info.email}</td>
                <td>{info.last_name}</td>
                <td>{info.email}</td>
                <td>{info.ip_address}</td>
                <td>{info.gender}</td>
              </tr>
            );
          })} */}
        </tbody>
      </Table>
    </div>
  );
}
