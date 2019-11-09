import React from 'react';
import {
  Wrapper, Img, Body,
  Name, Info, Footer,
  Location, Email, Header, Login
} from './Profile.styles';

const Profile = props => {
  const { profile } = props;

  return (
    <Wrapper>
      <Img src={profile.avatarUrl} />
      <Body>
        <Header>
          <Login target="_blank" href={profile.url} >{profile.login}</Login>
          <Name>{profile.name}</Name>
        </Header>
        <Info>{profile.bio}</Info>
        <Footer>
          <Location>{profile.location}</Location>
          <Email>{profile.email}</Email>
        </Footer>
      </Body>
    </Wrapper>
  );
}

export default Profile;
