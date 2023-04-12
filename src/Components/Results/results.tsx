import { useRecoilState, useRecoilValue } from "recoil";
import { Card } from "react-bootstrap";
import Table from "react-bootstrap/Table";
import { randomCountriesAtom as randomCountriesState } from "../../state/atom";

const Results = () => {
  const [randomCountries, setRandomCountries] =
    useRecoilState(randomCountriesState);
  return (
    <Table striped bordered hover variant="dark" className=" mt-5 w-50 ">
      <thead>
        <tr>
          <th>Country</th>
          <th>Capital</th>
        </tr>
      </thead>
      <tbody>
        {randomCountries.length >= 1 &&
          randomCountries.map((country) => {
            const capitalCity = country[Object.keys(country)[0]][0];
            return (
              <tr>
                <td>{Object.keys(country)}</td>
                <td>{capitalCity}</td>
              </tr>
            );
          })}
      </tbody>
    </Table>
  );
};

export default Results;
