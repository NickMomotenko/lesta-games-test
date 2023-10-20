import { useQuery } from "react-query";
import { AppWrapp } from "./AppStyled";
import { ShipList } from "./containers/ShipList";
import { Container } from "./components/Container";
import { Filters } from "./containers/Filters";
import { useState } from "react";

import { data } from "./data.js";

const endpoint = "https://vortex.korabli.su/api/graphql/glossary/";
const SHIPS_QUERY = `
  {
    vehicles {
      title
      description
      icons {
        large
        medium
      }
      level
      type {
        name
        title
        icons {
          default
        }
      }
      nation {
        name
        title
        color
        icons {
          small
          medium
          large
        }
      }
    }
  }
`;

export default function App() {
  const [fetchedData, setFetchedData] = useState([]);

  // const { data, isLoading, error } = useQuery("launches", () => {
  //   return fetch(endpoint, {
  //     method: "POST",
  //     headers: { "Content-Type": "application/json" },
  //     body: JSON.stringify({ query: SHIPS_QUERY }),
  //   })
  //     .then((response) => {
  //       if (response.status >= 400) {
  //         throw new Error("Error fetching data");
  //       } else {
  //         return response.json();
  //       }
  //     })
  //     .then((data) => setFetchedData(data.data));
  // });

  return (
    <AppWrapp>
      <Container>
        <Filters />
        <ShipList data={data?.slice(0, 10)} />
      </Container>
    </AppWrapp>
  );
}
