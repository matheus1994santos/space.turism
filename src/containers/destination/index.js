import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import  Page  from "../../components/Page";
import requestData from "../../utils/requestdata";

import { getDestinationImg } from "./helpers";
import {
  StyledImageBox,
  StyledDestinationsInfo,
  Container,
  StyledDistanceTravel,
  StyledNameDescription,
} from "./styled";

import { requestDestinations, loadDestinations, loadDestinationsError } from "./slice";
import { selectRequestingDestination, selectDataDestination, selectDataDestinationNames } from "./selectors";


const Destinations = () => {
  const dispatch = useDispatch();
  const dataDestination = useSelector(selectDataDestination);
  const requestingDestination = useSelector(selectRequestingDestination);
  const [currentDestination, setCurrentDestination] = React.useState(null);
  const data = requestData();
  const destinationNames = useSelector(selectDataDestinationNames);


  useEffect(() => {
    dispatch(requestDestinations({ url: 'google.com', status: 'foi sucesso'}));
  }, [])
  
  useEffect(() => {
    if (requestingDestination) {
      dispatch(loadDestinations({ destinations: data.destination}))
    }

    dispatch(loadDestinationsError({ errorMsg: 'Ocorreu um erro'}));
  }, [requestingDestination])

  React.useEffect(() => {
    setCurrentDestination(!currentDestination ? "Moon" : currentDestination);
  }, [currentDestination]);

  return (
    <Page>
      <Container>
        <section>
          <StyledImageBox>
            <p>
              <span>01</span> PICK YOUR DESTINATION
            </p>
            <img src={getDestinationImg(currentDestination)} />
          </StyledImageBox>

          <StyledDestinationsInfo>
            <article>
              <nav>
                <ul>
                  {destinationNames &&
                    destinationNames.map((name, index) => (
                      <li
                        key={index}
                        onClick={() => setCurrentDestination(name)}
                        className={name === currentDestination ? "active" : ""}
                      >
                        {name}
                      </li>
                    ))}
                </ul>
              </nav>
              {data &&
                data.destination.map(
                  ({ name, description, distance, travel }) =>
                    currentDestination === name ? (
                      <div key={name}>
                        <StyledNameDescription>
                          <h1> {name} </h1>
                          <p>{description}</p>
                        </StyledNameDescription>

                        <nav>
                          <StyledDistanceTravel>
                            <p>AVG. DISTANCE</p>
                            <h2>{distance}</h2>
                          </StyledDistanceTravel>
                          <StyledDistanceTravel>
                            <p>EST. TRAVEL TIME</p>
                            <h2>{travel}</h2>
                          </StyledDistanceTravel>
                        </nav>
                      </div>
                    ) : null
                )}
            </article>
          </StyledDestinationsInfo>
        </section>
      </Container>
    </Page>
  );
};


export default Destinations;