const mapProfiles = data => {
  const profiles = data.search.edges.map(node => {
    const { id, name, url, login, email, avatarUrl, location, bio } = node.node;

    return {
      id,
      name,
      url,
      login,
      email,
      avatarUrl,
      location,
      bio
    };
  });

  return profiles;
};

export default mapProfiles;
