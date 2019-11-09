import React from 'react';
import Profile from './Profile';
import { List } from './ProfilesList.styles';

const ProfilesList = props => {
  const { profiles } = props;

  return <List>{ profiles.map(profile => <Profile key={profile.id} profile={profile} />) }</List>;
}

export default ProfilesList;
