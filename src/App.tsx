import { useQuery } from "react-query";
import { AppWrapp } from "./AppStyled";
import { ShipList } from "./containers/ShipList";
import { Container } from "./components/Container";

const endpoint = "https://vortex.korabli.su/api/graphql/glossary/";
const FILMS_QUERY = `
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
  // const { data, isLoading, error } = useQuery("launches", () => {
  //   return fetch(endpoint, {
  //     method: "POST",
  //     headers: { "Content-Type": "application/json" },
  //     body: JSON.stringify({ query: FILMS_QUERY }),
  //   })
  //     .then((response) => {
  //       if (response.status >= 400) {
  //         throw new Error("Error fetching data");
  //       } else {
  //         return response.json();
  //       }
  //     })
  //     .then((data) => console.log(data.data));
  // });

  // if (isLoading) return "Loading...";
  // if (error) return <pre>{error.message}</pre>;

  return (
    <AppWrapp>
      <Container>
        <ShipList />
      </Container>
    </AppWrapp>
  );
}
