import React from 'react';
import { Section } from './Main.styles';
import ProfilesList from '../components/ProfilesList';
import { useQuery } from "@apollo/react-hooks";
import GET_PROFILES from './../actions/profiles';
import mapProfiles from './../helpers/mapProfiles';

const Main = props => {
  const { loading, error, data } = useQuery(GET_PROFILES);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error :(</p>;

  const profiles = mapProfiles(data);

  return (
    <Section>
      <ProfilesList profiles={profiles} />
    </Section>
  )
}



export default Main;
